import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useMemo } from "react";

import { createTheme } from "react-data-table-component";
import { toast } from "react-toastify";
const DataTable = dynamic(() => import("react-data-table-component"), {
  ssr: false,
});
const Table = ({ data, columns, onClick, onSelectedRowsChange, subHeaderComponent, selectableRows = false }) => {
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

  return (
    <DataTable
      selectableRows={selectableRows}
      onSelectedRowsChange={onSelectedRowsChange}
      re
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
