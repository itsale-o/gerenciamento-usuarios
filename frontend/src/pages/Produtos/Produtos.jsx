import "./Produtos.css";
import { useState } from "react";
import ListPage from "../../components/ListPage/ListPage";
import ListHeader from "../../components/ListHeader/ListHeader";
import ListToolbar from "../../components/ListToolbar/ListToolbar";
import DataTable from "../../components/DataTable/DataTable";
import Pagination from "../../components/Pagination/Pagination";
import EmptyState from "../../components/EmptyState/EmptyState";

function Produtos() {
    const [currentPage, setCurrentPage] = useState(1);

    function handleAdd() {
        console.log("Adicionar Produto");
    }

    function handleSearch(event) {
        console.log(event.target.value);
    }

    const products = [
        {
            id: 1,
            name: 'Produto',
            tipo: 'Diverso',
            qtde: 150,
        },
        {
            id: 2,
            name: 'Produto 2',
            tipo: 'Limpeza',
            qtde: 295,
        },
        {
            id: 3,
            name: 'Produto 3',
            tipo: 'Eletrônicos',
            qtde: 0,
        }
    ];

    const columns = [
        { key: 'name', label: 'Nome' },
        { key: 'tipo', label: 'Tipo' },
        { key: 'qtde', label: 'Quantidade em Estoque' },
    ];

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    return (
        <ListPage>
            <ListHeader
                title="Produtos"
                description="Gerencie seus produtos cadastrados e cadastre novos produtos"
                addLabel="Novo Produto"
                onAdd={handleAdd}
            />

            <ListToolbar
                searchPlaceholder="Buscar produto..."
                onSearch={handleSearch}
            />

            {products.length > 0 ? (
                <>
                    <DataTable
                        columns={columns}
                        data={products}
                    />

                    <Pagination
                        currentPage={currentPage}
                        totalPages={1}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <EmptyState
                    title="Nenhum produto cadastrado"
                    description="Cadastre seu primeiro produto para começar."
                    icon="bi-box-seam"
                    actionLabel="Novo produto"
                    onAction={handleAdd}
                />
            )}
        </ListPage>
    )
}

export default Produtos;