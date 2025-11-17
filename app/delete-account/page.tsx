import Image from "next/image";
import Link from "next/link";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-teal-500 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/isotipo.png"
              alt="Conext Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold">Conext</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Eliminar tu cuenta
        </h1>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Atención:</strong> Esta acción es permanente y no se puede deshacer.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            ¿Qué sucede cuando eliminas tu cuenta?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Se eliminarán todos tus datos personales (email, alias, avatar).</li>
            <li>Se borrarán todas tus respuestas a cuestionarios y puntuaciones.</li>
            <li>Se eliminarán tus planes creados y tu asistencia a eventos.</li>
            <li>Ya no podrás acceder a la aplicación con esta cuenta.</li>
            <li>Esta acción es <strong>irreversible</strong>.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Cómo eliminar tu cuenta
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Opción 1: Desde la aplicación
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Abre la app de Conext</li>
              <li>Ve a <strong>Cuenta</strong></li>
              <li>Pulsa en <strong>Eliminar cuenta</strong></li>
              <li>Confirma la eliminación</li>
            </ol>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Opción 2: Por email
            </h3>
            <p className="text-gray-700 mb-3">
              Si no puedes acceder a la app, envíanos un correo a:
            </p>
            <a
              href="mailto:conext2025@gmail.com?subject=Solicitud de eliminación de cuenta"
              className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors"
            >
              conext2025@gmail.com
            </a>
            <p className="text-sm text-gray-600 mt-3">
              Incluye en el asunto: &quot;Solicitud de eliminación de cuenta&quot; y en el mensaje tu email registrado.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Plazo de eliminación
          </h2>
          <p className="text-gray-700">
            Tu cuenta y todos tus datos serán eliminados en un plazo máximo de <strong>30 días</strong> desde que solicites la eliminación. Algunos datos técnicos pueden mantenerse temporalmente por requisitos legales o de seguridad.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            ¿Necesitas ayuda?
          </h2>
          <p className="text-gray-700 mb-3">
            Si tienes dudas o problemas para eliminar tu cuenta, contáctanos:
          </p>
          <p className="text-gray-700">
            📧 Email:{" "}
            <a
              href="mailto:conext2025@gmail.com"
              className="text-teal-600 hover:underline font-semibold"
            >
              conext2025@gmail.com
            </a>
          </p>
        </section>

        {/* Back button */}
        <div className="mt-12 pt-8 border-t">
          <Link
            href="/"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 Conext. Todos los derechos reservados.</p>
          <p className="mt-2">
            Contacto:{" "}
            <a
              href="mailto:conext2025@gmail.com"
              className="text-teal-600 hover:underline"
            >
              conext2025@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}