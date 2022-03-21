import datetime as dt
from django.db import models
from django.utils.html import mark_safe

from users.models import Account


class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        abstract = True


class Genre(Category):
    pass


class Platform(Category):
    pass


class Image(models.Model):
    image = models.ImageField()

    class Meta:
        abstract = True


class Screenshot(Image):
    pass


class Artwork(Image):
    pass


class Mode(Category):
    pass


class Engine(Category):
    pass


class PlayerPerspective(Category):
    pass


class Theme(Category):
    pass


class Game(models.Model):
    users = models.ManyToManyField(Account)
    genre = models.ForeignKey(
        Genre, on_delete=models.PROTECT, default=1
    )
    name = models.CharField(max_length=250)
    poster = models.ImageField(
        upload_to="games/posters/", default='games/posters/default.gif'
    )
    platforms = models.ManyToManyField(Platform)
    release_date = models.DateField(blank=True)
    is_popular = models.BooleanField(default=False)
    description = models.TextField(blank=True, null=True)
    rating = models.DecimalField(
        max_digits=3, decimal_places=1, blank=True, null=True)
    developer = models.CharField(max_length=150, blank=True, null=True)
    publisher = models.CharField(max_length=150, blank=True, null=True)
    game_modes = models.ManyToManyField(Mode)
    game_engines = models.ManyToManyField(Engine, blank=True)
    player_perspective = models.ManyToManyField(PlayerPerspective)
    themes = models.ManyToManyField(Theme)
    storyline = models.TextField(blank=True, null=True)
    screenshots = models.ManyToManyField(Screenshot)
    artworks = models.ManyToManyField(Artwork)

    @property
    def is_released(self):
        return dt.datetime.now().date() - self.release_date >= dt.timedelta(days=0)

    def poster_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.poster.url))

    def __str__(self):
        return self.name
