import './Article.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'



function Article({ id, title, content, imageUrl, onEdit, onDelete, readCount}) {
   
    const [likecount, setLikeCount] = useState(0);    
    const [articleStyle, setArticleStyle] = useState({backgroundColor: 'none'})

    const handleArtickleClickLike = () => {        
        setLikeCount(prevLikeCount => prevLikeCount + 1);
        setArticleStyle({backgroundColor: 'lightgreen'});
    };

    const handleArtickleClickUnlike = () => {        
        setArticleStyle({backgroundColor: 'coral'})
    };

    return (
        <article 
            className="article"            
            style={articleStyle}
        >
            {imageUrl && <img className='article-image' src={imageUrl} alt={title} />}
            <h3>{title}</h3>
            <p>{content}</p>            
            <p className='info-article-format'>Likes: {likecount}</p>
            <p className='info-article-format'>This article was read {readCount} times.</p>
            <button onClick={handleArtickleClickLike}>Like!</button>
            <button onClick={handleArtickleClickUnlike}>Unlike!</button>
            <button onClick={() => onDelete(id)}>Delete</button>
            {onEdit && <button onClick={onEdit}>Edit</button>}
            <button><Link to={`/articles/${id}`}>Read more</Link></button>
            
        </article>
    )
}

export default Article


