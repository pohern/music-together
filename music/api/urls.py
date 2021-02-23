from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom, UserInRoom

urlpatterns = [
    path('room', RoomView.as_view(), name='apiView'),
    path('create-room', CreateRoomView.as_view(), name='create-room'),
    path('get-room', GetRoom.as_view(), name='get-room'),
    path('join-room', JoinRoom.as_view(), name='join-room'),
    path('user-in-room', UserInRoom.as_view(), name='user-in-room')
]

