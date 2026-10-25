/* Native media and transform-only motion. No animation runtime dependency. */
(() => {
  const hero = document.querySelector("#hero-film"),
    toggle = document.querySelector("#motion-toggle"),
    filmDialog = document.querySelector("#film-dialog"),
    film = document.querySelector("#concept-film");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)"),
    saveData = navigator.connection?.saveData === true;
  let userPaused = reduce.matches || saveData,
    inView = true,
    returnFocus = null;
  const copy = {
    cinemaLabel: ["THE CRAFT BEHIND THE EXPERIENCE", "الحِرفة خلف التجربة"],
    reelEyebrow: ["A GLIMPSE OF THE POSSIBILITIES", "لمحة من الإمكانات"],
    reelLaunch: ["The work, in motion.", "التجربة، تنبض بالحركة."],
    reelTitle: ["The concept reel.", "فيلم التصوّرات."],
    reelDescription: [
      "A visual study of Saffron House, Noura Academy, and Forma. Fictional Concept / Demo interfaces, not client work.",
      "جولة بصرية في Saffron House وأكاديمية Noura ومتجر Forma. واجهات خيالية للتوضيح، وليست مشاريع عملاء.",
    ],
    reelExplore: [
      "Explore the interactive concepts ↗",
      "استكشف التجارب التفاعلية ↗",
    ],
  };
  const say = (en, ar) => (document.documentElement.lang === "ar" ? ar : en);
  function titleEntrance() {
    const h = document.querySelector(".hero h1");
    if (!h || h.querySelector(".hero-line")) return;
    h.innerHTML = h.innerHTML
      .split(/<br\s*\/?\s*>/i)
      .map(
        (line, i) =>
          `<span class="hero-line"><span style="--line-delay:${i * 100}ms">${line}</span></span>`,
      )
      .join(" ");
  }
  function labels() {
    document.querySelectorAll("[data-motion-copy]").forEach((el) => {
      const pair = copy[el.dataset.motionCopy];
      if (pair) el.textContent = say(...pair);
    });
    if (toggle) {
      toggle.querySelector(".motion-label").textContent = userPaused
        ? say("Play motion", "تشغيل الحركة")
        : say("Pause motion", "إيقاف الحركة");
      toggle.querySelector(".motion-symbol").textContent = userPaused
        ? "▶"
        : "Ⅱ";
      toggle.setAttribute("aria-pressed", String(userPaused));
      toggle.setAttribute(
        "aria-label",
        userPaused
          ? say("Play visual motion", "تشغيل الحركة المرئية")
          : say("Pause all visual motion", "إيقاف كل الحركة المرئية"),
      );
    }
    document
      .querySelector("#close-film")
      ?.setAttribute("aria-label", say("Close film", "إغلاق الفيلم"));
    film?.setAttribute(
      "aria-label",
      say(
        "Twelve-second fictional website and system concept reel",
        "فيلم توضيحي مدته اثنتا عشرة ثانية لنماذج مواقع وأنظمة",
      ),
    );
    titleEntrance();
  }
  function setHero() {
    document.body.classList.toggle("motion-paused", userPaused);
    if (!hero) return;
    const shouldPlay =
      !userPaused && inView && !document.hidden && !filmDialog?.open;
    if (shouldPlay) {
      hero.muted = true;
      hero.defaultMuted = true;
      if (!hero.getAttribute("src")) {
        hero.src = hero.dataset.src;
        hero.load();
      }
      hero.play().catch((error) => {
        if (error.name === "AbortError") return;
        userPaused = true;
        document.body.classList.add("motion-paused");
        labels();
      });
    } else hero.pause();
    labels();
  }
  toggle?.addEventListener("click", () => {
    userPaused = !userPaused;
    setHero();
  });
  if (hero) {
    hero.addEventListener("error", () => {
      userPaused = true;
      document.body.classList.add("motion-paused");
      labels();
    });
    new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        setHero();
      },
      { threshold: 0.05 },
    ).observe(hero.closest(".hero"));
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) film?.pause();
    setHero();
  });
  reduce.addEventListener("change", (e) => {
    userPaused = e.matches;
    setHero();
  });
  function reelSource() {
    if (!film) return;
    const locale = document.documentElement.lang === "ar" ? "ar" : "en";
    const path = `assets/concept-reel-${locale}.mp4`;
    film.poster = `assets/reel-poster-${locale}.webp`;
    if (!film.getAttribute("src")?.endsWith(path)) {
      film.src = path;
      film.load();
    }
  }
  document.querySelectorAll("[data-reel]").forEach((button) =>
    button.addEventListener("click", () => {
      returnFocus = button;
      reelSource();
      filmDialog.showModal();
      document.body.classList.add("dialog-open");
      setHero();
      document.querySelector("#close-film").focus();
      film.play().catch(() => {});
    }),
  );
  document
    .querySelector("#close-film")
    ?.addEventListener("click", () => filmDialog.close());
  filmDialog?.addEventListener("close", () => {
    film.pause();
    film.currentTime = 0;
    if (!document.querySelector("#demo-dialog")?.open)
      document.body.classList.remove("dialog-open");
    setHero();
    returnFocus?.focus();
  });
  filmDialog?.addEventListener("click", (e) => {
    if (e.target !== filmDialog) return;
    const r = filmDialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      filmDialog.close();
  });
  let progressQueued = false;
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.append(progress);
  function progressFrame() {
    progressQueued = false;
    const range = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${range > 0 ? scrollY / range : 0})`;
  }
  addEventListener(
    "scroll",
    () => {
      if (!progressQueued) {
        progressQueued = true;
        requestAnimationFrame(progressFrame);
      }
    },
    { passive: true },
  );
  addEventListener("resize", progressFrame);
  progressFrame();
  window.RatqMotion = {
    syncLocale() {
      labels();
      if (filmDialog?.open) {
        reelSource();
        film.play().catch(() => {});
      } else if (film) {
        film.poster = `assets/reel-poster-${document.documentElement.lang === "ar" ? "ar" : "en"}.webp`;
      }
    },
  };
  labels();
  setHero();
})();
