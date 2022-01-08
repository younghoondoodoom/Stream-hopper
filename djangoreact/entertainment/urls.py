from django.urls import path
from .views import *

# content top 3: /entertainment/content/list
# content detail: /entertainment/content/detail/<int:id>
# content search
# - title만 : /entertainment/content/search/?title={str}
# - actor만 : /entertainment/content/search/?actor={str}
# - director만 : /entertainment/content/search/?director={str}
# - 3개 다 : /entertainment/content/search/?title={str}&actor={str}&director={str}


urlpatterns = [
    path('content/list', ContentListAPIView.as_view()),
    path('content/detail/<int:pk>', ContentsDetailAPIView.as_view()),
    path('content/search/', ContentSearchCreateView.as_view()),
]
