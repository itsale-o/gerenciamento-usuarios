const API_URL = "/api";
const KEY_1 = import.meta.env.VITE_KEY1;
const KEY_2 = import.meta.env.VITE_KEY2;
import { generateToken, decodeJWT } from "../utils/jwt";

// Leitura das respostas
async function readResponse (response) {
    const text = await response.text();

    try {
        return JSON.parse(text);
    } catch {
        return text;
    }
}

// Etapa 1 -> KeyDay
export async function getKeyDay() {
    try {
        const token = await generateToken(KEY_1);
        const response = await fetch(`${API_URL}/tkday`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                key: KEY_2
            })
        });

        const responseBody = await response.text();

        if (!response.ok) {
            throw new Error(
                `Erro ao recuperar Key Day: HTTP ${response.status} - ${responseBody}`
            );
        }
        const data = decodeJWT(responseBody);

        if (!data["1"]) {
            throw new Error("Key Day não encontrada na resposta.");
        }

        return data["1"];

    } catch (error) {
        console.error("Erro em getKeyDay:", error);
        throw error;
    }
}

// Etapa 2 -> Gerar tkencry
export async function getTkEncry(KeyDay) {
    const token = await generateToken(KEY_1);

    const body = {
        str: KeyDay
    };

    console.log("KeyDay recebida:", KeyDay);
    console.log("Tipo:", typeof KeyDay);
    console.log("Body enviado:", JSON.stringify(body));

    const response = await fetch(`${API_URL}/tkencry`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
    });

    const responseBody = await response.text();

    console.log("Resposta HTTP:", response.status);
    console.log("Resposta da API:", responseBody);

    if (!response.ok) {
        throw new Error(
            `Erro ao recuperar variante: HTTP ${response.status} - ${responseBody}`
        );
    }

    const data = decodeJWT(responseBody);

    if (!data["1"]) {
        throw new Error("Variante de criptografia não encontrada.");
    }

    return data["1"];
}

export async function initializeEncryption() {
    try {
        const KeyDay = await getKeyDay();
        const TkEncry = await getTkEncry(KeyDay);

        return {
            KeyDay,
            TkEncry
        };
    } catch (error) {
        console.error("Erro ao inicializar a criptografia:", error);
        throw error;
    }
}


export async function login({
    email,
    password,
    ipPublic,
    ipPrivate,
    ipDevice = "0000000000"
}) {
    const keyDay = await getKeyDay();
    const tkencry = await getEncryptionVariant(KeyDay)

    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${keyDay}`
        },
        body: JSON.stringify({
            1: tkencry,
            2: encrypt(email),
            3: encrypt(password),
            4: encrypt(ipPublic),
            5: encrypt(ipPrivate),
            6: encrypt(ipDevice)
        })
    });

    const data = await readResponse(response);

    if (!response.ok) {
        throw new Error(
            typeof data === "string"
                ? data
                : data.message || "Erro ao realizar login."
        );
    }

    return {
        keyUser: data["1"],
        personCode: data["2"],
        name: data["3"],
        device: data["4"],
        birthday: data["5"]
    };
}

