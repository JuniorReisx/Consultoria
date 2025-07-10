import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/home'
import { FormularioNegocioPage } from '../pages/Form/Form1'


export function Approuter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Form1" element={<FormularioNegocioPage />} />
            </Routes>
        </Router>
    )
}