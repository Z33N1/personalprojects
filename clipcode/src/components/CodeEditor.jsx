import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode, language }) {
  return (
    <div className="w-full max-w-4xl rounded-xl shadow-lg overflow-hidden border border-white/10">
      <Editor
        height="400px"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={setCode}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          wordWrap: "on",
        }}
      />
    </div>
  );
}
