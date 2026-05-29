import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import Home from '../pages/Home/Home';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
