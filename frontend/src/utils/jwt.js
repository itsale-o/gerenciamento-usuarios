
import { SignJWT } from "jose";

export async function generateToken(secretKey) {
    const secret = new TextEncoder().encode(secretKey);

    return await new SignJWT({})
        .setProtectedHeader({
            alg: "HS256"
        })
        .sign(secret);
}

export function decodeJWT(token) {
    const payload = token.split(".")[1];

    if (!payload) {
        throw new Error("Token JWT inválido.");
    }

    const base64 = payload
        .replace(/-/g, "+")
        .replace(/_/g, "/");

    const paddedBase64 = base64.padEnd(
        Math.ceil(base64.length / 4) * 4,
        "="
    );

    const decoded = atob(paddedBase64);

    const bytes = Uint8Array.from(
        decoded,
        char => char.charCodeAt(0)
    );

    return JSON.parse(new TextDecoder().decode(bytes));
}
