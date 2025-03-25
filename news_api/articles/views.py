from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from .models import Article



# Create your views here.

from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer

class ArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all().order_by('-published_at')
    serializer_class = ArticleSerializer

class ArticleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

@csrf_exempt
def increment_read_count(request, pk):
    article = get_object_or_404(Article, pk=pk)
    article.readCount += 1  # Increment the readCount
    article.save()
    return JsonResponse({'readCount': article.readCount})
