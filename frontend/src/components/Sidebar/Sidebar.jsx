import './Sidebar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const SIDEBAR_EXPANDED_KEY = 'sidebar-expanded';

function BrandMark({ branding }) {
    if (!branding) {
        return <div className="sidebar-brand-loading" aria-hidden="true" />;
    }

    return (
        <div className="sidebar-brand">
            {branding?.logoUrl ? (
                <img src={branding.logoUrl} alt="" className="sidebar-brand-image" />
            ) : (
                <svg width="38" height="38" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                    <path d="M28 4 L40 16 L28 16 Z" fill="#2E7DD1" />
                    <path d="M52 28 L40 40 L40 28 Z" fill="#F2A93B" />
                    <path d="M28 52 L16 40 L28 40 Z" fill="var(--brand-accent, #3B82A0)" />
                    <path d="M4 28 L16 16 L16 28 Z" fill="#E5473A" />
                </svg>
            )}
            <span>{branding.companyName}</span>
        </div>
    );
}

function Sidebar({ branding }) {
    const location = useLocation();
    const [expanded, setExpanded] = useState(() => {
        return localStorage.getItem(SIDEBAR_EXPANDED_KEY) === 'true';
    });

    function toggleSidebar() {
        setExpanded((currentExpanded) => {
            const nextExpanded = !currentExpanded;
            localStorage.setItem(SIDEBAR_EXPANDED_KEY, String(nextExpanded));
            return nextExpanded;
        });
    }

    const section = location.pathname.startsWith('/produtos')
        ? 'store'
        : location.pathname.startsWith('/suporte')
            ? 'support'
            : location.pathname.startsWith('/gestor')
                ? 'manager'
            : 'dashboard';

    const menus = {
        dashboard: [
            { label: 'Visão geral', icon: 'bx-grid-alt', to: '/dashboard', end: true },
        ],
        store: [
            { label: 'Produtos', icon: 'bx-package', to: '/produtos', end: true },
            { label: 'Novo produto', icon: 'bx-plus-circle', to: '/produtos/novo' },
        ],
        support: [
            { label: 'Atendimento', icon: 'bx-headphone', to: '/suporte', end: true },
            { label: 'Meus chamados', icon: 'bx-message-square-detail', to: '/suporte/chamados' },
            { label: 'Base de soluções', icon: 'bx-book-open', to: '/suporte/solucoes' },
        ],
        manager: [
            { label: 'Monitor', icon: 'bx-line-chart', to: '/gestor', end: true },
            { label: 'Pessoas', icon: 'bx-group', to: '/gestor/pessoas' },
            { label: 'Sistemas', icon: 'bx-devices', to: '/gestor/sistemas' },
            { label: 'Financeiro', icon: 'bx-wallet', to: '/gestor/financeiro' },
            { label: 'Administrar', icon: 'bx-cog', to: '/gestor/administrar' },
        ],
    };

    return (
        <aside id="sidebar" className={expanded ? 'expand' : ''}>
            <div className="sidebar-topbar">
                <BrandMark branding={branding} />

                <button 
                    className="toggle-btn" 
                    type='button'
                    aria-label={expanded ? 'Recolher menu' : 'Expandir menu'}
                    onClick={toggleSidebar}
                >
                    <i 
                        id="icon" 
                        className={expanded ? 'bx bxs-chevrons-left' : 'bx bxs-chevrons-right'}
                    ></i>
                </button>
            </div>
            
            <nav className="sidebar-nav" aria-label="Menu da tela">
                <p className="sidebar-section-label">
                    {section === 'dashboard'
                        ? 'Painel'
                        : section === 'store'
                            ? 'Loja'
                            : section === 'support'
                                ? 'Suporte'
                                : 'Gestor'}
                </p>
                {menus[section].map((menu) => (
                    <NavLink
                        key={menu.to}
                        to={menu.to}
                        end={menu.end}
                        className="sidebar-link"
                    >
                        <i className={`bx ${menu.icon}`} aria-hidden="true"></i>
                        <span>{menu.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* <div className="sidebar-footer">
                <i className="bx bx-shield-quarter" aria-hidden="true"></i>
                <span>Ambiente seguro</span>
            </div> */}
        </aside>
    );
}

export default Sidebar;