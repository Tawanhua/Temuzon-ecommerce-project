import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";
import "./OrdersPage.css";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrdersData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        {orders.map((order) => {
          return (
            <div key={order.id} className="order-container">
              <OrderHeader order={order} />

              <OrderDetailsGrid order={order} />
            </div>
          );
        })}
      </div>
    </>
  );
}
