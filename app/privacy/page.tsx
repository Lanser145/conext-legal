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
          Última actualización: 15 octubre 2025
        </p>

        {/* Sección 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Responsable del tratamiento
          </h2>
          <div className="text-gray-700 space-y-2">
            <p><strong>Responsable:</strong> {COMPANY}</p>
            <p><strong>Contacto privacidad:</strong> {CONTACT}</p>
          </div>
        </section>

        {/* Sección 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Qué datos tratamos
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Datos de cuenta: email, alias, foto/avatares y ajustes.</li>
            <li>Uso del servicio: planes creados/seguidos, asistencia, interacciones básicas.</li>
            <li>Sociodemográfico (opcional): edad, estudios, ocupación u otros que muestres en el cuestionario.</li>
            <li>Cuestionario de conexión social (opcional): respuestas y puntuaciones derivadas.</li>
            <li>Dispositivo/diagnóstico: logs técnicos y métricas necesarias para mantener la app.</li>
          </ul>
        </section>

        {/* Sección 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Finalidades y bases legales
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              <strong>(a)</strong> Prestación del servicio (crear cuenta, organizar y descubrir quedadas): ejecución del contrato.
            </p>
            <p>
              <strong>(b)</strong> Personalización de propuestas y generación de insights: consentimiento (explícito para el cuestionario sociodemográfico y conexión social).
            </p>
            <p>
              <strong>(c)</strong> Seguridad, prevención de abusos y soporte: interés legítimo y cumplimiento legal.
            </p>
            <p>
              No realizamos comunicaciones comerciales ni publicidad de terceros.
            </p>
          </div>
        </section>

        {/* Sección 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Consentimientos granulares
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Cuestionario de conexión social:</strong> requiere tu consentimiento explícito antes de responder. Puedes retirarlo solicitándolo a {CONTACT} o eliminando tu cuenta desde Ajustes &gt; Cuenta. La retirada puede desactivar funciones que dependen de dicho consentimiento.
            </li>
            <li>
              <strong>Sociodemográfico:</strong> también es opcional y se basa en tu consentimiento. Puedes retirarlo solicitándolo a {CONTACT} o eliminando tu cuenta.
            </li>
          </ul>
        </section>

        {/* Sección 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Plazos de conservación
          </h2>
          <p className="text-gray-700">
            Datos de cuenta y respuestas a cuestionarios: mientras mantengas tu cuenta activa y hasta su eliminación, salvo que solicites antes el borrado cuando sea aplicable.
          </p>
        </section>

        {/* Sección 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Destinatarios y encargados
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              No vendemos tus datos ni los cedemos a terceros con fines publicitarios. Entre usuarios de la app solo se muestran los datos que decides hacer públicos (por ejemplo, alias, avatar, ciudad y la información ligada a tus planes).
            </p>
            <p>
              Utilizamos proveedores que actúan como encargados del tratamiento (p. ej., hosting, base de datos, analítica esencial) bajo contratos con cláusulas de protección de datos y medidas de seguridad adecuadas.
            </p>
          </div>
        </section>

        {/* Sección 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Tus derechos
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              Puedes ejercer acceso, rectificación, supresión, oposición, limitación, portabilidad y retirada del consentimiento.
            </p>
            <p>
              <strong>Cómo:</strong> enviando una solicitud a {CONTACT} o eliminando tu cuenta desde Ajustes &gt; Cuenta. La retirada del consentimiento puede implicar que no puedas seguir utilizando las funcionalidades que dependen de dicho consentimiento.
            </p>
            <p>
              También puedes reclamar ante la AEPD (Agencia Española de Protección de Datos).
            </p>
          </div>
        </section>

        {/* Sección 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            8. Menores de edad
          </h2>
          <p className="text-gray-700">
            La app no está dirigida a menores de 18 años. No permitimos el registro por debajo de esa edad. Si detectamos un caso, eliminaremos la cuenta y los datos.
          </p>
        </section>

        {/* Sección 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            9. Seguridad
          </h2>
          <p className="text-gray-700">
            Aplicamos medidas técnicas y organizativas para proteger la información (cifrado en tránsito, controles de acceso y registros de actividad).
          </p>
        </section>

        {/* Sección 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            10. Cambios en esta política
          </h2>
          <p className="text-gray-700">
            Podremos actualizar esta Política. Te avisaremos en la app. Si continúas usando el servicio tras la actualización, se entenderá que aceptas la nueva versión.
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