from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Reviews
from .serializers import ReviewSerializer

class ReviewCreateView(generics.CreateAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    # def perform_create(self, serializer):
    #     serializer.save(reviewer=self.request.user)

    def perform_create(self, serializer):
        contract = serializer.validated_data['contract']
        freelancer = contract.freelancer  
        serializer.save(reviewer=self.request.user, freelancer=freelancer)


class ReviewListView(generics.ListAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        contract_id = self.kwargs['contract_id']
        return Reviews.objects.filter(contract_id=contract_id)

    