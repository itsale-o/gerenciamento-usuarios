import './Header.css';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [dynamicTabs, setDynamicTabs] = useState([]);
    const dropdownRef = useRef(null);
    const { t } = useTranslation("header");

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

    function handleTabsWheel(event) {
        if (event.deltaY === 0 || !tabsRef.current) return;

        event.preventDefault();
        tabsRef.current.scrollLeft += event.deltaY;
    }

    return (
        <div className="header-shell">
            <div className="tab-strip" aria-label="Abas abertas">
                <div className="fixed-tabs">
                {FIXED_TABS.map((tab) => (
                    <button
                        key={tab.path}
                        type="button"
                        className={`primary-nav-link ${location.pathname === tab.path ? 'active' : ''}`}
                        onClick={() => navigate(tab.path)}
                    >
                        <i className={`bx ${tab.icon}`} aria-hidden="true"></i>
                        <span>{tab.label}</span>
                    </button>
                ))}
                </div>
                <div className="tabs-navigation">
                    <div className="primary-nav" ref={tabsRef} onWheel={handleTabsWheel}>
                    {dynamicTabs.map((tab) => (
                        <button
                            key={tab.path}
                            type="button"
                            className={`primary-nav-link ${location.pathname === tab.path ? 'active' : ''}`}
                            onClick={() => navigate(tab.path)}
                        >
                            <i className={`bx ${tab.icon}`} aria-hidden="true"></i>
                            <span>{tab.label}</span>
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
                        </button>
                    ))}
                    </div>
                </div>
            </div>

            <nav className="header">
                <div className="header-search">
                <i className="bx bx-search" aria-hidden="true"></i>
                <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={t("input_placeholder")}
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
                            <li><a className="dropdown-item" href="#">{t("logout")}</a></li>
                        </ul>
                    )}
                    
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;