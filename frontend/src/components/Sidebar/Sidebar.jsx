import './Sidebar.css';
import BrandMark from '../BrandMark/BrandMark';

import { Link } from 'react-router-dom';
import { useState } from 'react';


function Sidebar({ branding }) {
    const [expanded, setExpanded] = useState(false);
    const [collapseOpen, setCollapseOpen] = useState(false);

    return (
        <aside id="sidebar" className={expanded ? 'expand' : ''}>
            <div className="sidebar-topbar">
                <BrandMark branding={branding} />

                <button 
                    className="toggle-btn border-0" 
                    type='button'
                    aria-label={expanded ? 'Recolher menu' : 'Expandir menu'}
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
                    <Link to="/produtos" className="sidebar-link">
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


                {/* <li className="sidebar-item">

                    <button
                        type="button"
                        className={`sidebar-link has-dropdown ${collapseOpen ? '' : 'collapsed'}`}
                        onClick={() => setCollapseOpen(prev => !prev)}
                    >
                        <i className="bx bxs-bug"></i>
                        <span>Collapsed</span>
                    </button>

                    <ul
                        className={`sidebar-dropdown list-unstyled collapse ${
                            collapseOpen ? 'show' : ''
                        }`}
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

                </li> */}
            </ul>
        </aside>
    );
}

export default Sidebar;