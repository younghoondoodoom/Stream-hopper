from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from users.models import CustomUser

# Create your models here.

# movie table columns
# id, title, genre, img_path, country, release, runtime, actor, director, overview, vote_count, rating,

class Contents(models.Model):
    title = models.CharField(max_length = 2000)
    rating = models.FloatField(default=0)
    image_path = models.CharField(max_length = 2000, blank=True)
    overview = models.TextField(blank = True)
    vote_count = models.IntegerField(default=0)
    director = models.CharField(max_length = 2000, blank=True)
    actor = models.CharField(max_length = 2000, blank=True)
    country = models.CharField(max_length = 2000, blank=True)
    release = models.CharField(max_length = 2000, blank=True)
    content_rating = models.CharField(max_length = 2000, blank = True)
    runtime = models.CharField(max_length =  2000, blank=True)
    genre = models.CharField(max_length = 2000, blank=True)
    description = models.TextField(blank = True)
    ott = models.CharField(max_length = 2000, blank = True)
    kor_title = models.CharField(max_length = 2000, blank = True)
    kor_overview = models.TextField(blank = True)
    kor_image_path = models.CharField(max_length = 2000, blank = True)
    type = models.CharField(max_length = 2000, blank = True)
    
    def __str__(self):
        return self.title
    
class ContentReviews(models.Model):
    
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    content_id = models.ForeignKey(Contents, on_delete=models.CASCADE)
    review = models.TextField(blank=True)
    rating = models.IntegerField(validators =[MinValueValidator(0), MaxValueValidator(10)], default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

