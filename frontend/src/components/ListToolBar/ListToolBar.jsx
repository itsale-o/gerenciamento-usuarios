import "./ListToolbar.css";

function ListToolbar({
    searchPlaceholder="Buscar...",
    onSearch,
    children
}) {
    return (
        <div className="list-toolbar">
            <div className="list-toolbar-search">
                <i className='bx bx-search-alt-2'></i>
                <input 
                    type="text"
                    placeholder={searchPlaceholder}
                    onChange={onSearch}
                />
            </div>
            {children && (
                <div className="list-toolbar-filters">
                    {children}
                </div>
            )}
        </div>
    );
}

export default ListToolbar;