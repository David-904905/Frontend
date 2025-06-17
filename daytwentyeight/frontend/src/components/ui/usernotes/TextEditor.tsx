// react
import { useEffect } from "react";

// tiptap stuff
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import History from "@tiptap/extension-history";

// css
import "@css/texteditor.css";

// react-icons
import { FaBold } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { MdUndo } from "react-icons/md";
import { MdRedo } from "react-icons/md";

// hooks
import useAuth from "@hooks/useAuth";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Underline,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Color,
      TextStyle,
      BulletList,
      OrderedList,
      ListItem,
      History,
    ],
    content: "<p>Hello, this is a basic Tiptap editor 🚀</p>",
    autofocus: true,
    editable: true,
  });

  if (!editor) {
    return null;
  }

  const { setIsHome } = useAuth();

  useEffect(() => {
    setIsHome(false);
  }, []);

  return (
    <div className="editor-container">
      <div className="editor-toolbar">
        <div className="editor-undo-redo">
          <h3>Shortcuts</h3>
          <div className="undo-redo-editor-buttons">
            {/* Undo / Redo */}
            <button onClick={() => editor.chain().focus().undo().run()}>
              <MdUndo />
            </button>
            <button onClick={() => editor.chain().focus().redo().run()}>
              <MdRedo />
            </button>
          </div>
        </div>
        <div className="editor-font-style">
          <h3>Font Style</h3>
          <div className="editor-font-style-buttons">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is-active" : ""}
            >
              <FaBold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "is-active" : ""}
            >
              <FaItalic />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "is-active" : ""}
            >
              <FaUnderline />
            </button>
            <input
              type="color"
              onInput={(event) =>
                editor
                  .chain()
                  .focus()
                  .setColor((event.target as HTMLInputElement).value)
                  .run()
              }
              title="Text color"
            />
          </div>
        </div>

        <div className="editor-text-section">
          <h3>Text</h3>
          <div className="editor-text-buttons">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 }) ? "is-active" : ""
              }
            >
              H1
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive("heading", { level: 2 }) ? "is-active" : ""
              }
            >
              H2
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={
                editor.isActive("heading", { level: 3 }) ? "is-active" : ""
              }
            >
              H3
            </button>
          </div>
        </div>

        {/* Alignment */}
        <div className="alignment">
          <h3>Alignment</h3>
          <div className="alignment-buttons">
            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
            >
              <FaAlignLeft />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
            >
              <FaAlignCenter />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
            >
              <FaAlignRight />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
            >
              <FaAlignJustify />
            </button>
          </div>
        </div>

        {/* Colors */}

        {/* Lists */}
        <div className="editor-lists">
          <h3>Lists</h3>
          <div className="editor-list-buttons">
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive("bulletList") ? "is-active" : ""}
            >
              <FaList />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive("orderedList") ? "is-active" : ""}
            >
              <FaListOl />
            </button>
          </div>
        </div>
      </div>

      <EditorContent editor={editor} className="editor-content" />
    </div>
  );
};

export default TextEditor;
