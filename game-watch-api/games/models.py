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

    name = models.CharField(max_length=20, choices=options,
                            unique=True, default='horror')

    def __str__(self):
        return self.name


class Platform(models.Model):
    platform_options = (
        ('pc', 'PC'),
        ('playstation', 'Playstation'),
        ('xbox', 'Xbox'),
    )

    name = models.CharField(
        max_length=20, choices=platform_options, unique=True, default='pc')

    def __str__(self):
        return self.name


class Image(models.Model):
    image = models.ImageField()

    class Meta:
        abstract = True


class Screenshot(Image):
    pass


class Artwork(Image):
    pass


class Mode(models.Model):
    mode_options = (
        ('single-player', 'Single player'),
        ('multiplayer', 'Multiplayer'),
    )

    name = models.CharField(max_length=20, choices=mode_options,
                            unique=True, default=1)

    def __str__(self):
        return self.name


class Engine(models.Model):
    name = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.name


class PlayerPerspective(models.Model):
    perspective_options = (
        ('first_person', 'First person'),
        ('third_person', 'Third person'),
    )

    name = models.CharField(max_length=20, choices=perspective_options,
                            unique=True, default='first_person')

    def __str__(self):
        return self.name


class Theme(models.Model):
    theme_options = (
        ('action', 'Action'),
        ('comedy', 'Comedy'),
        ('fantasy', 'Fantasy'),
    )

    name = models.CharField(max_length=100, choices=theme_options,
                            unique=True, default='action')

    def __str__(self):
        return self.name


class Game(models.Model):
    users = models.ManyToManyField(Account)
    genre = models.ForeignKey(
        Genre, on_delete=models.PROTECT, default=1
    )
    name = models.CharField(max_length=250)
    poster = models.ImageField(
        upload_to="games/posters/", default='games/posters/default.jpg'
    )
    platforms = models.ManyToManyField(Platform)
    release_date = models.DateField(blank=True)
    is_released = models.BooleanField(default=False)
    is_popular = models.BooleanField(default=False)
    description = models.TextField(blank=True, null=True)
    rating = models.DecimalField(
        max_digits=3, decimal_places=1, blank=True, null=True)
    developer = models.CharField(max_length=150, blank=True, null=True)
    publisher = models.CharField(max_length=150, blank=True, null=True)
    game_modes = models.ManyToManyField(Mode)
    game_engines = models.ManyToManyField(Engine)
    player_perspective = models.ManyToManyField(PlayerPerspective)
    themes = models.ManyToManyField(Theme)
    storyline = models.TextField(blank=True, null=True)
    screenshots = models.ManyToManyField(Screenshot)
    artworks = models.ManyToManyField(Artwork)

    def poster_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.poster.url))

    def __str__(self):
        return self.name

    # class Meta:
    #     ordering = ('id', )
