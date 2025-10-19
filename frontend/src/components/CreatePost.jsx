import { useState } from "react";
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !content) {
            alert("Both the title and the content is required ! ")
            return ;
        }

        try {
            const newPost = {title, content};
            await axios.post('http://localhost:5000/api/posts', newPost);

            alert('Post Created Succesfully ! ');
            console.log(newPost)
            setTitle('');
            setContent('');
        } catch (error) {
            console.log("There was some error posting the Create Post ! ", error);
            alert("CreatePost failed ! ");
        }
    } 

    return (
        <div> 
            <h2>Create a New Post ! </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" >Title</label>
                    <input 
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea 
                        name="content" 
                        value={content}
                        id="content"
                        type="text"
                        rows={5}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                >
                    Create Post
                </button>
            </form>
        </div>
    )
}


export default CreatePost ;