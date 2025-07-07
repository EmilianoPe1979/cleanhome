import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars, // Para el menú hamburguesa
    faHome, // Para Inicio
    faBrush, // Ícono para Servicios (limpieza)
    faBoxesStacked, // Para Productos (ya lo tenías, buen ícono)
    faChartSimple, // Ícono para Estadísticas
    faCircleInfo, // Ícono para Acerca de Nosotros
    faBroom, // Mantendremos la escoba para el logo principal de Clean Home
} from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
    const currentYear = new Date().getFullYear();
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Navbar Mejorado */}
            <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 shadow-lg sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    {/* Logo del Sitio */}
                    <Link href="/" className="text-3xl font-extrabold tracking-wide flex items-center group">
                        <FontAwesomeIcon icon={faBroom} className="me-3 text-blue-200 group-hover:rotate-6 transition-transform duration-300" />
                        <span className="text-blue-100">Clean</span> <span className="text-white ms-1">Home</span>
                    </Link>

                    {/* Botón de Menú para Móviles */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white text-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    {/* Enlaces de Navegación */}
                    <div
                        className={`md:flex items-center space-x-8 text-lg font-medium ${open ? "block mt-4 absolute top-full right-4 bg-blue-700 p-4 rounded-md shadow-xl z-40 md:relative md:top-auto md:right-auto md:bg-transparent md:p-0 md:rounded-none md:shadow-none w-auto" : "hidden"
                            } md:mt-0`}
                    >
                        {/* Inicio */}
                        <Link href="/" className="hover:text-blue-200 transition-colors duration-300 flex items-center py-2 md:py-0">
                            <FontAwesomeIcon icon={faHome} className="me-2 text-blue-300" />
                            Inicio
                        </Link>

                        {/* Servicios */}
                        <Link href="/services" className="hover:text-blue-200 transition-colors duration-300 flex items-center py-2 md:py-0">
                            <FontAwesomeIcon icon={faBrush} className="me-2 text-blue-300" />
                            Servicios
                        </Link>

                        {/* Productos */}
                        <Link href="/products" className="hover:text-blue-200 transition-colors duration-300 flex items-center py-2 md:py-0">
                            <FontAwesomeIcon icon={faBoxesStacked} className="me-2 text-blue-300" />
                            Productos
                        </Link>

                        {/* Estadísticas */}
                        <Link href="/statistics" className="hover:text-blue-200 transition-colors duration-300 flex items-center py-2 md:py-0">
                            <FontAwesomeIcon icon={faChartSimple} className="me-2 text-blue-300" />
                            Estadísticas
                        </Link>

                        {/* Acerca de Nosotros */}
                        <Link href="/about" className="hover:text-blue-200 transition-colors duration-300 flex items-center py-2 md:py-0">
                            <FontAwesomeIcon icon={faCircleInfo} className="me-2 text-blue-300" />
                            Acerca de Nosotros
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Contenido Principal */}
            <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
                {children}
            </main>

            {/* Footer Mejorado */}
            <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 text-center text-sm shadow-inner mt-8">
                <div className="max-w-6xl mx-auto">
                    <p className="mb-2">
                        Tu aliado para un hogar impecable y un estilo de vida más fácil.
                    </p>
                    <div className="flex justify-center space-x-4 mb-3">
                    </div>
                    <small>&copy; {currentYear} Clean Home. Todos los derechos reservados.</small>
                    <p className="mt-1 text-xs opacity-80">
                        Diseñado con pasión por la limpieza y el bienestar.
                    </p>
                </div>
            </footer>
        </div>
    );
}

