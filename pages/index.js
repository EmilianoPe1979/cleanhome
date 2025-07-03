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
        <title>AgroTracking | Home</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center p-8 bg-green-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Sistema de Registro de Visitas Técnicas
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Aplicación para registrar y consultar visitas realizadas por
            aprendices o instructores del SENA al campo
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/visits"
              className="px-6 py-3 bg-green-600 rounded shadow text-white hover:bg-green-700 transition-colors duration-300"
            >
              Visitas
            </Link>
            <Link
              href="/owners"
              className="px-6 py-3 bg-green-600 rounded shadow text-white hover:bg-green-700 transition-colors duration-300"
            >
              Dueños
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
