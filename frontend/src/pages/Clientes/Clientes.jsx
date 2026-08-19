import './Clientes.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ListPage from "../../components/ListPage/ListPage";
import ListHeader from '../../components/ListHeader/ListHeader';
import ListToolbar from '../../components/ListToolbar/ListToolbar';
import DataTable from '../../components/DataTable/DataTable';
import Pagination from '../../components/Pagination/Pagination';
import EmptyState from '../../components/EmptyState/EmptyState';

function Clientes() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    function handleAdd() {
        navigate('/clientes/novo');
    }

    function handleSearch(event) {
        console.log(event.target.value);
    }

    const clients = [
        // {
        //     id: 1,
        //     name: 'João da Silva',
        //     document: '123.456.789-00',
        //     phone: '(12) 99999-9999',
        //     status: 'Ativo'
        // },
        // {
        //     id: 2,
        //     name: 'Maria Oliveira',
        //     document: '987.654.321-00',
        //     phone: '(12) 98888-8888',
        //     status: 'Ativo'
        // },
        // {
        //     id: 3,
        //     name: 'Pedro Santos',
        //     document: '456.789.123-00',
        //     phone: '(12) 97777-7777',
        //     status: 'Inativo'
        // }
    ];

    const columns = [
        { key: 'name', label: 'Nome' },
        { key: 'document', label: 'CPF/CNPJ' },
        { key: 'phone', label: 'Telefone' },
        { key: 'status', label: 'Status' }
    ];

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    return (
        <ListPage>
            <ListHeader
                title="Clientes"
                description="Gerencie os clientes cadastrados e cadastre novos clientes"
                addLabel="Novo Cliente"
                onClick={handleAdd}
            />

            <ListToolbar
                searchPlaceholder="Buscar cliente..."
                onSearch={handleSearch}
            />

            {clients.length > 0 ? (
                <>
                    <DataTable
                        columns={columns}
                        data={clients}
                    />

                    <Pagination
                        currentPage={currentPage}
                        totalPages={1}
                        onPageChange={handlePageChange}
                    />
                </>
                
            ) : (
                <EmptyState
                    title="Nenhum cliente cadastrado"
                    description="Cadastre seu primeiro cliente para começar."
                    icon={<i className="bi bi-people"></i>}
                    actionLabel="Novo cliente"
                    onClick={handleAdd}
                />
            )}
        </ListPage>
    )
}

export default Clientes;