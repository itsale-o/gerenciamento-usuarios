import "./Button.css";

function Button({
    children,
    variant="primary",
    icon,
    onClick,
    type="button"
}) {
    return (
        <button
            type={type}
            className={`button ${variant}`}
            onClick={onClick}
        >
            {icon && <i className={`bx ${icon}`}></i>}
            {children}
        </button>
    );
}

export default Button;