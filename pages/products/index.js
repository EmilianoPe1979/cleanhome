import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import CartIcon from "@/components/CartIcon";
import CreateProductButton from "@/components/CreateProductButton";

export default function Productos() {
  const [products, setProducts] = useState([]);

  // Llamar a la API local cuando el componente se monta
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const apiProducts = await res.json();

      // Obtiene productos personalizados desde localStorage
      const customProducts =
        JSON.parse(localStorage.getItem("customProducts")) || [];

      // Une los productos de la API + los del localStorage
      setProducts([...apiProducts, ...customProducts]);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-4">
        Productos de Limpieza
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CartIcon />

      <CreateProductButton />
    </div>
  );
}
