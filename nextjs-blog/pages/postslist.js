
import { useEffect, useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]); 
    const [title, setTitle] = useState('');

    useEffect(() => {

        async function fetchPosts() {
            const res = await fetch('/api/posts');
            const data = await res.json();
       
            setPosts(data);

        }
        
        fetchPosts();
    
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title 
            })
        });
    
        const NewPost = await res.json();
        setPosts([...posts, NewPost]);
        setTitle('');

    }

    return <div>
        <h1>Posts</h1>
            <form onSubmit={handleSubmit}> 
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                />
            </form>

        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2> 
                </li>
            ))}
           
        </ul>

  
    </div>


}
 