from rest_framework import serializers
from .models import Proposal


class ProposalSerializer(serializers.ModelSerializer):
    freelancer_username = serializers.CharField(source="user.email", read_only=True)
    project_title = serializers.CharField(source="project.title", read_only=True)

    class Meta:
        model = Proposal
        fields = "__all__"
