import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import Home from '../pages/Home/Home';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/en' replace />} />

                <Route path='/:lang' element={<AppLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
