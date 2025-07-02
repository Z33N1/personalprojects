import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Create from "./pages/Create.jsx";
import ViewPaste from "./pages/ViewPaste.jsx"; // 👈 Add this

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
        <Route path="/paste/:id" element={<ViewPaste />} /> {/* 👈 ADD THIS */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
