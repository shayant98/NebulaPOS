import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useMemo } from "react";

import { createTheme } from "react-data-table-component";
const DataTable = dynamic(() => import("react-data-table-component"), {
  ssr: false,
});
const Table = ({ data, columns, onClick, subHeaderComponent, selectableRows = false }) => {
  const { theme } = useTheme();
  createTheme("dark", {
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
    background: {
      default: "#374151",
    },
    context: {
      background: "#111827",
      text: "#FFFFFF",
    },
    divider: {
      default: "#D1D5DB",
    },
    action: {
      button: "#fff",
      hover: "#fff",
      disabled: "#fff",
    },
  });

  const handleChange = useMemo(
    () => (state) => {
      // You can use setState or dispatch with something like Redux so we can use the retrieved data
      console.log("Selected Rows: ", state.selectedRows);
    },
    []
  );

  return (
    <DataTable
      selectableRows={selectableRows}
      onSelectedRowsChange={handleChange}
      theme={theme === "dark" ? "dark" : "default"}
      noHeader
      subHeader
      customStyles={{
        highlightOnHover: {
          border: "none",
        },
      }}
      subHeaderComponent={subHeaderComponent}
      pagination
      highlightOnHover
      onRowClicked={onClick}
      pointerOnHover
      data={data}
      columns={columns}
    />
  );
};

export default Table;
