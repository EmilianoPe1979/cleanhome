import { useState } from "react";

export default function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    fecha: "",
    notas: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Lo que se hace al dar clic en Confirmar
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="border p-2 rounded"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          className="border p-2 rounded"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        className="w-full border p-2 rounded"
        value={formData.direccion}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="fecha"
        className="w-full border p-2 rounded"
        value={formData.fecha}
        onChange={handleChange}
        required
      />

      <textarea
        name="notas"
        placeholder="Notas adicionales (opcional)"
        className="w-full border p-2 rounded"
        rows={4}
        value={formData.notas}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Confirmar Agendamiento
      </button>
    </form>
  );
}
