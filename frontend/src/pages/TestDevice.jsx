import { useEffect } from "react";
import { getDeviceInfo } from "../services/deviceService";

function TestDevice() {

    useEffect(() => {
        async function loadDevice() {
            const device = await getDeviceInfo();

            console.log("Informações do dispositivo:", device);
        }

        loadDevice();
    }, []);

    return (
        <div>
            Teste de identificação do dispositivo
        </div>
    );
}

export default TestDevice;