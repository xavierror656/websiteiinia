import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface VideoModalButtonProps {
  videoUrl: string;
  buttonText?: string;
}

const VideoModal: React.FC<VideoModalButtonProps> = ({
  videoUrl,
  buttonText = "Watch video",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState<string>("");

  const open = () => {
    setIframeSrc(`${videoUrl}?autoplay=1&controls=1&rel=0&mute=0`);
    setIsOpen(true);
  };

  const close = () => {
    setIframeSrc("");
    setIsOpen(false);
  };

useEffect(() => {
  // Cerrar con tecla Escape
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) close();
  };
  window.addEventListener("keydown", onKey);

  // Bloquear scroll cuando el modal está abierto
  if (isOpen) {
    document.body.style.overflow = "hidden"; // evita que el fondo se desplace
  } else {
    document.body.style.overflow = ""; // restaura el scroll
  }

  // Cleanup al desmontar o cerrar modal
  return () => {
    window.removeEventListener("keydown", onKey);
    document.body.style.overflow = ""; // aseguramos restaurar el scroll siempre
  };
}, [isOpen]);


  return (
    <>
      {/* === BOTÓN === */}
      <button
        onClick={open}
        className="btn !tw-w-[170px] max-lg:!tw-w-[160px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 
          tw-flex tw-gap-2 tw-group !tw-bg-transparent !tw-text-black dark:!tw-text-white 
          tw-transition-colors tw-duration-[0.3s] tw-border-[1px] tw-border-black dark:tw-border-white"
      >
        <div className="tw-relative tw-flex tw-place-items-center tw-place-content-center tw-w-6 tw-h-6">
          <div className="tw-absolute tw-inset-0 tw-top-0 tw-left-0 tw-scale-0 tw-duration-300 group-hover:tw-scale-100 
            tw-border-2 tw-border-gray-600 dark:tw-border-gray-200 tw-rounded-full tw-w-full tw-h-full"></div>
          <span className="bi bi-play-circle-fill"></span>
        </div>
        <span>{buttonText}</span>
      </button>

      {/* === MODAL === */}
      {isOpen &&
        createPortal(
          <div
            className="tw-fixed tw-inset-0 tw-items-center tw-justify-center 
            tw-bg-[#000000af] dark:tw-bg-[#80808085] tw-backdrop-blur-sm tw-p-10"
            onClick={close}
          >
            {/* CONTENEDOR BLANCO */}
            <div
              className="tw-max-w-[100vw] tw-w-full tw-max-h-[100vh] tw-h-full tw-rounded-xl tw-shadow-xl tw-bg-white dark:tw-bg-[#16171A] 
              tw-p-6 tw-flex tw-flex-col tw-gap-2 tw-transition-transform tw-duration-300 tw-scale-100
              tw-m-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* BOTÓN DE CERRAR */}
              <div className="tw-flex">
                <button
                  type="button"
                  onClick={close}
                  className="tw-ml-auto tw-text-xl tw-text-gray-800 dark:tw-text-gray-200 hover:tw-scale-110 tw-transition"
                  title="Cerrar"
                >
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              </div>

              {/* VIDEO */}
              <div className="tw-flex tw-rounded-xl tw-px-[5%] max-md:tw-px-2 tw-min-h-[300px] tw-max-h-[90%] tw-h-full">
                <div className="tw-relative tw-bg-black tw-w-full tw-rounded-md tw-overflow-hidden">
                  <iframe
                    className="tw-absolute tw-top-1/2 tw-left-1/2 tw--translate-x-1/2 tw--translate-y-1/2 tw-h-full tw-max-w-[80%] tw-w-full"
                    src={iframeSrc}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default VideoModal;
