import "./Form.css";
import Button from "../Button/Button"

function Form({ title, children, onSubmit, onCancel }) {
    return (
        <form  onSubmit={onSubmit} className="form">
            <div className="form-header">
                <h3 className="mb-3">{title}</h3>
            </div>

            <div className="form-body">
                {children}
            </div>

            <div className="form-footer mt-5">
                <Button
                    type="submit"
                    variant="submit"
                >
                    Salvar
                </Button> 

                <Button
                    type="button"
                    onClick={onCancel}
                    variant="cancel"
                >
                    Cancelar
                </Button> 
            </div>
        </form>
    )
}

export default Form;