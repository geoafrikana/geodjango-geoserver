# Generated by Django 4.0.1 on 2022-01-22 14:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='shp_file',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=1000)),
                ('uploaded_shp', models.FileField(upload_to='uploads/%Y/%m/%d/')),
                ('upload_date', models.DateField(blank=True, default=datetime.date.today)),
            ],
        ),
    ]
