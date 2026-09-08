(() => {
  "use strict";

  /* =======================================================
     ERA DATA
     Atmospheric home-page previews, not a historical database.
     ======================================================= */

  const ERAS = [
    {
      year: 1960,
      title: "THE SEEDS OF A CONNECTED WORLD",
      description:
        "The internet doesn't exist yet, but the ideas, research and technology that will eventually connect the world are beginning to emerge.",
      introduction:
        "The foundations of a connected world are beginning to form.",
      categories: ["TECHNOLOGY", "RESEARCH", "CULTURE", "EVENTS"],
      theme: "early",
      accent: "#83c5ff",
      secondary: "#8d7dff",
      symbol: "cpu",
      shortLabel: "ORIGIN",
      signal: "ANALOG → DIGITAL",
      browserTitle: "CONNECTION LAB",
      address: "research://a-connected-world",
      windowHeading: "A WORLD WAITING TO CONNECT.",
      screenStatus: "CONNECTING...",
      screenLine: "THE IDEAS ARE BEGINNING...",
      backWindow: "SIGNAL RESEARCH",
      frontWindow: "EARLY NETWORKS"
    },
    {
      year: 1995,
      title: "THE WEB GOES PUBLIC",
      description:
        "A modem breaks the silence. Home pages open like little doors, and following a blue link feels like discovering another world.",
      introduction:
        "The connection is slow. The possibilities are suddenly everywhere.",
      categories: ["WEB", "TECHNOLOGY", "DESIGN", "CULTURE"],
      theme: "dialup",
      accent: "#77dded",
      secondary: "#6485ff",
      symbol: "browser",
      shortLabel: "OPEN WEB",
      signal: "DIAL-UP DREAMS",
      browserTitle: "WELCOME.WINDOW",
      address: "web://your-first-home-page",
      windowHeading: "WELCOME TO THE INTERNET!",
      screenStatus: "DIALING...",
      screenLine: "A NEW WORLD IS LOADING...",
      backWindow: "EARLY WEB",
      frontWindow: "DIGITAL WORLD"
    },
    {
      year: 2000,
      title: "THE WEB ENTERS THE MAINSTREAM",
      description:
        "Inbox greetings, portal pages and late-night chats. The family computer becomes a doorway to a much bigger neighborhood.",
      introduction:
        "The future has an inbox, an away message, and a place on your desktop.",
      categories: ["WEB", "MUSIC", "GAMES", "SOCIAL"],
      theme: "desktop",
      accent: "#a2b4ff",
      secondary: "#7187ef",
      symbol: "mail",
      shortLabel: "PORTALS",
      signal: "YOU HAVE A CONNECTION",
      browserTitle: "DESKTOP GATEWAY",
      address: "portal://the-new-millennium",
      windowHeading: "YOUR WORLD. NOW ONLINE.",
      screenStatus: "SIGNING IN...",
      screenLine: "THE DESKTOP IS A DOORWAY...",
      backWindow: "MAIL / INBOX",
      frontWindow: "THE WEB PORTAL"
    },
    {
      year: 2005,
      title: "THE RISE OF THE SOCIAL WEB",
      description:
        "Your profile is a place. Your playlist is a personality. Blogs, shared videos and blinking messages make the web feel like us.",
      introduction:
        "Make a profile. Leave a comment. Find your people.",
      categories: ["SOCIAL", "WEB", "MUSIC", "CULTURE"],
      theme: "social",
      accent: "#d19bff",
      secondary: "#f08ccf",
      symbol: "network",
      shortLabel: "SOCIAL",
      signal: "LESS BROWSING. MORE BELONGING.",
      browserTitle: "PERSONAL SPACE",
      address: "social://make-yourself-at-home",
      windowHeading: "YOU ARE NOT ONLINE ALONE.",
      screenStatus: "FRIENDS ONLINE...",
      screenLine: "THE WEB IS GETTING PERSONAL...",
      backWindow: "VIDEO / BLOGS",
      frontWindow: "FRIENDS ONLINE"
    },
    {
      year: 2010,
      title: "THE SMARTPHONE WEB",
      description:
        "The browser leaves the desk. Touchscreens, pocket-sized maps and app icons bring the internet along for the ride.",
      introduction:
        "A connected world is now small enough to fit in your hand.",
      categories: ["TECHNOLOGY", "SOCIAL", "GAMES", "DESIGN"],
      theme: "smartphone",
      accent: "#78c7ff",
      secondary: "#7e89ff",
      symbol: "phone",
      shortLabel: "APPS",
      signal: "THE WORLD IN YOUR HAND",
      browserTitle: "POCKET CONNECTION",
      address: "mobile://everywhere-you-go",
      windowHeading: "THE WEB IS COMING WITH YOU.",
      screenStatus: "SYNCING...",
      screenLine: "CONNECTED BEYOND THE DESKTOP...",
      backWindow: "APP NETWORK",
      frontWindow: "THE POCKET WEB"
    },
    {
      year: 2015,
      title: "THE MOBILE INTERNET",
      description:
        "Swipe, stream, share. Music follows you, moments become stories, and the cloud quietly connects the screens in your life.",
      introduction:
        "The internet is no longer somewhere you go. It moves with you.",
      categories: ["MUSIC", "SOCIAL", "DESIGN", "WEB"],
      theme: "mobile",
      accent: "#e9a2d9",
      secondary: "#a28bff",
      symbol: "cloud",
      shortLabel: "MOBILE",
      signal: "EVERYWHERE, ALL AT ONCE",
      browserTitle: "ALWAYS WITH YOU",
      address: "cloud://your-connected-life",
      windowHeading: "SWIPE. STREAM. REPEAT.",
      screenStatus: "STREAM READY...",
      screenLine: "YOUR WORLD IS IN SYNC...",
      backWindow: "STREAMING",
      frontWindow: "CLOUD CONNECTION"
    },
    {
      year: 2020,
      title: "THE INTERNET BECOMES ESSENTIAL",
      description:
        "Rooms become windows. Work, friendship and everyday rituals find new spaces online. Distance feels different through a screen.",
      introduction:
        "Apart, but still connected. The screen becomes a shared place.",
      categories: ["TECHNOLOGY", "SOCIAL", "CULTURE", "EVENTS"],
      theme: "connected",
      accent: "#85dfd8",
      secondary: "#789ee7",
      symbol: "users",
      shortLabel: "TOGETHER",
      signal: "PRESENCE, ACROSS DISTANCE",
      browserTitle: "SHARED CONNECTION",
      address: "online://still-together",
      windowHeading: "YOU ARE HERE. SO ARE WE.",
      screenStatus: "JOINING...",
      screenLine: "DISTANCE IS NOT DISCONNECTION...",
      backWindow: "TOGETHER ONLINE",
      frontWindow: "REMOTE WORLD"
    },
    {
      year: 2026,
      title: "THE NEXT INTERNET",
      description:
        "The web answers back. Intelligent tools, generative interfaces and immersive possibilities reshape how we search, create and connect.",
      introduction:
        "The next version of the internet is still being imagined.",
      categories: ["TECHNOLOGY", "RESEARCH", "DESIGN", "WEB"],
      theme: "intelligent",
      accent: "#b4b2ff",
      secondary: "#e98bde",
      symbol: "spark",
      shortLabel: "NEXT",
      signal: "HUMAN × MACHINE",
      browserTitle: "POSSIBILITY ENGINE",
      address: "future://the-next-connection",
      windowHeading: "WHAT WILL YOU CREATE NEXT?",
      screenStatus: "THINKING...",
      screenLine: "THE INTERFACE IS EVOLVING...",
      backWindow: "IMMERSIVE SYSTEMS",
      frontWindow: "INTELLIGENT WEB"
    }
  ];

  const SOUND_STORAGE_KEY = "rewindyr-era:sound-enabled";

  /* =======================================================
     ELEMENTS AND STATE
     ======================================================= */

  const byId = (id) => document.getElementById(id);

  const elements = {
    machine: byId("time-machine"),
    main: byId("main-content"),

    yearGrid: byId("year-grid"),
    yearTemplate: byId("year-template"),
    milestoneCount: byId("milestone-count"),

    heroYear: byId("hero-year"),
    eraPanel: byId("era-panel"),
    selectedYear: byId("selected-year"),
    eraIndex: byId("era-index"),
    eraTitle: byId("era-title"),
    eraDescription: byId("era-description"),
    eraCategories: byId("era-categories"),
    eraSignal: byId("era-signal"),
    eraSymbol: byId("era-symbol"),
    selectionAnnouncement: byId("selection-announcement"),

    browserTitle: byId("decor-browser-title"),
    browserAddress: byId("decor-address"),
    browserHeading: byId("decor-heading"),
    decorYear: byId("decor-year"),
    crtStatus: byId("crt-status"),
    crtLine: byId("crt-line"),
    backWindow: byId("window-back-title"),
    frontWindow: byId("window-front-title"),
    signalSymbol: byId("signal-symbol"),
    signalText: byId("signal-text"),

    soundButton: byId("sound-button"),
    soundLabel: byId("sound-label"),
    soundIcon: byId("sound-icon"),

    aboutButton: byId("about-button"),
    aboutDialog: byId("about-dialog"),

    portal: byId("era-portal"),
    portalHeading: byId("portal-heading"),
    closePortal: byId("close-portal"),
    portalProgress: byId("portal-progress"),
    transferYear: byId("transfer-year"),
    transferStatus: byId("transfer-status"),
    transferMeter: byId("transfer-meter"),

    portalIntro: byId("portal-intro"),
    introYear: byId("intro-year"),
    introTitle: byId("intro-title"),
    introDescription: byId("intro-description"),
    introSymbol: byId("intro-symbol"),
    enterWeb: byId("enter-web"),
    webNotice: byId("web-notice"),

    toast: byId("toast"),
    toastMessage: byId("toast-message"),
    dismissToast: byId("dismiss-toast"),
    particles: byId("particles"),

    enterButtons: Array.from(document.querySelectorAll("[data-enter-era]"))
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const state = {
    selectedYear: 1960,
    phase: "idle",
    soundEnabled: readSoundPreference(),
    travelEra: null
  };

  const yearButtons = new Map();

  let cardTimer = null;
  let toastTimer = null;
  let transitionController = null;
  let portalTrigger = null;

  function currentEra() {
    return ERAS.find((era) => era.year === state.selectedYear) || ERAS[0];
  }

  function eraIndex(year) {
    return ERAS.findIndex((era) => era.year === year);
  }

  function setSymbol(element, symbol) {
    element.setAttribute("href", `#icon-${symbol}`);
  }

  /* =======================================================
     TIMELINE CREATION
     ======================================================= */

  function buildTimeline() {
    const fragment = document.createDocumentFragment();

    ERAS.forEach((era) => {
      const button = elements.yearTemplate.content
        .firstElementChild
        .cloneNode(true);

      button.dataset.year = String(era.year);
      button.setAttribute("aria-label", `${era.year}: ${era.title}`);

      button.querySelector(".year-node__year").textContent = era.year;
      button.querySelector(".year-node__caption").textContent = era.shortLabel;

      button.addEventListener("click", () => {
        selectEra(era.year);
      });

      yearButtons.set(era.year, button);
      fragment.appendChild(button);
    });

    elements.yearGrid.replaceChildren(fragment);
    elements.milestoneCount.textContent = `${ERAS.length} DESTINATIONS`;
  }

  function updateYearNodes() {
    ERAS.forEach((era) => {
      const button = yearButtons.get(era.year);
      const selected = era.year === state.selectedYear;

      button.setAttribute("aria-checked", String(selected));
      button.tabIndex = selected ? 0 : -1;

      button.querySelector(".year-node__caption").textContent =
        selected ? "LOCKED" : era.shortLabel;
    });
  }

  function handleTimelineKeyboard(event) {
    if (state.phase !== "idle") return;

    const index = eraIndex(state.selectedYear);
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % ERAS.length;
        break;

      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + ERAS.length) % ERAS.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = ERAS.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();

    const nextEra = ERAS[nextIndex];
    selectEra(nextEra.year);

    yearButtons.get(nextEra.year).focus({
      preventScroll: true
    });
  }

  /* =======================================================
     ERA CONTENT AND ATMOSPHERE
     ======================================================= */

  function updateAtmosphere(era) {
    document.documentElement.style.setProperty("--accent", era.accent);
    document.documentElement.style.setProperty("--secondary", era.secondary);

    elements.machine.dataset.year = String(era.year);
    elements.machine.dataset.theme = era.theme;
    elements.heroYear.textContent = era.year;
  }

  function renderCategories(categories) {
    const fragment = document.createDocumentFragment();

    categories.forEach((category) => {
      const item = document.createElement("li");
      item.textContent = category;
      fragment.appendChild(item);
    });

    elements.eraCategories.replaceChildren(fragment);
  }

  function renderEraContent(era, announce = false) {
    const index = eraIndex(era.year) + 1;
    const indexLabel = String(index).padStart(2, "0");
    const totalLabel = String(ERAS.length).padStart(2, "0");

    elements.selectedYear.textContent = era.year;
    elements.eraIndex.textContent = `ERA ${indexLabel} / ${totalLabel}`;
    elements.eraTitle.textContent = era.title;
    elements.eraDescription.textContent = era.description;
    elements.eraSignal.textContent = era.signal;

    setSymbol(elements.eraSymbol, era.symbol);
    renderCategories(era.categories);

    elements.browserTitle.textContent = era.browserTitle;
    elements.browserAddress.textContent = era.address;
    elements.browserHeading.textContent = era.windowHeading;
    elements.decorYear.textContent = era.year;

    elements.crtStatus.textContent = era.screenStatus;
    elements.crtLine.textContent = era.screenLine;
    elements.backWindow.textContent = era.backWindow;
    elements.frontWindow.textContent = era.frontWindow;
    elements.signalText.textContent = era.signal;

    setSymbol(elements.signalSymbol, era.symbol);

    if (announce) {
      elements.selectionAnnouncement.textContent =
        `${era.year}. ${era.title}. ${era.description}`;
    }
  }

  function finishCardTransition(announce = false) {
    window.clearTimeout(cardTimer);
    cardTimer = null;

    renderEraContent(currentEra(), announce);

    elements.eraPanel.classList.remove("is-changing");
    elements.eraPanel.setAttribute("aria-busy", "false");
  }

  function selectEra(year) {
    if (state.phase !== "idle") return;
    if (state.selectedYear === year) return;

    const era = ERAS.find((item) => item.year === year);
    if (!era) return;

    state.selectedYear = era.year;

    updateYearNodes();
    updateAtmosphere(era);

    window.clearTimeout(cardTimer);

    if (reducedMotion.matches) {
      finishCardTransition(true);
      return;
    }

    elements.eraPanel.classList.add("is-changing");
    elements.eraPanel.setAttribute("aria-busy", "true");

    /*
     * A single replaceable timer ensures rapid selections always
     * finish on the latest requested era.
     */
    cardTimer = window.setTimeout(() => {
      finishCardTransition(true);
    }, 180);
  }

  /* =======================================================
     SOUND PREFERENCE — NO AUDIO PLAYBACK
     ======================================================= */

  function readSoundPreference() {
    try {
      return sessionStorage.getItem(SOUND_STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  }

  function saveSoundPreference(enabled) {
    try {
      sessionStorage.setItem(SOUND_STORAGE_KEY, String(enabled));
    } catch {
      // The interface still works when browser storage is unavailable.
    }
  }

  function renderSoundPreference() {
    const enabled = state.soundEnabled;

    /*
     * These labels describe the action:
     * TURN SOUND ON -> enables the preference.
     * SOUND OFF    -> turns the preference off again.
     */
    elements.soundLabel.textContent = enabled
      ? "SOUND OFF"
      : "TURN SOUND ON";

    elements.soundButton.setAttribute("aria-pressed", String(enabled));

    elements.soundButton.setAttribute(
      "aria-label",
      enabled ? "Turn sound preference off" : "Turn sound preference on"
    );

    elements.soundButton.title = enabled
      ? "Preference is on. Click to turn it off. Ambient audio comes later."
      : "Preference is off. Click to turn it on. Ambient audio comes later.";

    setSymbol(
      elements.soundIcon,
      enabled ? "volume" : "volume-off"
    );
  }

  function toggleSoundPreference() {
    if (state.phase !== "idle") return;

    state.soundEnabled = !state.soundEnabled;

    saveSoundPreference(state.soundEnabled);
    renderSoundPreference();

    showToast(
      `Sound preference ${state.soundEnabled ? "ON" : "OFF"}. ` +
      "Saved for this session. Ambient audio is coming later."
    );
  }

  /* =======================================================
     SMALL NOTIFICATIONS
     ======================================================= */

  function showToast(message) {
    window.clearTimeout(toastTimer);

    elements.toastMessage.textContent = message;
    elements.toast.hidden = false;

    toastTimer = window.setTimeout(hideToast, 4800);
  }

  function hideToast() {
    window.clearTimeout(toastTimer);
    toastTimer = null;
    elements.toast.hidden = true;
  }

  /* =======================================================
     ERA ENTRY STATE MACHINE
     idle -> initializing -> entering -> intro -> idle
     ======================================================= */

  function setPhase(phase) {
    state.phase = phase;
    elements.machine.dataset.phase = phase;

    const traveling = phase === "initializing" || phase === "entering";
    elements.machine.classList.toggle("is-traveling", traveling);

    elements.main.setAttribute("aria-busy", String(traveling));
  }

  function lockControls(locked) {
    yearButtons.forEach((button) => {
      button.disabled = locked;
    });

    elements.enterButtons.forEach((button) => {
      button.disabled = locked;
    });

    elements.soundButton.disabled = locked;
    elements.aboutButton.disabled = locked;
  }

  function wait(duration, signal) {
    return new Promise((resolve, reject) => {
      if (signal.aborted) {
        reject(new DOMException("Transition cancelled", "AbortError"));
        return;
      }

      const timer = window.setTimeout(() => {
        signal.removeEventListener("abort", handleAbort);
        resolve();
      }, duration);

      function handleAbort() {
        window.clearTimeout(timer);
        signal.removeEventListener("abort", handleAbort);
        reject(new DOMException("Transition cancelled", "AbortError"));
      }

      signal.addEventListener("abort", handleAbort, { once: true });
    });
  }

  function preparePortal(era) {
    elements.portal.dataset.stage = "idle";

    elements.portalProgress.hidden = false;
    elements.portalIntro.hidden = true;

    elements.webNotice.hidden = true;
    elements.webNotice.textContent = "";

    elements.transferYear.textContent = era.year;
    elements.transferStatus.textContent = `INITIALIZING ${era.year}...`;

    elements.transferMeter.setAttribute("aria-valuenow", "0");
    elements.transferMeter.setAttribute(
      "aria-valuetext",
      `Preparing the ${era.year} era introduction`
    );

    elements.portalHeading.textContent = `Travel to ${era.year}`;

    elements.introYear.textContent = era.year;
    elements.introTitle.textContent = era.title;
    elements.introDescription.textContent = era.introduction;

    setSymbol(elements.introSymbol, era.symbol);

    elements.closePortal.setAttribute(
      "aria-label",
      "Cancel transition and return to the time machine"
    );
  }

  async function enterEra(trigger) {
    if (state.phase !== "idle") return;
    if (elements.portal.open || elements.aboutDialog.open) return;

    /*
     * Commit any pending card update before capturing the destination.
     * The transition uses this snapshot, not a changing global year.
     */
    finishCardTransition(false);

    const era = currentEra();
    const controller = new AbortController();

    transitionController = controller;
    portalTrigger = trigger;
    state.travelEra = era;

    preparePortal(era);
    hideToast();

    lockControls(true);
    document.body.classList.add("modal-open");
    setPhase("initializing");

    try {
      elements.portal.showModal();

      /*
       * Native showModal() makes the rest of the page inert and
       * handles keyboard focus containment.
       */
      elements.portal.dataset.stage = "initializing";
      elements.transferMeter.setAttribute("aria-valuenow", "40");

      await wait(reducedMotion.matches ? 450 : 1100, controller.signal);

      setPhase("entering");
      elements.portal.dataset.stage = "entering";
      elements.transferStatus.textContent = `ENTERING ${era.year}...`;
      elements.transferMeter.setAttribute("aria-valuenow", "92");

      await wait(reducedMotion.matches ? 450 : 1000, controller.signal);

      if (controller.signal.aborted) return;

      showEraIntroduction(era);
    } catch (error) {
      if (error.name === "AbortError") return;

      if (elements.portal.open) {
        elements.portal.close();
      } else {
        resetPortal();
      }

      showToast("The portal could not open. Please try again.");
    }
  }

  function showEraIntroduction(era) {
    setPhase("intro");

    elements.transferMeter.setAttribute("aria-valuenow", "100");
    elements.transferMeter.setAttribute(
      "aria-valuetext",
      `${era.year} era introduction ready`
    );

    elements.portal.dataset.stage = "intro";
    elements.portalProgress.hidden = true;
    elements.portalIntro.hidden = false;

    elements.portalHeading.textContent = `${era.year}: ${era.title}`;

    elements.closePortal.setAttribute(
      "aria-label",
      "Close era introduction and return to the time machine"
    );

    elements.introTitle.focus({
      preventScroll: true
    });
  }

  function closePortal() {
    if (transitionController) {
      transitionController.abort();
    }

    if (elements.portal.open) {
      elements.portal.close();
    }
  }

  function resetPortal() {
    if (transitionController) {
      transitionController.abort();
      transitionController = null;
    }

    state.travelEra = null;

    setPhase("idle");
    lockControls(false);

    document.body.classList.remove("modal-open");

    elements.portal.dataset.stage = "idle";
    elements.portalProgress.hidden = false;
    elements.portalIntro.hidden = true;
    elements.webNotice.hidden = true;

    /*
     * Restore focus without scrolling the visitor away from the
     * control they used to enter the era.
     */
    const trigger = portalTrigger;
    portalTrigger = null;

    window.requestAnimationFrame(() => {
      if (trigger && document.contains(trigger)) {
        trigger.focus({ preventScroll: true });
      }
    });
  }

  /* =======================================================
     FUTURE WEB ENTRY HOOK
     No simulated websites or future routes are built here.
     ======================================================= */

  function requestWebEntry() {
    if (state.phase !== "intro" || !state.travelEra) return;

    const era = state.travelEra;

    /*
     * A future tab can listen for this event, preventDefault(),
     * and navigate to its real implementation.
     */
    const request = new CustomEvent("rewindyr:enter-web", {
      cancelable: true,
      detail: {
        year: era.year,
        title: era.title,
        theme: era.theme
      }
    });

    const useDefaultFeedback = window.dispatchEvent(request);

    if (!useDefaultFeedback) return;

    elements.webNotice.textContent =
      `The ${era.year} destination is still being built. ` +
      "This home-page version ends at the era introduction. " +
      "The fictional interactive internet will arrive in a future tab.";

    elements.webNotice.hidden = false;
    elements.webNotice.focus({ preventScroll: true });
  }

  /* =======================================================
     ABOUT DIALOG
     ======================================================= */

  function openAbout() {
    if (state.phase !== "idle") return;
    if (elements.aboutDialog.open || elements.portal.open) return;

    hideToast();
    document.body.classList.add("modal-open");
    elements.aboutDialog.showModal();
  }

  function closeAbout() {
    if (elements.aboutDialog.open) {
      elements.aboutDialog.close();
    }
  }

  function handleAboutClosed() {
    document.body.classList.remove("modal-open");

    elements.aboutButton.focus({
      preventScroll: true
    });
  }

  /* =======================================================
     DECORATIVE PARTICLES
     Deterministic positions avoid layout changes on selection.
     ======================================================= */

  function createParticles() {
    const fragment = document.createDocumentFragment();
    const particleCount = 18;

    for (let index = 0; index < particleCount; index += 1) {
      const particle = document.createElement("span");

      particle.className = "particle";

      particle.style.setProperty("--x", `${(index * 37 + 7) % 100}%`);
      particle.style.setProperty("--y", `${(index * 23 + 11) % 100}%`);
      particle.style.setProperty("--size", index % 3 === 0 ? "2px" : "1px");
      particle.style.setProperty("--duration", `${12 + (index % 5) * 3}s`);
      particle.style.setProperty("--delay", `${index * -1.7}s`);

      fragment.appendChild(particle);
    }

    elements.particles.replaceChildren(fragment);
  }

  /* =======================================================
     EVENTS
     ======================================================= */

  function bindEvents() {
    elements.yearGrid.addEventListener("keydown", handleTimelineKeyboard);

    elements.enterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        enterEra(button);
      });
    });

    elements.soundButton.addEventListener("click", toggleSoundPreference);
    elements.dismissToast.addEventListener("click", hideToast);

    elements.aboutButton.addEventListener("click", openAbout);

    elements.aboutDialog
      .querySelectorAll("[data-close-about]")
      .forEach((button) => {
        button.addEventListener("click", closeAbout);
      });

    elements.aboutDialog.addEventListener("close", handleAboutClosed);

    elements.closePortal.addEventListener("click", closePortal);
    elements.portal.addEventListener("close", resetPortal);

    /*
     * Escape cancels the timer sequence as well as closing the dialog.
     * This prevents a cancelled transition from reopening later.
     */
    elements.portal.addEventListener("cancel", (event) => {
      event.preventDefault();
      closePortal();
    });

    elements.enterWeb.addEventListener("click", requestWebEntry);

    document.addEventListener("visibilitychange", () => {
      elements.machine.classList.toggle("is-paused", document.hidden);
    });

    reducedMotion.addEventListener("change", () => {
      if (reducedMotion.matches && cardTimer !== null) {
        finishCardTransition(true);
      }
    });

    window.addEventListener("pagehide", () => {
      window.clearTimeout(cardTimer);
      window.clearTimeout(toastTimer);

      if (transitionController) {
        transitionController.abort();
      }
    });
  }

  /* =======================================================
     INITIALIZATION
     ======================================================= */

  function initialize() {
    buildTimeline();
    createParticles();

    const startingEra = currentEra();

    updateYearNodes();
    updateAtmosphere(startingEra);
    renderEraContent(startingEra);
    renderSoundPreference();

    bindEvents();
  }

  initialize();
})();