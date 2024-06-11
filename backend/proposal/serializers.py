from rest_framework import serializers
from .models import Proposal
from user.serializers import UserRegisterSerializer


class ProposalSerializer(serializers.ModelSerializer):
    freelancer_username = serializers.CharField(source="user.email", read_only=True)
    project_title = serializers.CharField(source="project.title", read_only=True)
    freelancer = UserRegisterSerializer()
    freelancer = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())


    class Meta:
        model = Proposal
        fields = "__all__"
        read_only_fields = ['id', 'freelancer', 'project']

    def get_freelancer_name(self, obj):
        return f"{obj.freelancer.first_name} {obj.freelancer.last_name}"
