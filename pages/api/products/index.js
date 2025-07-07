export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Limpiador Multiusos",
      price: 15000,
      image: "/limpiador_multiuso.jpg",
      description: "Limpiador multiusos para superficies del hogar.",
    },
    {
      id: 2,
      name: "Detergente Líquido",
      price: 12000,
      image: "/detergente_liquido.webp",
      description: "Detergente líquido para ropa de color.",
    },
    {
      id: 3,
      name: "Desinfectante",
      price: 18000,
      image: "/desinfectante.jpg",
      description: "Desinfectante para pisos y baños.",
    },
  ];

  res.status(200).json(products);
}
