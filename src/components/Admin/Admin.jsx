import React from "react";
import { Amplify } from "aws-amplify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsmobile from "../../aws-exports";
import Sidebar from "./Sidebar/Sidebar";
import AdminBlog from "./Blog/AdminBlog";
import TextEditor from "./Blog/Editor/TextEditor";
Amplify.configure(awsmobile);

const Admin = ({ signOut, user }) => {
  return (
    <>
      <Sidebar signOut={signOut} />
      <Routes>
        <Route exact path="/blog" element={<AdminBlog />} />
        <Route exact path="/new/blog" element={<TextEditor />} />
      </Routes>
    </>
  );
};

export default withAuthenticator(Admin);
