import "./ListHeader.css";

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
                <button
                    type="button"
                    className="list-header-add"
                    onClick={onAdd}
                >
                    <i className="bi bi-plus-lg"></i>
                    {addLabel}
                </button>
            )}
        </div>
    )
}

export default ListHeader