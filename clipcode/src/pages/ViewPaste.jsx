import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { db, ref, get } from "../lib/firebase";

export default function ViewPaste() {
  const { id } = useParams();
  const [paste, setPaste] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchPaste = async () => {
      const snap = await get(ref(db, `pastes/${id}`));
      if (!snap.exists()) return setStatus("not_found");

      const data = snap.val();
      const age = Date.now() - data.createdAt;
      if (age > 86400000) return setStatus("expired");

      setPaste(data);
      setStatus("success");
    };

    fetchPaste();
  }, [id]);

  if (status === "loading") return <p className="text-white p-6">Loading paste...</p>;
  if (status === "not_found") return <p className="text-white p-6">Paste not found.</p>;
  if (status === "expired") return <p className="text-white p-6">This paste has expired.</p>;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 flex flex-col gap-4 items-center">
      <h1 className="text-3xl font-bold">{paste.title}</h1>
      <p className="italic text-sm">{paste.comment}</p>
      <Editor
        height="400px"
        language={paste.lang}
        value={paste.code}
        theme="vs-dark"
        options={{ readOnly: true }}
      />
    </div>
  );
}
