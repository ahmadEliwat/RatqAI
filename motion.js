/* Native media and transform-only motion. No animation runtime dependency. */
(() => {
  const hero = document.querySelector("#hero-film");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)"),
    saveData = navigator.connection?.saveData === true;
  let userPaused = reduce.matches || saveData,
    inView = true,
    finished = false;
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
    const label = document.querySelector('[data-motion-copy="cinemaLabel"]');
    if (label)
      label.textContent = say(
        "THE CRAFT BEHIND THE EXPERIENCE",
        "الحِرفة خلف التجربة",
      );
    titleEntrance();
  }
  function setHero() {
    document.body.classList.toggle("motion-paused", userPaused);
    if (!hero) return;
    const shouldPlay = !userPaused && !finished && inView && !document.hidden;
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
  if (hero) {
    // A brief entrance finishes within five seconds, without a persistent loop.
    hero.addEventListener("timeupdate", () => {
      if (hero.currentTime >= 4.7) {
        finished = true;
        hero.pause();
      }
    });

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
    setHero();
  });
  reduce.addEventListener("change", (e) => {
    userPaused = e.matches;
    setHero();
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
  window.RatqMotion = { syncLocale: labels };
  labels();
  setHero();
})();
