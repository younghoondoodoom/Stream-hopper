import os
import django
import csv

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoreact.settings')
django.setup()

from entertainment.models import Movies, TVshows

MOVIE_CSV_PATH = './data/Movies.csv'

with open(MOVIE_CSV_PATH, newline='', encoding="latin_1") as movies:
    data_reader = csv.DictReader(movies)
    for row in data_reader:
        Movies.objects.create(
            title = row['title'],
            genre = row['genre'],
            country = row['country'],
            actor = row['actor'],
            director = row['director'],
            runtime = row['runtime'],
            overview = row['overview'],
            image_path = row['image_path'],
            release = row['release'],
            vote_count = int(row['vote_count']),
            rating = float(row['rating']),
            movie_rating = row['movie_rating'],
            description = row['description'],
            ott = row['ott']
        )
        
TV_CSV_PATH = './data/TVshows.csv'

with open(TV_CSV_PATH, newline='', encoding="latin_1") as tvshows:
    data_reader = csv.DictReader(tvshows)
    for row in data_reader:
        TVshows.objects.create(
            title = row['title'],
            genre = row['genre'],
            country = row['country'],
            actor = row['cast'],
            duration = row['duration'],
            overview = row['overview'],
            image_path = row['image_path'],
            release = row['release'],
            vote_count = int(row['vote_count']),
            rating = float(row['rating']),
            tv_rating = row['tv_rating'],
            description = row['description'],
            ott = row['ott']
        )