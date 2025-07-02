import { useState } from "react";
import Editor from "@monaco-editor/react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { db, ref, set } from "../lib/firebase";

export default function Create() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [code, setCode] = useState("// Start typing...");
  const [lang, setLang] = useState("javascript");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const id = nanoid(8);
    const timestamp = Date.now();
    await set(ref(db, `pastes/${id}`), {
      title,
      comment,
      code,
      lang,
      createdAt: timestamp,
    });
    navigate(`/paste/${id}`);
  };

  return (
    <div className="p-6 text-white flex flex-col gap-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Create a Paste</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="p-2 rounded text-black"
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comment"
        className="p-2 rounded text-black"
      />
      <Editor
        height="300px"
        language={lang}
        value={code}
        onChange={setCode}
        theme="vs-dark"
      />
      <button
        onClick={handleSubmit}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}
