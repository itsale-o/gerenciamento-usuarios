import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Clientes from './pages/Clientes/Clientes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/clientes" element={<Clientes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;