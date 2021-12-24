from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from users.models import CustomUser
from allauth.socialaccount.models import SocialAccount

# Create your models here.

# movie table columns
# id, title, genre, img_path, country, release, runtime, actor, director, overview, vote_count, rating,

class Movies(models.Model):
    title = models.CharField(max_length = 255)
    genre = models.CharField(max_length = 100, null=True)
    countrty = models.CharField(max_length = 100, null=True)
    actor = models.CharField(max_length = 255, null=True)
    director = models.CharField(max_length = 255, null=True)
    runtime = models.CharField(max_length = 100, null=True)
    overview = models.TextField(blank = True)
    img_path = models.CharField(max_length = 255, null=True)
    release_date = models.CharField(max_length = 100, null=True) # DateField로 바꿀 거임.
    vote_count = models.IntegerField(default=0)
    rating = models.IntegerField(validators =[MinValueValidator(0), MaxValueValidator(5)], default=0)
    
    def __str__(self):
        return self.title

SNS_CHOICES = (
        ('G', 'Google'),
        ('E', 'Email')
    )

class MovieReviews(models.Model):
    
    type_of_user = models.CharField(max_length=1, choices = SNS_CHOICES)
    email_user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    google_user = models.ForeignKey(SocialAccount, on_delete=models.CASCADE, null=True)
    movie_id = models.ForeignKey(Movies, on_delete=models.CASCADE)
    review = models.TextField(blank=True)
    rating = models.IntegerField(validators =[MinValueValidator(0), MaxValueValidator(5)], default=0)
    
    


    
    
    