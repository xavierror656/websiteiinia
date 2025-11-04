import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SiteHeader from '../components/SiteHeader';
import initLandingPage from '../landingPage';

const VisionPage = () => {
  useEffect(() => {
    const cleanup = initLandingPage();
    return cleanup;
  }, []);

  return (
    <div className="tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] tw-text-black dark:tw-bg-black dark:tw-text-white">
      <div className="tw-absolute tw-inset-0 tw--z-10 tw-bg-gradient-to-br tw-from-[#dcfce7] tw-via-white tw-to-[#e0f2fe] dark:tw-from-[#0f172a] dark:tw-via-[#0b1120] dark:tw-to-[#082f49]"></div>

      <SiteHeader />

      <main className="tw-mx-auto tw-flex tw-w-[92%] tw-max-w-6xl tw-flex-1 tw-flex-col tw-gap-16 tw-pt-32 tw-pb-20">
        <section className="tw-grid tw-gap-10 lg:tw-grid-cols-[1.2fr,1fr]">
          <article className="tw-flex tw-flex-col tw-gap-6">
            <span className="tw-inline-flex tw-w-fit tw-rounded-full tw-bg-[#bbf7d0] tw-px-4 tw-py-2 tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.4em] tw-text-[#0f172a] dark:tw-bg-[#134e4a] dark:tw-text-[#6ee7b7]">
              Computer Vision
            </span>
            <h1 className="tw-text-4xl tw-font-semibold tw-leading-tight tw-text-[#03283c] dark:tw-text-white lg:tw-text-6xl">
              Analiza, estructura y entiende imágenes en tiempo real.
            </h1>
            <p className="tw-text-lg tw-text-gray-600 dark:tw-text-gray-300 lg:tw-w-4/5">
              Pixa Vision provee pipelines de visión por computador listos para producción: detección de objetos, OCR, monitoreo de calidad
              y seguimiento avanzado. Integrado con la suite Pixa, puedes activar notificaciones, automatizar decisiones y almacenar insights
              para tus equipos.
            </p>
            <div className="tw-flex tw-flex-wrap tw-gap-4">
              <a href="#request-access" className="btn !tw-bg-[#14b8a6] !tw-text-black hover:!tw-translate-y-[-2px] tw-px-6 tw-py-3">
                Solicitar acceso anticipado
              </a>
              <Link
                to="/agent"
                className="btn !tw-bg-transparent !tw-border !tw-border-[#0f766e] !tw-text-[#0f766e] hover:!tw-bg-[#0f766e]/10 dark:!tw-border-white dark:!tw-text-white dark:hover:!tw-bg-white/10"
              >
                Integrar con agentes
              </Link>
            </div>
          </article>

          <aside className="tw-rounded-3xl tw-border tw-border-white/60 tw-bg-white/75 tw-p-8 tw-shadow-xl tw-backdrop-blur-lg dark:tw-border-white/10 dark:tw-bg-[#0b1120]/80">
            <h2 className="tw-text-2xl tw-font-semibold tw-text-[#03283c] dark:tw-text-white">Casos de uso</h2>
            <ul className="tw-mt-6 tw-space-y-5">
              <li className="tw-flex tw-gap-3">
                <span className="tw-text-2xl tw-text-[#14b8a6] dark:tw-text-[#2dd4bf]">
                  <i className="bi bi-bounding-box"></i>
                </span>
                <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
                  <strong className="tw-text-base tw-text-[#03283c] dark:tw-text-white">Monitoreo visual.</strong> Detecta anomalías en líneas de producción y
                  activa alertas automáticas.
                </p>
              </li>
              <li className="tw-flex tw-gap-3">
                <span className="tw-text-2xl tw-text-[#14b8a6] dark:tw-text-[#2dd4bf]">
                  <i className="bi bi-receipt-cutoff"></i>
                </span>
                <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
                  <strong className="tw-text-base tw-text-[#03283c] dark:tw-text-white">OCR inteligente.</strong> Transcribe documentos físicos y los envía a tus
                  sistemas de gestión.
                </p>
              </li>
              <li className="tw-flex tw-gap-3">
                <span className="tw-text-2xl tw-text-[#14b8a6] dark:tw-text-[#2dd4bf]">
                  <i className="bi bi-camera-video"></i>
                </span>
                <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
                  <strong className="tw-text-base tw-text-[#03283c] dark:tw-text-white">Seguimiento en vivo.</strong> Analiza video streams para seguridad, retail y
                  logística.
                </p>
              </li>
            </ul>
            <div className="tw-mt-8 tw-grid tw-gap-4 sm:tw-grid-cols-2">
              <div className="tw-rounded-2xl tw-border tw-border-white/60 tw-bg-white/80 tw-p-4 dark:tw-border-white/10 dark:tw-bg-[#0b1120]/80">
                <p className="tw-text-sm tw-font-semibold tw-text-[#03283c] dark:tw-text-white">SDK multiplataforma</p>
                <span className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">iOS, Android, Web y edge devices listos.</span>
              </div>
              <div className="tw-rounded-2xl tw-border tw-border-white/60 tw-bg-white/80 tw-p-4 dark:tw-border-white/10 dark:tw-bg-[#0b1120]/80">
                <p className="tw-text-sm tw-font-semibold tw-text-[#03283c] dark:tw-text-white">Inference streaming</p>
                <span className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">Inferencias &lt; 100ms para decisiones críticas.</span>
              </div>
              <div className="tw-rounded-2xl tw-border tw-border-white/60 tw-bg-white/80 tw-p-4 dark:tw-border-white/10 dark:tw-bg-[#0b1120]/80">
                <p className="tw-text-sm tw-font-semibold tw-text-[#03283c] dark:tw-text-white">Segmentación precisa</p>
                <span className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">Modelos entrenados con tus datasets propietarios.</span>
              </div>
              <div className="tw-rounded-2xl tw-border tw-border-white/60 tw-bg-white/80 tw-p-4 dark:tw-border-white/10 dark:tw-bg-[#0b1120]/80">
                <p className="tw-text-sm tw-font-semibold tw-text-[#03283c] dark:tw-text-white">Alertas contextualizadas</p>
                <span className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">Integración con equipos, APIs y sistemas IoT.</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="tw-grid tw-gap-8 lg:tw-grid-cols-3">
          <div className="tw-rounded-3xl tw-border tw-border-white/60 tw-bg-white/75 tw-p-6 tw-shadow-lg tw-backdrop-blur-lg dark:tw-border-white/10 dark:tw-bg-[#0b1120]/80">
            <h3 className="tw-text-lg tw-font-semibold tw-text-[#03283c] dark:tw-text-white">Integración end-to-end</h3>
            <p className="tw-mt-3 tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
              Conecta cámaras, sensores y fuentes de datos en tiempo real; responde con acciones automáticas en tus sistemas.
            </p>
          </div>
          <div className="tw-rounded-3xl tw-border tw-border-white/60 tw-bg-white/75 tw-p-6 tw-shadow-lg tw-backdrop-blur-lg dark:tw-border-white/10 dark:tw-bg-[#0b1120]/80">
            <h3 className="tw-text-lg tw-font-semibold tw-text-[#03283c] dark:tw-text-white">Modelos custom</h3>
            <p className="tw-mt-3 tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
              Entrena con tus datos privados, define zonas de interés y activa reglas para cada contexto operativo.
            </p>
          </div>
          <div className="tw-rounded-3xl tw-border tw-border-white/60 tw-bg-white/75 tw-p-6 tw-shadow-lg tw-backdrop-blur-lg dark:tw-border-white/10 dark:tw-bg-[#0b1120]/80">
            <h3 className="tw-text-lg tw-font-semibold tw-text-[#03283c] dark:tw-text-white">Panel de insights</h3>
            <p className="tw-mt-3 tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">
              Visualiza detecciones, tasa de falsos positivos y recomendaciones para mejorar tus flujos.
            </p>
          </div>
        </section>
      </main>

      <footer className="tw-border-t tw-border-white/40 tw-bg-white/75 tw-py-8 tw-text-sm tw-text-gray-600 tw-backdrop-blur-lg dark:tw-border-white/10 dark:tw-bg-[#0b1120]/75 dark:tw-text-gray-300">
        <div className="tw-mx-auto tw-flex tw-w-[92%] tw-max-w-6xl tw-flex-col tw-gap-3 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between">
          <span>© {new Date().getFullYear()} Pixa Vision. Innovando con visión por computador.</span>
          <div className="tw-flex tw-gap-4">
            <Link to="/" className="header-links !tw-text-[#03283c] dark:!tw-text-white">
              Volver al inicio
            </Link>
            <a href="#request-access" className="header-links !tw-text-[#03283c] dark:!tw-text-white">
              Programa beta
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisionPage;
