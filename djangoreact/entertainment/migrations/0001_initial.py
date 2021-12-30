
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(

            name='Contents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('rating', models.FloatField(default=0)),
                ('image_path', models.CharField(blank=True, max_length=255)),
                ('overview', models.TextField(blank=True)),
                ('vote_count', models.IntegerField(default=0)),
                ('director', models.CharField(blank=True, max_length=255)),
                ('actor', models.CharField(blank=True, max_length=255)),
                ('country', models.CharField(blank=True, max_length=100)),
                ('release', models.CharField(blank=True, max_length=100)),
                ('content_rating', models.CharField(blank=True, max_length=100)),
                ('runtime', models.CharField(blank=True, max_length=100)),
                ('genre', models.CharField(blank=True, max_length=100)),
                ('description', models.TextField(blank=True)),
                ('ott', models.CharField(blank=True, max_length=100)),
                ('kor_title', models.CharField(blank=True, max_length=255)),
                ('kor_overview', models.TextField(blank=True)),
                ('kor_image_path', models.CharField(blank=True, max_length=255)),
                ('type', models.CharField(blank=True, max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ContentReviews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', models.TextField(blank=True)),
                ('rating', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(10)])),
                ('content_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='entertainment.contents')),
            ],
        ),
    ]
