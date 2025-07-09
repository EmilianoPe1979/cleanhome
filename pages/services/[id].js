import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EditProductButton from "@/components/EditProductButton"; // Componente para editar servicios
import DeleteProductButton from "@/components/DeleteProductButton"; // Componente para eliminar servicios
import EditServiceModal from "@/components/EditServiceModal";

export default function ServiceDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [service, setService] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchService = async () => {
      try {
        // Obtén servicios de la API
        const res = await fetch("/api/services");
        const apiServices = await res.json();

        // Obtén servicios personalizados del localStorage
        const customServices =
          JSON.parse(localStorage.getItem("customServices")) || [];

        // Une todos los servicios y busca el actual
        const allServices = [...apiServices, ...customServices];
        const foundService = allServices.find((p) => String(p.id) === id);

        if (!foundService) {
          alert("Servicio no encontrado");
          router.push("/services");
          return;
        }

        setService(foundService);
      } catch (error) {
        console.error(error);
        alert("Error al cargar el servicio");
        router.push("/services");
      }
    };

    fetchService();
  }, [id, router]);

  const handleDelete = () => {
    if (!confirm("¿Seguro que quieres eliminar este servicio?")) return;

    const storedServices =
      JSON.parse(localStorage.getItem("customServices")) || [];
    const updatedServices = storedServices.filter((p) => String(p.id) !== id);
    localStorage.setItem("customServices", JSON.stringify(updatedServices));

    alert("Servicio eliminado correctamente");
    router.push("/services");
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  if (!service) return null; // Evita renderizar si el servicio no se ha cargado

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={service.image}
            alt={service.name}
            width={600}
            height={600}
            className="rounded object-cover w-full"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
          <p className="text-xl text-green-600 font-semibold mb-4">
            ${service.price}
          </p>
          {service.description && (
            <p className="text-gray-700 mb-6">{service.description}</p>
          )}

          <div className="flex gap-4 flex-wrap">
            <EditProductButton
              onClick={handleEdit}
              disabled={!isCustomService(service)}
            />

            <DeleteProductButton
              onClick={handleDelete}
              disabled={!isCustomService(service)}
            />

            <Link
              href="/services"
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
      {showEditModal && (
        <EditServiceModal
          service={service}
          onClose={() => {
            setShowEditModal(false);
            router.push("/services"); // Regresa a la lista de servicios
          }}
        />
      )}
    </div>
  );
}

// Determina si el servicio es personalizado
function isCustomService(service) {
  return service && String(service.id).length >= 13; // Date.now() genera IDs con 13 dígitos
}
