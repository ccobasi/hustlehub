from rest_framework import serializers # type: ignore
from .models import Contract
from proposal.models import Proposal
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError


class ContractSerializer(serializers.ModelSerializer):
    contract_name = serializers.SerializerMethodField()
    project_title = serializers.CharField(source='project.title', read_only=True)
    client_name = serializers.SerializerMethodField()
    freelancer_name = serializers.SerializerMethodField()

    class Meta:
        model = Contract
        fields = '__all__'

    def get_contract_name(self, obj):
        return str(obj)

    def get_client_name(self, obj):
        return f"{obj.client.first_name} {obj.client.last_name}"

    def get_freelancer_name(self, obj):
        return f"{obj.freelancer.first_name} {obj.freelancer.last_name}"

    def validate(self, data):
        client = data.get('client')
        freelancer = data.get('freelancer')
        contract_amount = data.get('contract_amount')
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        terms = data.get('terms')
        project = data.get('project')
        proposal = data.get('proposal')

        if client and contract_amount and client.credit_balance < contract_amount:
            raise ValidationError(_("Insufficient credit balance to create this contract."))

        if start_date and end_date and start_date >= end_date:
            raise serializers.ValidationError(_("The start date must be before the end date."))

        if contract_amount is not None and contract_amount <= 0:
            raise serializers.ValidationError(_("The contract amount must be positive."))

        if not terms:
            raise serializers.ValidationError(_("Contract terms must be provided."))

        if freelancer == client:
            raise serializers.ValidationError(_("The freelancer and client must be different users."))

        contract_exists_query = Contract.objects.filter(project=project, proposal=proposal)
        if self.instance:
            contract_exists_query = contract_exists_query.exclude(id=self.instance.id)
        if contract_exists_query.exists():
            raise serializers.ValidationError(_("A contract for this project and proposal already exists."))

        return data

    def validate_proposal(self, value):
        if not Proposal.objects.filter(id=value.id).exists():
            raise serializers.ValidationError(_("The specified proposal does not exist."))
        return value

    def validate_project(self, value):
        if not value.id:
            raise serializers.ValidationError(_("The specified project does not exist."))
        return value

    def validate_freelancer(self, value):
        if not value.id:
            raise serializers.ValidationError(_("The specified freelancer does not exist."))
        return value

    def validate_client(self, value):
        if not value.id:
            raise serializers.ValidationError(_("The specified client does not exist."))
        return value
