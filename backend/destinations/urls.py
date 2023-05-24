from django.urls import path
from . import views


urlpatterns =[
    path('destination/', views.get_all_destinations),  # gets all the destinations as well as the budgets attched.
    path ('beaches/', views.get_all_beach_locations),









]



# get_destinations_by_class