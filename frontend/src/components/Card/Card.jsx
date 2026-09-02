import "./Card.css";
import { Link } from "react-router-dom";


function Card({ title, icon, button1, button2, classColor }) {
    return (
        <div className={`card shadow p-3 mb-5 bg-body-tertiary rounded ${classColor}`}>
            <div className="card-header">
                <div className="card-icon">
                    {icon}
                </div>
            </div>

            <h2>{title}</h2>
            <div className="card-accent"></div>

            <div className="card-footer">
                {button1 && (
                    <Link className="btn button1" to={button1.url}>
                        {button1.label}
                    </Link>
                )}
                {button2 && (
                    <Link className="btn button2" to={button2.url}>
                        {button2.label}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Card;