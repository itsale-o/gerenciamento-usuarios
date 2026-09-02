import './Sidebar.css';
import { Link } from 'react-router-dom';
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
                    <path d="M28 52 L16 40 L28 40 Z" fill="var(--brand-accent, #4CAF50)" />
                    <path d="M4 28 L16 16 L16 28 Z" fill="#E5473A" />
                </svg>
            )}
            <span>{branding.companyName}</span>
        </div>
    );
}

function Sidebar({ branding }) {
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
            
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <Link to="/dashboard" className="sidebar-link">
                        <i className='bx bxs-home'></i>
                        <span>Início</span>
                    </Link>
                </li>

                <li className="sidebar-item">
                    <Link to="/faturas" className="sidebar-link">
                        <i className='bx bxs-receipt'></i>
                        <span>Faturas</span>
                    </Link>
                </li>

                <li className="sidebar-item">
                    <Link to="/planos" className="sidebar-link">
                        <i className='bx bxs-grid-alt'></i>
                        <span>Planos</span>
                    </Link>
                </li>

                <li className="sidebar-item">
                    <Link to="/suporte" className="sidebar-link">
                        <i className='bx bxs-help-circle'></i>
                        <span>Suporte</span>
                    </Link>
                </li>

                <li className="sidebar-item">
                    <Link to="/conta" className="sidebar-link">
                        <i className='bx bxs-user'></i>
                        <span>Conta</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;