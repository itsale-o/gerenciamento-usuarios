import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Painel from './pages/Painel/Painel';
import Login from './pages/Login/Login';
import Loja from './pages/Loja/Loja';
import LojaForm from './pages/Loja/LojaForm';
import Suporte from './pages/Suporte/Suporte';
import Gestor from './pages/Gestor/Gestor';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<Painel />} />
                    <Route path="/produtos" element={<Loja />} />
                    <Route path="/produtos/novo" element={<LojaForm />} />
                    <Route path="/suporte/*" element={<Suporte />} />
                    <Route path="/gestor/*" element={<Gestor />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;