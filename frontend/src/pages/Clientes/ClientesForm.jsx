import { useState } from "react";

import Form from "../../components/Form/Form";
import FormField from "../../components/Form/FormField";
import "./ClientesForm.css";

function ClientesForm() {
    const [form, setForm] = useState({
        nome: "",
        documento: "",
        telefone: "",
        email: "",
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    function handleSubmit(event) {
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
                    colSpan={8}
                />

                <FormField
                    label="CPF/CNPJ"
                    name="documento"
                    value={form.documento}
                    onChange={handleChange}
                    placeholder="CPF/CNPJ"
                    required
                    colSpan={4}
                />

                <FormField
                    label="Telefone"
                    name="documento"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="Telefone"
                    required
                    colSpan={6}
                />

                <FormField
                    label="E-mail"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    required
                    colSpan={6}
                />
            </div>

            <div className="divider"></div>

            <div className="form-group">
                <FormField
                    label="CEP"
                    name="cep"
                    value={form.cep}
                    onChange={handleChange}
                    placeholder="CEP"
                    required
                    colSpan={3}
                />

                <FormField
                    label="Logradouro"
                    name="logradouro"
                    value={form.logradouro}
                    onChange={handleChange}
                    placeholder="Logradouro"
                    required
                    colSpan={9}
                />

                <FormField
                    label="Bairro"
                    name="bairro"
                    value={form.bairro}
                    onChange={handleChange}
                    placeholder="Bairro"
                    required
                />

                <FormField
                    label="Cidade"
                    name="cidade"
                    value={form.cidade}
                    onChange={handleChange}
                    placeholder="Cidade"
                    required
                    colSpan={10}
                />
                <FormField
                    label="Estado"
                    name="estado"
                    type="select"
                    value={form.estado}
                    onChange={handleChange}
                    placeholder="UF"
                    required
                    colSpan={2}
                    options={[
                        { value: "AC", label: "AC" },
                        { value: "AL", label: "AL" },
                        { value: "AP", label: "AP" },
                        { value: "AM", label: "AM" },
                        { value: "BA", label: "BA" },
                        { value: "CE", label: "CE" },
                        { value: "DF", label: "DF" },
                        { value: "ES", label: "ES" },
                        { value: "GO", label: "GO" },
                        { value: "MA", label: "MA" },
                        { value: "MT", label: "MT" },
                        { value: "MS", label: "MS" },
                        { value: "MG", label: "MG" },
                        { value: "PA", label: "PA" },
                        { value: "PB", label: "PB" },
                        { value: "PR", label: "PR" },
                        { value: "PE", label: "PE" },
                        { value: "PI", label: "PI" },
                        { value: "RJ", label: "RJ" },
                        { value: "RN", label: "RN" },
                        { value: "RS", label: "RS" },
                        { value: "RO", label: "RO" },
                        { value: "RR", label: "RR" },
                        { value: "SC", label: "SC" },
                        { value: "SP", label: "SP" },
                        { value: "SE", label: "SE" },
                        { value: "TO", label: "TO" },
                    ]}
                />

                <FormField
                    label="Estado"
                    name="estado"
                    value={form.cidade}
                    onChange={handleChange}
                    placeholder="Cidade"
                    required
                    colSpan={10}
                />
            </div>
            

                
            {/* <div className="form-group">
                
            </div> */}
            
        </Form>
    )
}

export default ClientesForm;