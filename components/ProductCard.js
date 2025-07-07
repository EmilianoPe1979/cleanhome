import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="border p-4 rounded shadow hover:shadow-lg transition min-h-102">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-48 object-cover mb-4"
        />
        <h2 className="text-center text-lg font-bold mt-2">{product.name}</h2>
        <p className="text-center text-gray-600">{product.description}</p>
        <p className="text-center text-green-600 font-semibold">
          ${product.price.toLocaleString()}
        </p>
        <div className="flex justify-center mt-4">
          <button
            className="flex justify-center bg-blue-500 text-white mt-2 px-4 py-2 rounded"
            onClick={(e) => {
              e.preventDefault(); // Evitamos que agregar al carrito navegue a los detalles del producto
              addItem(product);
            }}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </Link>
  );
}
