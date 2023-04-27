import React from "react";

function Post(props) {
    const { title, num, description, author, published, url, style } = props;

    return (
        <div className="post">
            <div className="box"></div>
            <span>
                <h3>Blog post #{title}</h3>
                <p>
                    <span style={style.bold}>My {num} blog post</span> is all about my{" "}
                    <span style={style.blogPost}>blog post</span>{description}
                    {url && (
                        <>
                            {" "}
                            and how to write a new post in my <br /> blog, you can find it{" "}
                            <a href={url}>here</a>.
                        </>
                    )}
                    <br />
                </p>
                <br />
                <p>Published {published} days ago by {author}</p>
            </span>
        </div>
    );
}

export default Post;