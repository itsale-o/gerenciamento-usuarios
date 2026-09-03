import './Dashboard.css';

import Card from '../../components/Card/Card';

function Dashboard() {
    return (
        <>
            <div className="page-title">
                <h1>Boas-vindas, Alessandra.</h1>
                <p>Facilite sua rotina centralizando tudo no mesmo lugar.</p>
            </div>

            <div className="cards">
                <Card
                    title="Geral"
                    icon={<i className='bx bx-line-chart'></i>}
                    button1={{
                        label: "Listar",
                        url:"/"
                    }}
                />

                <Card
                    title="ERP"
                    icon={<i class='bx bx-notepad'></i>}
                    button1={{
                        label: "Listar",
                        url:"/"
                    }}
                />

                <Card
                    title="Revenda"
                    icon={<i class='bx bx-dollar'></i>}
                    button1={{
                        label: "Gerenciar",
                        url:"/"
                    }}
                    button2={{
                        label: "Listar",
                        url:"/"
                    }}
                />

                <Card
                    title="Parceiro"
                    icon={<i class='bx bx-user'></i>}
                    button1={{
                        label: "Gerenciar",
                        url:"/"
                    }}
                    button2={{
                        label: "Listar",
                        url:"/"
                    }}
                />

                <Card
                    title="Integrador"
                    icon={<i class='bx bx-link' ></i>}
                    button1={{
                        label: "Gerenciar",
                        url:"/"
                    }}
                    button2={{
                        label: "Listar",
                        url:"/"
                    }}
                />

                <Card
                    title="Contador"
                    icon={<i class='bx bx-coin' ></i>}
                    button1={{
                        label: "Gerenciar",
                        url:"/"
                    }}
                    button2={{
                        label: "Listar",
                        url:"/"
                    }}
                />

                <Card
                    title="Consultor"
                    icon={<i class='bx bx-message-rounded'></i>}
                    button1={{
                        label: "Gerenciar",
                        url:"/"
                    }}
                    button2={{
                        label: "Listar",
                        url:"/"
                    }}
                />

                <Card
                    title="Suporte"
                    icon={<i class='bx bx-headphone' ></i>}
                    button1={{
                        label: "Gerenciar",
                        url:"/"
                    }}
                    button2={{
                        label: "Listar",
                        url:"/"
                    }}
                />
            </div>

            

            {/* <section className="stats-grid">
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
            </section> */}
        </>
    );
}


export default Dashboard;