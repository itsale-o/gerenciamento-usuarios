import "./ListHeader.css";
import Button from "../Button/Button";

function ListHeader({
    title,
    description,
    addLabel,
    onClick
}) {
    return (
        <div className="list-header">
            <div className="list-header-info">
                <h1>{title}</h1>
                {description && (
                    <p>{description}</p>
                )}
            </div>

            {onClick && (
                <Button
                    icon={<i className="bx bx-plus"></i>}
                    onClick={onClick}
                    variant="add"
                >
                    {addLabel}
                </Button>
            )}
        </div>
    )
}

export default ListHeader