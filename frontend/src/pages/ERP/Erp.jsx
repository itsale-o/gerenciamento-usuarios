import "./Erp.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ListPage from "../../components/ListPage/ListPage";
import ListHeader from '../../components/ListHeader/ListHeader';
import ListToolbar from '../../components/ListToolbar/ListToolbar';
import DataTable from '../../components/DataTable/DataTable';
import Pagination from '../../components/Pagination/Pagination';
import EmptyState from '../../components/EmptyState/EmptyState';



function ERP() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    function handleAdd() {
        navigate('/clientes/novo');
    }

    function handleSearch(event) {
        console.log(event.target.value);
    }

    function handlePageChange(page) {
        setCurrentPage(page);
    }
    
    const data = [
        {
            id: 1,
            name: 'João da Silva',
            document: '123.456.789-00',
            phone: '(12) 99999-9999',
            status: 'Ativo',
            grupo: "F001 / E003", 
            fantasia: "João",
            email: "joao@email.com"
        },
        {
            id: 2,
            name: 'Maria Oliveira',
            document: '987.654.321-00',
            phone: '(12) 98888-8888',
            status: 'Ativo',
            grupo: "F001 / E002",
            fantasia: "Maria",
            email: "maria@email.com"
        },
        {
            id: 3,
            name: 'Pedro Santos',
            document: '456.789.123-00',
            phone: '(12) 97777-7777',
            status: 'Inativo',
            grupo: "F001 / E001",
            fantasia: "Pedro",
            email: "pedro@email.com"
        }
    ];

    const columns = [
        { key: 'status', label: 'Status' },
        { key: "grupo", label: "Grupo"},
        { key: 'document', label: 'CPF/CNPJ' },
        { key: 'name', label: 'Razão/Nome' },
        { key: 'fantasia', label: 'Fantasia/Apelido' },
        { key: 'phone', label: 'Telefone' },
        { key: 'email', label: 'E-mail' },
    ];

    return (
        <ListPage>
            <ListHeader
                title="ERP"
                addLabel="Novo Cliente"
                onClick={handleAdd}
            />

            <ListToolbar
                searchPlaceholder="Busque Aqui..."
                onSearch={handleSearch}
            />

            {data.length > 0 ? (
                <>
                    <DataTable
                        columns={columns}
                        data={data}
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

export default ERP