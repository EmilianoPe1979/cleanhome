import React from "react";

export default function ServicesFilter({ filtro, setFiltro }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
      <label className="text-gray-700 font-medium">Filtrar por función:</label>
      <select
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="todos">Todos</option>
        <option value="limpiador">Limpiador</option>
        <option value="detergente">Detergente</option>
        <option value="desinfectante">Desinfectante</option>
      </select>
    </div>
  );
}
