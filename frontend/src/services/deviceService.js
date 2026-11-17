const PUBLIC_IP_API = import.meta.env.VITE_PUBLIC_IP_API;

export async function getPublicIP() {
    try {
        const response = await fetch(`${PUBLIC_IP_API}`);

        if (!response.ok) {
            throw new Error("Não foi possível consultar o IP público.");
        }

        const data = await response.json();

        return data.ip;
    } catch (error) {
        console.error("Erro ao recuperar IP público:", error);
        return null;
    }
}

export function getPrivateIP() {
    // Não é possível obter diretamente pelo navegador.
    return null;
}

export function getDeviceID() {
    try {
        let deviceID = localStorage.getItem("device_id");

        if (!deviceID) {
            deviceID = crypto.randomUUID();
            localStorage.setItem("device_id", deviceID);
        }

        return deviceID;
    } catch (error) {
        console.error("Erro ao recuperar identificador do dispositivo:", error);
        return null;
    }
}

export async function getDeviceInfo() {
    const publicIP = await getPublicIP();

    return {
        publicIP,
        privateIP: publicIP,
        deviceID: getDeviceID()
    };
}