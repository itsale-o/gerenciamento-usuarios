import "./EmptyState.css";
import Button from "../Button/Button";

function EmptyState({
    title="Nenhum registro encontrado",
    description="Não existem registros para exibir",
    icon,
    actionLabel,
    onClick
}) {
    return (
        <div className="empty-state">
            <div className="empty-state-icon">
                {icon}
            </div>

            <h2>{title}</h2>
            <p>{description}</p>

            {onClick && (
                <Button
                    icon={<i className="bx bx-plus"></i>}
                    onClick={onClick}
                    variant="add"
                >
                    {actionLabel}
                </Button> 
            )}
        </div>
    );
}

export default EmptyState;