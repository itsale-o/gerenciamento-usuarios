import "./Form.css";

function FormField({
    label,
    name,
    type="text",
    value,
    onChange,
    placeholder,
    required=false,
    colSpan=12,
    options=[],
    rows=4
}) {
    return (
        <div 
            className="form-field"
            style={{ gridColumn: `span ${colSpan}` }}
        >
            <label className="form-label" htmlFor={name}>
                {label}
            </label>

            {type === "select" ? (
                <select
                    name={name} 
                    id={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="form-select"
                >
                    <option value="">
                        {placeholder || "Selecione uma opção"}
                    </option>

                    {options.map((option) => (
                        <option
                            key={option.value} 
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : type === "textarea" ? (
                <textarea 
                    name={name} 
                    id={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    rows={rows}
                    className="form-control"
                />
            ) : (
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
            )}
        </div>
    )
}

export default FormField;