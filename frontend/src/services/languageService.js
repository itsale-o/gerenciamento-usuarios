import { SignJWT } from 'jose';
const KEY1 = import.meta.env.VITE_KEY1
const JWT_SECRET = `${KEY1}`;
const API_URL = '/api/lang';

async function generateToken() {
    const secret = new TextEncoder().encode(JWT_SECRET);

    return await new SignJWT({})
        .setProtectedHeader({
            alg: 'HS256'
        })
        .sign(secret);
}

function decodeJWT(token) {
    const payload = token.split('.')[1];

    if (!payload) {
        throw new Error('Token JWT inválido.');
    }

    const base64 = payload
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const paddedBase64 = base64.padEnd(
        Math.ceil(base64.length / 4) * 4,
        '='
    );

    const decoded = atob(paddedBase64);

    const bytes = Uint8Array.from(
        decoded,
        char => char.charCodeAt(0)
    );

    return JSON.parse(new TextDecoder().decode(bytes));
}


export async function getAvailableLanguages(language = 'BR') {
    const token = await generateToken();
    console.log('JWT gerado pelo React:', token);

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            lang: language
        })
    });

    const responseBody = await response.text();

    console.log('Status:', response.status);
    console.log('Resposta da API:', responseBody);

    if (!response.ok) {
        throw new Error(
            `Erro ao buscar idiomas: HTTP ${response.status} - ${responseBody}`
        );
    }

    const data = decodeJWT(responseBody);

    return data;
}