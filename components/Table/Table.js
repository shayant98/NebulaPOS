import TableRow from "../TableRow/TableRow";

const Table = ({ columns, data }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          {columns.map((column) => (
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((value, index) => {
          return <TableRow index={value.id} columns={columns} value={value} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
