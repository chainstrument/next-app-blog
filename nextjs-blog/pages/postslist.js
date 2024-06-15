
import { useEffect, useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]); 

    useEffect(() => {

        async function fetchPosts() {
            const res = await fetch('/api/posts');
            const data = await res.json();
        }
        
        setPosts(data);

        fetchPosts();
    
    }, [])

    return 
    <div>
        <h1>Posts</h1>

        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2> 
                </li>
            ))}
        </ul>


    </div>


}