import './Login.css';

function Login() {
    return (
        <main className="login-page">
            <div className="login-card">
                <div className="login-header">
                    <h1>Nome do Sistema</h1>
                    <p>Acesse sua conta</p>
                </div>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Digite seu usuário"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Login;