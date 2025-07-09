import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateServiceModal from "./CreateServiceModal"; // Importamos el formulario de creación de servicios

export default function CreateServiceButton() {
  // Controla si el formulario se muestra o no
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <button
        onClick={openModal}
        className="flex align-middle fixed bottom-12 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 focus:outline-none"
      >
        <h1>Crear servicio</h1>
        <FontAwesomeIcon icon={faPlus} />
      </button>

      {/* Si showModal es true, renderiza el componente CreateProductModal */}
      {showModal && <CreateServiceModal onClose={closeModal} />}
    </>
  );
}
