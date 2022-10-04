import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout"
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import NoPage from "../pages/NoPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="logement" element={<Logement />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}