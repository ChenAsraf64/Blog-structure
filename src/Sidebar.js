import React from "react";

function Sidebar(props) {
    const { title, postnum, postnum1, postnum2 } = props;
    return (
        <div>
            <div className="sidebar">
                <h1>{title}</h1>
                <p>Blog post #{postnum} <a href="url"> go to page</a></p>
                <p>Blog post #{postnum1} <a href="url"> go to page</a></p>
                <p>Blog post #{postnum2} <a href="url"> go to page</a></p>
            </div>
        </div>
    );
}

export default Sidebar;