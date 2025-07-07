import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateProductModal from "./CreateProductModal"; // Importamos el formulario de creación de productos

export default function CreateProductButton() {
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
        <h1>Crear producto</h1>
        <FontAwesomeIcon icon={faPlus} />
      </button>

      {/* Si showModal es true, renderiza el componente CreateProductModal */}
      {showModal && <CreateProductModal onClose={closeModal} />}
    </>
  );
}
