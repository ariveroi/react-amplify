import React, { useEffect, useState, createRef } from "react";

import Content from "../../Content/Content";
import TextEditor from "./Editor/TextEditor";

import "./style.css";
import EditBlog from "./EditBlog";
import { Link } from "react-router-dom";

const AdminBlog = () => {
  const [html, setHtml] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("rendering");
  }, []);

  const handleSave = (html) => {
    console.log(html);
    setBlogs((oldArray) => [html, ...oldArray]);
  };

  return (
    <Content>
      <h1>Admin Blog</h1>
      <Link to="/admin/new/blog">New Blog</Link>
      <div className="new-blog-post">
        {/* <input
          onChange={(e) => setBlogTitle(e.target.value)}
          value={blogTitle}
          type="text"
          name="title"
          id="new-blog-title"
        />
        <textarea
          onChange={(e) => setBlogContent(e.target.value)}
          value={blogContent}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
         */}
        {/* <TextEditor showHtml={handleSave} editorConfig={editorConfig} /> */}
      </div>
      <div className="spacer"></div>
      <div className="blog-posts">
        <h2>Exisiting blog posts</h2>
        {/* {blogs.map((blog, idx) => (
          <div></div>
        ))} */}
      </div>
    </Content>
  );
};

export default AdminBlog;
