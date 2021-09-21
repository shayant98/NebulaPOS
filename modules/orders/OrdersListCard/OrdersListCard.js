import Card from "../../../components/Card/Card.js";

function OrdersListCard({ orders }) {
  console.log(orders);
  return (
    <Card size={2}>
      <div className="flex">
        <div className="bg-gray-700 p-2 w-min rounded-tl rounded-bl">
          <p className="text-sm">Day</p>
        </div>
        <div className="bg-gray-700 p-2 w-min ">
          <p className="text-sm">Week</p>
        </div>
        <div className="bg-gray-700 p-2 w-min rounded-tr rounded-br">
          <p className="text-sm">Month</p>
        </div>
      </div>
      <div className="mt-5">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order #
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                # of items
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">{order.order_nr}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.order_products.length}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.order_total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-green-600 hover:text-indigo-900">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default OrdersListCard;
