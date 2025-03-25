import { useState } from "react";
import ('./NewArticleForm.css')

function NewArticleForm({ onSubmit, initialData }) {
    const [title, setTitle] = useState(initialData ? initialData.title : "");
    const [content, setContent] = useState(initialData ? initialData.content : "");
    const [imageUrl, setImageUrl] = useState(initialData ? initialData.imageUrl : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        const articleData = {
            title,
            content,
            imageUrl,
          };

        if (initialData && initialData.id) {
          articleData.id = initialData.id
        }

        onSubmit(articleData)
        if (!initialData) {
            setTitle('') // resetinam values
            setContent('')
            setImageUrl('')
        }               
    }

    return (
        <form onSubmit = { handleSubmit }>
            <h2>{initialData ? "Edit Article" : "Create New Article"}</h2>
            <div className = "form-group">
                <label htmlFor = "title">Title:</label>
                <input
                    id = "title" 
                    type = "text" 
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    required 
                 />
            </div>
            <div className="form-group">
                <label htmlFor = "content">Content:</label>
                <input
                    id = "content" 
                    type = "text" 
                    value = {content}
                    onChange = {(e) => setContent(e.target.value)}
                    required 
                 />                
            </div>
            <div className="form-group">
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                    id="imageUrl"
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <button type = "submit">{initialData ? "Update Article" : "Add Article"}</button>
        </form>
    );
}

export default NewArticleForm;