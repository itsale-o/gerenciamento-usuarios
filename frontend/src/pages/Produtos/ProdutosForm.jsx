import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Form from "../../components/Form/Form";
import FormField from "../../components/Form/FormField";

function ProdutosForm() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        codigo: "",
        nome: "",
        descricao: "",
    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log(form);
    }

    function handleCancel() {
        navigate('/produtos');
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <Form 
            title="Cadastrar produto" 
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        >
            <div className="form-group">
                <FormField
                    label="Código"
                    name="codigo"
                    value={form.codigo}
                    onChange={handleChange}
                    placeholder="Código"
                    required
                    colSpan={4}
                />

                <FormField
                    label="Nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Nome"
                    required
                    colSpan={8}
                />
            </div>

            <div className="form-group">
                <FormField
                    type="textarea"
                    label="Descrição"
                    name="descricao"
                    value={form.descricao}
                    onChange={handleChange}
                    placeholder="Descrição"
                    rows={6}
                    required
                />
            </div>
        </Form>
    )
}

export default ProdutosForm;