import './Login.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTenantBranding } from '../../services/brandingService';

function Login() {
    const navigate = useNavigate();
    const [branding, setBranding] = useState(null);
    const [loadingBranding, setLoadingBranding] = useState(true);

    useEffect(() => {
        let isMounted = true;

        getTenantBranding().then((data) => {
            if (isMounted) {
                setBranding(data);
                setLoadingBranding(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    function handleLogin() {
        navigate('/dashboard');
    }

    // Enquanto não sabemos o tenant, exibe um esqueleto simples
    // (evita "piscar" a marca errada antes do branding certo chegar).
    if (loadingBranding) {
        return (
            <div className="login-container login-loading">
                <div className="left-panel">
                    <div className="skeleton skeleton-logo" />
                    <div className="skeleton skeleton-input" />
                    <div className="skeleton skeleton-input" />
                    <div className="skeleton skeleton-btn" />
                </div>
                <div className="right-panel" />
            </div>
        );
    }

    // Variáveis CSS dinâmicas: aplicadas só neste componente via inline style,
    // então cada tenant pode ter sua própria paleta sem precisar de build separado.
    const themeVars = {
        '--brand-primary': branding.colors.primary,
        '--brand-primary-hover': branding.colors.primaryHover,
        '--brand-accent': branding.colors.accent,
    };

    return (
        <div className="login-container" style={themeVars}>
            {/* ===================== PAINEL ESQUERDO ===================== */}
            <div className="left-panel">
                <div className="logo">
                    {branding.logoUrl ? (
                        // Logo real do tenant, vinda da API
                        <img src={branding.logoUrl} alt="" className="logo-img" />
                    ) : (
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 4 L40 16 L28 16 Z" fill="#2E7DD1" />
                            <path d="M52 28 L40 40 L40 28 Z" fill="#F2A93B" />
                            <path d="M28 52 L16 40 L28 40 Z" fill="var(--brand-accent)" />
                            <path d="M4 28 L16 16 L16 28 Z" fill="#E5473A" />
                        </svg>
                    )}
                    <span className="logo-text">{branding.companyName}</span>
                </div>

                <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-field">
                        <span className="field-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                            </svg>
                        </span>
                        <input type="text" placeholder="Usuário" required className="form-control" />
                    </div>

                    <div className="form-field">
                        <span className="field-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="5" y="11" width="14" height="9" rx="2" />
                                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                            </svg>
                        </span>
                        <input type="password" placeholder="Senha" required className="form-control" />
                    </div>

                    <label className="captcha-placeholder">
                        <span className="captcha-check">
                            <input type="checkbox" />
                            Não sou um robô
                        </span>
                        <span className="captcha-badge">
                            reCAPTCHA
                        </span>
                    </label>

                    <div className="group-btn">
                        <button
                            type="button"
                            className="btn btn-login"
                            onClick={handleLogin}
                        >
                            Entrar
                        </button>
                        <a href="#" className="link-senha">Esqueceu a senha?</a>
                    </div>
                </form>

                <div className="social-section">
                    <p>Conheça nossas Redes Sociais</p>
                    <div className="social-icons">
                        <a href="#" className="social-btn youtube" aria-label="YouTube">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.6-.5-5.3c-.3-1-1.1-1.8-2.1-2.1C18.6 4 12 4 12 4s-6.6 0-8.4.6c-1 .3-1.8 1.1-2.1 2.1C1 8.4 1 12 1 12s0 3.6.5 5.3c.3 1 1.1 1.8 2.1 2.1C5.4 20 12 20 12 20s6.6 0 8.4-.6c1-.3 1.8-1.1 2.1-2.1.5-1.7.5-5.3.5-5.3zM9.8 15.5v-7l6 3.5-6 3.5z" /></svg>
                        </a>
                        <a href="#" className="social-btn facebook" aria-label="Facebook">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" /></svg>
                        </a>
                        <a href="#" className="social-btn linkedin" aria-label="LinkedIn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6zM8.3 18.1H5.7V9.9h2.6v8.2zM7 8.8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.1 9.3h-2.6v-4c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7v4h-2.6s.1-6.6 0-8.2h2.6v1.2c.3-.5 1-1.3 2.4-1.3 1.8 0 3.1 1.1 3.1 3.6v4.7z" /></svg>
                        </a>
                        <a href="#" className="social-btn instagram" aria-label="Instagram">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.7.5.7.3 1.3.7 1.9 1.3.6.6 1 1.2 1.3 1.9.3.7.5 1.5.5 2.7.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.5 2.7-.3.7-.7 1.3-1.3 1.9-.6.6-1.2 1-1.9 1.3-.7.3-1.5.5-2.7.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.7-.5-.7-.3-1.3-.7-1.9-1.3-.6-.6-1-1.2-1.3-1.9-.3-.7-.5-1.5-.5-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-2 .5-2.7.3-.7.7-1.3 1.3-1.9.6-.6 1.2-1 1.9-1.3.7-.3 1.5-.5 2.7-.5C8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.3a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.2-8.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* ===================== PAINEL DIREITO ===================== */}
            <div className="right-panel">
                <div className="right-content">
                    <h2>{branding.heroTitle}</h2>

                    <div className="hero-visual">
                        <svg viewBox="0 0 400 220" className="hero-svg" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="220" fill="#1c2733" />
                            <circle cx="90" cy="60" r="70" fill="#2b3a4a" opacity="0.6" />
                            <circle cx="330" cy="170" r="90" fill="#243040" opacity="0.6" />
                            <rect x="40" y="120" width="120" height="70" rx="10" fill="#33455a" />
                            <circle cx="230" cy="80" r="34" fill="none" stroke="#4CAF50" strokeWidth="1.5" opacity="0.8" />
                            <circle cx="230" cy="80" r="20" fill="none" stroke="#2E7DD1" strokeWidth="1.5" opacity="0.8" />
                            <line x1="230" y1="46" x2="230" y2="20" stroke="#4CAF50" strokeWidth="1.5" />
                            <line x1="264" y1="80" x2="290" y2="80" stroke="#2E7DD1" strokeWidth="1.5" />
                            <rect x="150" y="150" width="14" height="14" fill="#F2A93B" />
                            <rect x="172" y="150" width="14" height="14" fill="#4CAF50" />
                            <rect x="194" y="150" width="14" height="14" fill="#2E7DD1" />
                        </svg>
                        <button className="play-btn" aria-label="Reproduzir vídeo">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                        </button>
                    </div>

                    <a href={branding.whatsappLink} className="btn-whatsapp">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 3.6 17.4L2 22l4.7-1.6a11 11 0 0 0 13.8-16.9zM12 20a9 9 0 0 1-4.6-1.3l-.3-.2-3 1 1-2.9-.2-.3A9 9 0 1 1 12 20zm4.9-6.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z" /></svg>
                        Entrar em contato
                    </a>
                </div>

                <div className="footer-strip">
                    <div className="footer-highlight">
                        <span className="footer-lead">Sua Empresa...</span>
                        <span className="footer-tag">nas Suas Mãos!</span>
                    </div>

                    <div className="footer-card">
                        <h4>E-mail Marketing Locaweb</h4>
                        <p>Divulgue novidades e ofertas para os seus clientes com baixo custo.</p>
                        <a href="#">CONHEÇA ›</a>
                    </div>

                    <div className="footer-card">
                        <h4>Google Workspace</h4>
                        <p>Equipes mais produtivas e conectadas com apps do Google.</p>
                        <a href="#">CONHEÇA ›</a>
                    </div>

                    <div className="footer-card">
                        <h4>Hospedagem</h4>
                        <p>Recursos ilimitados para hospedar o seu site com domínio grátis.</p>
                        <a href="#">CONHEÇA ›</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;