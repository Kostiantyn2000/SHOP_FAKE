import { OrderProductList } from "@/components/molecules";
import { OrderForm } from "@/components/organisms/order-form/order-from";
import { Space } from "antd";

export default function Order() {
  return (
    <div>
      <Space direction="vertical" style={{ padding: "20px" }}>
        <h2>Order</h2>
        <OrderForm />
        <OrderProductList />
      </Space>
    </div>
  );
}
