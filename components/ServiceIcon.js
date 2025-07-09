import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/context/CartServiceContext"; // Traemos el hook personalizado para acceder al carrito

export default function CartIcon() {
  const { cartItems } = useCart(); // Obtenemos los items del carrito global

  // Calcula la cantidad total de ítems en el carrito (sumando cantidades)
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link href="/service-cart">
      <div className="fixed top-20 right-4 flex items-center cursor-pointer bg-gray-200 rounded-full px-4 py-2 shadow z-50">
        <span className="mr-2">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span className="font-bold">{itemCount}</span>
      </div>
    </Link>
  );
}
