import { CartServiceProvider, useCart } from "@/context/CartServiceContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CheckoutForm from "@/components/CheckoutForm";

function CarritoPage() {
  const { cartItems, updateQuantity, clearCart, removeItem } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCompra = () => {
    alert("¡Gracias por agendar, estamos en camino!");
    clearCart();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-4">Tu carrito</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">
          Tu carrito está vacío.{" "}
          <Link href="/services" className="text-blue-500 underline">
            Volver a servicios
          </Link>
        </p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded flex gap-4 items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-green-600 font-semibold">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <label>Cantidad:</label>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 border rounded p-1"
                  />
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-3xl p-4"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}

          <div className="text-right mt-4 flex flex-col sm:flex-row justify-end gap-4">
            <p className="text-xl font-bold">Total: ${calculateTotal()}</p>

            <button
              onClick={() => {
                if (confirm("¿Seguro que quieres cancelar el pedido?")) {
                  clearCart();
                }
              }}
              className="bg-gray-500 text-white mt-2 px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
          </div>
          {/* Mostrar formulario solo si hay elementos */}
          <CheckoutForm
            onSubmit={(formData) => {
              console.log("Datos del formulario:", formData);
              alert(
                `Gracias ${formData.nombre}, hemos recibido tu solicitud y estamos en camino.`
              );
              clearCart();
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function Carrito() {
  return <CarritoPage />;
}
