import { $generateHtmlFromNodes } from "@lexical/html";

export const generateHtml = (object) => {
  const keys = Object.keys(object);
  const htmlString = keys
    .map((key) => {
      if (key === "_editorState") {
        console.log({ key });
        const editor = object;
        console.log("HERE", editor.getEditorState());
        if (editor) {
          let _html = null;

          editor.update(() => {
            _html = $generateHtmlFromNodes(editor, null);
          });

          if (_html === '<p class="editor-paragraph"><br></p>') {
            return null;
          }

          //   return `<p id="generated-${key}"><h3 class="font-bold">${key}</h3>${_html}</div>`;
          return _html;
        } else {
          return null;
        }
      }
    })
    .filter(Boolean)
    .join("<br />");
  console.log(htmlString);
  return { html: htmlString, editor: object };
};
