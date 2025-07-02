import { ref, get, db } from "../lib/firebase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

export default function ViewPaste() {
  const { id } = useParams();
  const [paste, setPaste] = useState(null);

  useEffect(() => {
    const fetchPaste = async () => {
      const snap = await get(ref(db, `pastes/${id}`));
      if (!snap.exists()) return setPaste("NOT_FOUND");

      const data = snap.val();
      const age = Date.now() - data.createdAt;
      if (age > 86400000) return setPaste("EXPIRED");

      setPaste(data);
    };

    fetchPaste();
  }, [id]);

  if (paste === "NOT_FOUND") return <p className="text-white p-6">Paste not found.</p>;
  if (paste === "EXPIRED") return <p className="text-white p-6">This paste has expired.</p>;
  if (!paste) return <p className="text-white p-6">Loading paste...</p>;

  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{paste.title}</h1>
      <p className="mb-4 text-sm italic">{paste.comment}</p>
      <Editor height="400px" language={paste.lang} value={paste.code} theme="vs-dark" options={{ readOnly: true }} />
    </div>
  );
}
