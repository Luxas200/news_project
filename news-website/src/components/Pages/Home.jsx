import Article from "../ArticleComponents/Article"
import './Home.css'
import Modal from "../PageComponents/Modal";
import { useState } from "react";
import { useEffect } from "react";
import NewArticleForm from "../ArticleComponents/newArticleForm";

function ArticleList() {

    const [articles,setArticles] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [editArticle, setEditArticle] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        fetch('http://127.0.0.1:8000/api/articles/', {
            method: 'GET'
        })
            .then (response => response.json())
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('error fetshing articles', err);
                setError('Failed to fetch articles');
                setLoading(false);
            })
    }, []);

   
    const handleAddArticle = (newArticle) => {        
        fetch ('http://127.0.0.1:8000/api/articles/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newArticle)
        })
            .then(response => response.json())
            .then(createdArticle => {
                setArticles(prevArticles => [createdArticle, ...prevArticles]);
                setShowModal(false)
                })
            .catch(error => console.error('Error adding article:', error));               
    }

    const handleUpdateArticle = (updatedArticle) => {
        fetch(`http://127.0.0.1:8000/api/articles/${updatedArticle.id}/`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(updatedArticle)
        })
            .then(response => response.json())
            .then(data => {
                setArticles(prevArticles => prevArticles.map(article => article.id === data.    id ? data : article));
                setEditArticle(null);
            })
            .catch(error => console.error('Error updating article:', error));
      };

      const handleDeleteArticle = (deletedArticle) => {
        fetch(`http://127.0.0.1:8000/api/articles/${deletedArticle}/`, {
            method: 'DELETE',            
        })
            .then(response => {
                if (response.ok) {
                    setArticles(prevArticles =>
                        prevArticles.filter(article => article.id != deletedArticle)
                    )
                }
            else {throw new Error ('Failed to delete article!')}
            })  
            .catch(error => console.error('Error deleting article:', error))        
      };

    if (loading) return <p>Loading articles...</p>
    if(error) return <p>(error)</p>

    return (
        <article className="article-list">
            <button onClick={() => setShowModal(true)}>Add Article</button>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <NewArticleForm onSubmit={handleAddArticle}/>
            </Modal>

            {editArticle && (
            <Modal show={!!editArticle} onClose={() => setEditArticle(null)}>
                {/* Pass initialData to pre-populate the form for editing */}
                <NewArticleForm onSubmit={handleUpdateArticle} initialData={editArticle} />
            </Modal>
            )}

            {
                articles.map((article) => (
                    <Article 
                        key = {article.id} 
                        id = {article.id}
                        title = {article.title} 
                        // content = {article.content}
                        onEdit = {() => setEditArticle(article)}
                        onDelete = {handleDeleteArticle}
                        imageUrl = {article.imageUrl}
                        readCount={article.readCount}                        
                    />
                ))
            }           
            
        </article>       
    );   
}


export default ArticleList;

