import { useNavigate } from "react-router-dom";
import './index.css';

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-800 text-white p-6">
      <h1 className="text-5xl font-bold mb-4">&lt;/&gt; Clipcode</h1>
      <button
        onClick={() => navigate("/create")}
        className="bg-white text-black px-6 py-3 rounded-xl shadow hover:scale-105 transition"
      >
        Create Paste
      </button>
    </div>
  );
}
