import { useState, useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";
import ServiceIcon from "@/components/ServiceIcon";
import CreateServiceButton from "@/components/CreateServiceButton";
import ServicesFilter from "@/components/ServicesFilter";

export default function Servicios() {
  const [services, setServices] = useState([]);
  const [filtro, setFiltro] = useState("todos");

  const serviciosFiltrados =
    filtro === "todos"
      ? services
      : services.filter((services) => services.funcion === filtro);

  // Llamar a la API local cuando el componente se monta
  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("/api/services");
      const apiServices = await res.json();

      // Obtiene servicios personalizados desde localStorage
      const customServices =
        JSON.parse(localStorage.getItem("customServices")) || [];

      // Une los productos de la API + los del localStorage
      setServices([...apiServices, ...customServices]);
    };
    fetchServices();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-2">
        Servicios del hogar
      </h1>
      <p className="text-center text-gray-500 text-xl mb-4">
        Recuerde que se cobra el envio por la sesión
      </p>

      <ServicesFilter filtro={filtro} setFiltro={setFiltro} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {serviciosFiltrados.length > 0 ? (
          serviciosFiltrados.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">
            No hay servicios para la función seleccionada.
          </p>
        )}
      </div>

      <ServiceIcon />

      <CreateServiceButton />
    </div>
  );
}
