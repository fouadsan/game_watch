from django.db import models
from django.utils.html import mark_safe


class WebPoster(models.Model):
    web_image = models.ImageField(upload_to='web_posters')

class Genre(models.Model):
    name = models.CharField(max_length=100)

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
    is_cracked = models.BooleanField(default=False)

    def poster_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.poster.url))

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('id', )


class GameDetail(models.Model):
    game_id = models.ForeignKey(Game, on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to="games/images/", default='games/images/default.jpg'
    )
    description = models.TextField(blank=True)
    release_date = models.DateField(blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1, blank=True)
    developer = models.CharField(max_length=150, blank=True)
    publisher = models.CharField(max_length=150, blank=True)

    def image_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

    class Meta:
        verbose_name_plural = 'Games Detail'
