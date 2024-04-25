import axios from "axios";
import React, { useEffect, useState } from "react";
const baseURl = "https://jsonplaceholder.typicode.com/posts";
export default function Put() {
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(`${baseURl}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);
    function updateList() {
        axios
            .put(`${baseURl}/2`, {
                title: "Hello World",
                body: "This is a updated post",
            })
            .then((response) => {
                setPost(response.data);
            });
    }
    if (!post) return "no update";
    return (
        <div>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
            <p>{post.id}</p>
            <button onClick={updateList}>Update</button>
        </div>
    );
}
