from rest_framework import serializers
from .models import Project
from datetime import date
from proposal.serializers import ProposalSerializer
from user.serializers import UserRegisterSerializer

class ProjectSerializer(serializers.ModelSerializer):
    proposals = ProposalSerializer(many=True, read_only=True)
    closing_date = serializers.DateField(format="%Y-%m-%d", input_formats=["%Y-%m-%d"])
    client = UserRegisterSerializer()
    proposals = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = '__all__'

    def get_client_name(self, obj):
        return f"{obj.client.first_name} {obj.client.last_name}"
    
    def get_proposals(self, obj):
        proposals = obj.proposals.all()
        serializer = ProposalSerializer(proposals, many=True)
        return serializer.data


    def validate_budget(self, value):
        """Check that the budget is a positive value"""
        if value <= 0:
            raise serializers.ValidationError("Budget must be a positive number.")
        return value

    def validate_closing_date(self, value):
        """Check that the closing date is in the future"""
        if value <= date.today():
            raise serializers.ValidationError("Closing date must be in the future.")
        return value

    def validate(self, data):
        """Additional custom validation"""
        if not data.get('title'):
            raise serializers.ValidationError({"title": "Title is required."})
        if not data.get('description'):
            raise serializers.ValidationError({"description": "Description is required."})
        return data

