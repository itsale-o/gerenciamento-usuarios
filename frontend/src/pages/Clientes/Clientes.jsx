import './Clientes.css';
import ListPage from "../../components/ListPage/ListPage";
import ListHeader from '../../components/ListHeader/ListHeader';
import ListToolbar from '../../components/ListToolbar/ListToolbar';

function Clientes() {
    function handleAdd() {
        console.log("Adicionar Cliente");
    }

    function handleSearch(event) {
        console.log(event.target.value);
    }

    return (
        <ListPage>
            <ListHeader
                title="Clientes"
                description="Gerencie os clientes cadastrados e cadastre novos clientes"
                addLabel="Novo Cliente"
                onAdd={handleAdd}
            />

            <ListToolbar
                searchPlaceholder="Buscar cliente..."
                onSearch={handleSearch}
            />
        </ListPage>
    )
}

export default Clientes;