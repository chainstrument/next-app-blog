
import React from 'react';

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return { props : {posts}};

}

const Posts = ({ posts }) => {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        
                        {post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;