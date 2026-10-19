import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Faturas from './pages/Faturas/Faturas';
import Clientes from './pages/Clientes/Clientes';
import Produtos from './pages/Produtos/Produtos';
import Configuracao from './pages/Configuracao/Configuracao';
import ClientesForm from './pages/Clientes/ClientesForm';
import ProdutosForm from './pages/Produtos/ProdutosForm';
import ERP from './pages/ERP/Erp';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/faturas" element={<Faturas />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/clientes/novo" element={<ClientesForm />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/produtos/novo" element={<ProdutosForm />} />
                    <Route path="/configuracoes" element={<Configuracao />} />
                    <Route path="/erp" element={<ERP />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

// import { useEffect, useState } from "react";
// import { getTenantByDomain } from "./services/tenantService";

// function App() {
//     const [tenant, setTenant] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         getTenantByDomain()
//             .then(setTenant)
//             .catch((err) => setError(err.message));
//     }, []);

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!tenant) {
//         return <div>Carregando...</div>;
//     }

//     return (
//         <div>
//             <h1>{tenant.name}</h1>
//             <p>ID: {tenant.id}</p>
//             <p>Domínio: {tenant.domain}</p>
//             <p>Logo: {tenant.logo}</p>
//         </div>
//     );
// }

// export default App;