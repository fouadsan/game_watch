from django.db import models
from django.utils.html import mark_safe

from users.models import Account


class Genre(models.Model):
    options = (
        ('horror', 'Horror'),
        ('shooter', 'Shooter'),
        ('adventure', 'Adventure'),
        ('sci-fi', 'Sci-fi'),
    )

    name = models.CharField(max_length=100, choices=options,
                            unique=True, default='horror')

    def __str__(self):
        return self.name


class Platform(models.Model):
    options = (
        ('pc', 'PC'),
        ('playstation', 'Playstation'),
        ('xbox', 'Xbox'),
    )

    name = models.CharField(
        max_length=15, choices=options, unique=True, default='pc')

    def __str__(self):
        return self.name


class Game(models.Model):
    genre = models.ForeignKey(
        Genre, on_delete=models.PROTECT, default=1
    )
    name = models.CharField(max_length=250)
    poster = models.ImageField(
        upload_to="games/posters/", default='games/posters/default.jpg'
    )
    platforms = models.ManyToManyField(Platform)
    release_date = models.DateField(blank=True)
    is_cracked = models.BooleanField(default=False)
    is_popular = models.BooleanField(default=False)
    image = models.ImageField(
        upload_to="games/images/", default='games/images/default.jpg'
    )
    description = models.TextField(blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1, blank=True)
    developer = models.CharField(max_length=150, blank=True)
    publisher = models.CharField(max_length=150, blank=True)

    def poster_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.poster.url))

    def __str__(self):
        return self.name

    # class Meta:
    #     ordering = ('id', )


class UserGame(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE, blank=True)
    favorite_games = models.ManyToManyField(Game)

    def __str__(self):
        return self.user.email
