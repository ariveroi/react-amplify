import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = (props) => {
  return (
    <div className="admin-sidebar">
      <ul>
        <li>
          <Link to="/admin/blog">Blog</Link>
        </li>
      </ul>
      <button onClick={props.signOut}>Sign out</button>
    </div>
  );
};

export default Sidebar;
