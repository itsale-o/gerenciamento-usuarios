import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
    const [expanded, setExpanded] = useState(false);
    const [collapseOpen, setCollapseOpen] = useState(false);

    return (
        <aside id="sidebar" className={expanded ? 'expand' : ''}>
            <div className="d-flex justify-content-between p-4">
                <div className="sidebar-logo">
                    <a href="">Meu Sistema</a>
                </div>

                <button 
                    className="toggle-btn border-0" 
                    type='button'
                    onClick={() => setExpanded(!expanded)}
                >
                    <i 
                        id="icon" 
                        className={expanded ? 'bx bxs-chevrons-left' : 'bx bxs-chevrons-right'}
                    ></i>
                </button>
            </div>
            
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <Link to="/" className="sidebar-link">
                        <i className='bx bxs-home'></i>
                        <span>Início</span>
                    </Link>
                </li>

                <li className="sidebar-item">
                    <Link to="/clientes" className="sidebar-link">
                        <i className='bx bxs-user-circle'></i>
                        <span>Clientes</span>
                    </Link>
                </li>

                <li className="sidebar-item">
                    <Link to="/produtos" className="sidebar-link">
                        <i className='bx bxs-package'></i>
                        <span>Produtos</span>
                    </Link>
                </li>

                <li className="sidebar-item">
                    <button 
                        type="button"
                        className={`sidebar-link has-dropdown ${collapseOpen ? 'open' : 'collapsed'}`}
                        onClick={() => setCollapseOpen(prev => !prev)}
                    >
                        <i className='bx bxs-bug'></i>
                        <span>Collapsed</span>
                    </button>

                    <ul 
                        className={`sidebar-dropdown list-unstyled ${collapseOpen ? 'show' : ''}`}
                    >
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                                Teste
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                                Teste 2
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;