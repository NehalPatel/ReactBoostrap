import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";

function App() {
  return (
    <div>
      <div className="container py-3">
        <BrowserRouter>
          <Header name="SDJIC" />
          <main>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About name="SDJIC" />} />
              <Route path="contact" element={<Contact />} />
              <Route path="demo" element={<Demo />} />
            </Routes>

          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
