from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils.html import mark_safe


def upload_to(instance, filename):
    return 'games/{filename}'.format(filename=filename)


class Genre(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Game(models.Model):
    genre = models.ForeignKey(
        Genre, on_delete=models.PROTECT, default=1
    )
    name = models.CharField(max_length=250)
    image = models.ImageField(
        _("Image"), upload_to=upload_to, default='games/default.jpg')
    description = models.TextField(blank=True)
    release_date = models.DateField(blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1, blank=True)
    developer = models.CharField(max_length=150, blank=True)
    publisher = models.CharField(max_length=150, blank=True)

    def image_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

    def __str__(self):
        return self.name