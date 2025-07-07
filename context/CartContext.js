// createContext es una forma de compartir datos globales sin tener que pasar props manualmente por todos los componentes
// useContext: permite que un componente consuma ese contexto
// useReducer: es una forma avanzada de manejar el estado
import { createContext, useContext, useReducer } from "react";

// Contexto para compartir el carrito entre componentes
// Cualquier componente que use este contexto podrá acceder al carrito.
const CartContext = createContext();

// Estado inicial: El carrito inicia vacío
const initialState = {
  cartItems: [],
};

// Reducer: Función que define cómo cambia el carrito al hacer distintas acciones
// Estado actual (state) y acción (action) que se quiere realizar

//DATOS IMPORTANTES:
// - state: es el estado actual del carrito
// - type: dice que tipo de acción es (ej: "ADD_ITEM")
// - payload: es la información adicional que se necesita para realizar la acción (ej: los datos del producto)
// - "..." : es el spread operator que se usa para copiar objetos o arreglos manteniendo lo que ya hay pero permitiendo cambiar solo una parte
// - map: es una función que recorre un arreglo y permite modificar sus elementos, creando un nuevo arreglo con los cambios

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": // Acción para añadir un producto al carrito
      // Verificar si el producto ya está en el carrito
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Si ya existe, solo se aumenta su cantidad
        return {
          ...state, // Copia todo lo que ya tenia el estado
          cartItems: state.cartItems.map(
            (item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            // Si el id coincide, crea un nuevo objeto igual (...item), pero con quantity aumentada.
            //Si no, lo deja igual.
          ),
        };
      } else {
        // Si no existe, se agrega al carrito con cantidad 1
        return {
          ...state, // Copia todo lo que ya tenia el estado
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          // Copiamos todo del payload (el producto).
          //Le agregamos quantity: 1.
        };
      }

    case "UPDATE_QUANTITY":
      // Cambiar la cantidad de un producto
      return {
        ...state,
        cartItems: state.cartItems.map(
          (item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          // Si ambos id's coinciden, crea un nuevo objetivo con los datos actuales del producto
          // Reemplaza la cantidad por la nueva cantidad del payload
          // Si no, lo deja igual
        ),
      };

    case "CLEAR_CART":
      // Vaciar el carrito
      return initialState; // Regresa al estado inicial, osea un carrito vacio

    case "REMOVE_ITEM":
      // Eliminar un producto del carrito
      // Se filtra el carrito para eliminar el producto con el ID especifico
      // Devuelve todos los productos, excepto el que tiene el id igual al que viene en action.payload
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state; // En caso de que la acción no coincida con ninguna, evita regresar un estado crasheado o undefined
    // Solo regresa el estado actual sin cambios
  }
}

// Componente proveedor: envuelve las páginas que necesitan el carrito
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Acciones para modificar el carrito
  // payload product: Necesitamos todos los datos del producto si este no se agrego al carrito todavia
  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <CartContext.Provider // Estado global del carrito y sus funciones
      value={{
        cartItems: state.cartItems, // lista de productos en el carrito
        addItem, // función para añadir productos
        updateQuantity, // función para actualizar cantidades
        clearCart, // función para limpiar el carrito
        removeItem, // función para eliminar un producto del carrito
      }}
    >
      {children}
      {/* children Representa todos los componentes envueltos por el CartProvider */}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el carrito fácilmente en cualquier componente
export const useCart = () => useContext(CartContext);

// Llama al hook nativo useContext.
// Le pasa CartContext, que es el contexto del carrito.
// Devuelve lo que está en el .Provider osea el value con el estado y las funciones.
