import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Get() {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    });
    const firstTen = post.slice(0, 10);

    if (!post) return null;
    return (
        <div>
            {firstTen.map((posts) => (
                <div key={posts.id}>
                    <h1>{posts.title}</h1>
                    <p>{posts.id}</p>
                    <p>{posts.body}</p>
                </div>
            ))}
        </div>
    );
}
