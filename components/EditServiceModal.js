import { useState } from "react";

export default function EditServiceModal({ service, onClose }) {
  const [name, setName] = useState(service.name || "");
  const [price, setPrice] = useState(service.price || "");
  const [image, setImage] = useState(service.image || "");
  const [description, setDescription] = useState(service.description || "");

  // Se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página al hacer submit

    const updatedService = {
      ...service, // Toma los datos del servicio original
      name,
      price: parseFloat(price),
      image,
      description,
    };

    // Actualiza en localStorage
    const storedServices =
      // Lee los servicios actuales del localStorage
      // Si no hay servicios, usamos [] como valor por defecto
      // Recorre cada servicio p en el array con .map(...)
      // Si coinciden, reemplaza ese servicio por el updatedService (el nuevo que se editó)
      // Si no coinciden, deja el servicio tal como está
      JSON.parse(localStorage.getItem("customServices")) || [];
    const updatedServices = storedServices.map((p) =>
      String(p.id) === String(service.id) ? updatedService : p
    );
    localStorage.setItem("customServices", JSON.stringify(updatedServices));

    alert("Servicio actualizado correctamente");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-blue-500 bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">Editar servicio</h2>

        <div>
          <label className="block font-semibold">Labor:</label>
          <input
            type="text"
            placeholder="Nombre del servicio"
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
