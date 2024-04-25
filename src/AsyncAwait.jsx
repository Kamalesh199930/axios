import React, { useEffect, useState } from "react";
import axios from "axios";
const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default function AsyncAwait() {
    const [post, setPost] = useState(null);
    useEffect(() => {
        async function getPost() {
            const response = await client.get("/1");
            setPost(response.data);
        }
        getPost();
    }, []);
    async function deletePost() {
        await client.delete("/1");
        alert("Post deleted");
        setPost(null);
    }
    if (!post) return "No Post";
    return (
        <div>
            <h1>{post.delete}</h1>
            <p>{post.body}</p>
            <button onClick={deletePost}>Delete</button>
        </div>
    );
}
