import React from "react";
import { useAxios } from "use-axios-client";

export default function App() {
    const { data, error, loading } = useAxios({
        url: "https://jsonplaceholder.typicode.com/posts/1",
    });

    if (loading || !data) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
}
