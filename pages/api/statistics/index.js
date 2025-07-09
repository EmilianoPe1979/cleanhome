export default function handler(req, res) {
  const statistics = [
    {
      id: 1,
      tipo: "producto",
      cliente: "María Rodríguez",
      descripcion: "Limpiador multiusos y detergente líquido.",
      fecha: "2025-07-02",
      total: 42000,
      ganancia: 15000,
    },
    {
      id: 2,
      tipo: "servicio",
      cliente: "Carlos Pérez",
      descripcion:
        "Servicio de limpieza profunda para apartamento de 2 habitaciones.",
      fecha: "2025-07-01",
      total: 140000,
      ganancia: 60000,
    },
    {
      id: 3,
      tipo: "producto",
      cliente: "Laura Méndez",
      descripcion: "Desinfectante en spray, trapeador con cabezal giratorio.",
      fecha: "2025-06-29",
      total: 72000,
      ganancia: 20000,
    },
  ];

  res.status(200).json(statistics);
}
