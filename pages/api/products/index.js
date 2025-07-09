export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Limpiador Multiusos Fabuloso",
      price: 15000,
      image: "/limpiador_multiuso.jpg",
      description: "Limpiador multiusos para superficies del hogar.",
      funcion: "limpiador",
    },
    {
      id: 2,
      name: "Detergente Líquido Ariel",
      price: 12000,
      image: "/detergente_liquido.webp",
      description: "Detergente líquido para ropa de color.",
      funcion: "detergente",
    },
    {
      id: 3,
      name: "Desinfectante LPS",
      price: 18000,
      image: "/desinfectante.jpg",
      description: "Desinfectante para pisos y baños.",
      funcion: "desinfectante",
    },
    {
      id: 4,
      name: "Limpiador Clorox",
      price: 35000,
      image: "/limpiador_lavanderia.jpg",
      description: "Limpiador de lavanderia Clorox.",
      funcion: "limpiador",
    },
    {
      id: 5,
      name: "Detergente Dura Wash",
      price: 20000,
      image: "/detergente_wash.webp",
      description: "Detergente liquido Dura Wash.",
      funcion: "detergente",
    },
  ];

  res.status(200).json(products);
}
