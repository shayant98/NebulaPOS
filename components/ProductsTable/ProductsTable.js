import { useMemo, useState } from "react";

import { createTheme } from "react-data-table-component";
import { AiOutlineSearch } from "react-icons/ai";
import { useTheme } from "next-themes";
import Input from "../input/Input";
import Table from "../Table/Table";

const ProductsTable = ({ products, onClick }) => {
  const [filter, setFilter] = useState("");
  const filteredItems = products.filter((item) => item.name && item.name.toLowerCase().includes(filter.toLowerCase()));

  const subHeaderComponentMemo = useMemo(() => {
    return <Input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search products" icon={<AiOutlineSearch className="text-gray-400" size={24} />} />;
  }, [filter]);

  return <Table subHeaderComponent={subHeaderComponentMemo} onClick={onClick} pointerOnHover columns={[{ name: "NAME", sortable: true, selector: "name" }]} data={filteredItems} />;
};

export default ProductsTable;
