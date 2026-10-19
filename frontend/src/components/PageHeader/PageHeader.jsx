import { NavLink, useLocation } from "react-router-dom";
import "./PageHeader.css";

const pages = [
    { match: "/dashboard", section: "Painel", title: "Boas-vindas, Usuário!", description: "Facilite sua rotina centralizando tudo no mesmo lugar.", path: "/dashboard" },
    { match: "/produtos/novo", section: "Loja", title: "Cadastrar produto", description: "Confira os dados do produto antes de confirmar o cadastro.", path: "/produtos/novo" },
    { match: "/produtos", section: "Loja", title: "Loja", description: "Escolha as soluções que sua empresa precisa.", path: "/produtos" },
    { match: "/suporte/chamados", section: "Suporte", title: "Meus chamados", description: "Acompanhe suas solicitações de atendimento.", path: "/suporte/chamados" },
    { match: "/suporte/solucoes", section: "Suporte", title: "Base de soluções", description: "Encontre respostas e orientações para suas dúvidas.", path: "/suporte/solucoes" },
    { match: "/suporte", section: "Suporte", title: "Atendimento", description: "Entre em contato com nossa equipe para receber ajuda.", path: "/suporte" },
    { match: "/gestor/pessoas", section: "Gestor", title: "Pessoas", description: "Consulte e gerencie as pessoas da plataforma.", path: "/gestor/pessoas" },
    { match: "/gestor/sistemas", section: "Gestor", title: "Sistemas", description: "Gerencie os sistemas e integrações disponíveis.", path: "/gestor/sistemas" },
    { match: "/gestor/financeiro", section: "Gestor", title: "Financeiro", description: "Acompanhe informações financeiras e movimentações.", path: "/gestor/financeiro" },
    { match: "/gestor/administrar", section: "Gestor", title: "Administrar", description: "Configure permissões e parâmetros de gestão.", path: "/gestor/administrar" },
    { match: "/gestor", section: "Gestor", title: "Monitor", description: "Acompanhe os principais indicadores da operação.", path: "/gestor" },
];

function PageHeader() {
    const { pathname } = useLocation();
    const page = pages.find((item) => pathname === item.match) || pages[0];
    const roots = {
        Painel: "/dashboard",
        Loja: "/produtos",
        Suporte: "/suporte",
        Gestor: "/gestor",
    };
    const isNested = page.path !== roots[page.section];

    return (
        <header className="page-header">
            {isNested && (
                <nav className="breadcrumb" aria-label="Breadcrumb">
                        <NavLink to={roots[page.section]}>
                            {page.section}
                        </NavLink>
                        <i className="bx bx-chevron-right" aria-hidden="true"></i>
                        <span aria-current="page">{page.title}</span>
                </nav>
            )}
            <h1>{page.title}</h1>
            <p>{page.description}</p>
        </header>
    );
}

export default PageHeader;
