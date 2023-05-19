# Generated by Django 4.2.1 on 2023-05-19 23:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('budgets', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Destinations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('terrain', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('state', models.CharField(max_length=255)),
                ('average_summer_temp', models.DecimalField(decimal_places=1, max_digits=3)),
                ('average_winter_temp', models.DecimalField(decimal_places=1, max_digits=3)),
                ('budget_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='budgets.budget')),
            ],
        ),
    ]
