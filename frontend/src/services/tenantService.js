const API_URL = "http://localhost:8000";

export async function getTenantByDomain() {
    const domain = window.location.hostname;
    const response = await fetch(
        `${API_URL}/api/tenants/by-domain/${domain}`
    );

    if (!response.ok) {
        throw new Error("Cliente não encontrado.");
    }

    return response.json();
}