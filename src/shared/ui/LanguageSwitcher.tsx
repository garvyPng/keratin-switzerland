import { useNavigate, useParams } from 'react-router-dom';

export default function LanguageSwitcher() {
    console.log('SWITCHER RENDERED');
    const navigate = useNavigate();
    const { lang } = useParams();

    const changeLang = (newLang: string) => {
        console.log('LANG:', lang);
        if (!newLang || newLang === lang) return;
        navigate(`/${newLang}`, { replace: false });
    };

    return (
        <div>
            <button onClick={() => changeLang('en')}>EN</button>
            <button onClick={() => changeLang('de')}>DE</button>
            <button onClick={() => changeLang('ru')}>RU</button>
        </div>
    );
}
