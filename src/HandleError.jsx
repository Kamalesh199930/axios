import axios from "axios";
import React, { useEffect, useState } from "react";
const baseURL = "https://jsonplaceholder.typicode.com/posts";
export default function HandleError() {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get(`${baseURL}/1`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);
    if (error) return `Error: ${error.message}`;
    if (!post) return "No post";
    return (
        <div>
            <p>{post.id}</p>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
