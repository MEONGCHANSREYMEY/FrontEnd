
import ProductCard from "@/component/Foodpanda"
import { ProductList } from "@/lib/product"

export default function Product() {
  return (
    <div className="grid grid-cols-2 gap-8 p-6">
      {ProductList.map(({ title, image, desc, price }) => (
        <ProductCard
          key={title}
          title={title}
          desc={desc}
          price={price}
          image={image}
        />
      ))}
    </div>
  )
}