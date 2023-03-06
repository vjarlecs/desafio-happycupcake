import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
