import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Contact from "./pages/Platform";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/platform" element={<Platform />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/About" element={<About />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
