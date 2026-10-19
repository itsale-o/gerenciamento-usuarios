import "./Loja.css";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Certificado Digital",
        icon: "bx-certification",
        setupPrice: "R$ 115,00",
        monthlyPrice: "R$ 0,00",
    },
    {
        id: 2,
        name: "Integração Bancária",
        icon: "bx-credit-card",
        setupPrice: "R$ 500,00",
        monthlyPrice: "R$ 250,00",
    },
    {
        id: 3,
        name: "Treinamento",
        icon: "bx-book-open",
        setupPrice: "R$ 500,00",
        monthlyPrice: "R$ 0,00",
    },
    {
        id: 4,
        name: "Gestão Financeira",
        icon: "bx-line-chart",
        setupPrice: "R$ 500,00",
        monthlyPrice: "R$ 250,00",
    },
    {
        id: 5,
        name: "CNPJ Novo",
        icon: "bx-building-house",
        setupPrice: "R$ 500,00",
        monthlyPrice: "R$ 250,00",
    },
];

function Loja() {
    return (
        <section className="store-page" aria-labelledby="store-title">
            <div className="store-grid">
                {products.map((product) => (
                    <article className="store-card" key={product.id}>
                        <div className="store-card-icon" aria-hidden="true">
                            <i className={`bx ${product.icon}`}></i>
                        </div>
                        <h2>{product.name}</h2>
                        <div className="store-card-accent"></div>

                        <dl className="store-card-prices">
                            <div>
                                <dt>Contratação:</dt>
                                <dd>{product.setupPrice}</dd>
                            </div>
                            <div>
                                <dt>Mensalidade:</dt>
                                <dd>{product.monthlyPrice}</dd>
                            </div>
                        </dl>

                        <Link
                            className="store-card-button mt-2"
                            to="/produtos/novo"
                            state={{ product }}
                        >
                            Contratar
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Loja;
