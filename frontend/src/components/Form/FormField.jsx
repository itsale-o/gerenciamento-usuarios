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
    options=[]
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
                    className="form-select form-control"
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