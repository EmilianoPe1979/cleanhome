// Condición, si el botón está deshabilitado, se aplica un estilo diferente "inactivo"
// Si esta habilitado, se aplica un estilo normal

export default function DeleteButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded text-white ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-red-500 hover:bg-red-600"
      }`}
    >
      Eliminar
    </button> 
  );
}
