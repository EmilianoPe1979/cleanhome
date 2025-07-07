import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/context/CartContext"; // Traemos el hook personalizado para acceder al carrito

export default function CartIcon() {
  const { cartItems } = useCart(); // Obtenemos los items del carrito global

  // Calcula la cantidad total de ítems en el carrito (sumando cantidades)
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link href="/cart">
      <div className="fixed top-4 right-4 flex items-center cursor-pointer bg-gray-200 rounded-full px-4 py-2 shadow z-50">
        <span className="mr-2">
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        <span className="font-bold">{itemCount}</span>
      </div>
    </Link>
  );
}
