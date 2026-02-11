/* =========================================================
   🖱️ CURSOR (3 lagen)
   - we volgen de muis met 3 “volgers”
   - elk bolletje heeft een andere snelheid → natuurlijke trailing
========================================================= */
(() => {
  const cursors = document.querySelectorAll(".cursor");
  if (!cursors.length) return;

  // Op touch devices doen we cursor in CSS uit,
  // maar dit voorkomt ook onnodige JS.
  const isTouch = matchMedia("(hover: none)").matches;
  if (isTouch) return;

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const positions = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ];

  const speeds = [0.18, 0.12, 0.07];

  function animate() {
    positions.forEach((pos, i) => {
      pos.x += (mouseX - pos.x) * speeds[i];
      pos.y += (mouseY - pos.y) * speeds[i];

      cursors[i].style.left = `${pos.x}px`;
      cursors[i].style.top = `${pos.y}px`;
    });

    requestAnimationFrame(animate);
  }

  animate();
})();

/* =========================================================
   🌍 EXPLORING HOVER (emoji pop)
   - bij mouseenter geven we elke emoji een random richting/afstand
   - CSS animatie gebruikt --dx en --dy
========================================================= */
(() => {
  const exploring = document.querySelector(".exploring");
  if (!exploring) return;

  exploring.addEventListener("mouseenter", () => {
    const balls = exploring.querySelectorAll(".ball");

    balls.forEach((ball) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 220 + Math.random() * 120;

      const dx = Math.cos(angle) * distance + "px";
      const dy = Math.sin(angle) * distance + "px";

      ball.style.setProperty("--dx", dx);
      ball.style.setProperty("--dy", dy);

      // restart animatie zodat het elke hover opnieuw werkt
      ball.style.animation = "none";
      ball.offsetHeight; // force reflow
      ball.style.animation = "";
    });
  });
})();

/* =========================================================
   ✅ QUIZ: 2 truths and a lie
   - data-correct bevat de juiste value (a/b/c)
   - feedback komt in aria-live element (toegankelijk)
========================================================= */
(() => {
  const form = document.getElementById("quizForm");
  const feedback = document.getElementById("quizFeedback");
  if (!form || !feedback) return;

  const options = form.querySelectorAll(".quiz__option");

  form.addEventListener("change", (e) => {
    const input = e.target;
    if (!(input instanceof HTMLInputElement)) return;
    if (input.type !== "radio") return;

    // reset styles
    options.forEach((opt) => opt.classList.remove("is-correct", "is-wrong"));

    const label = input.closest(".quiz__option");
    const isCorrect = input.dataset.correct === "true";

    if (label) {
      label.classList.add(isCorrect ? "is-correct" : "is-wrong");
    }

    feedback.textContent = isCorrect
      ? "✅ Goed! CSS gaat vooral over styling en layout."
      : "❌ Niet helemaal. CSS gaat vooral over styling en layout.";
  });
})();


/* =========================================================
   📷 POLAROID STACK LOOP
   - elke X seconden zetten we de bovenste foto achteraan
   - we gebruiken opacity animatie voor “shuffle gevoel”
========================================================= */
(() => {
  const stack = document.querySelector(".polaroids");
  if (!stack) return;

  setInterval(() => {
    const first = stack.firstElementChild;
    if (!first) return;

    first.style.opacity = "0";

    setTimeout(() => {
      stack.appendChild(first);
      first.style.opacity = "1";
    }, 600);
  }, 3000);
})();

/* =========================================================
   🧲 DRAGGABLE GOALS
   - pointer events werken voor muis + touch
   - clamp zorgt dat cards binnen de stage blijven
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const stage = document.getElementById("goalsStage");
  if (!stage) return;

  const cards = [...stage.querySelectorAll(".goal[data-drag]")];
  if (!cards.length) return;

  // Zorg dat stage hoog genoeg is op basis van startposities
  const stageRect = stage.getBoundingClientRect();
  const cardRects = cards.map((el) => {
    const r = el.getBoundingClientRect();
    return {
      el,
      left: r.left - stageRect.left,
      top: r.top - stageRect.top,
      width: r.width,
      height: r.height,
    };
  });

  const maxBottom = Math.max(...cardRects.map((c) => c.top + c.height));
  stage.style.minHeight = `${Math.ceil(maxBottom)}px`;

  let z = 10;

  cardRects.forEach(({ el, left, top }) => {
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
    el.style.zIndex = ++z;

    let startX = 0, startY = 0, baseX = 0, baseY = 0;

    const getXY = () => {
      const m = el.style.transform.match(/translate3d\(([-\d.]+)px,\s*([-\d.]+)px/i);
      return m ? { x: parseFloat(m[1]), y: parseFloat(m[2]) } : { x: 0, y: 0 };
    };

    const clamp = (x, y) => {
      const s = stage.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const maxX = s.width - r.width;
      const maxY = s.height - r.height;

      return {
        x: Math.max(0, Math.min(x, maxX)),
        y: Math.max(0, Math.min(y, maxY)),
      };
    };

    const onDown = (e) => {
      el.setPointerCapture(e.pointerId);
      el.classList.add("is-dragging");
      el.style.zIndex = ++z;

      const { x, y } = getXY();
      baseX = x;
      baseY = y;
      startX = e.clientX;
      startY = e.clientY;

      const onMove = (ev) => {
        const nx = baseX + (ev.clientX - startX);
        const ny = baseY + (ev.clientY - startY);

        const clamped = clamp(nx, ny);
        el.style.transform = `translate3d(${clamped.x}px, ${clamped.y}px, 0)`;
      };

      const onUp = (ev) => {
        el.classList.remove("is-dragging");
        try { el.releasePointerCapture(ev.pointerId); } catch {}
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    };

    el.addEventListener("pointerdown", onDown);
  });
});

/* =========================================================
   💤 IDLE POPUP (dialog)
   - na X ms zonder activiteit: showModal()
   - activity events resetten de timer
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const IDLE_MS = 100_000;
  const popup = document.getElementById("idlePopup");
  if (!popup) return;

  let timer = null;

  const resetTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!popup.open) popup.showModal();
    }, IDLE_MS);
  };

  const closePopup = () => {
    if (popup.open) popup.close();
    resetTimer();
  };

  const activityEvents = ["mousemove", "mousedown", "keydown", "scroll", "touchstart", "pointerdown"];
  activityEvents.forEach((evt) => {
    window.addEventListener(evt, () => {
      if (!popup.open) resetTimer();
    }, { passive: true });
  });

  popup.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closePopup();
    if (e.target === popup) closePopup(); // klik op overlay
  });

  popup.addEventListener("close", resetTimer);

  resetTimer();
});

/* =========================================================
   🌦️ WEATHER (Open-Meteo)
   - browser vraagt geolocation permissie
   - daarna fetch naar open-meteo API
========================================================= */
(() => {
  const btn = document.getElementById("wxBtn");
  const status = document.getElementById("wxStatus");
  if (!btn || !status) return;

  const codeToText = (code) => {
    if (code === 0) return "Clear";
    if ([1, 2, 3].includes(code)) return "Cloudy";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "Rain";
    if ([71, 73, 75, 85, 86].includes(code)) return "Snow";
    return "Mixed";
  };

  btn.addEventListener("click", () => {
    if (!("geolocation" in navigator)) {
      status.textContent = "Geolocation is not supported in this browser.";
      return;
    }

    status.textContent = "Getting your location…";

    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;
        status.textContent = "Fetching weather…";

        const url =
          `https://api.open-meteo.com/v1/forecast` +
          `?latitude=${latitude}&longitude=${longitude}` +
          `&current=temperature_2m,weather_code,wind_speed_10m` +
          `&timezone=auto`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Weather request failed");
        const data = await res.json();

        const t = data.current?.temperature_2m;
        const w = data.current?.weather_code;
        const wind = data.current?.wind_speed_10m;

        status.textContent = `Now: ${t}°C · ${codeToText(w)} · wind ${wind} km/h`;
      } catch (err) {
        console.error(err);
        status.textContent = "Could not load weather.";
      }
    }, () => {
      status.textContent = "Location denied / unavailable.";
    }, { enableHighAccuracy: false, timeout: 8000 });
  });
})();

/* =========================================================
   🕒 CLOCK (WorldTimeAPI + fallback)
   - sync met API 1x per minuut (klopt beter)
   - tussen syncs laten we hem door-tikken met performance.now()
========================================================= */
(() => {
  const el = document.getElementById("clock");
  if (!el) return;

  const TZ = "Europe/Amsterdam";
  const fmt = new Intl.DateTimeFormat("nl-NL", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
  });

  let baseUnixMs = null;
  let basePerf = null;

  const render = () => {
    let now;

    if (baseUnixMs != null && basePerf != null) {
      const delta = performance.now() - basePerf;
      now = new Date(baseUnixMs + delta);
    } else {
      now = new Date();
    }

    el.textContent = fmt.format(now);
  };

  const sync = async () => {
    try {
      const res = await fetch("https://worldtimeapi.org/api/timezone/Europe/Amsterdam", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Time API failed");

      const data = await res.json();
      baseUnixMs = data.unixtime * 1000;
      basePerf = performance.now();

      render();
    } catch (e) {
      console.warn("Clock fallback (no API):", e);
      baseUnixMs = null;
      basePerf = null;
      render();
    }
  };

  sync();
  render();
  setInterval(render, 1000);
  setInterval(sync, 60_000);
})();

/* =========================================================
   💬 QUOTE (type.fit)
   - haalt lijst quotes op, kiest random quote
   - fallback quote als API faalt
========================================================= */
(() => {
  const textEl = document.getElementById("quoteText");
  const authorEl = document.getElementById("quoteAuthor");
  if (!textEl || !authorEl) return;

  let quotes = null;

  const pick = () => quotes[Math.floor(Math.random() * quotes.length)];
  const show = (q) => {
    textEl.textContent = `“${q.text}”`;
    authorEl.textContent = q.author ? `— ${q.author}` : "— Unknown";
  };

  const load = async () => {
    try {
      if (!quotes) {
        const res = await fetch("https://type.fit/api/quotes");
        if (!res.ok) throw new Error("Quotes fetch failed");
        quotes = await res.json();
      }
      show(pick());
    } catch (e) {
      console.warn(e);
      show({ text: "Stay hungry, stay foolish.", author: "Steve Jobs" });
    }
  };

  load();
  setInterval(load, 6000);
})();
