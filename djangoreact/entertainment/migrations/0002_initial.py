# Generated by Django 4.0 on 2022-01-03 18:30


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
            model_name='contentreviews',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.customuser'),
        ),
    ]
