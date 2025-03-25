from django.urls import path
from .views import ArticleListCreateView, ArticleDetailView, increment_read_count

urlpatterns = [
    path('articles/', ArticleListCreateView.as_view(), name='article-list-create'),
    path('articles/<int:pk>/', ArticleDetailView.as_view(), name='article-detail'),
    path('articles/<int:pk>/read/', increment_read_count, name='article-increment-read-count'),  # New endpoint to count readings.

]