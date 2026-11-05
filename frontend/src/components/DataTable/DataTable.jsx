import "./DataTable.css";

function DataTable({ columns, data }) {
    return (
        <div className="data-table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key}>
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id ?? index}>
                            {columns.map((column) => (
                                <td key={column.key}>
                                    {item[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;