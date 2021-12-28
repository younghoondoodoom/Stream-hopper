from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from users.models import CustomUser

# Create your models here.

# movie table columns
# id, title, genre, img_path, country, release, runtime, actor, director, overview, vote_count, rating,

class Movies(models.Model):
    title = models.CharField(max_length = 255)
    genre = models.CharField(max_length = 100, blank=True)
    country = models.CharField(max_length = 100, blank=True)
    actor = models.CharField(max_length = 255, blank=True)
    director = models.CharField(max_length =255, blank=True)
    runtime = models.CharField(max_length =  100, blank=True)
    overview = models.TextField(blank = True)
    image_path = models.CharField(max_length = 255, blank=True)
    release = models.CharField(max_length = 100, blank=True) # DateField로 바꿀 거임.
    vote_count = models.IntegerField(default=0)
    rating = models.FloatField(default=0)
    movie_rating = models.CharField(max_length = 100, blank = True)
    description = models.TextField(blank = True)
    ott = models.CharField(max_length = 100, blank = True)
    
    def __str__(self):
        return self.title


class MovieReviews(models.Model):
    
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    movie_id = models.ForeignKey(Movies, on_delete=models.CASCADE)
    review = models.TextField(blank=True)
    rating = models.IntegerField(validators =[MinValueValidator(0), MaxValueValidator(10)], default=0)
    
    def __str__(self):
        return self.movie_id
    
class TVshows(models.Model):
    title = models.CharField(max_length = 255)
    genre = models.CharField(max_length = 100, blank=True)
    country = models.CharField(max_length = 100, blank=True)
    actor = models.CharField(max_length = 255, blank=True)
    duration = models.CharField(max_length =  100, blank=True)
    overview = models.TextField(blank = True)
    image_path = models.CharField(max_length = 255, blank=True)
    release = models.CharField(max_length = 100, blank=True) # DateField로 바꿀 거임.
    vote_count = models.IntegerField(default=0)
    rating = models.FloatField(default=0)
    tv_rating = models.CharField(max_length = 100, blank = True)
    description = models.TextField(blank = True)
    ott = models.CharField(max_length = 100, blank = True)
    
    def __str__(self):
        return self.title
    
class TVshowReviews(models.Model):
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    tv_id = models.ForeignKey(TVshows, on_delete=models.CASCADE)
    review = models.TextField(blank=True)
    rating = models.IntegerField(validators =[MinValueValidator(0), MaxValueValidator(10)], default=0)

    def __str__(self):
        return self.tv_id

    
    
    