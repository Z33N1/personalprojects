import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import Create from './pages/Create.jsx';
import ViewPaste from './pages/ViewPaste.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create" element={<Create />} />
      <Route path="/paste/:id" element={<ViewPaste />} />
    </Routes>
  </BrowserRouter>
)
