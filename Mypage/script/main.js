/* =========================================================
   🖱️ CURSOR SETUP
   - selecteer alle cursor-elementen
   - houd muispositie bij
========================================================= */
const cursors = document.querySelectorAll('.cursor');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

/* =========================================================
   📍 CURSOR POSITIES
   - startposities voor elk bolletje
========================================================= */
const positions = [
  { x: 0, y: 0 }, 
  { x: 0, y: 0 }, 
  { x: 0, y: 0 }  
];

/* =========================================================
   ⚡ CURSOR SNELHEDEN
   - elk bolletje volgt de muis anders
   - lager = trager = natuurlijker
========================================================= */
const speeds = [0.18, 0.12, 0.07];

/* =========================================================
   🎥 ANIMATIE LOOP
   - laat cursors smooth achter de muis aan bewegen
========================================================= */
function animate() {
  positions.forEach((pos, index) => {
    pos.x += (mouseX - pos.x) * speeds[index];
    pos.y += (mouseY - pos.y) * speeds[index];

    cursors[index].style.left = `${pos.x}px`;
    cursors[index].style.top = `${pos.y}px`;
  });

  requestAnimationFrame(animate);
}

animate();

/* =========================================================
   🌍 EXPLORING HOVER EFFECT
   - laat emoji-ballen random wegschieten
========================================================= */
const exploring = document.querySelector('.exploring');

if (exploring) {
  exploring.addEventListener('mouseenter', () => {
    const balls = exploring.querySelectorAll('.ball');

    balls.forEach((ball) => {

      /* 🎯 random richting */
      const angle = Math.random() * Math.PI * 2;

      /* 📏 random afstand */
      const distance = 220 + Math.random() * 120;

      /* 🧭 bereken X/Y */
      const dx = Math.cos(angle) * distance + 'px';
      const dy = Math.sin(angle) * distance + 'px';

      /* 💾 geef door aan CSS */
      ball.style.setProperty('--dx', dx);
      ball.style.setProperty('--dy', dy);

      /* 🔄 restart animatie bij elke hover */
      ball.style.animation = 'none';
      ball.offsetHeight; // force reflow
      ball.style.animation = '';
    });
  });
}

/* =========================================================
  Quuiz
   - laat zien of je het goede antwoord hebt 
========================================================= */


  const quizForm = document.querySelector(".quiz__form");
  const feedbackEl = quizForm.querySelector(".quiz__feedback");
  const resetBtn = quizForm.querySelector(".quiz__reset");
  const correctValue = quizForm.dataset.correct;

  function lockOptions(lock = true) {
    quizForm.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.disabled = lock;
      input.closest("label")?.setAttribute("aria-disabled", String(lock));
    });
  }

  quizForm.addEventListener("change", (e) => {
    const picked = quizForm.querySelector('input[name="answer"]:checked')?.value;
    if (!picked) return;

    const isCorrect = picked === correctValue;

    feedbackEl.textContent = isCorrect
      ? "✅ Goed! "
      : "❌ fout";

  

  });



  resetBtn.addEventListener("click", () => {
    quizForm.reset();
    feedbackEl.textContent = "";
    lockOptions(false);
  });


  /* polaroid foto's*/

  const stack = document.querySelector('main section:nth-of-type(1) ul');

  setInterval(() => {
    const first = stack.firstElementChild;

    // animatie trigger
    first.style.transform += ' translateY(10px)';
    first.style.opacity = '0';

    setTimeout(() => {
      first.style.transform = '';
      first.style.opacity = '1';

      stack.appendChild(first);
    }, 600);
  }, 3000);

  /* =========================
   DRAGGABLE CARDS
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const stage = document.getElementById("goalsStage");
  if (!stage) return;

  const cards = [...stage.querySelectorAll(".goal[data-drag]")];
  if (!cards.length) return;

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
    el.style.position = "absolute";
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
    el.style.transform = `translate3d(0px, 0px, 0)`;
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

        const { x, y } = clamp(nx, ny);
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
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
