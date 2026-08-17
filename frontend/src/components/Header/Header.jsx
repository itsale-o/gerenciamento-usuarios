import './Header.css';
import { useState, useEffect, useRef } from 'react';

function Header() {
    const [open, setOpen] = useState(false);
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
        <header className="header">
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
                        Alessandra
                    </button>
                    {open && (
                        <ul className="dropdown-menu dropdown-menu-end show">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    )}
                    
                </div>
            </div>
        </header>
    );
}

export default Header;