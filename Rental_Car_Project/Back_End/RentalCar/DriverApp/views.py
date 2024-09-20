# # from rest_framework.response import Response
# # from rest_framework.decorators import api_view
# # from .serializers import DriverRegistrationSerializer

# # @api_view(['POST'])
# # def driver_registration(request):
# #     serializer = DriverRegistrationSerializer(data=request.data)
# #     if request.method == 'POST':
# #         serializer = DriverRegistrationSerializer(data=request.data)
# #     if serializer.is_valid():
# #         serializer.save()
# #         return Response({'message': 'Driver registration successful!'}, status=200)
# #     return Response(serializer.errors, status=400)
# from django.shortcuts import render
# from .models import Driver
# from .serializers import DriverRegistrationSerializer
# from rest_framework.viewsets import ModelViewSet # type: ignore
# from rest_framework.exceptions import APIException # type: ignore
# from rest_framework.response import Response # type: ignore
# from rest_framework import status,parsers # type: ignore
# from rest_framework.decorators import action # type: ignore
# from rest_framework import permissions # type: ignore
# from rest_framework_simplejwt.authentication import JWTAuthentication # type: ignore


# class DriverViewset(ModelViewSet):
#     queryset = Driver.objects.all()
#     serializer_class = DriverRegistrationSerializer
#     parser_classes = (parsers.FormParser,parsers.MultiPartParser,parsers.FileUploadParser)
#     # authentication_classes = [JWTAuthentication]
#     # permission_classes = [permissions.IsAuthenticated]

#     def get_serializer_class(self):
#         if self.action == 'list':
#             return DriverRegistrationSerializer
#         elif self.action == 'create':
#             return DriverRegistrationSerializer
#         return self.serializer_class
#     @action(methods=['POST'],detail=True,url_path='upload_image')
#     def upload_image(self,request,pk=None):
#         Driver_objs=self.get_object()
#         serializer = self.get_serializer(Driver_objs,data=request.data)
#         if not serializer.is_valid():
#                 return Response({
#                     'status': status.HTTP_400_BAD_REQUEST,
#                     'data': serializer.errors,
#                     'message': 'Invalid Data'
#                 })
#         serializer.save()
#         return Response({
#                 'status': status.HTTP_201_CREATED,
#                 'data': serializer.data,
#                 'message': 'Driver Image successfully'
#             })


#     def list(self, request):
#         try:
#             Driver_objs = Driver.objects.all()
#             serializer = self.get_serializer(Driver_objs, many=True)
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
#             if not serializer.is_valid():
#                 return Response({
#                     'status': status.HTTP_400_BAD_REQUEST,
#                     'data': serializer.errors,
#                     'message': 'Invalid Data'
#                 })
#             serializer.save()
#             return Response({
#                 'status': status.HTTP_201_CREATED,
#                 'data': serializer.data,
#                 'message': 'Driver created successfully'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def update(self, request, pk=None):
#         try:
#             Driver_objs = self.get_object()
#             serializer = self.get_serializer(Driver_objs, data=request.data, partial=False)
#             if not serializer.is_valid():
#                 print(serializer.errors)
#                 return Response({
#                     'status': status.HTTP_400_BAD_REQUEST,
#                     'data': serializer.errors,
#                     'message': 'Invalid Data'
#                 })
#             serializer.save()
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'data': serializer.data,
#                 'message': 'Driver Updated Successfully'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def partial_update(self, request, pk=None):
#         try:
#             Driver_objs = self.get_object()
#             serializer = self.get_serializer(Driver_objs, data=request.data, partial=True)
#             if not serializer.is_valid():
#                 print(serializer.errors)
#                 return Response({
#                     'status': status.HTTP_400_BAD_REQUEST,
#                     'data': serializer.errors,
#                     'message': 'Invalid Data'
#                 })
#             serializer.save()
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'data': serializer.data,
#                 'message': 'Driver Partially Updated Successfully'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })

#     def destroy(self, request, pk=None):
#         try:
#             Driver_objs = self.get_object()
#             Driver_objs.delete()
#             return Response({
#                 'status': status.HTTP_200_OK,
#                 'message': 'Driver deleted successfully'
#             })
#         except Exception as e:
#             print(e)
#             raise APIException({
#                 'message': APIException.default_detail,
#                 'status': APIException.status_code
#             })


from rest_framework import viewsets,permissions
from .models import Driver,UserDriver
from .serializers import DriverSerializer,UserDriverSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

class DriverViewSet(viewsets.ModelViewSet):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

class UserDriverViewSet(viewsets.ModelViewSet):
    queryset = UserDriver.objects.all()
    serializer_class = UserDriverSerializer