import csv

import itertools
from django.views.generic import TemplateView


class RatingList(TemplateView):
    template_name = "rating/list.html"

    def get_context_data(self, **kwargs):
        context = super(RatingList, self).get_context_data(**kwargs)
        with open('rating/players_data.csv') as data:
            reader = csv.reader(data)
            ratings = []
            for row in reader:
                ratings.append(list(row))
            context['ratings'] = ratings
        return context
