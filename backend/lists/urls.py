from django.urls import path
from . import views


urlpatterns = [
    path ('list/', views.get_travelers_items),
    
    # make sure to change the .get_lists back to .get_travelers_items
    # need to go to the video to set the paras to the bearer key and get post man set up correctly  for the correct endpoint.

]

 # Create your views here.
# path('list/', views.get_travelers_items)

