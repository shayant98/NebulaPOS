import Input from "@components/input/Input";
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineSearch } from "react-icons/ai";
import TableRow from "../TableRow/TableRow";

const Table = ({ columns, data, currentPage, setCurrentPage, maxPages, filter, setFilter }) => {
  const handlePageChange = (page) => {
    if (page > maxPages) {
      return;
    }
    if (page < 1) {
      return;
    }

    setCurrentPage(page);
  };
  return (
    <>
      <div className="flex justify-end mb-10">
        <Input icon={<AiOutlineSearch size={24} className="text-gray-700" />} placeholder="Search..." value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {column.type !== "button" && column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return <TableRow key={value.id} columns={columns} value={value} />;
          })}
        </tbody>
      </table>
      <div className="flex justify-end mt-10">
        <p>
          {currentPage} - {maxPages}
        </p>
        <button type="button" onClick={() => handlePageChange(currentPage - 1)}>
          <AiOutlineCaretLeft size={32} className={`${currentPage == 1 ? "text-gray-500" : "text=white hover:text-green-500 cursor-pointer"}`} />
        </button>
        <button type="button" onClick={() => handlePageChange(currentPage + 1)}>
          <AiOutlineCaretRight size={32} className={`${currentPage == maxPages ? "text-gray-500" : "text=white hover:text-green-500 cursor-pointer"}`} />
        </button>
      </div>
    </>
  );
};

export default Table;
