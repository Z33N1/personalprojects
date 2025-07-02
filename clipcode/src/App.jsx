import { useState } from "react";
import CodeEditor from "./components/CodeEditor";

export default function App() {
  const [code, setCode] = useState("// Write some code here");
  const [language, setLanguage] = useState("javascript");

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-800 text-white flex flex-col items-center gap-6 p-8">
      <h1 className="text-4xl font-bold">&lt;/&gt; Clipcode</h1>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="text-black px-4 py-2 rounded-lg"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="html">HTML</option>
        <option value="cpp">C++</option>
        <option value="json">JSON</option>
      </select>

      <CodeEditor code={code} setCode={setCode} language={language} />
    </div>
  );
}
