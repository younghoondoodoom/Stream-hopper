# Generated by Django 4.0 on 2021-12-28 07:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        ('entertainment', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='moviereviews',
            name='user_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.customuser'),
        ),
    ]