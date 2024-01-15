import { ProductDetailInfo } from "@/components";

export default function ProductDetail({ params }: { params: { id: number } }) {
  return (
    <div>
      <ProductDetailInfo id={params.id} />
    </div>
  );
}
