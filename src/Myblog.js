import React from "react";
import Header from "./Header.js";
import Post from "./Post.js";
import Sidebar from "./Sidebar.js";

function MyBlog() {
    const posts = [
        {
            id: 1,
            title: "1",
            num: "first",
            author: "Israel",
            published: 1,
            url: "url1",
            style: {
                bold: {
                    fontWeight: "bold",
                },
                blogPost: {
                    color: "red",
                },
            },
        },
        {
            id: 2,
            title: "2",
            num: "second",
            description: ".",
            author: "Joe",
            published: 2,
            style: {
                bold: {
                    fontWeight: "bold",
                },
                blogPost: {
                    color: "black",
                },
            },
        },
        {
            id: 3,
            title: "3",
            num: "third",
            description: ".",
            author: "Israel",
            published: 3,
            style: {
                bold: {
                    fontWeight: "bold",
                },
                blogPost: {
                    color: "black",
                },
            },
        },
    ];

    const sides = [
        {
            id: 1,
            title: "Latest",
            postnum: "1",
            postnum1: "2",
            postnum2: "3",
        },
        {
            id: 2,
            title: "Popular",
            postnum: "3",
            postnum1: "2",
            postnum2: "1",
        },
    ];


    return (
        <div id="root">
            <title>My blog</title>
            <Header />
            <h1>This is my blog</h1>

            <div>
                {posts.map((post) => (
                    <Post key={post.id} {...post} />
                ))}
            </div>

            <div id="latest-sidebar"><Sidebar title={sides[0].title} postnum={sides[0].postnum} postnum1={sides[0].postnum1} postnum2={sides[0].postnum2} /></div>


            <div className="line"></div>

            <div id="popular-sidebar"><Sidebar title={sides[1].title} postnum={sides[1].postnum} postnum1={sides[1].postnum1} postnum2={sides[1].postnum2} /></div>


        </div>

    );
}

export default MyBlog;
