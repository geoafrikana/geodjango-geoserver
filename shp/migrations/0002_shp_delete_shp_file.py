# Generated by Django 4.1.3 on 2022-11-19 11:45

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Shp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(blank=True, max_length=1000)),
                ('uploaded_file', models.FileField(upload_to='%Y/%m/%d')),
                ('uploaded_date', models.DateField(blank=True, default=datetime.date.today)),
            ],
        ),
        migrations.DeleteModel(
            name='shp_file',
        ),
    ]
