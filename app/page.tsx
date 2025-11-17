import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#F9FBFF] to-[#EEF6FF]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/isotipo.png"
              alt="Conext Logo"
              width={120}
              height={120}
              className="rounded-2xl"
            />
          </div>

          {/* Título */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conext
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Conecta con personas de tu ciudad. Únete a planes en 1 toque.
          </p>

          {/* Enlaces legales */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Información Legal
            </h2>
            
            <Link 
              href="/privacy"
              className="block w-full bg-[#6BC4B8] hover:bg-[#5AB3A7] text-white font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              📄 Política de Privacidad
            </Link>

            <Link 
              href="/delete-account"
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              🗑️ Eliminar mi cuenta
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-12 text-sm text-gray-500">
            <p>© 2025 Conext. Todos los derechos reservados.</p>
            <p className="mt-2">
              Contacto: <a href="mailto:conext2025@gmail.com" className="text-[#6BC4B8] hover:underline">conext2025@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
