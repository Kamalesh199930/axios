import axios from "axios";
import React, { useEffect, useState } from "react";

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default function AxiosInstance() {
    const [post, setPost] = useState(null);
    useEffect(() => {
        client.get("/1").then((response) => {
            setPost(response.data);
        });
    }, []);
    console.log(post);
    function deletePost() {
        client.delete("/1").then(() => {
            alert("post deleted");
            setPost(null);
        });
    }
    if (!post) return "No post!";

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={deletePost}>Delete Post</button>
        </div>
    );
}
