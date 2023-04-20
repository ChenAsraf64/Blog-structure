import React from "react";

function MyBlog() {
    return (
        <div id="root">
            <title>My blog</title>

            <a href="url">Home</a> | <a href="url">About Me</a> |{" "}
            <a href="url">Contact Me</a>
            <a id="login" href="url">
                Login
            </a>

            <h1>This is my blog</h1>

            <div className="post1">
                <div className="box"></div>
                <span>
                    <h3>Blog post #1</h3>
                    <p>
                        My <span id="bold">first blog post</span> is all about my{" "}
                        <span id="red">blog post</span> and how to write a ne post in my
                        <br /> blog, you can find it <a href="url">here.</a>
                    </p>
                    <br />
                    <p>Published 1 days ago by Israel</p>
                </span>
            </div>

            <br />

            <div className="post2">
                <div className="box"></div>
                <span>
                    <h3>Blog post #2</h3>
                    <p>
                        My <span id="bold">second blog post</span> is all about my blog
                        post.
                    </p>
                    <br />
                    <br />
                    <p>Published 2 days ago by Joe</p>
                </span>
            </div>

            <br />

            <div className="post3">
                <div className="box"></div>
                <span>
                    <h3>Blog post #3</h3>
                    <p>
                        My <span id="bold">third blog post</span> is all about my blog
                        post.
                    </p>
                    <br />
                    <br />
                    <p>Published 3 days ago by Israel</p>
                </span>

                <div className="latest">
                    <h1>Latest</h1>
                    <p>
                        Blog poast #1 <a href="url"> go to page</a>
                    </p>
                    <p>
                        Blog poast #2 <a href="url"> go to page</a>
                    </p>
                    <p>
                        Blog poast #3 <a href="url"> go to page</a>
                    </p>
                </div>

                <div className="line"></div>

                <div className="popular">
                    <h1>Popular</h1>
                    <p>
                        Blog poast #3 <a href="url"> go to page</a>
                    </p>
                    <p>
                        Blog poast #1 <a href="url"> go to page</a>
                    </p>
                    <p>
                        Blog poast #2 <a href="url"> go to page</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyBlog;
