from rest_framework import serializers
from .models import Contract
from proposal.models import Proposal
from django.utils.translation import gettext_lazy as _

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
        
        if data['start_date'] >= data['end_date']:
            raise serializers.ValidationError(_("The start date must be before the end date."))

        if data['contract_amount'] <= 0:
            raise serializers.ValidationError(_("The contract amount must be positive."))

        if not data.get('terms'):
            raise serializers.ValidationError(_("Contract terms must be provided."))

        if data['freelancer'] == data['client']:
            raise serializers.ValidationError(_("The freelancer and client must be different users."))

        # Ensure the contract is unique for the given project and proposal
        if Contract.objects.filter(project=data['project'], proposal=data['proposal']).exists():
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
