import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Logement from '../pages/Logement'
import NoPage from '../pages/NoPage'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="logement/:id" element={<Logement />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
