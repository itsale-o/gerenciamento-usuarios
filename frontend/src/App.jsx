import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Clientes from './pages/Clientes/Clientes';
import Produtos from './pages/Produtos/Produtos';
import Configuracao from './pages/Configuracao/Configuracao';
import ClientesForm from './pages/Clientes/ClientesForm';
import ProdutosForm from './pages/Produtos/ProdutosForm';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/clientes/novo" element={<ClientesForm />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/produtos/novo" element={<ProdutosForm />} />
                    <Route path="/configuracoes" element={<Configuracao />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;