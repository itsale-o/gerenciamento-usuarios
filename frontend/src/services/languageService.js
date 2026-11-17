const KEY1 = import.meta.env.VITE_KEY1
const JWT_SECRET = `${KEY1}`;
const API_URL = '/api/lang';
import { generateToken, decodeJWT } from '../utils/jwt';

export async function getAvailableLanguages(language = 'BR') {
    const token = await generateToken(JWT_SECRET);
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

    if (!response.ok) {
        throw new Error(
            `Erro ao buscar idiomas: HTTP ${response.status} - ${responseBody}`
        );
    }
    const data = decodeJWT(responseBody);
    return data;
}