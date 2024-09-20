# from rest_framework import serializers
# from django.contrib.auth import authenticate
# from .models import User, Car, Booking, Admin, Cancellation, Availability,Contact

# # class UserSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = User
# #         fields = ['user_id', 'username', 'password',  'email', 'address', 'phone_number']

# from django.contrib.auth import get_user_model

# User = get_user_model()

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['user_id', 'username', 'email', 'address', 'phone_number','password']
#         extra_kwargs = {
#             'password': {'write_only': True}
#         }

#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         return user

#     def update(self, instance, validated_data):
#         password = validated_data.pop('password', None)
#         for attr, value in validated_data.items():
#             setattr(instance, attr, value)
#         if password:
#             instance.set_password(password)
#         instance.save()
#         return instance




# # class LoginSerializer(serializers.Serializer):
# #     email = serializers.EmailField()
# #     password = serializers.CharField(style={'input_type': 'password'})

# #     def validate(self, data):
# #         email = data.get('email')
# #         password = data.get('password')

# #         if email and password:
# #             user = authenticate(email=email, password=password)
# #             if not user:
# #                 raise serializers.ValidationError("Invalid email or password")
# #         else:
# #             raise serializers.ValidationError("Email and password are required")

# #         return data

# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField(style={'input_type': 'password'})

#     def validate(self, data):
#         email = data.get('email')
#         password = data.get('password')
#         user = authenticate(email=email, password=password)
#         if user is None:
#             raise serializers.ValidationError("Invalid email or password")
#         return {'user': user}



# class CarSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Car
#         fields = '__all__'


# class BookingSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Booking
#         fields = ['booking_id', 'user', 'car', 'booking_date', 'pickup_date', 'return_date']

#     def create(self, validated_data):
#         booking = Booking.objects.create(**validated_data)
#         return booking


# class AdminSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Admin
#         fields = '__all__'

# class CancellationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Cancellation
#         fields = ['cancellation_id', 'booking' , 'cancellation_date', 'reason']

#     # Handle creation logic
#     def create(self, validated_data):
#         cancellation = Cancellation.objects.create(**validated_data)
#         return cancellation

# # class AvailabilitySerializer(serializers.ModelSerializer):
# #     # car = CarSerializer(read_only=True)
    
# #     class Meta:
# #         model = Availability
# #         fields = [ 'car', 'pickup_date','return_date','available_quantity' ]

# class AvailabilitySerializer(serializers.ModelSerializer):
#     car = serializers.PrimaryKeyRelatedField(queryset=Car.objects.all())

#     class Meta:
#         model = Availability
#         fields = ['car', 'pickup_date', 'return_date']

# class ContactSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Contact
#         fields = '__all__'


from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Car, Booking, Cancellation, Availability, Contact
# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# serializers.py
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = User.objects.create(**validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password:
            instance.set_password(password)
        instance.save()
        return instance

# class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)
#         # Add custom claims here if needed
#         return token

#     def validate(self, attrs):
#         data = super().validate(attrs)
        
#         # Add custom response data (e.g., user's ID)
#         data.update({
#             'user_id': self.user.id,  # Adds user ID to the response
#             'username': self.user.username  # Optionally add username or other info if needed
#         })

#         return data



from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add user_id to token claims
        token['user_id'] = user.id
        return token





    # @classmethod
    # def validate(cls, attrs):
    #     email = attrs.get('email')
    #     password = attrs.get('password')

    #     if email is None or password is None:
    #         raise serializers.ValidationError(
    #             'Both "email" and "password" fields are required.'
    #         )

        user = User.objects.filter(email=email).first()
        if user is None or not user.check_password(password):
            raise serializers.ValidationError('Invalid credentials.')

        return {
            'refresh': cls.get_token(user).refresh_token,
            'access': cls.get_token(user).access_token
        }




# class CarSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Car
#         fields = ['car_id', 'description', 'seat_type', 'automatic', 'gps', 'speed', 'price', 'img_url', 'car_name', 'rating', 'brand', 'is_available']

class CarSerializer(serializers.ModelSerializer):
    img_url = serializers.ImageField(required=True)
    class Meta:
        model = Car
        fields = ['car_id', 'description', 'seat_type', 'automatic', 'gps', 'speed', 'price', 'img_url', 'car_name', 'rating', 'brand', 'is_available']


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['booking_id', 'user', 'car', 'booking_date', 'pickup_date', 'return_date', 'status']

class CancellationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cancellation
        fields = ['cancellation_id', 'booking', 'cancellation_date', 'reason']

class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = ['car', 'pickup_date', 'return_date', 'available_quantity']

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id','name', 'email', 'message']
