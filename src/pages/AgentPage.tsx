import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SiteHeader from '../components/SiteHeader';
import initLandingPage from '../landingPage';

const AgentPage = () => {
  useEffect(() => {
    const cleanup = initLandingPage();
    return cleanup;
  }, []);

  return (
    <div className="tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] tw-text-black dark:tw-bg-black dark:tw-text-white">
      <div className="tw-absolute tw-inset-0 tw--z-10 tw-bg-gradient-to-br tw-from-[#dbeafe] tw-via-white tw-to-[#eef2ff] dark:tw-from-[#111827] dark:tw-via-[#0f172a] dark:tw-to-[#111827]"></div>

      <SiteHeader />

      <main className="tw-mx-auto tw-flex tw-w-[92%] tw-max-w-6xl tw-flex-1 tw-flex-col tw-gap-16 tw-pt-32 tw-pb-20">
        <section className="tw-grid tw-gap-10 lg:tw-grid-cols-[1.2fr,1fr]">
          <article className="tw-flex tw-flex-col tw-gap-6">
            <span className="tw-inline-flex tw-w-fit tw-rounded-full tw-bg-[#e0f2fe] tw-px-4 tw-py-2 tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.4em] tw-text-[#0f172a] dark:tw-bg-[#1e293b] dark:tw-text-[#93c5fd]">
              Conversational AI
            </span>
            <h1 className="tw-text-4xl tw-font-semibold tw-leading-tight tw-text-[#0f172a] dark:tw-text-white lg:tw-text-6xl">
              Diseña agentes inteligentes listos para producción en minutos.
            </h1>
            <p className="tw-text-lg tw-text-gray-600 dark:tw-text-gray-300 lg:tw-w-4/5">
              Pixa Agent combina orquestación multi-modelo, memoria conversacional y tooling avanzado para desplegar asistentes que
              entienden tu negocio. Conecta APIs, bases de conocimiento y flujos personalizados sin abandonar la experiencia visual
              de Pixa.
            </p>
            <div className="tw-flex tw-flex-wrap tw-gap-4">
              <a href="#request-demo" className="btn !tw-bg-[#6366f1] !tw-text-white hover:!tw-translate-y-[-2px] tw-px-6 tw-py-3">
                Agenda una demo
              </a>
              <Link
                to="/"
                className="btn !tw-bg-transparent !tw-border !tw-border-[#0f172a] !tw-text-[#0f172a] hover:!tw-bg-[#0f172a]/10 dark:!tw-border-white dark:!tw-text-white dark:hover:!tw-bg-white/10"
              >
                Ver documentación
              </Link>
            </div>
          </article>

          <aside className="tw-rounded-3xl tw-border tw-border-white/60 tw-bg-white/70 tw-p-8 tw-shadow-xl tw-backdrop-blur-lg dark:tw-border-white/10 dark:tw-bg-[#111827]/80">
            <h2 className="tw-text-2xl tw-font-semibold tw-text-[#0f172a] dark:tw-text-white">Capacidades clave</h2>
            <ul className="tw-mt-6 tw-space-y-5">
              <li className="tw-flex tw-gap-3">
                <span className="tw-text-2xl tw-text-[#6366f1] dark:tw-text-[#8b5cf6]">
                  <i className="bi bi-diagram-3"></i>
                </span>
                <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
                  <strong className="tw-text-base tw-text-[#0f172a] dark:tw-text-white">Flujos visuales.</strong> Diseña rutas condicionales, invoca
                  funciones y maneja errores con nodos reutilizables.
                </p>
              </li>
              <li className="tw-flex tw-gap-3">
                <span className="tw-text-2xl tw-text-[#6366f1] dark:tw-text-[#8b5cf6]">
                  <i className="bi bi-memory"></i>
                </span>
                <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
                  <strong className="tw-text-base tw-text-[#0f172a] dark:tw-text-white">Memoria persistente.</strong> Mantén contexto entre sesiones y
                  sincroniza con tus CRMs o bases vectoriales.
                </p>
              </li>
              <li className="tw-flex tw-gap-3">
                <span className="tw-text-2xl tw-text-[#6366f1] dark:tw-text-[#8b5cf6]">
                  <i className="bi bi-graph-up-arrow"></i>
                </span>
                <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
                  <strong className="tw-text-base tw-text-[#0f172a] dark:tw-text-white">Analítica integrada.</strong> Observa métricas de adopción,
                  tiempos de respuesta y satisfacción en tiempo real.
                </p>
              </li>
            </ul>
            <div className="tw-mt-8 tw-grid tw-gap-4 sm:tw-grid-cols-2">
              <div className="tw-rounded-2xl tw-border tw-border-white/60 tw-bg-white/80 tw-p-4 dark:tw-border-white/10 dark:tw-bg-[#111827]/80">
                <p className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-semibold">
                  <i className="bi bi-slack"></i> Slack
                </p>
                <span className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">Workflows, tickets y notificaciones</span>
              </div>
              <div className="tw-rounded-2xl tw-border tw-border-white/60 tw-bg-white/80 tw-p-4 dark:tw-border-white/10 dark:tw-bg-[#111827]/80">
                <p className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-semibold">
                  <i className="bi bi-whatsapp"></i> WhatsApp
                </p>
                <span className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">Canal oficial y mensajes enriquecidos</span>
              </div>
              <div className="tw-rounded-2xl tw-border tw-border-white/60 tw-bg-white/80 tw-p-4 dark:tw-border-white/10 dark:tw-bg-[#111827]/80">
                <p className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-semibold">
                  <i className="bi bi-hdd-rack"></i> CRM internos
                </p>
                <span className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">Dynamics, Salesforce y bases propietarias</span>
              </div>
              <div className="tw-rounded-2xl tw-border tw-border-white/60 tw-bg-white/80 tw-p-4 dark:tw-border-white/10 dark:tw-bg-[#111827]/80">
                <p className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-semibold">
                  <i className="bi bi-code-slash"></i> SDK JS/Python
                </p>
                <span className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">Embeds, workers y funciones serverless</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="tw-grid tw-gap-8 lg:tw-grid-cols-3">
          <div className="tw-rounded-3xl tw-border tw-border-white/60 tw-bg-white/70 tw-p-6 tw-shadow-lg tw-backdrop-blur-lg dark:tw-border-white/10 dark:tw-bg-[#111827]/80">
            <h3 className="tw-text-lg tw-font-semibold tw-text-[#0f172a] dark:tw-text-white">Orquestación multi-modelo</h3>
            <p className="tw-mt-3 tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
              Alterna entre modelos según el contexto, combina APIs y agrega reglas de negocio sin escribir código repetitivo.
            </p>
          </div>
          <div className="tw-rounded-3xl tw-border tw-border-white/60 tw-bg-white/70 tw-p-6 tw-shadow-lg tw-backdrop-blur-lg dark:tw-border-white/10 dark:tw-bg-[#111827]/80">
            <h3 className="tw-text-lg tw-font-semibold tw-text-[#0f172a] dark:tw-text-white">Controles de seguridad</h3>
            <p className="tw-mt-3 tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
              Define filtros de contenido, auditorías y capas de aprobación antes de responder a tus usuarios finales.
            </p>
          </div>
          <div className="tw-rounded-3xl tw-border tw-border-white/60 tw-bg-white/70 tw-p-6 tw-shadow-lg tw-backdrop-blur-lg dark:tw-border-white/10 dark:tw-bg-[#111827]/80">
            <h3 className="tw-text-lg tw-font-semibold tw-text-[#0f172a] dark:tw-text-white">Insights accionables</h3>
            <p className="tw-mt-3 tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
              Visualiza resultados, identifica oportunidades de mejora y replica agentes exitosos en cuestión de minutos.
            </p>
          </div>
        </section>
      </main>

      <footer className="tw-border-t tw-border-white/40 tw-bg-white/70 tw-py-8 tw-text-sm tw-text-gray-600 tw-backdrop-blur-lg dark:tw-border-white/10 dark:tw-bg-[#0f172a]/70 dark:tw-text-gray-300">
        <div className="tw-mx-auto tw-flex tw-w-[92%] tw-max-w-6xl tw-flex-col tw-gap-3 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between">
          <span>© {new Date().getFullYear()} Pixa Agent. Todos los derechos reservados.</span>
          <div className="tw-flex tw-gap-4">
            <Link to="/" className="header-links !tw-text-[#0f172a] dark:!tw-text-white">
              Volver al inicio
            </Link>
            <a href="#request-demo" className="header-links !tw-text-[#0f172a] dark:!tw-text-white">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgentPage;
