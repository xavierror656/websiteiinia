import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Typed from 'typed.js';

import Dropdown from './lib/dropdown';
import Prompt from './lib/prompt';

const RESPONSIVE_WIDTH = 1024;

const typedStrings = [
  "How to solve a rubik's cube? Step by step guide",
  "What's Pixa playground?",
  'How to build an AI SaaS App?',
  'How to integrate Pixa API?'
];

gsap.registerPlugin(ScrollTrigger);

const initLandingPage = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => undefined;
  }

  const cleanupFns: Array<() => void> = [];
  const timeouts: number[] = [];

  const collapseHeaderItems = document.getElementById('collapsed-header-items');
  const collapseBtn = document.getElementById('collapse-btn');
  const navToggle = document.querySelector<HTMLElement>('#nav-dropdown-toggle-0');
  const navDropdown = document.querySelector<HTMLElement>('#nav-dropdown-list-0');

  let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH;

  const onHeaderClickOutside = (event: MouseEvent) => {
    if (!collapseHeaderItems) {
      return;
    }
    if (!collapseHeaderItems.contains(event.target as Node)) {
      toggleHeader();
    }
  };

  const toggleHeader = () => {
    if (!collapseHeaderItems || !collapseBtn) {
      return;
    }

    if (isHeaderCollapsed) {
      collapseHeaderItems.classList.add('max-lg:!tw-opacity-100', 'tw-min-h-[90vh]');
      collapseHeaderItems.style.height = '90vh';
      collapseBtn.classList.remove('bi-list');
      collapseBtn.classList.add('bi-x', 'max-lg:tw-fixed');
      document.body.classList.add('modal-open');

      timeouts.push(
        window.setTimeout(() => window.addEventListener('click', onHeaderClickOutside), 1)
      );

      isHeaderCollapsed = false;
    } else {
      collapseHeaderItems.classList.remove('max-lg:!tw-opacity-100', 'tw-min-h-[90vh]');
      collapseHeaderItems.style.height = '0vh';
      collapseBtn.classList.remove('bi-x', 'max-lg:tw-fixed');
      collapseBtn.classList.add('bi-list');
      document.body.classList.remove('modal-open');
      window.removeEventListener('click', onHeaderClickOutside);
      isHeaderCollapsed = true;
    }
  };

  if (collapseBtn) {
    collapseBtn.classList.add('bi-list');
    const handleToggleHeader = () => toggleHeader();
    collapseBtn.addEventListener('click', handleToggleHeader);
    cleanupFns.push(() => collapseBtn.removeEventListener('click', handleToggleHeader));
  }

  let navCloseTimeout: number | undefined;

  const openNavDropdown = () => {
    if (!navDropdown) {
      return;
    }
    navDropdown.classList.add(
      'tw-opacity-100',
      'tw-scale-100',
      'max-lg:tw-min-h-[450px]',
      'max-lg:!tw-h-fit',
      'tw-min-w-[320px]'
    );
    navDropdown.setAttribute('data-open', 'true');
  };

  const closeNavDropdown = () => {
    if (!navDropdown) {
      return;
    }

    if (navDropdown.matches(':hover')) {
      return;
    }

    navDropdown.classList.remove(
      'tw-opacity-100',
      'tw-scale-100',
      'max-lg:tw-min-h-[450px]',
      'tw-min-w-[320px]',
      'max-lg:!tw-h-fit'
    );
    navDropdown.setAttribute('data-open', 'false');
  };

  const toggleNavDropdown = () => {
    if (!navDropdown) {
      return;
    }

    if (navDropdown.getAttribute('data-open') === 'true') {
      closeNavDropdown();
    } else {
      openNavDropdown();
    }
  };

  const navMouseLeave = () => {
    navCloseTimeout = window.setTimeout(() => {
      closeNavDropdown();
    }, 100);
  };

  if (navToggle) {
    navToggle.addEventListener('click', toggleNavDropdown);
    cleanupFns.push(() => navToggle.removeEventListener('click', toggleNavDropdown));
  }

  if (navDropdown) {
    navDropdown.addEventListener('mouseleave', closeNavDropdown);
    cleanupFns.push(() => navDropdown.removeEventListener('mouseleave', closeNavDropdown));
  }

  const responsive = () => {
    if (!collapseHeaderItems) {
      return;
    }

    if (!isHeaderCollapsed) {
      toggleHeader();
    }

    if (window.innerWidth > RESPONSIVE_WIDTH) {
      collapseHeaderItems.style.height = '';
      if (navToggle) {
        navToggle.removeEventListener('mouseenter', openNavDropdown);
        navToggle.removeEventListener('mouseleave', navMouseLeave);

        navToggle.addEventListener('mouseenter', openNavDropdown);
        navToggle.addEventListener('mouseleave', navMouseLeave);
      }
    } else if (navToggle) {
      navToggle.removeEventListener('mouseenter', openNavDropdown);
      navToggle.removeEventListener('mouseleave', navMouseLeave);
    }
  };

  responsive();
  window.addEventListener('resize', responsive);
  cleanupFns.push(() => window.removeEventListener('resize', responsive));

  cleanupFns.push(() => {
    if (typeof navCloseTimeout === 'number') {
      window.clearTimeout(navCloseTimeout);
    }
    window.removeEventListener('click', onHeaderClickOutside);
  });

  /**
   * Theme toggle
   */
  const toggleIcon = document.querySelector<HTMLElement>('#toggle-mode-icon');
  const themeToggle = document.getElementById('theme-toggle');

  const updateToggleModeBtn = () => {
    if (!toggleIcon) {
      return;
    }

    if (document.documentElement.classList.contains('tw-dark')) {
      toggleIcon.classList.remove('bi-sun');
      toggleIcon.classList.add('bi-moon');
      localStorage.setItem('color-mode', 'dark');
    } else {
      toggleIcon.classList.add('bi-sun');
      toggleIcon.classList.remove('bi-moon');
      localStorage.setItem('color-mode', 'light');
    }
  };

  const toggleMode = () => {
    document.documentElement.classList.toggle('tw-dark');
    updateToggleModeBtn();
  };

  const initializeTheme = () => {
    const savedMode = localStorage.getItem('color-mode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedMode ? savedMode === 'dark' : systemPrefersDark;

    document.documentElement.classList.toggle('tw-dark', shouldUseDark);
    updateToggleModeBtn();
  };

  initializeTheme();

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleMode);
    cleanupFns.push(() => themeToggle.removeEventListener('click', toggleMode));
  }

  /**
   * Prompt playground and dropdown
   */
  const prompt = new Prompt('#pixa-playground');
  const dropdownElements = Array.from(document.querySelectorAll<HTMLElement>('.dropdown'));
  const dropdownInstances = dropdownElements
    .map((dropdownElement) => {
      if (!dropdownElement.id) {
        return null;
      }
      return new Dropdown(`#${dropdownElement.id}`, (value) => prompt.setAIModel(value));
    })
    .filter((instance): instance is Dropdown => instance !== null);

  const promptForm = document.querySelector<HTMLFormElement>('#prompt-form');
  const promptInput = promptForm?.querySelector<HTMLInputElement>("input[name='prompt']");
  const signUpPrompt = document.querySelector<HTMLElement>('#signup-prompt');
  const MAX_PROMPTS = 3;

  const handlePromptSubmit = (event: Event) => {
    event.preventDefault();

    if (!promptInput) {
      return;
    }

    if (prompt.promptList.length >= MAX_PROMPTS) {
      return;
    }

    const value = promptInput.value.trim();
    if (!value) {
      return;
    }

    prompt.addPrompt(value);
    promptInput.value = '';

    if (prompt.promptList.length >= MAX_PROMPTS) {
      if (signUpPrompt) {
        signUpPrompt.classList.add('tw-scale-100');
        signUpPrompt.classList.remove('tw-scale-0');
      }

      promptForm?.querySelectorAll<HTMLInputElement>('input').forEach((inputEl) => {
        inputEl.disabled = true;
      });
    }
  };

  if (promptForm) {
    promptForm.addEventListener('submit', handlePromptSubmit);
    cleanupFns.push(() => promptForm.removeEventListener('submit', handlePromptSubmit));
  }

  /**
   * Typed effect for sample prompts
   */
  const promptsSampleEl = document.querySelector('#prompts-sample');
  let typedInstance: Typed | undefined;
  if (promptsSampleEl) {
    typedInstance = new Typed('#prompts-sample', {
      strings: typedStrings,
      typeSpeed: 80,
      smartBackspace: true,
      loop: true,
      backDelay: 2000
    });

    cleanupFns.push(() => typedInstance?.destroy());
  }

  /**
   * GSAP animations
   */
  const gsapContext = gsap.context(() => {
    gsap.to('.reveal-up', {
      opacity: 0,
      y: '100%'
    });

    gsap.to('#dashboard', {
      scale: 1,
      translateY: 0,
      rotateX: '0deg',
      scrollTrigger: {
        trigger: '#hero-section',
        start: window.innerWidth > RESPONSIVE_WIDTH ? 'top 95%' : 'top 70%',
        end: 'bottom bottom',
        scrub: 1
      }
    });

    const sections = gsap.utils.toArray<HTMLElement>('section');
    sections.forEach((section) => {
      const timeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: section,
          start: '10% 80%',
          end: '20% 90%'
        }
      });

      timeline.to(section.querySelectorAll('.reveal-up'), {
        opacity: 1,
        duration: 0.8,
        y: '0%',
        stagger: 0.2
      });
    });
  });

  cleanupFns.push(() => gsapContext.revert());

  /**
   * FAQ accordion
   */
  const faqButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('.faq-accordion'));
  faqButtons.forEach((button) => {
    const handler = () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling as HTMLElement | null;
      const icon = button.querySelector<HTMLElement>('.bi-plus');

      if (!content || !icon) {
        return;
      }

      if (content.style.maxHeight === '240px') {
        content.style.maxHeight = '0px';
        content.style.padding = '0px 18px';
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.style.maxHeight = '240px';
        content.style.padding = '20px 18px';
        icon.style.transform = 'rotate(45deg)';
      }
    };

    button.addEventListener('click', handler);
    cleanupFns.push(() => button.removeEventListener('click', handler));
  });

  /**
   * Video modal
   */
  const videoBg = document.getElementById('video-container-bg');
  const videoContainer = document.getElementById('video-container');
  const openVideoBtn = document.getElementById('video-open');
  const closeVideoBtn = document.getElementById('video-close');

  let videoTimeout: number | undefined;

  const openVideo = () => {
    if (!videoBg || !videoContainer) {
      return;
    }
    videoBg.classList.remove('tw-scale-0', 'tw-opacity-0');
    videoBg.classList.add('tw-scale-100', 'tw-opacity-100');
    videoContainer.classList.remove('tw-scale-0');
    videoContainer.classList.add('tw-scale-100');
    document.body.classList.add('modal-open');
  };

  const closeVideo = () => {
    if (!videoBg || !videoContainer) {
      return;
    }

    videoContainer.classList.add('tw-scale-0');
    videoContainer.classList.remove('tw-scale-100');

    videoTimeout = window.setTimeout(() => {
      videoBg.classList.remove('tw-scale-100', 'tw-opacity-100');
      videoBg.classList.add('tw-scale-0', 'tw-opacity-0');
      document.body.classList.remove('modal-open');
    }, 400);
  };

  if (openVideoBtn) {
    openVideoBtn.addEventListener('click', openVideo);
    cleanupFns.push(() => openVideoBtn.removeEventListener('click', openVideo));
  }

  if (closeVideoBtn) {
    closeVideoBtn.addEventListener('click', closeVideo);
    cleanupFns.push(() => closeVideoBtn.removeEventListener('click', closeVideo));
  }

  /**
   * Cleanup routine
   */
  return () => {
    cleanupFns.forEach((fn) => fn());
    dropdownInstances.forEach((dropdown) => dropdown.destroy());
    prompt.destroy();
    window.removeEventListener('click', onHeaderClickOutside);
    timeouts.forEach((id) => window.clearTimeout(id));
    if (typeof navCloseTimeout === 'number') {
      window.clearTimeout(navCloseTimeout);
    }
    if (typeof videoTimeout === 'number') {
      window.clearTimeout(videoTimeout);
    }
    document.body.classList.remove('modal-open');
  };
};

export default initLandingPage;
