from django.conf.urls import url
from django.conf.urls.static import static

from player import settings
from rating.views import RatingList
from url_names import url_rating_list

urlpatterns = [
    url(r'^$', RatingList.as_view(), name=url_rating_list),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
