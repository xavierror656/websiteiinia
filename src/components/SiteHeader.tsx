import { Link, useLocation } from 'react-router-dom';

import { asset } from '../utils/asset';

const SiteHeader = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header
      className="lg:tw-px-4 tw-max-w-[100vw] tw-max-w-lg:tw-mr-auto max-lg:tw-top-0 tw-fixed tw-top-4 lg:tw-left-1/2 lg:tw--translate-x-1/2 tw-z-30 tw-flex tw-h-[60px] tw-w-full 
              tw-text-gray-700 tw-bg-white dark:tw-text-gray-200 dark:tw-bg-[#17181b] tw-px-[3%] tw-rounded-md lg:tw-max-w-5xl tw-shadow-md dark:tw-shadow-gray-700
              lg:tw-justify-around lg:!tw-backdrop-blur-lg lg:tw-opacity-[0.99]"
    >
      <Link className="tw-flex tw-p-[4px] tw-gap-2 tw-place-items-center" to="/">
        <div className="tw-h-[30px] tw-max-w-[100px]">
          <img
            src={asset('assets/logo/logo.png')}
            alt="logo"
            className="tw-object-contain tw-h-full tw-w-full dark:tw-invert"
          />
        </div>
        <span className="tw-uppercase tw-text-base tw-font-medium">Pixa</span>
      </Link>
      <div className="collapsible-header animated-collapse max-lg:tw-shadow-md" id="collapsed-header-items">
        <nav
          className="tw-relative tw-flex tw-h-full max-lg:tw-h-max tw-w-max tw-gap-5 tw-text-base max-lg:tw-mt-[30px] max-lg:tw-flex-col 
                    max-lg:tw-gap-5 lg:tw-mx-auto tw-place-items-center"
        >
          <a className="header-links" href="#">
            API
          </a>
          <a className="header-links" href="#">
            Blog
          </a>
          <a className="header-links" href="#">
            Solutions
          </a>

          <div className="tw-relative tw-flex tw-flex-col tw-place-items-center">
            <div id="nav-dropdown-toggle-0" className="max-lg:tw-max-w-fit tw-flex header-links tw-gap-1  tw-place-items-center">
              <span> Features </span>
              <i className="tw-text-sm bi bi-chevron-down"></i>
            </div>
            <nav
              id="nav-dropdown-list-0"
              data-open="false"
              className="tw-scale-0 tw-opacity-0  lg:tw-fixed tw-flex lg:tw-top-[80px] lg:tw-left-1/2 lg:tw--translate-x-1/2 
                        tw-w-[90%] tw-rounded-lg max-lg:tw-h-0 max-lg:tw-w-0
                        lg:tw-h-[450px] tw-overflow-hidden
                         tw-bg-white dark:tw-bg-[#17181B] tw-duration-300 
                         tw-transition-opacity tw-transition-height tw-shadow-lg tw-p-4"
            >
              <div className="tw-grid max-xl:tw-flex max-xl:tw-flex-col tw-justify-around tw-grid-cols-2 tw-w-full">
                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-list-columns-reverse"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Prompt library </div>
                    <p>Comes packed with pre-made prompt templates</p>
                  </div>
                </a>

                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-grid-1x2-fill"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Unified Interface </div>
                    <p className="">Test multiple AI models in one interface</p>
                  </div>
                </a>

                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-globe"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Realtime web search </div>
                    <p className="">Search the internet in realtime</p>
                  </div>
                </a>

                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-image-fill"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Image generation</div>
                    <p className="">Generate images from prompts</p>
                  </div>
                </a>

                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-calendar-range"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">History</div>
                    <p className="">Continue from where you left off</p>
                  </div>
                </a>

                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-translate"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Multilingual</div>
                    <p className="">Converse in multiple languages</p>
                  </div>
                </a>
              </div>
            </nav>
          </div>
          <Link
            className={`header-links ${isActive('/agent') ? 'tw-text-[#6366f1]' : ''}`}
            to="/agent"
          >
            Agent
          </Link>
          <Link
            className={`header-links ${isActive('/vision') ? 'tw-text-[#6366f1]' : ''}`}
            to="/vision"
          >
            Vision
          </Link>
        </nav>
        <div
          className="lg:tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full 
                max-md:tw-flex-col max-md:tw-place-content-center"
        >
          <button
            type="button"
            className="header-links tw-text-gray-600 dark:tw-text-gray-300"
            title="toggle-theme"
            id="theme-toggle"
          >
            <i className="bi bi-sun" id="toggle-mode-icon"></i>
          </button>
          <a
            href="#"
            aria-label="Try Pixa Playground"
            className="btn tw-flex tw-gap-3 tw-px-3 tw-py-2 tw-transition-transform 
                    tw-duration-[0.3s] hover:tw-translate-x-2"
          >
            <span>Try playground</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
      <button
        className="bi bi-list tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-gray-500 lg:tw-hidden"
        aria-label="menu"
        id="collapse-btn"
      ></button>
    </header>
  );
};

export default SiteHeader;
