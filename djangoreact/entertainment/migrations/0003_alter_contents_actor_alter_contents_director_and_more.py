# Generated by Django 4.0 on 2022-01-03 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entertainment', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contents',
            name='actor',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AlterField(
            model_name='contents',
            name='director',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AlterField(
            model_name='contents',
            name='image_path',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AlterField(
            model_name='contents',
            name='kor_image_path',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AlterField(
            model_name='contents',
            name='kor_title',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AlterField(
            model_name='contents',
            name='title',
            field=models.CharField(max_length=1000),
        ),
    ]
