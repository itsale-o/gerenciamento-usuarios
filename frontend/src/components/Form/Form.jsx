import "./Form.css";
import Button from "../Button/Button"

function Form({ title, children, onSubmit }) {
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
                    icon={<i className="bx bx-plus"></i>}
                    onClick="{onAction}"
                    variant="submit"
                >
                    Salvar
                </Button> 

                <Button
                    icon={<i className="bx bx-plus"></i>}
                    onClick="{onAction}"
                    variant="cancel"
                >
                    Cancelar
                </Button> 
            </div>
        </form>
    )
}

export default Form;