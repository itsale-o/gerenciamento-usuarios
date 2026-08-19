import { useState } from "react";

import Form from "../../components/Form/Form";
import FormField from "../../components/Form/FormField";

function ClientesForm() {
    const [form, setForm] = useState({
        nome: "",
        documento: "",
        telefone: "",
        email: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    function handleSubmit() {
        event.preventDefault();
        console.log(form);
    }

    return (
        <Form title="Cadastrar cliente" onSubmit={handleSubmit}>
            <div className="form-group">
                <FormField
                    label="Nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Nome"
                    required
                />

                <FormField
                    label="CPF/CNPJ"
                    name="nome"
                    value={form.documento}
                    onChange={handleChange}
                    placeholder="CPF/CNPJ"
                    required
                />
            </div>
            
        </Form>
    )
}

export default ClientesForm;