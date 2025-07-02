import { useState } from "react";
import Editor from "@monaco-editor/react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { db, ref, set } from "../lib/firebase"; // Make sure this works in your Firebase setup

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
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-800 flex items-center justify-center text-white px-4 py-10">
      <div className="w-full max-w-5xl bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6">
        <h1 className="text-4xl font-extrabold text-center mb-4">&lt;/&gt; Create Paste</h1>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full px-4 py-3 rounded-lg text-black text-lg shadow-inner outline-none"
        />

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment (optional)"
          className="w-full px-4 py-3 rounded-lg text-black text-lg shadow-inner outline-none resize-none"
          rows={3}
        />

        <div className="border border-white/20 rounded-lg overflow-hidden">
          <Editor
            height="300px"
            language={lang}
            value={code}
            onChange={(val) => setCode(val)}
            theme="vs-dark"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="lang" className="font-semibold">
              Language:
            </label>
            <select
              id="lang"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="text-black px-3 py-2 rounded-lg shadow"
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="json">JSON</option>
              <option value="markdown">Markdown</option>
            </select>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow hover:scale-105 transition"
          >
            Submit Paste
          </button>
        </div>
      </div>
    </div>
  );
}
