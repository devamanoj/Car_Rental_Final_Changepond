# from django.db import models

# # class User(models.Model):
# #     user_id = models.AutoField(primary_key=True)
# #     username = models.CharField(max_length=100)
# #     email = models.EmailField(unique=True)
# #     password = models.CharField(max_length=100)
# #     address = models.TextField()
# #     phone_number = models.CharField(max_length=15)

# #     def __str__(self):
# #         return self.username


# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
# from django.db import models
# from django.utils import timezone

# class CustomUserManager(BaseUserManager):
#     def create_user(self, email, username, password=None, **extra_fields):
#         if not email:
#             raise ValueError('The Email field must be set')
#         email = self.normalize_email(email)
#         user = self.model(email=email, username=username, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, username, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)
#         return self.create_user(email, username, password, **extra_fields)

# class User(AbstractBaseUser, PermissionsMixin):
#     user_id = models.AutoField(primary_key=True)
#     username = models.CharField(max_length=100, unique=True)
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=100)  # Consider using Django’s built-in password hashing
#     address = models.TextField()
#     phone_number = models.CharField(max_length=15)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)

#     objects = CustomUserManager()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['username']

#     def __str__(self):
#         return self.username


# class Car(models.Model):
#     car_id = models.AutoField(primary_key=True)
#     description = models.TextField()
#     seat_type = models.CharField(max_length=50)
#     automatic = models.BooleanField(default=False)
#     gps = models.BooleanField(default=False)
#     speed = models.IntegerField()
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     img_url = models.URLField()
#     car_name = models.CharField(max_length=100)
#     rating = models.FloatField()
#     brand = models.CharField(max_length=50)
#     is_available = models.BooleanField(default=True)  # New field to track availability

#     def __str__(self):
#         return self.car_name

# # class Booking(models.Model):
# #     booking_id = models.AutoField(primary_key=True)
# #     user = models.ForeignKey(User, on_delete=models.CASCADE)
# #     car = models.ForeignKey(Car, on_delete=models.CASCADE)
# #     booking_date = models.DateField()
# #     pickup_date = models.DateField()
# #     return_date = models.DateField()
# #     total_price = models.DecimalField(max_digits=10, decimal_places=2)

# #     def __str__(self):
# #         return f"Booking {self.booking_id} by {self.user.username}"

# class Booking(models.Model):
#     STATUS_CHOICES = [
#         ('active', 'Active'),
#         ('canceled', 'Canceled'),
#     ]
#     booking_id = models.AutoField(primary_key=True)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     car = models.ForeignKey(Car, on_delete=models.CASCADE,null=True)
#     booking_date = models.DateField()
#     pickup_date = models.DateField()
#     return_date = models.DateField()
#     # total_price = models.DecimalField(max_digits=10, decimal_places=2)
#     status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

#     def __str__(self):
#         return f"Booking {self.booking_id} - {self.status}"


# class Admin(models.Model):
#     admin_id = models.AutoField(primary_key=True)
#     username = models.CharField(max_length=100)
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=100)

#     def __str__(self):
#         return self.username


# class Cancellation(models.Model):
#     cancellation_id = models.AutoField(primary_key=True)
#     booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
#     cancellation_date = models.DateField()
#     reason = models.TextField()

#     def __str__(self):
#         return f"Cancellation {self.cancellation_id} for Booking {self.booking.booking_id}"

# class Availability(models.Model):
#     car = models.ForeignKey(Car, on_delete=models.CASCADE, primary_key=True)
#     pickup_date = models.DateField()
#     return_date = models.DateField()
#     available_quantity = models.IntegerField(null=True)

#     def __str__(self):
#         return f"Availability for {self.car.car_name}"


# class Contact(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField()
#     message = models.TextField()

#     def __str__(self):
#         return f"Message from {self.name}"
# models.py
from django.contrib.auth.models import User
from django.db import models

class Car(models.Model):
    car_id = models.AutoField(primary_key=True)
    description = models.TextField()
    seat_type = models.CharField(max_length=50)
    automatic = models.BooleanField(default=False)
    gps = models.BooleanField(default=False)
    speed = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    img_url = models.ImageField(upload_to='images/')
    car_name = models.CharField(max_length=100)
    rating = models.FloatField()
    brand = models.CharField(max_length=50)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.car_name

class Booking(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('canceled', 'Canceled'),
    ]
    booking_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, null=True)
    booking_date = models.DateField()
    pickup_date = models.DateField()
    return_date = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return f"Booking {self.booking_id} - {self.status}"

class Cancellation(models.Model):
    cancellation_id = models.AutoField(primary_key=True)
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    cancellation_date = models.DateField()
    reason = models.TextField()

    def __str__(self):
        return f"Cancellation {self.cancellation_id} for Booking {self.booking.booking_id}"

# class Availability(models.Model):
#     car = models.ForeignKey(Car, on_delete=models.CASCADE, primary_key=True)
#     pickup_date = models.DateField(null=True, blank=True)
#     return_date = models.DateField(null=True, blank=True)
#     available_quantity = models.IntegerField(null=True)

#     def __str__(self):
#         return f"Availability for {self.car.car_name}"

from django.db import models

class Availability(models.Model):
    availability_id = models.AutoField(primary_key=True)  # Auto-generated primary key
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    pickup_date = models.DateField(null=True, blank=True)
    return_date = models.DateField(null=True, blank=True)
    available_quantity = models.IntegerField(null=True)

    class Meta:
        unique_together = ['car', 'pickup_date', 'return_date']  # Ensure unique availability periods for each car

    def __str__(self):
        return f"Availability for {self.car.car_name} from {self.pickup_date} to {self.return_date}"



class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return f"Message from {self.name}"
