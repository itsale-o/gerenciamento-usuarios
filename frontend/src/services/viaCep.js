export async function buscarCep(cep) {
    const response = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
    );

    const data = await response.json();

    if (data.erro) {
        throw new Error("CEP não encontrado");
    }

    return data;
}