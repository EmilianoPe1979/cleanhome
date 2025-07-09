export default function handler(req, res) {
  const services = [
    {
      id: 1,
      name: "Jardinero",
      price: 30000,
      image: "/jardinero.jpg",
      description: "Jardinero experto en rosas.",
    },
    {
      id: 2,
      name: "Pintor",
      price: 60000,
      image: "/pintor.jpg",
      description: "Pintor austriaco profesional en gama de colores.",
    },
    {
      id: 3,
      name: "Limpiador de pisos",
      price: 25000,
      image: "/limpiador.jpg",
      description: "Limpiador deja el piso reluciente.",
    },
  ];

  res.status(200).json(services);
}
