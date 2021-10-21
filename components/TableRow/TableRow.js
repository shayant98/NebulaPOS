import Image from "next/image";

const TableRow = ({ index, columns, value }) => {
  return (
    <tr className="hover:bg-green-500 hover:bg-opacity-25 hover:rounded duration-150 cursor-pointer">
      {columns.map((column, index) => {
        const accessor = column.accessor.split(".").reduce((cur, next) => cur && cur[next], value);
        let color = "text-green-500";
        switch (column.varient) {
          case "warning":
            color = "text-yellow-500";
            break;
          case "error":
            color = "text-red-500";
            break;
          default:
            color = "text-green-500";
            break;
        }
        return (
          <td key={index} className="px-6 py-4">
            {column.type === "image" ? (
              <Image src={accessor} alt="Product Image" width="75" height="75" />
            ) : column.type === "button" ? (
              <button type="button" onClick={() => column.action(value)} className={`${color} cursor-pointer`}>
                {column.name ? column.name : "Select"}
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
