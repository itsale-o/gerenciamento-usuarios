import './Login.css';

import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/dashboard');
    }
    return (
        <div className="login-container">
            <div className="left-panel">
                <div className="logo">
                    {/* <img src="https://via.placeholder.com/180x50?text=SUA+LOGO" alt="Logo"> */}
                </div>

                <form className="login-form">
                    <div className="form-field mb-3">
                        <input type="text" placeholder="Usuário" required className="form-control" />
                        <input type="password" placeholder="Senha" required className="form-control" />
                    </div>
                    
                    <div className="captcha-placeholder mb-5">
                        <label><input type="checkbox" /> Não sou um robô</label>
                        <span className="captcha-badge">reCAPTCHA</span>
                    </div>

                    <div className="group-btn">
                        <button 
                            type="button"
                            className="btn btn-login"
                            onClick={handleLogin}
                        >
                            Entrar
                        </button>
                        <button type="button" className="btn btn-senha">Esqueceu a senha?</button>
                    </div>
                </form>

                {/* <div className="social-section">
                    <p>Conheça nossas Redes Sociais</p>
                    <div className="social-icons">
                    <a href="#" className="social-btn youtube"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#" className="social-btn facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="social-btn linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" className="social-btn instagram"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div> */}
            </div>

            <div className="right-panel">
                <div className="right-content">
                    <h2>Título do seu produto ou serviço principal</h2>
                    <p>Uma breve descrição sobre a sua empresa, solução ou ecossistema tecnológico oferecido para o cliente.</p>

                    <div className="video-container">
                        <iframe 
                            src="https://www.youtube.com/embed/tgbNymZ7vqY" 
                            title="Vídeo demonstrativo" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <a href="#" className="btn-whatsapp">
                        <i className='bx bxl-whatsapp'></i> Entrar em contato
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;