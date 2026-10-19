import { useLocation } from "react-router-dom";
import "./Suporte.css";

const supportSections = {
    "/suporte": {
        title: "Atendimento",
        description: "Entre em contato com nossa equipe para receber ajuda.",
    },
    "/suporte/chamados": {
        title: "Meus chamados",
        description: "Acompanhe suas solicitações de atendimento.",
    },
    "/suporte/solucoes": {
        title: "Base de soluções",
        description: "Encontre respostas e orientações para suas dúvidas.",
    },
};

function Suporte() {
    const { pathname } = useLocation();
    const content = supportSections[pathname] || supportSections["/suporte"];

    return (
        <section className="support-page">
            <div className="support-placeholder">
                <i className="bx bx-help-circle" aria-hidden="true"></i>
                <strong>{content.title}</strong>
                <span>Esta área será preenchida com os recursos de suporte.</span>
            </div>
        </section>
    );
}

export default Suporte;
