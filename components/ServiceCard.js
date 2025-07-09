import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartServiceContext";

export default function ServiceCard({ service }) {
  const { addItem } = useCart();

  return (
    <Link href={`/services/${service.id}`} className="block">
      <div className="border p-4 rounded shadow hover:shadow-lg transition min-h-102">
        <Image
          src={service.image}
          alt={service.name}
          width={300}
          height={300}
          className="w-full h-48 object-cover mb-4"
        />
        <h2 className="text-center text-lg font-bold mt-2">{service.name}</h2>
        <p className="text-center text-gray-600">{service.description}</p>
        <p className="text-center text-green-600 font-semibold">
          ${service.price.toLocaleString()}
        </p>
        <div className="flex justify-center mt-4">
          <button
            className="flex justify-center bg-blue-500 text-white mt-2 px-4 py-2 rounded"
            onClick={(e) => {
              e.preventDefault(); // Evitamos que agregar al carrito navegue a los detalles del producto
              addItem(service);
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </Link>
  );
}
