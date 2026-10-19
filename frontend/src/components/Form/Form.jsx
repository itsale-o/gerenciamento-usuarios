import "./Form.css";
import Button from "../Button/Button"

function Form({ children, onSubmit, onCancel }) {
    return (
        <form onSubmit={onSubmit} className="form">
            <div className="form-body">
                {children}
            </div>

            <div className="form-footer">
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