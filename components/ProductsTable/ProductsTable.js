import { useMemo, useState } from "react";

import { createTheme } from "react-data-table-component";
import { AiOutlineSearch } from "react-icons/ai";
import { useTheme } from "next-themes";
import Input from "../input/Input";
import Table from "../Table/Table";

const ProductsTable = ({ products, onClick }) => {
  const [filter, setFilter] = useState("");
  const filteredItems = products.filter((item) => item.name && item.name.toLowerCase().includes(filter.toLowerCase()));

  return <Table onClick={onClick} pointerOnHover columns={[{ name: "NAME", sortable: true, selector: "name" }]} data={filteredItems} />;
};

export default ProductsTable;
