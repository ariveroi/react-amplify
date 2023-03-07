import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin/Admin";
import AdminBlog from "./Admin/Blog/AdminBlog";
import Content from "./Content/Content";

function App({ signOut, user }) {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin/*" element={<Admin />} />

        <Route path="/" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;
