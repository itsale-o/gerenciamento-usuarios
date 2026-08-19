import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Clientes from './pages/Clientes/Clientes';
import Produtos from './pages/Produtos/Produtos';
import Configuracao from './pages/Configuracao/Configuracao';
import ClientesForm from './pages/Clientes/ClientesForm';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/configuracoes" element={<Configuracao />} />
                    <Route path="/clientes/novo" element={<ClientesForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;