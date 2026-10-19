import { useLocation } from "react-router-dom";
import "./Gestor.css";

const sectionTitles = {
    "/gestor": {
        title: "Monitor",
        description: "Acompanhe os principais indicadores da operação.",
    },
    "/gestor/pessoas": {
        title: "Pessoas",
        description: "Consulte e gerencie as pessoas da plataforma.",
    },
    "/gestor/sistemas": {
        title: "Sistemas",
        description: "Gerencie os sistemas e integrações disponíveis.",
    },
    "/gestor/financeiro": {
        title: "Financeiro",
        description: "Acompanhe informações financeiras e movimentações.",
    },
    "/gestor/administrar": {
        title: "Administrar",
        description: "Configure permissões e parâmetros de gestão.",
    },
};

function Gestor() {
    const { pathname } = useLocation();
    const content = sectionTitles[pathname] || sectionTitles["/gestor"];

    return (
        <section className="manager-page">
            <div className="manager-placeholder">
                <i className="bx bx-bar-chart-alt-2" aria-hidden="true"></i>
                <strong>{content.title}</strong>
                <span>Esta área será preenchida com os recursos de gestão.</span>
            </div>
        </section>
    );
}

export default Gestor;
