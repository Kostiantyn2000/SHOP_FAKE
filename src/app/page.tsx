import { ProductList, Sidebar } from "@/components";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar />
      <ProductList />
    </div>
  );
}
