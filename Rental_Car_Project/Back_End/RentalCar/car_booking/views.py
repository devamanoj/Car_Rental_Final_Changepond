# from rest_framework import status, permissions,viewsets
# from rest_framework.response import Response
# from rest_framework.viewsets import ModelViewSet
# from rest_framework.exceptions import APIException
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from django.db import transaction
# from rest_framework.decorators import api_view
# from django.contrib.auth import authenticate


# from rest_framework.permissions import IsAuthenticated, AllowAny
# from rest_framework.views import APIView
# from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework.decorators import action
# from rest_framework.viewsets import ModelViewSet

# from .models import User, Car, Booking, Admin, Cancellation, Availability,Contact
# from .serializers import LoginSerializer,UserSerializer, CarSerializer, BookingSerializer, AdminSerializer, CancellationSerializer, AvailabilitySerializer,ContactSerializer


# import logging



# from django.contrib.auth import get_user_model
# from django.contrib.auth.hashers import check_password




# User = get_user_model()  # This will fetch the user model, in case you're using a custom one.

# class LoginView(APIView):
#     def post(self, request):
#         serializer = LoginSerializer(data=request.data)

#         if request.method == 'POST':
#             if serializer.is_valid():
#                 email = serializer.validated_data['email']
#                 password = serializer.validated_data['password']

#                 try:
#                     # Fetch the user based on email
#                     user = User.objects.get(email=email)

#                     # Check if the provided password matches the stored password
#                     if user and check_password(password, user.password):
#                         # Login successful
#                         return Response({
#                             'status': 200,
#                             'message': 'Login successful',
#                             'user': {
#                                 'username': user.username,
#                                 'email': user.email
#                                 # Include other user details as necessary
#                             }
#                         }, status=status.HTTP_200_OK)

#                     # If email exists but password is wrong
#                     return Response({
#                         'status': 401,
#                         'message': 'Invalid email or password'
#                     }, status=status.HTTP_401_UNAUTHORIZED)

#                 except User.DoesNotExist:
#                     # Email does not exist in the database
#                     return Response({
#                         'status': 401,
#                         'message': 'Invalid email or password'
#                     }, status=status.HTTP_401_UNAUTHORIZED)

#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # class UserViewSet(ModelViewSet):
# #     queryset = User.objects.all()
# #     serializer_class = UserSerializer
    
# #     # authentication_classes = [JWTAuthentication]
# #     # permission_classes = [permissions.IsAuthenticated]


# #     def get_serializer_class(self):
# #         return UserSerializer 

# #     def list(self, request):
# #         try:
# #             users = User.objects.all()
# #             serializer = self.get_serializer(users, many=True)
# #             return Response({
# #                 'status': status.HTTP_200_OK,
# #                 'data': serializer.data
# #             })
# #         except Exception as e:
# #             print(e)
# #             raise APIException({
# #                 'message': APIException.default_detail,
# #                 'status': APIException.status_code
# #             })

# #     def create(self, request):
# #         try:
# #             serializer = self.get_serializer(data=request.data)
# #             if serializer.is_valid():
# #                 serializer.save()
# #                 return Response({
# #                     'status': status.HTTP_201_CREATED,
# #                     'data': serializer.data,
# #                     'message': 'User created successfully'
# #                 })
# #             return Response({
# #                 'status': status.HTTP_400_BAD_REQUEST,
# #                 'data': serializer.errors,
# #                 'message': 'Invalid Data'
# #             })
# #         except Exception as e:
# #             print(e)
# #             raise APIException({
# #                 'message': APIException.default_detail,
# #                 'status': APIException.status_code
# #             })

# #     # def login(self, request):
# #     #     serializer = LoginSerializer(data=request.data)
# #     #     if request.method == 'POST':
# #     #         if serializer.is_valid():
# #     #             username = serializer.validated_data['username']
# #     #             password = serializer.validated_data['password']

# #     #             user = authenticate(username=username, password=password)

# #     #             if user:
# #     #                 # Login successful
# #     #                 return Response({
# #     #                     'status': 200,
# #     #                     'message': 'Login successful',
# #     #                     'user': {
# #     #                         'username': user.username,
# #     #                         'email': user.email
# #     #                         # Include other user details as necessary
# #     #                     }
# #     #                 }, status=status.HTTP_200_OK)

# #     #             # Invalid credentials
# #     #             return Response({
# #     #                 'status': 401,
# #     #                 'message': 'Invalid username or password'
# #     #             }, status=status.HTTP_401_UNAUTHORIZED)
            
# #     #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# #     def update(self, request, pk=None):
# #         try:
# #             user = self.get_object()
# #             serializer = self.get_serializer(user, data=request.data, partial=False)
# #             if serializer.is_valid():
# #                 serializer.save()
# #                 return Response({
# #                     'status': status.HTTP_200_OK,
# #                     'data': serializer.data,
# #                     'message': 'User Updated Successfully'
# #                 })
# #             return Response({
# #                 'status': status.HTTP_400_BAD_REQUEST,
# #                 'data': serializer.errors,
# #                 'message': 'Invalid Data'
# #             })
# #         except Exception as e:
# #             print(e)
# #             raise APIException({
# #                 'message': APIException.default_detail,
# #                 'status': APIException.status_code
# #             })

# #     def partial_update(self, request, pk=None):
# #         try:
# #             user = self.get_object()
# #             serializer = self.get_serializer(user, data=request.data, partial=True)
# #             if serializer.is_valid():
# #                 serializer.save()
# #                 return Response({
# #                     'status': status.HTTP_200_OK,
# #                     'data': serializer.data,
# #                     'message': 'User Partial Updated Successfully'
# #                 })
# #             return Response({
# #                 'status': status.HTTP_400_BAD_REQUEST,
# #                 'data': serializer.errors,
# #                 'message': 'Invalid Data'
# #             })
# #         except Exception as e:
# #             print(e)
# #             raise APIException({
# #                 'message': APIException.default_detail,
# #                 'status': APIException.status_code
# #             })

# #     def destroy(self, request, pk=None):
# #         try:
# #             user = self.get_object()
# #             user.delete()
# #             return Response({
# #                 'status': status.HTTP_200_OK,
# #                 'message': 'User deleted successfully'
# #             })
# #         except Exception as e:
# #             print(e)
# #             raise APIException({
# #                 'message': APIException.default_detail,
# #                 'status': APIException.status_code
# #             })




# logger = logging.getLogger(__name__)



# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

#     def list(self, request):
#         try:
#             users = User.objects.all()
#             serializer = self.get_serializer(users, many=True)
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'data': serializer.data
#             })
#         except Exception as e:
#             logger.error(f'Error listing users: {e}')
#             raise APIException('Failed to retrieve users')

#     def create(self, request):
#         try:
#             serializer = self.get_serializer(data=request.data)
#             if serializer.is_valid():
#                 user = serializer.save()
#                 return Response({
#                     'status': status.HTTP_201_CREATED,
#                     'data': serializer.data,
#                     'message': 'User created successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             logger.error(f'Error creating user: {e}')
#             raise APIException('Failed to create user')

#     def update(self, request, pk=None):
#         try:
#             user = self.get_object()
#             serializer = self.get_serializer(user, data=request.data, partial=False)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_200_OK,
#                     'data': serializer.data,
#                     'message': 'User Updated Successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             logger.error(f'Error updating user: {e}')
#             raise APIException('Failed to update user')

#     def partial_update(self, request, pk=None):
#         try:
#             user = self.get_object()
#             serializer = self.get_serializer(user, data=request.data, partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_200_OK,
#                     'data': serializer.data,
#                     'message': 'User Partial Updated Successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             logger.error(f'Error partially updating user: {e}')
#             raise APIException('Failed to partially update user')

#     def destroy(self, request, pk=None):
#         try:
#             user = self.get_object()
#             user.delete()
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'message': 'User deleted successfully'
#             })
#         except Exception as e:
#             logger.error(f'Error deleting user: {e}')
#             raise APIException('Failed to delete user')


# # class CarViewSet(ModelViewSet):
# #     queryset = Car.objects.all()
# #     serializer_class = CarSerializer
#     # authentication_classes = [JWTAuthentication]
#     # permission_classes = [IsAuthenticated]

#     # def get_serializer_class(self):
#     #     return CarSerializer

#     # def list(self, request):
#     #     try:
#     #         cars = Car.objects.all()
#     #         serializer = self.get_serializer(cars, many=True)
#     #         return Response({
#     #             'status': status.HTTP_200_OK,
#     #             'data': serializer.data
#     #         })
#     #     except Exception as e:
#     #         print(e)
#     #         raise APIException({
#     #             'message': APIException.default_detail,
#     #             'status': APIException.status_code
#     #         })

#     # def create(self, request):
#     #     try:
#     #         serializer = self.get_serializer(data=request.data)
#     #         if serializer.is_valid():
#     #             serializer.save()
#     #             return Response({
#     #                 'status': status.HTTP_201_CREATED,
#     #                 'data': serializer.data,
#     #                 'message': 'Car created successfully'
#     #             })
#     #         return Response({
#     #             'status': status.HTTP_400_BAD_REQUEST,
#     #             'data': serializer.errors,
#     #             'message': 'Invalid Data'
#     #         })
#     #     except Exception as e:
#     #         print(e)
#     #         raise APIException({
#     #             'message': APIException.default_detail,
#     #             'status': APIException.status_code
#     #         })

#     # def update(self, request, pk=None):
#     #     try:
#     #         car = self.get_object()
#     #         serializer = self.get_serializer(car, data=request.data, partial=False)
#     #         if serializer.is_valid():
#     #             serializer.save()
#     #             return Response({
#     #                 'status': status.HTTP_200_OK,
#     #                 'data': serializer.data,
#     #                 'message': 'Car Updated Successfully'
#     #             })
#     #         return Response({
#     #             'status': status.HTTP_400_BAD_REQUEST,
#     #             'data': serializer.errors,
#     #             'message': 'Invalid Data'
#     #         })
#     #     except Exception as e:
#     #         print(e)
#     #         raise APIException({
#     #             'message': APIException.default_detail,
#     #             'status': APIException.status_code
#     #         })

#     # def partial_update(self, request, pk=None):
#     #     try:
#     #         car = self.get_object()
#     #         serializer = self.get_serializer(car, data=request.data, partial=True)
#     #         if serializer.is_valid():
#     #             serializer.save()
#     #             return Response({
#     #                 'status': status.HTTP_200_OK,
#     #                 'data': serializer.data,
#     #                 'message': 'Car Partial Updated Successfully'
#     #             })
#     #         return Response({
#     #             'status': status.HTTP_400_BAD_REQUEST,
#     #             'data': serializer.errors,
#     #             'message': 'Invalid Data'
#     #         })
#     #     except Exception as e:
#     #         print(e)
#     #         raise APIException({
#     #             'message': APIException.default_detail,
#     #             'status': APIException.status_code
#     #         })

#     # def destroy(self, request, pk=None):
#     #     try:
#     #         car = self.get_object()
#     #         car.delete()
#     #         return Response({
#     #             'status': status.HTTP_200_OK,
#     #             'message': 'Car deleted successfully'
#     #         })
#     #     except Exception as e:
#     #         print(e)
#     #         raise APIException({
#     #             'message': APIException.default_detail,
#     #             'status': APIException.status_code
#     #         })



# class CarViewSet(viewsets.ModelViewSet):
#     queryset = Car.objects.all()
#     serializer_class = CarSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAuthenticated]



# class AdminViewSet(ModelViewSet):
#     queryset = Admin.objects.all()
#     serializer_class = AdminSerializer
#     # authentication_classes = [JWTAuthentication]
#     # permission_classes = [permissions.IsAuthenticated]

#     def get_serializer_class(self):
#         return AdminSerializer

#     def list(self, request):
#         try:
#             admins = Admin.objects.all()
#             serializer = self.get_serializer(admins, many=True)
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'data': serializer.data
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def create(self, request):
#         try:
#             serializer = self.get_serializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_201_CREATED,
#                     'data': serializer.data,
#                     'message': 'Admin created successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def update(self, request, pk=None):
#         try:
#             admin = self.get_object()
#             serializer = self.get_serializer(admin, data=request.data, partial=False)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_200_OK,
#                     'data': serializer.data,
#                     'message': 'Admin Updated Successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def partial_update(self, request, pk=None):
#         try:
#             admin = self.get_object()
#             serializer = self.get_serializer(admin, data=request.data, partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_200_OK,
#                     'data': serializer.data,
#                     'message': 'Admin Partial Updated Successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def destroy(self, request, pk=None):
#         try:
#             admin = self.get_object()
#             admin.delete()
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'message': 'Admin deleted successfully'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })


# class BookingViewSet(ModelViewSet):
#     queryset = Booking.objects.all()
#     serializer_class = BookingSerializer
#     # authentication_classes = [JWTAuthentication]
#     # permission_classes = [permissions.IsAuthenticated]

#     def get_serializer_class(self):
#         return BookingSerializer

#     def list(self, request):
#         try:
#             bookings = Booking.objects.all()
#             serializer = self.get_serializer(bookings, many=True)
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'data': serializer.data
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })


#     # def create(self, request):
#     #     try:
#     #         # Retrieve the car ID from the request data
#     #         car_id = request.data.get('car')
            
#     #         # Fetch the car from the database using car_id
#     #         car = Car.objects.get(car_id=car_id)
            
#     #         # Check if the car is available
#     #         if not car.is_available:
#     #             return Response({
#     #                 'status': status.HTTP_400_BAD_REQUEST,
#     #                 'message': 'The car is not available for booking.'
#     #             })
            
#     #         # Proceed with booking if the car is available
#     #         serializer = self.get_serializer(data=request.data)
#     #         if serializer.is_valid():
#     #             # Save the booking data
#     #             booking = serializer.save()

#     #             # Mark the car as unavailable after booking
#     #             car.is_available = False
#     #             car.save()

#     #             return Response({
#     #                 'status': status.HTTP_201_CREATED,
#     #                 'data': serializer.data,
#     #                 'message': 'Booking created successfully and car marked as unavailable.'
#     #             })
            
#     #         return Response({
#     #             'status': status.HTTP_400_BAD_REQUEST,
#     #             'data': serializer.errors,
#     #             'message': 'Invalid Data'
#     #         })
        
#     #     except Car.DoesNotExist:
#     #         return Response({
#     #             'status': status.HTTP_404_NOT_FOUND,
#     #             'message': 'Car not found.'
#     #         })
        
#     #     except Exception as e:
#     #         return Response({
#     #             'message': str(e),
#     #             'status': status.HTTP_500_INTERNAL_SERVER_ERROR
#     #         })


#     @transaction.atomic
#     def create(self, request):
#         try:
#             # Retrieve the car ID and booking dates from the request data
#             car_id = request.data.get('car')
#             pickup_date = request.data.get('pickup_date')
#             return_date = request.data.get('return_date')

#             # Fetch the car from the database using car_id
#             car = Car.objects.get(car_id=car_id)

#             # Check if the car is available
#             if not car.is_available:
#                 return Response({
#                     'status': status.HTTP_400_BAD_REQUEST,
#                     'message': 'The car is not available for booking.'
#                 })

#             # Proceed with booking if the car is available
#             serializer = self.get_serializer(data=request.data)
#             if serializer.is_valid():
#                 with transaction.atomic():  # Start a transaction block
#                     # Save the booking data
#                     booking = serializer.save()

#                     # Mark the car as unavailable after booking
#                     car.is_available = False
#                     car.save()

#                     # Add the booking's pickup and return dates to the Availability table
#                     availability_data = {
#                         'car': car.car_id,  # Use car_id instead of car.id
#                         'pickup_date': pickup_date,
#                         'return_date': return_date,
#                         'available_quantity': 0  # Assuming the car is now fully booked
#                     }
#                     availability_serializer = AvailabilitySerializer(data=availability_data)

#                     # Check availability data validation
#                     if availability_serializer.is_valid():
#                         availability_serializer.save()
#                     else:
#                         raise Exception('Invalid availability data')

#                 return Response({
#                     'status': status.HTTP_201_CREATED,
#                     'data': serializer.data,
#                     'message': 'Booking created successfully and car marked as unavailable.'
#                 })

#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid booking data'
#             })

#         except Car.DoesNotExist:
#             return Response({
#                 'status': status.HTTP_404_NOT_FOUND,
#                 'message': 'Car not found.'
#             })

#         except Exception as e:
#             # Rollback the transaction and handle the exception
#             return Response({
#                 'message': str(e),
#                 'status': status.HTTP_500_INTERNAL_SERVER_ERROR
#             })



#     def update(self, request, pk=None):
#         try:
#             booking = self.get_object()
#             serializer = self.get_serializer(booking, data=request.data, partial=False)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_200_OK,
#                     'data': serializer.data,
#                     'message': 'Booking Updated Successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def partial_update(self, request, pk=None):
#         try:
#             booking = self.get_object()
#             serializer = self.get_serializer(booking, data=request.data, partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_200_OK,
#                     'data': serializer.data,
#                     'message': 'Booking Partial Updated Successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def destroy(self, request, pk=None):
#         try:
#             booking = self.get_object()
#             booking.delete()
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'message': 'Booking deleted successfully'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

# class CancellationViewSet(ModelViewSet):
#     queryset = Cancellation.objects.all()
#     serializer_class = CancellationSerializer
#     # authentication_classes = [JWTAuthentication]
#     # permission_classes = [permissions.IsAuthenticated]

#     def get_serializer_class(self):
#         return CancellationSerializer

#     def list(self, request):
#         try:
#             cancellations = Cancellation.objects.all()
#             serializer = self.get_serializer(cancellations, many=True)
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'data': serializer.data
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     # def create(self, request):
#     #     try:
#     #         serializer = self.get_serializer(data=request.data)
#     #         if serializer.is_valid():
#     #             # Save the cancellation
#     #             cancellation = serializer.save()

#     #             # Get the related booking and update its status
#     #             booking = cancellation.booking
#     #             booking.status = 'canceled'
#     #             booking.save()

#     #             return Response({
#     #                 'status': status.HTTP_201_CREATED,
#     #                 'data': serializer.data,
#     #                 'message': 'Cancellation created successfully and booking status updated'
#     #             })
#     #         return Response({
#     #             'status': status.HTTP_400_BAD_REQUEST,
#     #             'data': serializer.errors,
#     #             'message': 'Invalid Data'
#     #         })
#     #     except Exception as e:
#     #         print(e)
#     #         raise APIException({
#     #             'message': APIException.default_detail,
#     #             'status': APIException.status_code
#     #         })


#     def create(self, request):
#         try:
#             serializer = self.get_serializer(data=request.data)
#             if serializer.is_valid():
#                 # Save the cancellation
#                 cancellation = serializer.save()

#                 # Retrieve the related booking
#                 booking = cancellation.booking

#                 # Update the booking status to 'canceled'
#                 booking.status = 'canceled'
#                 booking.save()

#                 # Retrieve the associated car and mark it as available
#                 car = booking.car
#                 car.is_available = True
#                 car.save()

#                 return Response({
#                     'status': status.HTTP_201_CREATED,
#                     'data': serializer.data,
#                     'message': 'Cancellation created successfully, booking status updated, and car marked as available.'
#                 })

#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })

#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': str(e),
#                 'status': status.HTTP_500_INTERNAL_SERVER_ERROR
#             })
  

#     def update(self, request, pk=None):
#         try:
#             cancellation = self.get_object()
#             serializer = self.get_serializer(cancellation, data=request.data, partial=False)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_200_OK,
#                     'data': serializer.data,
#                     'message': 'Cancellation Updated Successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def partial_update(self, request, pk=None):
#         try:
#             cancellation = self.get_object()
#             serializer = self.get_serializer(cancellation, data=request.data, partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_200_OK,
#                     'data': serializer.data,
#                     'message': 'Cancellation Partial Updated Successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def destroy(self, request, pk=None):
#         try:
#             cancellation = self.get_object()
#             cancellation.delete()
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'message': 'Cancellation deleted successfully'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })
# class AvailabilityViewSet(ModelViewSet):
#     queryset = Availability.objects.all()
#     serializer_class = AvailabilitySerializer
#     # authentication_classes = [JWTAuthentication]
#     # permission_classes = [permissions.IsAuthenticated]

#     def get_serializer_class(self):
#         return AvailabilitySerializer

#     def list(self, request):
#         try:
#             availabilities = Availability.objects.all()
#             serializer = self.get_serializer(availabilities, many=True)
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'data': serializer.data
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })


#     def create(self, request):
#         try:
#             serializer = self.get_serializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_201_CREATED,
#                     'data': serializer.data,
#                     'message': 'Availability created successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def update(self, request, pk=None):
#         try:
#             availability = self.get_object()
#             serializer = self.get_serializer(availability, data=request.data, partial=False)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_200_OK,
#                     'data': serializer.data,
#                     'message': 'Availability Updated Successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def partial_update(self, request, pk=None):
#         try:
#             availability = self.get_object()
#             serializer = self.get_serializer(availability, data=request.data, partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({
#                     'status': status.HTTP_200_OK,
#                     'data': serializer.data,
#                     'message': 'Availability Partial Updated Successfully'
#                 })
#             return Response({
#                 'status': status.HTTP_400_BAD_REQUEST,
#                 'data': serializer.errors,
#                 'message': 'Invalid Data'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def destroy(self, request, pk=None):
#         try:
#             availability = self.get_object()
#             availability.delete()
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'message': 'Availability deleted successfully'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

# class ContactViewSet(viewsets.ModelViewSet):
#     queryset = Contact.objects.all()
#     serializer_class = ContactSerializer

# views.py


# from rest_framework import viewsets, permissions
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from django.contrib.auth.models import User
# from .models import Car, Booking, Cancellation, Availability, Contact
# from .serializers import UserSerializer, CarSerializer, BookingSerializer, CancellationSerializer, AvailabilitySerializer, ContactSerializer

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     authentication_classes = [JWTAuthentication]

#     def get_permissions(self):
#         if self.request.method == 'POST':
#             return [permissions.AllowAny()]
#         return [permissions.IsAuthenticated()]

# class CarViewSet(viewsets.ModelViewSet):
#     queryset = Car.objects.all()
#     serializer_class = CarSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [permissions.IsAuthenticated]

# class BookingViewSet(viewsets.ModelViewSet):
#     queryset = Booking.objects.all()
#     serializer_class = BookingSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [permissions.IsAuthenticated]

#     def create(self, request, *args, **kwargs):
#         car_id = request.data.get('car')
#         pickup_date = request.data.get('pickup_date')
#         return_date = request.data.get('return_date')

#         car = Car.objects.get(pk=car_id)

#         if not car.is_available:
#             return Response({"error": "Car is not available for the selected dates"}, status=status.HTTP_400_BAD_REQUEST)

#         overlapping_bookings = Booking.objects.filter(
#             car=car,
#             status='active',
#             pickup_date__lt=return_date,
#             return_date__gt=pickup_date
#         )
#         if overlapping_bookings.exists():
#             return Response({"error": "Car is already booked for the selected dates"}, status=status.HTTP_400_BAD_REQUEST)

#         response = super().create(request, *args, **kwargs)
#         return response

#     def update(self, request, *args, **kwargs):
#         instance = self.get_object()
#         serializer = self.get_serializer(instance, data=request.data, partial=True)
#         serializer.is_valid(raise_exception=True)
#         self.perform_update(serializer)

#         if 'status' in request.data and request.data['status'] == 'canceled':
#             car = instance.car
#             car.is_available = True
#             car.save()
            
#             if not Availability.objects.filter(
#                 car=car,
#                 pickup_date=instance.pickup_date,
#                 return_date=instance.return_date
#             ).exists():
#                 Availability.objects.create(
#                     car=car,
#                     pickup_date=instance.pickup_date,
#                     return_date=instance.return_date,
#                     available_quantity=1
#                 )

#         return Response(serializer.data)

# class CancellationViewSet(viewsets.ModelViewSet):
#     queryset = Cancellation.objects.all()
#     serializer_class = CancellationSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [permissions.IsAuthenticated]

#     def create(self, request, *args, **kwargs):
#         booking_id = request.data.get('booking')
#         try:
#             booking = Booking.objects.get(pk=booking_id, status='active')
#         except Booking.DoesNotExist:
#             return Response({"error": "Booking not found or already canceled"}, status=status.HTTP_404_NOT_FOUND)

#         response = super().create(request, *args, **kwargs)

#         booking.status = 'canceled'
#         booking.save()

#         car = booking.car
#         car.is_available = True
#         car.save()

#         if not Availability.objects.filter(
#             car=car,
#             pickup_date=booking.pickup_date,
#             return_date=booking.return_date
#         ).exists():
#             Availability.objects.create(
#                 car=car,
#                 pickup_date=booking.pickup_date,
#                 return_date=booking.return_date,
#                 available_quantity=1
#             )

#         return response

# class AvailabilityViewSet(viewsets.ModelViewSet):
#     queryset = Availability.objects.all()
#     serializer_class = AvailabilitySerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [permissions.IsAuthenticated]

# class ContactViewSet(viewsets.ModelViewSet):
#     queryset = Contact.objects.all()
#     serializer_class = ContactSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [permissions.IsAuthenticated]


# views.py


from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import permissions
from django.contrib.auth.models import User
from .models import Car, Booking, Cancellation, Availability, Contact
from .serializers import UserSerializer, CarSerializer, BookingSerializer, CancellationSerializer, AvailabilitySerializer, ContactSerializer
from .serializers import CustomTokenObtainPairSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'POST':
            # No authentication required for POST (user creation)
            return []
        return [permission() for permission in self.permission_classes]

    def get_authentication_classes(self):
        if self.request.method == 'POST':
            # No authentication required for POST (user creation)
            return []
        return [JWTAuthentication]

    def create(self, request, *args, **kwargs):
        # Allow POST requests without JWT authentication
        return super().create(request, *args, **kwargs)
    
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework_simplejwt.tokens import AccessToken
from .serializers import CustomTokenObtainPairSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    @swagger_auto_schema(
        responses={
            200: openapi.Response(
                description="Successful Response",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        'refresh': openapi.Schema(type=openapi.TYPE_STRING, description='Refresh token'),
                        'access': openapi.Schema(type=openapi.TYPE_STRING, description='Access token'),
                        'user_id': openapi.Schema(type=openapi.TYPE_INTEGER, description='User ID'),
                    }
                )
            )
        }
    )
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        data = response.data

        # Decode the access token to get user_id from token claims
        if 'access' in data:
            access_token = data['access']
            token = AccessToken(access_token)
            user_id = token.get('user_id')
            data['user_id'] = user_id  # Add user_id to the response

        return Response(data)


from datetime import date
from rest_framework.decorators import action

class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        # Use serializer to create the car instance
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        car = serializer.save()

        # Create an availability record after the car is created
        if car.is_available:
            Availability.objects.create(
                car=car,
                available_quantity=1,  # Assuming 1 means available
                pickup_date=date.today(),  # Set to current date
                return_date=date.today(),  # Set to current date or a future date
            )

        # Return the response with the created car's data
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    @action(detail=False, methods=['get'])
    def search_available(self, request):
        pickup_date = request.query_params.get('pickup_date')
        return_date = request.query_params.get('return_date')

        if not pickup_date or not return_date:
            return Response({'error': 'Please provide both pickup_date and return_date'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Parse dates
            pickup_date = datetime.strptime(pickup_date, '%Y-%m-%d').date()
            return_date = datetime.strptime(return_date, '%Y-%m-%d').date()

            if pickup_date >= return_date:
                return Response({'error': 'Pickup date must be earlier than return date.'}, status=status.HTTP_400_BAD_REQUEST)

            # Find cars where availability overlaps with requested dates
            overlapping_availabilities = Availability.objects.filter(
                pickup_date__lte=return_date,
                return_date__gte=pickup_date
            )

            # Find car IDs where availability quantity is 0 and dates overlap
            car_ids_with_zero_quantity = overlapping_availabilities.filter(
                available_quantity=0
            ).values_list('car_id', flat=True).distinct()

            # Find all cars
            all_cars = Car.objects.all()

            # Exclude cars with zero quantity where dates overlap
            available_car_ids = all_cars.exclude(car_id__in=car_ids_with_zero_quantity).values_list('car_id', flat=True)
            cars = Car.objects.filter(car_id__in=available_car_ids)

            # Serialize car data using the CarSerializer directly
            serializer = CarSerializer(cars, many=True)
            response_data = {
                'pickup_date': pickup_date,
                'return_date': return_date,
                'available_cars': serializer.data
            }

            return Response(response_data)
        
        except ValueError as e:
            print(f"Date Parsing Error: {e}")  # Log the error
            return Response({'error': 'Invalid date format. Use DD-MM-YYYY.'}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            print(f"General Exception occurred: {e}")  # Log the exception
            return Response({'error': f'An error occurred: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# class BookingViewSet(viewsets.ModelViewSet):
#     queryset = Booking.objects.all()
#     serializer_class = BookingSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [permissions.IsAuthenticated]

#     def create(self, request, *args, **kwargs):
#         car_id = request.data.get('car')
#         pickup_date = request.data.get('pickup_date')
#         return_date = request.data.get('return_date')

#         car = Car.objects.get(pk=car_id)

#         if not car.is_available:
#             return Response({"error": "Car is not available for the selected dates"}, status=status.HTTP_400_BAD_REQUEST)

#         # Check for overlapping bookings
#         overlapping_bookings = Booking.objects.filter(
#             car=car,
#             status='active',
#             pickup_date__lt=return_date,
#             return_date__gt=pickup_date
#         )
#         if overlapping_bookings.exists():
#             return Response({"error": "Car is already booked for the selected dates"}, status=status.HTTP_400_BAD_REQUEST)

#         # Proceed with booking creation
#         response = super().create(request, *args, **kwargs)

#         # Update car availability
#         car.is_available = False
#         car.save()

#         # Update availability table
#         if Availability.objects.filter(
#             car=car,
#             pickup_date=pickup_date,
#             return_date=return_date
#         ).exists():
#             Availability.objects.filter(
#                 car=car,
#                 pickup_date=pickup_date,
#                 return_date=return_date
#             ).update(available_quantity=0)
#         else:
#             Availability.objects.create(
#                 car=car,
#                 pickup_date=pickup_date,
#                 return_date=return_date,
#                 available_quantity=0
#             )

#         return response

#     def update(self, request, *args, **kwargs):
#         instance = self.get_object()
#         serializer = self.get_serializer(instance, data=request.data, partial=True)
#         serializer.is_valid(raise_exception=True)
#         self.perform_update(serializer)

#         if 'status' in request.data and request.data['status'] == 'canceled':
#             car = instance.car
#             car.is_available = True
#             car.save()

#             # Update availability record
#             availability_record, created = Availability.objects.get_or_create(
#                 car=car,
#                 pickup_date=instance.pickup_date,
#                 return_date=instance.return_date,
#             )
#             if not created:
#                 availability_record.available_quantity = 1
#                 availability_record.save()

#         return Response(serializer.data)



# from datetime import datetime, timedelta
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from .models import Car, Booking, Availability
# from .serializers import BookingSerializer

# class BookingViewSet(viewsets.ModelViewSet):
#     queryset = Booking.objects.all()
#     serializer_class = BookingSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAuthenticated]

#     def create(self, request, *args, **kwargs):
#         car_id = request.data.get('car')
#         pickup_date = request.data.get('pickup_date')
#         return_date = request.data.get('return_date')

#         try:
#             car = Car.objects.get(pk=car_id)
#         except Car.DoesNotExist:
#             return Response({"error": "Car not found"}, status=status.HTTP_404_NOT_FOUND)

#         # Convert dates from strings to date objects if necessary
#         pickup_date = datetime.strptime(pickup_date, '%Y-%m-%d').date()
#         return_date = datetime.strptime(return_date, '%Y-%m-%d').date()

#         # Check for overlapping bookings within the selected dates
#         overlapping_bookings = Booking.objects.filter(
#             car=car,
#             status='active',
#             pickup_date__lt=return_date + timedelta(days=1),  # Bookings that start before the day after the return date
#             return_date__gt=pickup_date - timedelta(days=1)   # Bookings that end after the day before the pickup date
#         )

#         if overlapping_bookings.exists():
#             return Response({"error": "Car is already booked for the selected dates"}, status=status.HTTP_400_BAD_REQUEST)

#         # Proceed with booking creation
#         response = super().create(request, *args, **kwargs)

#         # Update or create the availability entry for the booked dates
#         Availability.objects.create(
#             car=car,
#             pickup_date=pickup_date,
#             return_date=return_date,
#             available_quantity=0
#         )

#         # Mark the car as unavailable after the booking
#         car.is_available = False
#         car.save()

#         return response

#     def update(self, request, *args, **kwargs):
#         instance = self.get_object()
#         serializer = self.get_serializer(instance, data=request.data, partial=True)
#         serializer.is_valid(raise_exception=True)
#         self.perform_update(serializer)

#         if 'status' in request.data and request.data['status'] == 'canceled':
#             car = instance.car

#             # Check if there are any other active bookings for the same car
#             active_bookings = Booking.objects.filter(
#                 car=car,
#                 status='active',
#                 pickup_date__lt=instance.return_date + timedelta(days=1),
#                 return_date__gt=instance.pickup_date - timedelta(days=1)
#             )

#             # If no other active bookings, mark the car as available
#             if not active_bookings.exists():
#                 car.is_available = True
#                 car.save()

#             # Update the availability record
#             availability_record, created = Availability.objects.get_or_create(
#                 car=car,
#                 pickup_date=instance.pickup_date,
#                 return_date=instance.return_date,
#             )
#             if not created:
#                 availability_record.available_quantity = 1
#                 availability_record.save()

#         return Response(serializer.data)


from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Car, Booking, Availability
from .serializers import BookingSerializer
from datetime import datetime, timedelta

class BookingViewSet(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    # def get_queryset(self):
    #     # Returns bookings for the authenticated user
    #     user = self.request.user
    #     return Booking.objects.filter(user=user)

    def get_queryset(self):
        user = self.request.user
        if user.id == 1:  # Admin user
            return Booking.objects.all()
        else:
            return Booking.objects.filter(user=user)

    def create(self, request, *args, **kwargs):
        user = request.user
        car_id = request.data.get('car')
        pickup_date = request.data.get('pickup_date')
        return_date = request.data.get('return_date')

        try:
            car = Car.objects.get(pk=car_id)
        except Car.DoesNotExist:
            return Response({"error": "Car not found"}, status=status.HTTP_404_NOT_FOUND)

        # Convert dates from strings to date objects
        pickup_date = datetime.strptime(pickup_date, '%Y-%m-%d').date()
        return_date = datetime.strptime(return_date, '%Y-%m-%d').date()

        # Check for overlapping bookings
        overlapping_bookings = Booking.objects.filter(
            car=car,
            status='active',
            pickup_date__lt=return_date + timedelta(days=1),
            return_date__gt=pickup_date - timedelta(days=1)
        )

        if overlapping_bookings.exists():
            return Response({"error": "Car is already booked for the selected dates"}, status=status.HTTP_400_BAD_REQUEST)

        # Add user to the booking data
        request.data['user'] = user.id

        # Proceed with booking creation
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Update or create the availability entry for the booked dates
        availability_record, created = Availability.objects.get_or_create(
            car=car,
            pickup_date=pickup_date,
            return_date=return_date,
            defaults={'available_quantity': 0}
        )
        if not created:
            # If record exists, set available_quantity to 0 if needed
            availability_record.available_quantity = 0
            availability_record.save()

        # Mark the car as unavailable
        car.is_available = False
        car.save()

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if 'status' in request.data and request.data['status'] == 'canceled':
            car = instance.car

            # Check if there are any other active bookings for the same car
            active_bookings = Booking.objects.filter(
                car=car,
                status='active',
                pickup_date__lt=instance.return_date + timedelta(days=1),
                return_date__gt=instance.pickup_date - timedelta(days=1)
            )

            # If no other active bookings, mark the car as available
            if not active_bookings.exists():
                car.is_available = True
                car.save()

            # Update the availability record
            availability_record, created = Availability.objects.get_or_create(
                car=car,
                pickup_date=instance.pickup_date,
                return_date=instance.return_date,
            )
            if not created:
                availability_record.available_quantity = 1
                availability_record.save()

        return Response(serializer.data)



# class CancellationViewSet(viewsets.ModelViewSet):
#     queryset = Cancellation.objects.all()
#     serializer_class = CancellationSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [permissions.IsAuthenticated]

#     def create(self, request, *args, **kwargs):
#         booking_id = request.data.get('booking')
#         try:
#             booking = Booking.objects.get(pk=booking_id, status='active')
#         except Booking.DoesNotExist:
#             return Response({"error": "Booking not found or already canceled"}, status=status.HTTP_404_NOT_FOUND)

#         # Proceed with cancellation creation
#         response = super().create(request, *args, **kwargs)

#         # Update booking status and car availability
#         booking.status = 'canceled'
#         booking.save()

#         car = booking.car
#         car.is_available = True
#         car.save()

#         # Update availability record
#         availability_record, created = Availability.objects.get_or_create(
#             car=car,
#             pickup_date=booking.pickup_date,
#             return_date=booking.return_date,
#         )
#         if not created:
#             availability_record.available_quantity = 1
#             availability_record.save()

#         return response


# from rest_framework import viewsets, status, permissions
# from rest_framework.response import Response
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from .models import Cancellation, Booking, Car, Availability  # Ensure all relevant models are imported
# from .serializers import CancellationSerializer

class CancellationViewSet(viewsets.ModelViewSet):
    queryset = Cancellation.objects.all()
    serializer_class = CancellationSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        booking_id = request.data.get('booking')

        # Validate booking existence and status
        try:
            booking = Booking.objects.get(pk=booking_id, status='active')
        except Booking.DoesNotExist:
            return Response({"error": "Booking not found or already canceled"}, status=status.HTTP_404_NOT_FOUND)

        # Proceed with the cancellation record creation
        response = super().create(request, *args, **kwargs)

        # Update the booking status to 'canceled'
        booking.status = 'canceled'
        booking.save()

        # Set the car's availability to 'True' (available)
        car = booking.car
        car.is_available = True
        car.save()

        # Update the availability record (or create if not exists)
        availability_record, created = Availability.objects.get_or_create(
            car=car,
            pickup_date=booking.pickup_date,
            return_date=booking.return_date,
        )

        if not created:
            # If record exists, update available quantity
            availability_record.available_quantity = 1
            availability_record.save()

        return response


class AvailabilityViewSet(viewsets.ModelViewSet):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [permissions.IsAuthenticated]

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
