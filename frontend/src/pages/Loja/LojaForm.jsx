import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import Form from "../../components/Form/Form";
import FormField from "../../components/Form/FormField";

function LojaForm() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const selectedProduct = state?.product;
    const [form, setForm] = useState({
        nome: selectedProduct?.name || "",
        valorContratacao: selectedProduct?.setupPrice || "",
        mensalidade: selectedProduct?.monthlyPrice || "",
    });

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
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        >
            <div className="form-group">
                <FormField
                    label="Nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Nome do produto"
                    required
                    colSpan={6}
                />

                <FormField
                    label="Valor de contratação"
                    name="valorContratacao"
                    type="text"
                    value={form.valorContratacao}
                    onChange={handleChange}
                    placeholder="R$ 0,00"
                    required
                    colSpan={3}
                />

                <FormField
                    label="Mensalidade"
                    name="mensalidade"
                    type="text"
                    value={form.mensalidade}
                    onChange={handleChange}
                    placeholder="R$ 0,00"
                    required
                    colSpan={3}
                />
            </div>
        </Form>
    )
}

export default LojaForm;