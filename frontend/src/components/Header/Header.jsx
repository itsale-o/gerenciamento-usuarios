import './Header.css';
import { useState, useEffect, useRef } from 'react';

function Header({ branding }) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const dropdownRef = useRef(null);

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

    return (
        <nav className="header">
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
                        <span className="header-user-name">Alessandra</span>
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