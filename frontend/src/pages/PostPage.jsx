import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostPage = () => {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    const navigate = useNavigate();

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

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${id}`);
            console.log("Deleted : " + id);
            navigate('/allposts')
        }
        catch (error) {
            console.log("The error Appeared : " + error );
        }
    }

    if (isLoading) {
        return <p>Loading Post...</p>
    }

    if(!post) {
        return <p>Post not found. </p>
    }


    return (
        <article className="flex flex-col justify-center items-center ">
            <h1>{post.title}</h1>
            <p>
                {/* Posted on {new Date(new (post.createdAt). toLocalDateString())} */}
            </p>
            <div>
                <p>{post.content}</p>
                <button className="w-[100px] h-[40px] border-[2px] m-t-[10px] cursor-pointer mt-[10px]  font-bold " onClick={handleDelete}>Delete Post</button>
                
                <Link 
                className="w-[200px] h-[40px] border-[2px] m-t-[10px] cursor-pointer mt-[10px]  font-bold "
                to={`/editpost/${post.id}`}>
                    Edit
                </Link>
            </div>
        </article>
    )
}

export default PostPage;