# Generated by Django 4.0 on 2022-01-08 04:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entertainment', '0012_alter_contents_actor_alter_contents_country_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contents',
            name='keywords',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AlterField(
            model_name='contents',
            name='kor_title',
            field=models.CharField(blank=True, max_length=1000),
        ),
    ]
