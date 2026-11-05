import "./ListPage.css";

function ListPage({ children }) {
    return (
        <section className="list-page">
            {children}
        </section>
    )
}

export default ListPage