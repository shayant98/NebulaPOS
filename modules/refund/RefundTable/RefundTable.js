import { useMemo, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useMutation } from "react-query";
import Input from "../../../components/input/Input";
import Table from "../../../components/Table/Table";
import { createRefund } from "../../../services/refundService";

const RefundTable = ({ products }) => {
  const [filter, setFilter] = useState("");

  const subHeaderComponentMemo = useMemo(() => {
    return <Input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search products" icon={<AiOutlineSearch className="text-gray-400" size={24} />} />;
  }, [filter]);

  const createRefundMut = useMutation(createRefund);
  const handleRefund = useMemo(
    () => (state) => {
      // You can use setState or dispatch with something like Redux so we can use the retrieved data
      state.selectedRows.map((selectedRow) => {
        const QtyToReturn = document.getElementById(`qtyToRtrn${selectedRow.id}`).value;
        selectedRow.toReturn = QtyToReturn;
      });

      if (state.selectedRows.length < 1) {
        toast.error("No products selected");
      }

      if (state.selectedRows.qty < state.selectedRows.toReturn) {
        toast.error("Invalid QTY to return");
        return;
      }

      createRefundMut.mutate({});
    },
    []
  );

  return (
    <div className="mt-10">
      <Table
        onSelectedRowsChange={handleRefund}
        selectableRows
        subHeaderComponent={subHeaderComponentMemo}
        data={products}
        columns={[
          { name: "#", selector: "id" },
          { name: "NAME", selector: "product.name", grow: 2 },
          { name: "QTY", selector: "qty" },
          { name: "PRICE", selector: "product.price" },
          {
            name: "QTY to return",
            cell: (row) => (
              <div data-tag="allowRowEvents">
                <Input type="number" id={"qtyToRtrn" + row.id} />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default RefundTable;
