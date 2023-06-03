from django.urls import path
from . import views


urlpatterns =[
    path('destination/', views.get_all_destinations),  # gets all the destinations as well as the budgets attched.
    path ('destinations/<str:searched_location_type>/', views.get_all_beach_locations), # this will get back the results that are specific to a destinatioon terrain.
    path ('budget/<int:budget_type_id>/', views.get_location_by_budget),
    path ('randomdestinations/<str:searched_location_type>/', views.get_random_terrain_location),
]



# get_destinations_by_class