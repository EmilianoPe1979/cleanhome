import { useState } from "react";

export default function CreateServiceModal({ onClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  // Se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página al hacer submit

    const newService = {
      id: Date.now(), // Genera un ID único temporal
      name,
      price: parseFloat(price),
      image,
      description,
    };

    try {
      const res = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newService), // convierte el producto en texto JSON para que la API lo entienda
      });

      if (res.ok) {
        // Guarda los servicios personalizados localmente en el navegador
        const storedServices =
          JSON.parse(localStorage.getItem("customServices")) || [];
        localStorage.setItem(
          "customServices",
          JSON.stringify([...storedServices, newService])
        );

        alert("Servicio creado correctamente");
        onClose();
      } else {
        alert("Error al crear el servicio");
      }
    } catch (error) {
      console.error(error);
      alert("Error al crear el servicio");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-400 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Crear Servicio</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Labor:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold">Descripción:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold">Precio:</label>
            <input
              type="number"
              min={0}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold">URL de la imagen:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className="w-full border rounded p-2"
            />
          </div>

          <div className="flex justify-end gap-2">
            {/* El componente no sabe cómo cerrarse por sí mismo, así que llama a
            onClose() para que el componente padre lo esconda. */}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>

            {/* "Guardar": al ser type="submit", dispara onSubmit={handleSubmit} del
            formulario. */}
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
