# Generated by Django 4.0 on 2022-01-06 21:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('entertainment', '0008_contents_tmdb_id'),
        ('service', '0015_alter_ottservice_tmdb_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContentRecommendation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField(default=0)),
                ('recommend_content', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='entertainment.contents')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.customuser')),
            ],
        ),
    ]