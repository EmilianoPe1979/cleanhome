/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      // Agrega estos dominios para permitir esas imágenes
      "img.freepik.com",
      "media.istockphoto.com",
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
