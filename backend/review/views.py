from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Reviews
from .serializers import ReviewSerializer
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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


class FreelancerReviewList(APIView):
    def get(self, request, freelancer_id, format=None):
        reviews = Reviews.objects.filter(freelancer_id=freelancer_id)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



def get_freelancer_reviews(request, freelancer_id):
    try:
        
        reviews = Reviews.objects.filter(freelancer_id=freelancer_id)
        reviews_data = list(reviews.values())
        return JsonResponse(reviews_data, safe=False)
    except KeyError as e:
        
        print(f"KeyError: {e}")
        return JsonResponse({'error': 'Invalid data provided'}, status=400)
    except Exception as e:
        
        print(f"Error: {e}")
        return JsonResponse({'error': 'An error occurred'}, status=500)


