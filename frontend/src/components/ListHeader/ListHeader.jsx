import "./ListHeader.css";
import Button from "../Button/Button";

function ListHeader({
    title,
    description,
    addLabel,
    onAdd
}) {
    return (
        <div className="list-header">
            <div className="list-header-info">
                <h1>{title}</h1>
                {description && (
                    <p>{description}</p>
                )}
            </div>

            {onAdd && (
                <Button
                    icon="bx-plus"
                    onClick={onAdd}
                    variant="add"
                >
                    {addLabel}
                </Button>
            )}
        </div>
    )
}

export default ListHeader