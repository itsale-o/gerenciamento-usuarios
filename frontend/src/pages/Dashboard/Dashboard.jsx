import './Dashboard.css';


function Dashboard() {
    return (
        <>
            <div className="page-title">
                <h1>Dashboard</h1>
                <p>Bem-vinda de volta!</p>
            </div>


            <section className="stats-grid">
                <div className="stat-card">
                    <span className="stat-label">Usuários</span>
                    <strong>128</strong>
                </div>


                <div className="stat-card">
                    <span className="stat-label">Registros</span>
                    <strong>542</strong>
                </div>


                <div className="stat-card">
                    <span className="stat-label">Pendências</span>
                    <strong>12</strong>
                </div>


                <div className="stat-card">
                    <span className="stat-label">Atividades</span>
                    <strong>86</strong>
                </div>
            </section>


            <section className="dashboard-grid">
                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Resumo</h2>
                    </div>


                    <div className="chart-placeholder">
                        <span>Área para gráfico</span>
                    </div>
                </div>


                <div className="dashboard-card">
                    <div className="card-header">
                        <h2>Atividades recentes</h2>
                    </div>


                    <div className="activity-list">
                        <div className="activity-item">
                            <strong>Novo usuário cadastrado</strong>
                            <span>Há 10 minutos</span>
                        </div>


                        <div className="activity-item">
                            <strong>Relatório gerado</strong>
                            <span>Há 30 minutos</span>
                        </div>


                        <div className="activity-item">
                            <strong>Registro atualizado</strong>
                            <span>Há 1 hora</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Dashboard;