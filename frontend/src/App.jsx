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