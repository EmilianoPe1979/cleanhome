import { useState, useEffect } from "react";
import StatisticCard from "@/components/StatisticCard";
import CreateStatisticButton from "@/components/CreateStatisticButton";
import StatisticsFilter from "@/components/StatisticsFilter";

export default function Estadisticas() {
  const [filtro, setFiltro] = useState("todos");
  const [statistics, setStatistics] = useState([]);

  const ventasFiltradas =
    filtro === "todos"
      ? statistics
      : statistics.filter((statistic) => statistic.tipo === filtro);

  // Llamar a la API local cuando el componente se monta
  useEffect(() => {
    const fetchStatistics = async () => {
      const res = await fetch("/api/statistics");
      const apiStatistics = await res.json();

      // Obtiene las ventas personalizadas desde localStorage
      const customStatistics =
        JSON.parse(localStorage.getItem("customStatistics")) || [];

      // Une las ventas de la API + los del localStorage
      setStatistics([...apiStatistics, ...customStatistics]);
    };
    fetchStatistics();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">
        Ventas y Estadísticas
      </h1>

      <StatisticsFilter filtro={filtro} setFiltro={setFiltro} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ventasFiltradas.length > 0 ? (
          ventasFiltradas.map((statistic) => (
            <StatisticCard key={statistic.id} statistic={statistic} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">
            No hay ventas para el tipo seleccionado.
          </p>
        )}
      </div>

      <CreateStatisticButton />
    </div>
  );
}
