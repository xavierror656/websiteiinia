
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SiteHeader from '../components/SiteHeader';
import initLandingPage from '../landingPage';
import { asset } from '../utils/asset';
import VideoModal from "../components/VideoModal";

const VisionPage = () => {
  useEffect(() => {
    const cleanup = initLandingPage();
    return cleanup;
  }, []);

  return (
    <div className="tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] tw-text-black dark:tw-bg-black dark:tw-text-white">
      <SiteHeader />

      <section
        className="hero-section tw-relative tw-mt-20 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-lg:tw-mt-[100px]"
        id="hero-section"
      >

        <div className="tw-fixed tw-bg-[#000000af] dark:tw-bg-[#80808085] tw-top-0 tw-left-1/2 tw--translate-x-1/2 tw-z-20 tw-transition-opacity
          tw-duration-300 tw-scale-0 tw-opacity-0 tw-p-2
          tw-w-full tw-h-full tw-flex tw-place-content-center tw-place-items-center" id="video-container-bg">

          <div className="tw-max-w-[80vw] max-lg:tw-max-w-full max-lg:tw-w-full tw-scale-0 tw-transition-transform tw-duration-500 tw-p-6 tw-rounded-xl  max-lg:tw-px-2 tw-w-full tw-gap-2 tw-shadow-md
                    tw-h-[90vh] max-lg:tw-h-auto max-lg:tw-min-h-[400px] tw-bg-white dark:tw-bg-[#16171A] tw-max-h-full
                    " id="video-container">
            <div className="tw-w-full tw-flex">
              <button type="button" className="tw-ml-auto tw-text-xl" title="close">
                <i className="bi bi-x-circle-fill"></i>
              </button>
            </div>
            <div className="tw-flex tw-w-full  tw-rounded-xl tw-px-[5%] max-md:tw-px-2 tw-min-h-[300px] tw-max-h-[90%] tw-h-full">

              <div className="tw-relative tw-bg-black tw-min-w-full tw-min-h-full tw-overflow-clip tw-rounded-md">

                <iframe className="tw-absolute tw-top-[50%] tw--translate-y-[50%] tw-left-[50%] tw--translate-x-[50%] tw-w-full tw-h-full" 
                  src="https://www.youtube.com/embed/6j4fPVkA3EA?si=llcTrXPRM-MRXDZB&controls=0&rel=0&showinfo=0&autoplay=1&loop=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>

            </div>
          </div>
        </div>

        <div
          className="hero-bg-gradient tw-relative tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-gap-6 tw-p-[5%] max-xl:tw-place-items-center max-lg:tw-p-4"
        >

          <div className="purple-bg-grad  reveal-up tw-absolute tw-left-1/2 tw--translate-1/2 tw-top-[10%] tw-h-[120px] tw-w-[120px]"
          ></div>

          <div
            className="tw-flex tw-flex-col tw-min-h-[60vh] tw-place-content-center tw-items-center"
          >
            <h2
              className="reveal-up tw-text-center tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[90px] max-lg:tw-text-4xl max-md:tw-leading-snug"
            >
              <span className=""> Visión industrial con </span>
              <br />
              <span className="tw-font-thin tw-font-serif">hardware incluido</span>
            </h2>
            <div
              className="reveal-up tw-mt-8 tw-max-w-[450px] tw-text-lg max-lg:tw-text-base tw-p-2 tw-text-center
               tw-text-gray-800 dark:tw-text-white max-lg:tw-max-w-full"
            >

              IA industrial llave-en-mano. Te damos la plataforma, los modelos y el hardware Edge-GPU. Entrenas, despliegas e integras IA industrial en días, no meses.
            </div>

            <div
              className="reveal-up tw-mt-10 max-md:tw-flex-col tw-flex tw-place-items-center tw-gap-4"
            >


              <div className="tw-flex tw-justify-center tw-items-center tw-h-screen">
                <VideoModal videoUrl="https://www.youtube.com/embed/6j4fPVkA3EA" />
              </div>
              <button
                className="btn tw-group max-lg:!tw-w-[160px] tw-flex tw-gap-2 tw-shadow-lg !tw-w-[170px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"
              >
                <span>Ver planes</span>
                <i className="bi bi-arrow-right group-hover:tw-translate-x-1 tw-duration-300"></i>
              </button>
              <button
                className="btn !tw-w-[170px] max-lg:!tw-w-[160px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-flex tw-gap-2 !tw-bg-[#6366f1] !tw-text-white tw-transition-transform tw-duration-[0.3s] hover:tw-translate-y-[-2px]"
              >
                <span>Demo gratuita</span>
                <i className="bi bi-eye tw-text-base"></i>
              </button>

            </div>
                    </div>
            </div>

      </section>

      <section
        className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8"
      >
        <h2 className="reveal-up tw-text-3xl max-md:tw-text-xl">
          Trusted by brands you love
        </h2>

        <div className="reveal-up carousel-container">
          <div
            className="carousel lg:w-place-content-center tw-mt-10 tw-flex tw-w-full tw-gap-5 max-md:tw-gap-2"
          >

            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img
                src={asset('assets/images/brand-logos/hubbell.svg')}
                alt="Hubbell"
                className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                srcSet=""
              />
            </div>
            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img
                src={asset('assets/images/brand-logos/microsoft.svg')}
                alt="Microsoft"
                className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                srcSet=""
              />
            </div>
            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img
                src={asset('assets/images/brand-logos/teleflex.svg')}
                alt="teleflex"
                className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                srcSet=""
              />
            </div>
            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img
                src={asset('assets/images/brand-logos/reddit.svg')}
                alt="Reddit"
                className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                srcSet=""
              />
            </div>
            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img
                src={asset('assets/images/brand-logos/bosch.svg')}
                alt="bosch"
                className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                srcSet=""
              />
            </div>

          </div>
        </div>
      </section>


      <section
        className="tw-relative tw-flex  tw-w-full tw-min-h-[100vh] max-lg:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden"
      >
        <div className="tw-w-full  tw-place-content-center tw-items-center
              tw-flex tw-flex-col tw-max-w-[900px] tw-gap-4 tw-p-4">
          <div className="purple-bg-grad  reveal-up tw-absolute tw-right-[20%] tw-top-[20%] tw-h-[200px] tw-w-[200px]"
          ></div>
          <h2 className="reveal-up tw-text-6xl max-lg:tw-text-4xl tw-text-center tw-leading-normal tw-uppercase">

            <span className="tw-font-semibold">Infraestructura completa </span>
            <br />
            <span className="tw-font-serif">para IA industrial</span>
          </h2>
          <p className="reveal-up tw-mt-8 tw-max-w-[650px] tw-text-gray-900 dark:tw-text-gray-200 tw-text-center max-md:tw-text-sm">
            Servidores GPU para entrenamiento + Edge-GPU Jetson Orin para inferencia en planta. La IA vive en tu fábrica, no en la nube.
          </p>
          <div className="reveal-up tw-flex tw-mt-8">
            <a href="#"
              target="_blank"
              rel="noopener"
              className="tw-shadow-md hover:tw-shadow-xl dark:tw-shadow-gray-800 tw-transition-all tw-duration-300
                      tw-border-[1px] tw-p-3 tw-px-4 tw-border-black dark:tw-border-white tw-rounded-md">
              Ver especificaciones
            </a>
          </div>
        </div>
      </section>

      <section
        className="tw-relative tw-flex tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden"
      >


        <div
          className="tw-mt-8 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-items-center tw-gap-5"
        >
          <div
            className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center"
          >
            <h2
              className="tw-text-6xl tw-font-medium max-md:tw-text-3xl tw-p-2"
            >
              Módulos de IA industrial
            </h2>
          </div>
          <div
            className="tw-mt-6 tw-flex tw-flex-col tw-max-w-[1150px] max-lg:tw-max-w-full tw-h-full
                  tw-p-4 max-lg:tw-place-content-center tw-gap-8 "
          >

            <div className="max-xl:tw-flex max-xl:tw-flex-col tw-place-items-center tw-grid tw-grid-cols-3 tw-gap-8
                  tw-place-content-center tw-auto-rows-auto">
              <div className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex
                  tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl
                  hover:tw-scale-[1.02]">
                  <div className="tw-overflow-hidden tw-w-full tw-min-h-[180px] tw-h-[180px]">
                    <img src={asset('assets/images/home/api.png')} className="tw-w-full tw-object-contain tw-h-auto"
                      alt="unified interface" />

                  </div>
                  <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Dataset Studio</h2>
                  <p className="tw-text-base tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    Creación + synthetic + etiquetado. Genera datasets industriales con datos sintéticos para acelerar el entrenamiento sin detener la producción.
                  </p>
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                  </div>
                </a>
              </div>


              <div className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex
                  tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl
                  hover:tw-scale-[1.02]">
                  <div className="tw-w-full tw-min-h-[180px] tw-h-[180px] tw-overflow-hidden">
                    <img src={asset('assets/images/home/api.png')}
                      alt="API" className="tw-w-full tw-h-auto tw-object-contain" />

                  </div>
                  <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Auto-Training Engine</h2>
                  <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    Entrenamiento one-click con optimización automática. Selecciona arquitecturas, lanza procesos y evalúa métricas desde una interfaz low-code.
                  </p>
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                  </div>
                </a>
              </div>


              <div className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex
                  tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl
                  hover:tw-scale-[1.02]">
                  <div className="tw-w-full tw-flex tw-place-contet-center tw-min-h-[180px] tw-h-[180px] tw-rounded-xl tw-overflow-hidden">
                    <img src={asset('assets/images/home/integrations1.png')} className="tw-w-full tw-h-auto tw-object-contain"
                      alt="Prebuilt integrations" />
                  </div>
                  <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Edge-Deploy Kit</h2>
                  <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    Inferences en Jetson Orin industriales. Despliegue plug-and-play con monitoreo remoto y actualizaciones seguras over-the-air.
                  </p>
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                  </div>
                </a>
              </div>
            </div>

            <div className="reveal-up tw-w-full md:tw-h-[350px] max-md:tw-min-h-[350px] tw-flex">
              <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex
                max-md:tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl
                hover:tw-scale-[1.02]">
                <div className="tw-text-6xl tw-overflow-hidden tw-rounded-xl tw-w-full tw-h-full max-md:tw-h-[180px]">
                  <img src={asset('assets/images/home/ai-models.png')} className="tw-w-full tw-object-contain tw-h-full"
                    alt="AI models" />

                </div>
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">IINIA Connect</h2>
                  <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    Integración nativa con PLC/SCADA/MES/ERP. Conectores industriales listos para automatizar alarmas, paros y reportes regulatorios.
                  </p>
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      <section
        className="tw-relative tw-mt-10 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-center lg:tw-p-6"
      >

        <div
          className="reveal-up tw-mt-[5%] tw-flex tw-h-full tw-w-full tw-place-content-center
              tw-gap-2 tw-p-4 max-lg:tw-max-w-full max-lg:tw-flex-col"
        >

          <div
            className="tw-relative tw-flex tw-max-w-[30%] max-lg:tw-max-w-full tw-flex-col
                  tw-place-items-start tw-gap-4  tw-p-2 max-lg:tw-place-items-center
                  max-lg:tw-place-content-center max-lg:tw-w-full"
          >
            <div
              className="tw-top-40 tw-flex tw-flex-col lg:tw-sticky tw-place-items-center tw-max-h-fit tw-max-w-[850px] max-lg:tw-max-h-fit max-lg:tw-max-w-[320px] tw-overflow-hidden"
            >
              <h2 className="tw-text-5xl tw-font-serif tw-text-center tw-font-medium  max-md:tw-text-3xl"
                >
                Herramientas pre-construidas
              </h2>

 

            </div>

          </div>

          <div
            className="tw-flex tw-flex-col tw-gap-10 tw-h-full tw-max-w-1/2 max-lg:tw-max-w-full tw-px-[10%]
                  max-lg:tw-px-4 max-lg:tw-gap-3 max-lg:tw-w-full lg:tw-top-[20%]
                  tw-place-items-center
                  "
          >
            <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <a href="#"
                className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl
                      hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all
                    tw-p-8 tw-group/card"
              >
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-code-square"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Computer Vision Suite
                  </h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                    QA, seguridad, EPP, LOTO, inspección. Módulos especializados para control de calidad, supervisión operativa y cumplimiento industrial.
                  </p>

                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                      group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </a>
            </div>

            <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <a href="#"
                className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl
                    hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card"
              >
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-sliders2"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Control de calidad
                  </h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                    Detección automática de defectos, validación dimensional y verificación de ensambles en tiempo real durante la producción.
                  </p>

                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                      group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </a>
            </div>

            <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <a href="#"
                className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg tw-duration-300
                    tw-transition-all dark:tw-shadow-[#171717] tw-p-8 tw-group/card"
              >
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-shield-fill"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Seguridad industrial
                  </h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                    Cumplimiento EPP/LOTO, monitoreo de zonas críticas y evidencia automática para auditorías de seguridad.
                  </p>

                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                      group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </a>
            </div>

            <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <a href="#"
                className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl dark:tw-shadow-[#171717] hover:tw-shadow-lg tw-duration-300
                tw-transition-all tw-p-8 tw-group/card"
              >
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-bar-chart-line-fill"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Eficiencia operativa
                  </h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                    Optimiza OEE, reduce paros no programados y genera métricas accionables por turno para mejora continua.
                  </p>

                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                      group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </a>
            </div>

            <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <a href="#"
                className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl
                      hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card"
              >
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-camera-video-fill"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Videovigilancia inteligente
                  </h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                    Analítica contextual para manufactura que complementa tu infraestructura CCTV existente con IA especializada.
                  </p>

                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                      group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </a>
            </div>

            <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <a href="#"
                className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl
                      hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card"
              >
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-newspaper"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    OCR industrial
                  </h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                    Lectura automática de códigos, etiquetas y documentación industrial con alta precisión en entornos hostiles.
                  </p>

                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                      group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </a>
            </div>

          </div>


        </div>
      </section>


      <section
        className="tw-relative tw-flex  tw-w-full tw-min-h-[110vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden"
      >
        <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-items-center
              tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">

          <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal">
            Características adicionales
          </h3>


          <div className="tw-mt-8 tw-relative tw-gap-10 tw-p-4 tw-grid tw-place-items-center tw-grid-cols-3 max-lg:tw-flex max-lg:tw-flex-col">


            <div className="reveal-up  tw-w-[350px] tw-border-[1px] tw-h-[400px] tw-rounded-md tw-place-items-center tw-p-4
                  tw-bg-[#f2f3f4] max-md:tw-w-[320px] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">

              <div className="tw-w-full tw-h-[250px]
                    tw-p-4
                    tw-rounded-xl
                     tw-backdrop-blur-2xl
                     tw-overflow-hidden tw-flex tw-place-content-center">
                <img src={asset('assets/images/home/prompts2.png')}
                  alt="Prompt library" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">
                Synthetic Data
              </h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">
                Genera datasets sintéticos para acelerar el entrenamiento sin detener la producción. Reduce costos y tiempos de implementación.
              </p>
            </div>

            <div className="reveal-up tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-md tw-place-items-center tw-p-4
                  tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">

              <div className="tw-w-full tw-h-[250px]
                    tw-p-4
                    tw-rounded-xl
                     tw-backdrop-blur-2xl
                     tw-overflow-hidden tw-flex tw-place-content-center">
                <img src={asset('assets/images/home/search.png')}
                  alt="Web search" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">
                Auto-ML Pipeline
              </h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">
                Flujo automatizado de machine learning con optimización de hiperparámetros y selección automática de mejores modelos.
              </p>
            </div>

            <div className="reveal-up tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4
                  tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">

              <div className="tw-w-full tw-h-[250px]
                    tw-p-4
                    tw-rounded-xl
                     tw-backdrop-blur-2xl
                     tw-overflow-hidden tw-flex tw-place-content-center">
                <img src={asset('assets/images/home/image.png')}
                  alt="Image generation" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">
                Edge Computing
              </h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">
                Procesamiento local en dispositivos Edge-GPU. Baja latencia, operación offline y privacidad de datos garantizada.
              </p>
            </div>

            <div className="reveal-up tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4
                  tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">

              <div className="tw-w-full tw-h-[250px]
                    tw-p-4
                    tw-rounded-xl
                     tw-backdrop-blur-2xl
                     tw-overflow-hidden tw-flex tw-place-content-center">
                <img src={asset('assets/images/home/history.png')}
                  alt="History" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">
                Monitoreo 24/7
              </h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">
                Dashboard centralizado con métricas en tiempo real, alertas automáticas y reportes para toma de decisiones.
              </p>
            </div>

            <div className="reveal-up tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4
                  tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">

              <div className="tw-w-full tw-h-[250px]
                    tw-p-4
                    tw-rounded-xl
                     tw-backdrop-blur-2xl
                     tw-overflow-hidden tw-flex tw-place-content-center">
                <img src={asset('assets/images/home/import.png')}
                  alt="Import content" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">
                Integración OT/IT
              </h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">
                Conectores nativos con sistemas industriales: SCADA, MES, ERP, PLC. APIs REST seguras para automatización completa.
              </p>
            </div>

            <div className="reveal-up tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4
                  tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">

              <div className="tw-w-full tw-h-[250px]
                    tw-p-4
                    tw-rounded-xl
                     tw-backdrop-blur-2xl
                     tw-overflow-hidden tw-flex tw-place-content-center">
                <img src={asset('assets/images/home/multilingual.png')}
                  alt="Multilingual" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">
                Escalamiento modular
              </h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">
                Replica configuraciones multi-línea/multi-planta. Monitoreo centralizado y SLAs garantizados para operaciones críticas.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section
        className="tw-relative tw-flex  tw-w-full tw-min-h-[100vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden"
      >
        <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-items-center
              tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">

          <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal">
            Una suscripción para todo
          </h3>
          <p className="reveal-up tw-mt-3 tw-max-w-[600px] tw-text-center ">
            ¿Por qué pagar múltiples suscripciones caras cuando una lo hace todo?
            Accede a múltiples modelos IA y ahorra miles de dólares al año.
          </p>


          <div className="tw-mt-8 tw-relative tw-flex max-lg:tw-flex-col tw-gap-5">

            <div
              className="reveal-up tw-flex tw-w-full tw-max-w-[650px] max-md:tw-max-w-full tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px]
                  tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-2 tw-shadow-xl max-lg:tw-w-[320px]"
              >
              <img src={asset('assets/images/home/multi-sub.png')}
                alt="Multi sub" />
            </div>

             <div
              className="reveal-up tw-flex tw-w-full tw-max-w-[650px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px]
                  tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-2 tw-shadow-xl max-lg:tw-w-[320px]"
              >
              <img src={asset('assets/images/home/single-sub.jpg')}
                alt="Single sub" />
            </div>

          </div>

          <a href="#" className="reveal-up tw-group tw-shadow-xl btn tw-flex tw-gap-2 tw-mt-10">
            <span>Comenzar demo</span>
            <i className="bi bi-arrow-right tw-duration-300 group-hover:tw-translate-x-1"></i>
          </a>

        </div>
      </section>

      <section
        className="tw-flex tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%]"
      >
        <h3
          className="reveal-up tw-text-4xl tw-font-medium tw-text-center max-md:tw-text-2xl"
        >
          Únete a los profesionales usando IINIA
        </h3>

        <div
          className="tw-mt-20 tw-gap-10 tw-space-y-8  max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3"
        >
          <div
            className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid
              tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px]
              tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
          >

            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div
                className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
              >
                <img
                  src={asset('assets/images/people/man2.jpg')}
                  className="tw-h-full tw-w-full tw-object-cover"
                  alt="man"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">Mante</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">Glu, cto</div>
              </div>
            </div>

            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Beatae, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore deleniti iusto Numquam!
            </p>
          </div>

           <div
            className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid
              tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px]
              tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
          >

            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div
                className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
              >
                <img
                  src={asset('assets/images/people/women.jpg')}
                  className="tw-h-full tw-w-full tw-object-cover"
                  alt="women"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">Trich B</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">AMI, ceo</div>
              </div>
            </div>

            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Beatae, vero. Lorem ipsum dolor sit amet.
            </p>
          </div>

           <div
            className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid
              tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px]
              tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
          >

            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div
                className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
              >
                <img
                  src={asset('assets/images/people/man.jpg')}
                  className="tw-h-full tw-w-full tw-object-cover"
                  alt="man"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">John B</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">Benz, ceo</div>
              </div>
            </div>

            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, expedita nihil repellendus accusamus itaque facere labore, suscipit tempore in harum repellat. Doloribus, dolor facere dolorem impedit facilis rerum beatae exercitationem aliquid porro ea architecto similique illo omnis odio consequatur modi.
            </p>
          </div>

           <div
            className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid
              tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px]
              tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
          >

            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div
                className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
              >
                <img
                  src={asset('assets/images/people/man2.jpg')}
                  className="tw-h-full tw-w-full tw-object-cover"
                  alt="man"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">Ben Alfert B</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">XZ tech, cto</div>
              </div>
            </div>

            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Beatae, vero.
            </p>
          </div>

           <div
            className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid
              tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px]
              tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
          >

            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div
                className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
              >
                <img
                  src={asset('assets/images/people/women.jpg')}
                  className="tw-h-full tw-w-full tw-object-cover"
                  alt="women"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">Rachel</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">Gem, cto</div>
              </div>
            </div>

            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Beatae, vero. Lorem, ipsum dolor.
            </p>
          </div>

           <div
            className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid
              tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px]
              tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
          >

            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div
                className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
              >
                <img
                  src={asset('assets/images/people/man.jpg')}
                  className="tw-h-full tw-w-full tw-object-cover"
                  alt="man"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">Jamie</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">SnapFist.ai, ceo</div>
              </div>
            </div>

            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, nihil vitae fuga ab reiciendis optio et corporis dolorem alias deserunt, molestias in iusto! Ratione, quisquam incidunt. Reprehenderit ipsam officiis enim.
            </p>
          </div>

        </div>
      </section>


      <section
        className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-gap-6 tw-place-items-center tw-p-[2%]"
      >
        <h3
          className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-2xl"
        >
          Choose the right plan for you
        </h3>

        <div
          className="tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col"
        >
          <div
            className="reveal-up tw-flex tw-w-[350px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px]
                  tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]"
          >
            <h3 className="">
              <span className="tw-text-5xl max-md:tw-text-3xl tw-font-semibold">$9</span>
              <span className="tw-text-2xl tw-text-gray-600 dark:tw-text-gray-300">/mo</span>
            </h3>
            <p className="tw-mt-3 tw-text-center tw-text-gray-800 dark:tw-text-gray-100">
             Essential AI tools for everyday use
            </p>
            <hr />
            <ul
              className="tw-mt-4 tw-flex tw-flex-col tw-gap-4 tw-text-base tw-text-gray-800 dark:tw-text-gray-200"
            >
              <li className="tw-flex tw-gap-2">
                <i className="bi bi-check-circle-fill"></i>
                <span>1,000 AI powered chat messages</span>
              </li>
              <li className="tw-flex tw-gap-2">
                <i className="bi bi-check-circle-fill"></i>
                <span>30 premium image generations</span>
              </li>
              <li className="tw-flex tw-gap-2">
                <i className="bi bi-check-circle-fill"></i>
                <span>10 premium  music generation</span>
              </li>

              <li className="tw-flex tw-gap-2 ">
                <i className="bi bi-check-circle-fill tw-text-gray-400 dark:tw-text-gray-500"></i>
                <span>Access to all premium AI models</span>
              </li>

              <li className="tw-flex tw-gap-2 ">
                <i className="bi bi-check-circle-fill tw-text-gray-400 dark:tw-text-gray-500"></i>
                <span>Early access to new features</span>
              </li>

            </ul>
            <a
              href="#"
              className="btn tw-mt-auto !tw-w-full tw-transition-transform tw-duration-[0.3s]
                    hover:tw-translate-x-2 !tw-text-black !tw-bg-transparent !tw-border-[1px]
                     tw-border-black dark:tw-border-white dark:!tw-text-white"
            >
              Choose plan
            </a>
          </div>

          <div
            className="reveal-up tw-flex tw-w-[350px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-2
                  tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#595858] tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]"
          >
            <h3 className="">
              <span className="tw-text-5xl max-md:tw-text-3xl  tw-font-semibold">$17</span>
              <span className="tw-text-2xl max-md:tw-text-xl  tw-text-gray-600 dark:tw-text-gray-300">/mo</span>
            </h3>
            <p className="tw-mt-3 tw-text-center tw-text-gray-800 dark:tw-text-gray-200">
              Advanced features for serious AI enthusiasts.
            </p>
            <hr />
            <ul
              className="tw-mt-4 tw-flex tw-flex-col tw-gap-4  tw-text-base tw-text-gray-800 dark:tw-text-gray-100"
            >
              <li className="tw-flex tw-gap-2">
                <i className="bi bi-check-circle-fill"></i>
                <span>5,000 AI powered chat messages</span>
              </li>
              <li className="tw-flex tw-gap-2">
                <i className="bi bi-check-circle-fill"></i>
                <span>100 premium image generations</span>
              </li>
              <li className="tw-flex tw-gap-2">
                <i className="bi bi-check-circle-fill"></i>
                <span>40 premium music generation</span>
              </li>

              <li className="tw-flex tw-gap-2 ">
                <i className="bi bi-check-circle-fill"></i>
                <span>Access to all premium AI models</span>
              </li>

              <li className="tw-flex tw-gap-2 ">
                <i className="bi bi-check-circle-fill tw-text-gray-400 dark:tw-text-gray-500"></i>
                <span>Early access to new features</span>
              </li>

            </ul>
            <a
              href="#"
              className="btn tw-mt-auto !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-translate-x-2"
            >
              Choose plan
            </a>
          </div>

          <div
            className="reveal-up tw-flex tw-w-[350px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px]
                  tw-border-outlineColor dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-bg-white tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]"
          >
            <h3 className="">
              <span className="tw-text-5xl max-md:tw-text-3xl tw-font-semibold">$29</span>
              <span className="tw-text-2xl tw-text-gray-600 dark:tw-text-gray-300">/mo</span>
            </h3>
            <p className="tw-mt-3 tw-text-center tw-text-gray-800 dark:tw-text-gray-100">
              Unlimited potential for power users
            </p>
            <hr />
            <ul
              className="tw-mt-4 tw-flex tw-flex-col tw-gap-4 tw-text-base
                    tw-text-gray-800 dark:tw-text-gray-200"
            >
              <li className="tw-flex tw-gap-2">
                <i className="bi bi-check-circle-fill"></i>
                <span>10,000 AI powered chat messages</span>
              </li>
              <li className="tw-flex tw-gap-2">
                <i className="bi bi-check-circle-fill"></i>
                <span>300 premium image generations</span>
              </li>
              <li className="tw-flex tw-gap-2">
                <i className="bi bi-check-circle-fill"></i>
                <span>100 premium music generations</span>
              </li>

              <li className="tw-flex tw-gap-2 ">
                <i className="bi bi-check-circle-fill"></i>
                <span>Access to all premium AI models</span>
              </li>

              <li className="tw-flex tw-gap-2 ">
                <i className="bi bi-check-circle-fill "></i>
                <span>Early access to new features</span>
              </li>

            </ul>
            <a
              href="#"
              className="btn tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s]
                    hover:tw-translate-x-2 !tw-text-black !tw-bg-transparent
                     !tw-border-[1px] tw-border-black dark:tw-border-white dark:!tw-text-white"
            >
              Choose plan
            </a>
          </div>

        </div>
      </section>

      <section
        className="tw-relative tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%]"
      >


        <h3
          className="tw-text-4xl tw-font-medium max-md:tw-text-2xl"
        >
          Faq
        </h3>
        <div
          className="tw-mt-5 tw-flex tw-min-h-[300px] tw-w-full tw-max-w-[850px] tw-flex-col tw-gap-4"
        >
          <div
            className="faq tw-w-full"
          >
            <h4
              className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg"
            >
              <span>What's Pixa playground?</span>
              <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform
                      tw-ml-auto tw-font-semibold"></i>
            </h4>
            <div className="content max-lg:tw-text-sm">
              Pixa's playground is an integrated webapp to seamlessly test different LLM models such as GPT4, Claude,
              Gemini, etc.
            </div>
          </div>
          <hr />
          <div
            className="faq tw-w-full"
          >
            <h4
              className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg"
            >
              <span>What are LLM?</span>
              <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform
                      tw-ml-auto tw-font-semibold"></i>
            </h4>
            <div className="content max-lg:tw-text-sm">
              LLM stands for "Large Language Model." It's a type of artificial intelligence model trained on vast amounts of text data to understand and generate human-like text. These models, like GPT-4, can perform various tasks, such as answering questions, generating content, translating languages, and more, by leveraging patterns learned from the data they were trained on.
            </div>
          </div>
          <hr />
          <div
            className="faq tw-w-full"
          >
            <h4
              className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg"
            >
              <span>Where can I test different AI models?</span>
              <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform
                      tw-ml-auto tw-font-semibold"></i>
            </h4>
            <div className="content max-lg:tw-text-sm">
              You can use Pixa's AI Playground to test different models, including
              GPT4, Claude, Perplexity and more.
            </div>
          </div>
          <hr />

          <div
            className="faq tw-w-full"
          >
            <h4
              className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg"
            >
              <span>Is Pixa Free to use?</span>
              <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform
                      tw-ml-auto tw-font-semibold"></i>
            </h4>
            <div className="content max-lg:tw-text-sm">
              You can start using Pixa for free, and later upgrade your plan to access all its features.
            </div>
          </div>
          <hr />

        </div>
        <div className="purple-bg-grad max-md:tw-hidden reveal-up tw-absolute tw-bottom-14 tw-right-[20%]
                  tw-h-[150px] tw-w-[150px] tw-rounded-full"
          ></div>

      </section>


      <section
        className="tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%] max-md:tw-px-2"
      >
        <div
          className="tw-flex tw-w-full tw-max-w-[80%] tw-place-content-center tw-place-items-center tw-justify-between tw-gap-3
              tw-rounded-lg tw-bg-[#F6F7FB] dark:tw-bg-[#171717] tw-p-6 max-md:tw-max-w-full max-md:tw-flex-col"
        >
          <div className="tw-flex tw-flex-col max-lg:tw-text-center tw-gap-1">
            <h2 className="tw-text-2xl tw-text-gray-800 dark:tw-text-gray-200 max-md:tw-text-xl">
              Join our newsletter
            </h2>
            <div className="tw-text-gray-700 dark:tw-text-gray-300">Get product insights and updates.</div>
          </div>

          <div
            className="tw-flex tw-h-[60px] tw-place-items-center tw-gap-2 tw-overflow-hidden tw-p-2"
          >
            <input
              type="email"
              className="input tw-h-full tw-w-full !tw-border-gray-600 tw-p-2 tw-outline-none"
              placeholder="email"
            />
            <a
              className="btn !tw-rounded-full !tw-border-[1px] !tw-text-black !tw-border-solid !tw-border-black  dark:!tw-text-white
                  dark:!tw-border-gray-300 !tw-bg-transparent tw-transition-colors tw-duration-[0.3s]"
              href=""
            >
              Signup
            </a>
          </div>
        </div>
      </section>

      <footer
        className="tw-mt-auto tw-flex tw-flex-col tw-w-full tw-gap-4 tw-text-sm tw-pt-[5%] tw-pb-10 tw-px-[10%]
              tw-text-black dark:tw-text-white max-md:tw-flex-col"
      >
        <div className="tw-flex max-md:tw-flex-col max-md:tw-gap-6 tw-gap-3 tw-w-full tw-place-content-around">
          <div
            className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full"
          >
            <a href="#" className="tw-w-full tw-place-items-center tw-flex tw-flex-col tw-gap-6">
              <img
                src={asset('assets/logo/logo.png')}
                alt="logo"
                srcSet=""
                className="tw-max-w-[120px] dark:tw-invert"
              />
              <div className="tw-max-w-[120px] tw-text-center tw-text-3xl tw-h-fit">
                IINIA
              </div>
            </a>

            <div className="tw-flex tw-gap-4 tw-text-lg">
              <a
                href="https://github.com/PaulleDemon/"
                aria-label="Github"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com/pauls_freeman"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>

              <a
                href="https://www.linkedin.com/"
                aria-label="Linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

          </div>

          <div className="tw-flex max-md:tw-flex-col tw-flex-wrap tw-gap-6 tw-h-full tw-w-full tw-justify-around">
            <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
              <h2 className="tw-text-xl">Resources</h2>
              <div className="tw-flex tw-flex-col tw-gap-3">
                <a href="#" className="footer-link">Getting started</a>
                <a href="#" className="footer-link">API Docs</a>
                <a href="#" className="footer-link">API Endpoints</a>
                <a href="#" className="footer-link">Health status</a>
                <a href="#" className="footer-link">Pricing</a>
              </div>
            </div>


            <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
              <h2 className="tw-text-xl">Company</h2>
              <div className="tw-flex tw-flex-col tw-gap-3">
                <a href="#" className="footer-link">Support channels</a>
                <a href="#" className="footer-link">Systems</a>
                <a href="#" className="footer-link">Blog</a>
                <a href="https://twitter.com/pauls_freeman" className="footer-link">Twitter</a>
                <a href="https://github.com/PaulleDemon" className="footer-link">Github</a>
              </div>
            </div>

            <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
              <h2 className="tw-text-xl">Legal</h2>
              <div className="tw-flex tw-flex-col tw-gap-3">
                <a href="#" className="footer-link">Terms of service</a>
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">DCMA - Content Takedown</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="tw-mt-8" />
        <div className="tw-mt-2 tw-flex tw-gap-2 tw-flex-col tw-text-gray-700 dark:tw-text-gray-300 tw-place-items-center
              tw-text-[12px] tw-w-full tw-text-center tw-place-content-around">
          <span>Copyright &#169; 2023-2025</span>
          <span>All trademarks and copyrights belong to their respective owners.</span>
        </div>

      </footer>
    </div>
  );
};

export default VisionPage;
