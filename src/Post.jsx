import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Post() {
    const baseURl = "https://jsonplaceholder.typicode.com/posts";
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(`${baseURl}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);
    function newAdding() {
        axios
            .post(baseURl, {
                title: "Hello World",
                body: "This is new",
            })
            .then((response) => {
                setPost(response.data);
            });
    }
    if (!post) return "no post";
    return (
        <div>
            {post.id}
            {post.title}
            {post.body}
            <button onClick={newAdding}>Create new</button>
        </div>
    );
}
