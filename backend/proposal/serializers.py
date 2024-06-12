from rest_framework import serializers
from .models import Proposal
from user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email']


class ProposalSerializer(serializers.ModelSerializer):
    freelancer_username = serializers.CharField(source="user.email", read_only=True)
    project_title = serializers.CharField(source="project.title", read_only=True)
    freelancer = UserSerializer(read_only=True)
    


    class Meta:
        model = Proposal
        fields = "__all__"
        read_only_fields = ['id', 'freelancer', 'project']

    def get_freelancer_name(self, obj):
        return f"{obj.freelancer.first_name} {obj.freelancer.last_name}"
