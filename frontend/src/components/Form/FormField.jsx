import "./Form.css";

function FormField({
    label,
    name,
    type="text",
    value,
    onChange,
    placeholder,
    required=false
}) {
    return (
        <div className="form-field">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>

            <input 
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="form-control"
            />
        </div>
    )
}

export default FormField;