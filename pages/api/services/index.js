export default function handler(req, res) {
  const services = [
    {
      id: 1,
      name: "Jardinero",
      price: 30000,
      image: "/jardinero.jpg",
      description: "Jardinero experto en rosas.",
      funcion: "tecnica",
    },
    {
      id: 2,
      name: "Pintor",
      price: 60000,
      image: "/pintor.jpg",
      description: "Pintor austriaco profesional en gama de colores.",
      funcion: "tecnica",
    },
    {
      id: 3,
      name: "Limpiador de pisos",
      price: 25000,
      image: "/limpiador.jpg",
      description: "Limpiador deja el piso reluciente.",
      funcion: "tecnica",
    },
    {
      id: 4,
      name: "Limpiadora general",
      price: 50000,
      image: "/limpiadora_general.png",
      description: "Casa limpia y perfecta sin nada de polvo.",
      funcion: "general",
    },
    {
      id: 5,
      name: "Limpiadora domestica (mascotas)",
      price: 75000,
      image: "/limpieza-de-hogares-con-mascotas.webp",
      description: "Los animales no serán problema con el orden.",
      funcion: "general",
    },
  ];

  res.status(200).json(services);
}
