import os
import django
import csv

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoreact.production_settings')
django.setup()

from entertainment.models import Contents, OTT

COTENTS_CSV_PATH = './data/Contents.csv'

with open(COTENTS_CSV_PATH, newline='', encoding="utf-8") as contents:
    data_reader = csv.DictReader(contents)
    for row in data_reader:
        Contents.objects.create(
            title = row['title'],
            rating = float(row['rating']),
            image_path = row['image_path'],
            overview = row['overview'],
            vote_count = row['vote_count'],
            director = row['director'],
            actor = row['actor'],
            country = row['country'],
            release = row['release'],
            content_rating = row['content_rating'],
            runtime = row['runtime'],
            genre = row['genre'],
            description = row['description'],
            ott = row['ott'],
            kor_title = row['kor_title'],
            kor_overview = row['kor_overview'],
            kor_image_path = row['kor_image_path'],
            type = row['type'],
            tmdb_id = row['id'],
            keywords = row['keywords']
        )

OTT_CSV_PATH = './data/OTT.csv'

with open(OTT_CSV_PATH, newline='', encoding='utf-8') as OTTs:
    data_reader = csv.DictReader(OTTs)
    for row in data_reader:
        OTT.objects.create(
            name = row['name'],
            cost = row['cost'],
            pixel = row['pixel'],
            max_user_count = row['max_user_count'],
            img_path = row['img_path']
        )