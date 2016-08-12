from __future__ import unicode_literals

from django.db import models


class Contact(models.Model):
	name = models.CharField(max_length=80)
	phone = models.CharField(max_length=20)

	class Meta:
		ordering = ('name',)

