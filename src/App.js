import React from "react";
import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";
import HandleError from "./HandleError";
import AxiosInstance from "./AxiosInstance";
import AsyncAwait from "./AsyncAwait";
import UseAxios from "./UseAxios";
function App() {
    return (
        <div>
            <Get />

            <Post />
            <hr />
            <Put />
            <hr />
            <Delete />
            <hr />
            <HandleError />
            <hr />
            <AxiosInstance />
            <hr />
            <AsyncAwait />
            <hr />
            <UseAxios />
            <hr />
        </div>
    );
}
export default App;
