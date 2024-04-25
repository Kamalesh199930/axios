import React, { useEffect, useState } from "react";
import axios from "axios";
const baseURl = "https://jsonplaceholder.typicode.com/posts";
export default function Delete() {
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(`${baseURl}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function deletePost() {
        axios.delete(`${baseURl}/1`).then(() => {
            alert("post deleted");
            setPost(null);
        });
    }
    if (!post) return "Deleted...";
    return (
        <div>
            {post.title}
            {post.body}
            <button onClick={deletePost}>Delete</button>
        </div>
    );
}
