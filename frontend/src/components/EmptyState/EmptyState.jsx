import "./EmptyState.css";
import Button from "../Button/Button";

function EmptyState({
    title="Nenhum registro encontrado",
    description="Não existem registros para exibir",
    icon="bi-inbox",
    actionLabel,
    onAction
}) {
    return (
        <div className="empty-state">
            <div className="empty-state-icon">
                <i className={`bi ${icon}`}></i>
            </div>

            <h2>{title}</h2>
            <p>{description}</p>

            {onAction && (
                <Button
                    icon="bx-plus"
                    onClick={onAction}
                    variant="add"
                >
                    {actionLabel}
                </Button> 
            )}
        </div>
    );
}

export default EmptyState;