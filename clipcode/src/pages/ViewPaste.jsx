import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

export default function ViewPaste() {
  const { id } = useParams();
  const [paste, setPaste] = useState(null);

  useEffect(() => {
    fetch(`/api/load?id=${id}`)
      .then(res => res.json())
      .then(setPaste);
  }, [id]);

  if (!paste) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{paste.title}</h1>
      <p className="mb-4 text-sm italic">{paste.comment}</p>
      <Editor height="400px" language={paste.lang} value={paste.code} options={{ readOnly: true }} theme="vs-dark" />
    </div>
  );
}
