import { useState } from "react";

export default function EditProductModal({ product, onClose }) {
  const [name, setName] = useState(product.name || "");
  const [price, setPrice] = useState(product.price || "");
  const [image, setImage] = useState(product.image || "");
  const [description, setDescription] = useState(product.description || "");

  // Se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página al hacer submit

    const updatedProduct = {
      ...product, // Toma los datos del producto original
      name,
      price: parseFloat(price),
      image,
      description,
    };

    // Actualiza en localStorage
    const storedProducts =
      // Lee los productos actuales del localStorage
      // Si no hay productos, usamos [] como valor por defecto
      // Recorre cada producto p en el array con .map(...)
      // Si coinciden, reemplaza ese producto por el updatedProduct (el nuevo que se editó)
      // Si no coinciden, deja el producto tal como está
      JSON.parse(localStorage.getItem("customProducts")) || [];
    const updatedProducts = storedProducts.map((p) =>
      String(p.id) === String(product.id) ? updatedProduct : p
    );
    localStorage.setItem("customProducts", JSON.stringify(updatedProducts));

    alert("Producto actualizado correctamente");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-blue-500 bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">Editar producto</h2>

        <div>
          <label className="block font-semibold">Nombre:</label>
          <input
            type="text"
            placeholder="Nombre del producto"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Descripción:</label>
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded p-2"
          ></input>
        </div>

        <div>
          <label className="block font-semibold">Precio:</label>
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">URL de la imagen:</label>
          <input
            type="text"
            placeholder="URL de la imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
