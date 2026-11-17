import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./PageHeader.css";

const pages = [
    { match: "/dashboard", section: "Painel", key: "dashboard", path: "/dashboard" },
    { match: "/produtos/novo", section: "Loja", key: "new_product", path: "/produtos/novo" },
    { match: "/produtos", section: "Loja", key: "store", path: "/produtos" },
    { match: "/suporte/chamados", section: "Suporte", key: "my_tickets", path: "/suporte/chamados" },
    { match: "/suporte/solucoes", section: "Suporte", key: "solutions", path: "/suporte/solucoes" },
    { match: "/suporte", section: "Suporte", key: "support", path: "/suporte" },
    { match: "/gestor/pessoas", section: "Gestor", key: "people", path: "/gestor/pessoas" },
    { match: "/gestor/sistemas", section: "Gestor", key: "systems", path: "/gestor/sistemas" },
    { match: "/gestor/financeiro", section: "Gestor", key: "financial", path: "/gestor/financeiro" },
    { match: "/gestor/administrar", section: "Gestor", key: "administrate", path: "/gestor/administrar" },
    { match: "/gestor", section: "Gestor", key: "monitor", path: "/gestor" },
];

function PageHeader() {
    const { t } = useTranslation("header");
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

                    <span aria-current="page">
                        {t(`${page.key}.title`)}
                    </span>
                </nav>
            )}

            <h1>{t(`${page.key}.title`)}</h1>

            <p>{t(`${page.key}.description`)}</p>
        </header>
    );
}

export default PageHeader;