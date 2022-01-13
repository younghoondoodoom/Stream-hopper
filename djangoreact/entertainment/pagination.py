from rest_framework.pagination import PageNumberPagination

class SearchContentPageNumberPagination(PageNumberPagination):
    page_size = 8
