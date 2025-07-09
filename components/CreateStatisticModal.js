import { useState } from "react";

export default function CreateStatisticModal({ onClose }) {
  const [tipo, setTipo] = useState("");
  const [cliente, setCliente] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [total, setTotal] = useState("");
  const [ganancia, setGanancia] = useState("");

  // Se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página al hacer submit

    const newStatistic = {
      id: Date.now(), // Genera un ID único temporal
      tipo,
      cliente,
      descripcion,
      fecha,
      total: parseFloat(total),
      ganancia: parseFloat(ganancia),
    };

    try {
      const res = await fetch("/api/statistics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStatistic), // convierte la venta en texto JSON para que la API lo entienda
      });

      if (res.ok) {
        // Guarda las ventas personalizados localmente en el navegador
        const storedStatistics =
          JSON.parse(localStorage.getItem("customStatistics")) || [];
        localStorage.setItem(
          "customStatistics",
          JSON.stringify([...storedStatistics, newStatistic])
        );

        alert("Venta creada correctamente");
        onClose();
      } else {
        alert("Error al crear la venta");
      }
    } catch (error) {
      console.error(error);
      alert("Error al crear la venta");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-400 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Crear Venta</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Tipo:</label>
            <input
              type="text"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold">Cliente:</label>
            <input
              type="text"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              required
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold">Descripción:</label>
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold">Fecha:</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold">Total:</label>
            <input
              type="number"
              min={0}
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              required
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold">Ganancia:</label>
            <input
              type="number"
              min={0}
              value={ganancia}
              onChange={(e) => setGanancia(e.target.value)}
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
