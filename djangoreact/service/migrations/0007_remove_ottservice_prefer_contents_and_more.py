# Generated by Django 4.0 on 2022-01-04 23:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entertainment', '0005_alter_contents_content_rating_alter_contents_country_and_more'),
        ('service', '0006_remove_ottservice_prefer_contents_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ottservice',
            name='prefer_contents',
        ),
        migrations.AddField(
            model_name='ottservice',
            name='prefer_contents',
            field=models.ManyToManyField(blank=True, null=True, to='entertainment.Contents'),
        ),
    ]
