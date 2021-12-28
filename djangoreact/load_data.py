import os
import django
import csv

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoreact.settings')
django.setup()

from entertainment.models import Movies

CSV_PATH = './TMDB_OTT_movies.csv'

with open(CSV_PATH, newline='', encoding="latin_1") as csvfile:
    data_reader = csv.DictReader(csvfile)
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