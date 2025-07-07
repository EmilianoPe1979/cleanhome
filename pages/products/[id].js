import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EditProductButton from "@/components/EditProductButton"; // Asegúrate de tener este componente si lo necesitas
import DeleteProductButton from "@/components/DeleteProductButton"; // Asegúrate de tener este componente si lo necesitas
import EditProductModal from "@/components/EditProductModal";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        // Obtén productos de la API
        const res = await fetch("/api/products");
        const apiProducts = await res.json();

        // Obtén productos personalizados del localStorage
        const customProducts =
          JSON.parse(localStorage.getItem("customProducts")) || [];

        // Une todos los productos y busca el actual
        const allProducts = [...apiProducts, ...customProducts];
        const foundProduct = allProducts.find((p) => String(p.id) === id);

        if (!foundProduct) {
          alert("Producto no encontrado");
          router.push("/products");
          return;
        }

        setProduct(foundProduct);
      } catch (error) {
        console.error(error);
        alert("Error al cargar el producto");
        router.push("/products");
      }
    };

    fetchProduct();
  }, [id, router]);

  const handleDelete = () => {
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;

    const storedProducts =
      JSON.parse(localStorage.getItem("customProducts")) || [];
    const updatedProducts = storedProducts.filter((p) => String(p.id) !== id);
    localStorage.setItem("customProducts", JSON.stringify(updatedProducts));

    alert("Producto eliminado correctamente");
    router.push("/products");
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  if (!product) return null; // Evita renderizar si el producto no se ha cargado

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="rounded object-cover w-full"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-green-600 font-semibold mb-4">
            ${product.price}
          </p>
          {product.description && (
            <p className="text-gray-700 mb-6">{product.description}</p>
          )}

          <div className="flex gap-4 flex-wrap">
            <EditProductButton
              onClick={handleEdit}
              disabled={!isCustomProduct(product)}
            />

            <DeleteProductButton
              onClick={handleDelete}
              disabled={!isCustomProduct(product)}
            />

            <Link
              href="/products"
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
      {showEditModal && (
        <EditProductModal
          product={product}
          onClose={() => {
            setShowEditModal(false);
            router.push("/products"); // Regresa a la lista de productos
          }}
        />
      )}
    </div>
  );
}

// Determina si el producto es personalizado
function isCustomProduct(product) {
  return product && String(product.id).length >= 13; // Date.now() genera IDs con 13 dígitos
}
