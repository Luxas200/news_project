import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './ArticleDetail.css'

function ArticleDetail() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [readCount, setReadCount] = useState(0);
        
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/articles/${id}/read/`, {
            method: 'POST',
        })
        .catch(err => console.error('Error updating read count:', err));
    }, [id]);    

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/articles/${id}`)
        .then(response => response.json())
        .then(data => {
            setArticle(data);
            setReadCount(data.readCount);
            setLoading(false);
        })
        .catch(err => {
            console.error('error fetching article:', err);
            setError('Error fetching article');
            setLoading(false);
        });
    }, [id])

    if (loading) return <p>Loading article...</p>;
    if (error) return <p>{error}</p>;
    if (!article) return <p>No article found...</p>;

    return (
        <article className="article-detail">
            {article.imageUrl && <img className='article-detail-image' src={article.imageUrl} alt={article.title} />}
            <div className="container-center">
            <h2>{article.title}</h2>
            </div>            
            <p>{article.content}</p>
            <p className="info-detail-format">This article was read {article.readCount} times.</p>
            <p className="info-detail-format">Published on: {new Date(article.published_at).toLocaleDateString()}</p>
            <div className="container-center">
            <button onClick={() => navigate(-1)}>Back</button>
            </div>            
        </article>
    )
}

export default ArticleDetail;