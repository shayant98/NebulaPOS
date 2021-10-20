import Image from "next/image";

const TableRow = ({ index, columns, value }) => {
  return (
    <tr key={index} className="hover:bg-green-500 hover:bg-opacity-25 hover:rounded duration-150 cursor-pointer">
      {columns.map((column) => {
        const accessor = column.accessor.split(".").reduce((cur, next) => cur && cur[next], value);
        return (
          <td className="px-6 py-4">
            {column.type === "image" ? (
              <Image src={accessor} alt="Product Image" width="75" height="75" />
            ) : column.type === "button" ? (
              <button type="button" onClick={() => column.action(value)} className="text-green-600 cursor-pointer">
                Select
              </button>
            ) : (
              accessor
            )}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
