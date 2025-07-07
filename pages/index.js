import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Clean Home | Tu Solución Integral</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
        {/* Sección del Banner (inspirado en tu diseño) */}
        <section className="relative w-full h-auto bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          {/* Fondo abstracto con formas */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="currentColor" fillOpacity="0.5" d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,112,576,144C672,176,768,235,864,229.3C960,224,1056,155,1152,122.7C1248,91,1344,96,1392,98.7L1440,101.3L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>

          {/* Contenido principal del banner */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-start w-full max-w-7xl mx-auto">
            {/* Texto y Botones */}
            <div className="text-center md:text-left md:w-2/3 lg:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                <span className="block text-green-300">CLEANING</span> SERVICES
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg mx-auto md:mx-0">
                Excelencia & Profesionalismo para un hogar impecable y feliz.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link
                  href="/services"
                  className="px-8 py-4 bg-green-400 rounded-full shadow-lg text-blue-900 font-semibold hover:bg-green-500 transition-all duration-300 transform hover:scale-105"
                >
                  Explorar Servicios
                </Link>
                <Link
                  href="/products"
                  className="px-8 py-4 border-2 border-white rounded-full shadow-lg text-white font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Ver Productos
                </Link>
              </div>
            </div>

            {/* Imágenes circulares y persona (simuladas con placeholders y el logo principal) */}
            <div className="md:w-1/3 lg:w-1/2 flex justify-center items-center relative min-h-[300px] md:min-h-[400px]">
       
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/clean.png" // Usamos tu logo aquí como el principal para mantener la coherencia
                  alt="Clean Home Hero Image"
                  width={400}
                  height={400}
                  className="object-contain rounded-full shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105"
                  priority
                />
              </div>

              {/* Círculos con imágenes - Estos son placeholders, deberías reemplazarlos con tus imágenes reales */}
              {/* Círculo 1 */}
              <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/aseadora.png" // Placeholder: Reemplaza con tu imagen
                  alt="Bucket and Mop"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>

              {/* Círculo 2 */}
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/jardinero.png" // Placeholder: Reemplaza con tu imagen
                  alt="Glove and Cloth"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* El resto de tu contenido de la landing page iría aquí si lo tuvieras */}
        {/* Por ejemplo, la sección de texto y el logo en la parte derecha que tenías inicialmente */}
        <section className="p-8 mt-12 bg-white rounded-lg shadow-xl text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Transformamos tu espacio en un verdadero hogar.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            En Clean Home, te ofrecemos soluciones completas y personalizadas para que disfrutes de un ambiente limpio, ordenado y armonioso, sin preocupaciones.
          </p>
          <div className="flex items-center justify-center gap-4">

          </div>
        </section>
      </main>
    </>
  );
}
