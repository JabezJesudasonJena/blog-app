import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const PostList = () => {
    
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const respose = await axios.get("http://localhost:5000/api/posts")
                setPosts(respose.data);
                console.log(respose.data)
            } catch (error) {
                console.log("Error Fetching some data ! " + error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchPosts();
    }, []);

    if (isLoading) {
        return (
            <div>
                <h1>Is Loading</h1>
            </div>
        )
    }
    

    return (
        <div className="container mx-auto p-4 flex justify-center flex-col items-center">  
            <h1 className="font-bold text-sky-300">Blog Posts</h1>
            <div >
                {posts.map( post => (
                    <div key={post.id}>
                        <Link to={`/allposts/${post._id}`}>
                            <h2>{post.title}</h2>
                            <h2>{console.log(post._id)}</h2>
                        </Link>
                        <h2>{post.content}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostList;