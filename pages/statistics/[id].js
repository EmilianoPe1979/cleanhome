import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import EditProductButton from "@/components/EditProductButton"; // Componente para editar servicios
import DeleteProductButton from "@/components/DeleteProductButton"; // Componente para eliminar servicios
import EditStatisticModal from "@/components/EditStatisticModal";

export default function StatisticDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [statistic, setStatistic] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchStatistic = async () => {
      try {
        // Obtén ventas de la API
        const res = await fetch("/api/statistics");
        const apiStatistics = await res.json();

        // Obtén ventas personalizados del localStorage
        const customStatistics =
          JSON.parse(localStorage.getItem("customStatistics")) || [];

        // Une todas las ventas y busca la actual
        const allStatistics = [...apiStatistics, ...customStatistics];
        const foundStatistic = allStatistics.find((p) => String(p.id) === id);

        if (!foundStatistic) {
          alert("Venta no encontrada");
          router.push("/statistics");
          return;
        }

        setStatistic(foundStatistic);
      } catch (error) {
        console.error(error);
        alert("Error al cargar la venta");
        router.push("/statistics");
      }
    };

    fetchStatistic();
  }, [id, router]);

  const handleDelete = () => {
    if (!confirm("¿Seguro que quieres eliminar esta venta?")) return;

    const storedStatistics =
      JSON.parse(localStorage.getItem("customStatistics")) || [];
    const updatedStatistics = storedStatistics.filter(
      (p) => String(p.id) !== id
    );
    localStorage.setItem("customStatistics", JSON.stringify(updatedStatistics));

    alert("Venta eliminada correctamente");
    router.push("/statistics");
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  if (!statistic) return null; // Evita renderizar si la venta no se ha cargado

  const porcentaje = Math.min(
    (statistic.ganancia / statistic.total) * 100,
    100
  ); // Para no pasar de 100%

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="bg-white rounded-lg shadow p-4 mb-4 border border-gray-200">
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
          <p className="text-gray-700 mb-2">
            <strong>Ganancia:</strong> ${statistic.ganancia.toLocaleString()}
          </p>

          {/* Barra visual de ganancia */}
          <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${porcentaje}%` }}
            ></div>
          </div>
          <p className="text-sm text-right text-gray-600 mt-1">
            {porcentaje.toFixed(1)}% de ganancia
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <EditProductButton
            onClick={handleEdit}
            disabled={!isCustomStatistic(statistic)}
          />

          <DeleteProductButton
            onClick={handleDelete}
            disabled={!isCustomStatistic(statistic)}
          />

          <Link
            href="/statistics"
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Volver
          </Link>
        </div>
      </div>
      {showEditModal && (
        <EditStatisticModal
          statistic={statistic}
          onClose={() => {
            setShowEditModal(false);
            router.push("/statistics"); // Regresa a la lista de ventas
          }}
        />
      )}
    </div>
  );
}

// Determina si la venta es personalizada
function isCustomStatistic(statistic) {
  return statistic && String(statistic.id).length >= 13; // Date.now() genera IDs con 13 dígitos
}
