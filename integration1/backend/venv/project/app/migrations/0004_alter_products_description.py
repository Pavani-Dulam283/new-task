# Generated by Django 4.2.4 on 2023-08-25 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_products_description_alter_products_total'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='description',
            field=models.CharField(max_length=30),
        ),
    ]
