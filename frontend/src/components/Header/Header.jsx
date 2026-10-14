import './Header.css';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FIXED_TABS = [
    { path: '/dashboard', label: 'Painel', icon: 'bxs-dashboard' },
    { path: '/produtos', label: 'Loja', icon: 'bxs-store' },
    { path: '/suporte', label: 'Suporte', icon: 'bxs-help-circle' },
];

const DYNAMIC_TABS = [
    { path: '/gestor', label: 'Gestor', icon: 'bxs-briefcase' },
    { path: '/gestor/pessoas', label: 'Pessoas', icon: 'bx-group' },
    { path: '/gestor/sistemas', label: 'Sistemas', icon: 'bx-devices' },
    { path: '/gestor/financeiro', label: 'Financeiro', icon: 'bx-wallet' },
    { path: '/gestor/administrar', label: 'Administrar', icon: 'bx-cog' },
];

const ALL_TABS = [...FIXED_TABS, ...DYNAMIC_TABS];

function getTab(pathname) {
    return ALL_TABS.find((tab) => tab.path === pathname) || {
        path: pathname,
        label: 'Nova página',
        icon: 'bx-file',
    };
}

function Header({ branding }) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [dynamicTabs, setDynamicTabs] = useState([]);
    const dropdownRef = useRef(null);
    const tabsRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const currentTab = getTab(location.pathname);

        if (!FIXED_TABS.some((tab) => tab.path === currentTab.path)) {
            const timeoutId = setTimeout(() => {
                setDynamicTabs((currentTabs) => currentTabs.some((tab) => tab.path === currentTab.path)
                    ? currentTabs
                    : [...currentTabs, currentTab]);
            }, 0);

            return () => clearTimeout(timeoutId);
        }

        return undefined;
    }, [location.pathname]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function closeTab(path, event) {
        event.stopPropagation();

        setDynamicTabs((currentTabs) => {
            const tabIndex = currentTabs.findIndex((tab) => tab.path === path);
            const nextTabs = currentTabs.filter((tab) => tab.path !== path);

            if (location.pathname === path) {
                const fallbackTab = currentTabs[tabIndex - 1] || currentTabs[tabIndex + 1] || FIXED_TABS[0];
                navigate(fallbackTab.path);
            }

            return nextTabs;
        });
    }

    function scrollTabs(direction) {
        tabsRef.current?.scrollBy({ left: direction * 180, behavior: 'smooth' });
    }

    const tabs = [...FIXED_TABS, ...dynamicTabs];

    return (
        <nav className="header">
            <div className="tabs-navigation">
                <button type="button" className="tabs-scroll-button" onClick={() => scrollTabs(-1)} aria-label="Ver abas anteriores">
                    <i className="bx bx-chevron-left" aria-hidden="true"></i>
                </button>
                <div className="primary-nav" ref={tabsRef} aria-label="Abas abertas">
                    {tabs.map((tab) => (
                        <button
                            key={tab.path}
                            type="button"
                            className={`primary-nav-link ${location.pathname === tab.path ? 'active' : ''}`}
                            onClick={() => navigate(tab.path)}
                        >
                            <i className={`bx ${tab.icon}`} aria-hidden="true"></i>
                            <span>{tab.label}</span>
                            {!FIXED_TABS.some((fixedTab) => fixedTab.path === tab.path) && (
                                <i
                                    className="bx bx-x tab-close"
                                    role="button"
                                    tabIndex="0"
                                    aria-label={`Fechar aba ${tab.label}`}
                                    onClick={(event) => closeTab(tab.path, event)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter' || event.key === ' ') closeTab(tab.path, event);
                                    }}
                                ></i>
                            )}
                        </button>
                    ))}
                </div>
                <button type="button" className="tabs-scroll-button" onClick={() => scrollTabs(1)} aria-label="Ver próximas abas">
                    <i className="bx bx-chevron-right" aria-hidden="true"></i>
                </button>
            </div>

            <div className="header-search">
                <i className="bx bx-search" aria-hidden="true"></i>
                <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="O que você precisa..."
                    aria-label="Buscar"
                />
                {/* <button type="button" aria-label="Abrir busca">
                    <i className="bx bx-command" aria-hidden="true"></i>
                </button> */}
            </div>

            <div className="current-company" title={branding?.companyName || 'Empresa atual'}>
                <div className="current-company-logo">
                    {branding?.logoUrl ? (
                        <img src={branding.logoUrl} alt="" />
                    ) : (
                        <i className="bx bxs-business" aria-hidden="true"></i>
                    )}
                </div>
                <div className="current-company-info">
                    <span>{branding?.cnpj || 'CNPJ não informado'}</span>
                    <strong>{branding?.companyName || 'Carregando...'}</strong>
                </div>
            </div>

            <div className="header-menu">
                <div className="dropdown" ref={dropdownRef}>
                    <button 
                        className="btn btn-menu dropdown-toggle"
                        type="button" 
                        onClick={() => setOpen(!open)}
                    >
                        <div className="avatar">
                            AO
                        </div>
                        <span className="header-user-name">Usuário</span>
                    </button>
                    {open && (
                        <ul className="dropdown-menu dropdown-menu-end show">
                            <li><span className="dropdown-item">IP: {window.location.host}</span>
                                <span className="status-dot" aria-hidden="true"></span></li>
                            <li><a className="dropdown-item" href="#">Sair</a></li>
                        </ul>
                    )}
                    
                </div>
            </div>
        </nav>
    );
}

export default Header;