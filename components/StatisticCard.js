import Link from "next/link";

// /components/StatisticCard.js
import React from "react";

export default function StatisticCard({ statistic }) {
  const porcentaje = Math.min(
    (statistic.ganancia / statistic.total) * 100,
    100
  ); // Para no pasar de 100%

  return (
    <Link href={`/statistics/${statistic.id}`} className="block">
      <div className="bg-gradient-to-r from-cyan-200 to-slate-100 border p-4 rounded shadow hover:shadow-lg transition min-h-40">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-blue-700">
            Venta #{statistic.id} - {statistic.tipo.toUpperCase()}
          </h2>
          <span className="text-sm text-gray-500">{statistic.fecha}</span>
        </div>

        <p className="text-gray-700 mb-1">
          <strong>Cliente:</strong> {statistic.cliente}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Descripción:</strong> {statistic.descripcion}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Total:</strong> ${statistic.total.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
