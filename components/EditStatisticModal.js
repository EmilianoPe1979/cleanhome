import { useState } from "react";

export default function EditStatisticModal({ statistic, onClose }) {
  const [tipo, setTipo] = useState(statistic.tipo || "");
  const [cliente, setCliente] = useState(statistic.cliente || "");
  const [descripcion, setDescripcion] = useState(statistic.descripcion || "");
  const [fecha, setFecha] = useState(statistic.fecha || "");
  const [total, setTotal] = useState(statistic.total || "");
  const [ganancia, setGanancia] = useState(statistic.ganancia || "");

  // Se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página al hacer submit

    const updatedStatistic = {
      ...statistic, // Toma los datos de la venta original
      tipo,
      cliente,
      descripcion,
      fecha,
      total: parseFloat(total),
      ganancia: parseFloat(ganancia),
    };

    // Actualiza en localStorage
    const storedStatistics =
      // Lee las ventas actuales del localStorage
      // Si no hay ventas, usamos [] como valor por defecto
      // Recorre cada venta p en el array con .map(...)
      // Si coinciden, reemplaza esa venta por el updatedStatistic (el nuevo que se editó)
      // Si no coinciden, deja la venta tal como está
      JSON.parse(localStorage.getItem("customStatistics")) || [];
    const updatedStatistics = storedStatistics.map((p) =>
      String(p.id) === String(statistic.id) ? updatedStatistic : p
    );
    localStorage.setItem("customStatistics", JSON.stringify(updatedStatistics));

    alert("Venta actualizada correctamente");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-blue-500 bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">Editar venta</h2>

        <div>
          <label className="block font-semibold">Tipo:</label>
          <input
            type="text"
            placeholder="Tipo de venta (producto/servicio)"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Cliente:</label>
          <input
            type="text"
            placeholder="Cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
            className="w-full border rounded p-2"
          ></input>
        </div>

        <div>
          <label className="block font-semibold">Descripción:</label>
          <input
            type="text"
            placeholder="Descripción"
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
            placeholder="URL de la imagen"
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
            placeholder="Precio total"
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
            placeholder="Ganancia de la venta"
            min={0}
            value={ganancia}
            onChange={(e) => setGanancia(e.target.value)}
            required
            className="w-full border rounded p-2"
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
