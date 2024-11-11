
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from ERP_proj.erp.login.serializers import LoginSerializer, UserSerializer
from ERP_proj.erp.login.models import Users
# Create your views here.

class LoginViewSet:
    def dashboard(self, request):
        return HttpResponse("Welcome to the ERP Software!!!")

    def signup(self, request):
        if request.method == 'POST':
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def login(self, request):
        if request.method == 'POST':
            serializer = LoginSerializer(data=request.data)

            if serializer.is_valid():
                username_or_email = serializer.validated_data['username_or_email']
                password = serializer.validated_data['password']

                # Check if username_or_email is a username or email
                user = None
                if '@' in username_or_email:
                    user = Users.objects.filter(email=username_or_email).first()
                else:
                    user = Users.objects.filter(username=username_or_email).first()

                # Check if user exists and password matches
                if user and user.check_password(password):
                    return Response({"message": "Login successful", "user_id": user.id}, status=status.HTTP_200_OK)

                return Response({"message": "Invalid credentials. Please check your username/email and password."}, status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
