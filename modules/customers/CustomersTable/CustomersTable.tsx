import Card from "@components/Card/Card";
import Table from "@components/Table/Table";

const CustomersTable = ({ columns,currentPage,setCurrentPage, data,pages,filter,setFilter }) => {

    return (
        <Card>
                <Table columns={columns} data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={pages} filter={filter} setFilter={setFilter}/>
            </Card>
    );
}

export default CustomersTable;