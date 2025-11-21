import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  const COMPANY = "Conext";
  const CONTACT = "conext2025@gmail.com";

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
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Política de Privacidad
        </h1>
        
        <p className="text-sm text-gray-500 mb-8">
          Última actualización: 21-11-2025
        </p>

        <div className="text-gray-700 space-y-3 mb-8">
          <p>
            Esta Política de Privacidad explica cómo Conext (&quot;la App&quot;, &quot;el Servicio&quot;) trata tus datos personales cuando utilizas nuestras funciones de comunicación, creación de perfil, cuestionarios y herramientas sociales.
          </p>
          <p>
            Al utilizar la App aceptas esta Política de Privacidad. Si no estás de acuerdo, puedes dejar de usar el Servicio o ejercer tus derechos según se indica al final del documento.
          </p>
        </div>

        {/* Sección 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Responsable del Tratamiento
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>- Responsable: {COMPANY}</p>
            <p>- Email de contacto: {CONTACT}</p>
            <p>- Finalidad del contacto: Solicitudes sobre privacidad, ejercicio de derechos y retirada de consentimiento.</p>
          </div>
        </section>

        {/* Sección 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Datos que recopilamos
          </h2>
          <p className="text-gray-700 mb-4">
            Recopilamos únicamente los datos necesarios para ofrecerte las funcionalidades de la App.
          </p>

          <div className="ml-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1. Datos de cuenta</h3>
              <ul className="text-gray-700 space-y-1">
                <li>- Alias o nombre público</li>
                <li>- Email</li>
                <li>- Avatar</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2. Datos de uso y comunicación</h3>
              <ul className="text-gray-700 space-y-1">
                <li>- Chats, mensajes o interacciones dentro de la App</li>
                <li>- Estados y reacciones que publiques</li>
                <li>- Información sobre conexiones, hora de conexión.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2.3. Cuestionarios (opcional, basado en consentimiento)</h3>
              <p className="text-gray-700 mb-2">Solo si tú lo aceptas expresamente:</p>
              <ul className="text-gray-700 space-y-1">
                <li>- Cuestionario de conexión social</li>
                <li>- Cuestionario sociodemográfico</li>
              </ul>
              <p className="text-gray-700 mt-2">Puedes retirar este consentimiento en cualquier momento (ver apartado 8).</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2.4. Permisos del dispositivo</h3>
              <ul className="text-gray-700 space-y-1">
                <li>- Ubicación (opcional)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sección 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Finalidades del tratamiento
          </h2>
          <p className="text-gray-700 mb-4">Tratamos tus datos para:</p>

          <div className="ml-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3.1. Proporcionar las funciones básicas de la App</h3>
              <ul className="text-gray-700 space-y-1">
                <li>- Mensajería</li>
                <li>- Conexiones sociales</li>
                <li>- Creación y edición del perfil</li>
                <li>- Gestión de la cuenta</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3.2. Funcionamiento y seguridad</h3>
              <ul className="text-gray-700 space-y-1">
                <li>- Prevención de fraude y comportamientos abusivos</li>
                <li>- Detección y resolución de errores</li>
                <li>- Seguridad técnica del servicio</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3.3. Personalización opcional (si lo aceptas)</h3>
              <ul className="text-gray-700 space-y-1">
                <li>- Recomendaciones sociales</li>
                <li>- Ajuste de contenido a tu perfil</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3.4. Mejora del servicio</h3>
              <ul className="text-gray-700 space-y-1">
                <li>- Estadísticas internas</li>
                <li>- Analítica esencial no publicitaria</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sección 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Consentimientos granulares
          </h2>
          <p className="text-gray-700 mb-4">Algunas funciones se basan en tu consentimiento explícito:</p>

          <div className="ml-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4.1. Cuestionario de conexión social</h3>
              <p className="text-gray-700">
                Opcional. Puedes retirarlo en cualquier momento enviando un email a: {CONTACT}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4.2. Cuestionario sociodemográfico</h3>
              <p className="text-gray-700">
                También opcional y revocable en cualquier momento, borrándolo o enviando un correo a {CONTACT}
              </p>
            </div>
          </div>
        </section>

        {/* Sección 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Base legal del tratamiento (RGPD)
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>- Ejecución del contrato: gestión de la cuenta y funcionalidades básicas.</li>
            <li>- Consentimiento: cuestionarios, ciertos datos opcionales y funciones sociales avanzadas.</li>
            <li>- Interés legítimo: seguridad, prevención de fraude, mejora del servicio.</li>
            <li>- Cumplimiento legal: gestión de solicitudes de usuarios y requerimientos legales.</li>
          </ul>
        </section>

        {/* Sección 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Plazos de conservación
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>- Cuenta y datos asociados: mientras tu cuenta esté activa.</li>
            <li>- Datos de cuestionarios: hasta que retires tu consentimiento o elimines tu cuenta.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Al eliminar tu cuenta, se eliminarán tus datos, salvo aquellos que debamos conservar por obligaciones legales.
          </p>
        </section>

        {/* Sección 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Destinatarios y encargados del tratamiento
          </h2>
          <p className="text-gray-700 mb-2">
            No vendemos tus datos ni los cedemos con fines publicitarios.
          </p>
          <p className="text-gray-700">
            Entre usuarios solo se muestran los datos que tú decides hacer públicos como alias o avatar.
          </p>
        </section>

        {/* Sección 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            8. Tus derechos
          </h2>
          <p className="text-gray-700 mb-3">Puedes ejercer:</p>
          <ul className="text-gray-700 space-y-1 mb-4">
            <li>- Acceso</li>
            <li>- Rectificación</li>
            <li>- Supresión</li>
            <li>- Oposición</li>
            <li>- Limitación</li>
            <li>- Portabilidad</li>
            <li>- Retirada del consentimiento</li>
          </ul>
          <p className="text-gray-700">
            Cómo ejercerlos: Enviando una solicitud a {CONTACT} o eliminando tu cuenta desde Ajustes &gt; Cuenta.
          </p>
        </section>

        {/* Sección 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            9. Seguridad
          </h2>
          <p className="text-gray-700 mb-3">Aplicamos medidas técnicas y organizativas para proteger tus datos:</p>
          <ul className="text-gray-700 space-y-1">
            <li>- Cifrado de contraseñas</li>
            <li>- Monitorización de actividad sospechosa</li>
            <li>- Servidores seguros con protocolos actualizados</li>
          </ul>
        </section>

        {/* Sección 11 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            11. Cambios en la Política de Privacidad
          </h2>
          <p className="text-gray-700">
            Podremos actualizar esta política por motivos legales, técnicos o funcionales. Cuando ocurra, te lo notificaremos dentro de la App o por email.
          </p>
        </section>

        {/* Sección 12 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            12. Contacto
          </h2>
          <p className="text-gray-700">
            Para consultas sobre privacidad: {CONTACT}
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