import React, { useState } from "react";
import TextEditor from "./Editor/TextEditor";
const EditBlog = ({ html, editorConfig, showHtml, editor }) => {
  const [edit, setEdit] = useState(false);
  const [newEditConfig, setNewEditConfig] = useState(editor);
  const handleEdit = () => {
    setEdit(true);
    setNewEditConfig({
      ...editor,
      editorState: editorConfig.getEditorState(),
    });
  };
  return (
    <>
      {edit ? (
        <TextEditor
          showHtml={showHtml}
          editorConfig={newEditConfig}
          edit={true}
        />
      ) : (
        <div className="blog-post-container">
          <div
            className="blog-post"
            dangerouslySetInnerHTML={{ __html: html }}
            style={{ textAlign: "left" }}
          />
          <button onClick={handleEdit} className="edit-blog-button">
            Edit
          </button>
        </div>
      )}
    </>
  );
};

export default EditBlog;
