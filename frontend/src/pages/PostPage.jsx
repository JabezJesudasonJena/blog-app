import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PostPage = () => {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

    useEffect( () => {
        const fetchPosts = async () => {
            try {
                const respose = await axios.get(`http://localhost:5000/api/posts/${id}`);
                console.log(id)
                setPost(respose.data);
            } catch (error) {
                console.log("Error fetching post : ", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPosts();
    },[id]);

    if (isLoading) {
        return <p>Loading Post...</p>
    }

    if(!post) {
        return <p>Post not found. </p>
    }


    return (
        <article>
            <h1>{post.title}</h1>
            <p>
                {/* Posted on {new Date(new (post.createdAt). toLocalDateString())} */}
            </p>
            <div>
                <p>{post.content}</p>
            </div>
        </article>
    )
}

export default PostPage;