
const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {data.map((val, key) => (
                    <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.gender}</td>
                        <td>{val.role}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
