import "./Form.css";
import Button from "../Button/Button"

function Form({ title, children, onSubmit }) {
    return (
        <>
            <div className="form-header">
                <h3 className="mb-3">{title}</h3>
            </div>
            
            <form  onSubmit={onSubmit} className="form">
                <div className="form-body">
                    {children}
                </div>

                <div className="form-footer">
                    <Button
                        icon={<i className="bx bx-plus"></i>}
                        onClick="{onAction}"
                        variant="submit"
                    >
                        asdfas
                    </Button> 

                    <Button
                        icon={<i className="bx bx-plus"></i>}
                        onClick="{onAction}"
                        variant="cancel"
                    >
                        asdfasdf
                    </Button> 
                </div>
            </form>
        </>
    )
}

export default Form;