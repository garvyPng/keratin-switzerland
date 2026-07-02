import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import { useSEO } from '../shared/hooks/useSEO';

export default function AppLayout() {
    const { lang } = useParams();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (!lang) return;

        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }

        document.documentElement.lang = lang;
    }, [lang]);

    useSEO((lang as 'en' | 'de' | 'ru') || 'en');

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
