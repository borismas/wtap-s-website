```javascript
/* =========================
   PARTICLES
========================= */

const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");

let particles = [];

const mouse = {
  x: -9999,
  y: -9999
};


function resize() {

  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;

}


window.addEventListener("resize", resize);


window.addEventListener("mousemove", function (event) {

  mouse.x = event.clientX;

  mouse.y = event.clientY;

});


resize();


function createParticle() {

  return {

    x: Math.random() * canvas.width,

    y: Math.random() * canvas.height,

    vx: (Math.random() - 0.5) * 0.25,

    vy: (Math.random() - 0.5) * 0.25,

    radius: Math.random() * 1.4 + 0.3,

    opacity: Math.random() * 0.45 + 0.08

  };

}


for (
  let i = 0;
  i < Math.min(100, window.innerWidth / 10);
  i++
) {

  particles.push(createParticle());

}


function drawParticles() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  for (const particle of particles) {

    particle.x += particle.vx;

    particle.y += particle.vy;


    if (
      particle.x < 0 ||
      particle.x > canvas.width
    ) {

      particle.vx *= -1;

    }


    if (
      particle.y < 0 ||
      particle.y > canvas.height
    ) {

      particle.vy *= -1;

    }


    const dx = particle.x - mouse.x;

    const dy = particle.y - mouse.y;

    const distance = Math.hypot(dx, dy);


    if (distance < 140 && distance > 0) {

      particle.x +=
        (dx / distance) * 0.35;

      particle.y +=
        (dy / distance) * 0.35;

    }


    ctx.beginPath();

    ctx.arc(
      particle.x,
      particle.y,
      particle.radius,
      0,
      Math.PI * 2
    );


    ctx.fillStyle =
      `rgba(57,255,136,${particle.opacity})`;


    ctx.fill();

  }


  requestAnimationFrame(drawParticles);

}


drawParticles();




   UPTIME
========================= */

const startTime =
  Date.now() -
  (
    3 * 24 * 60 * 60 * 1000 +
    7 * 60 * 60 * 1000 +
    23 * 60 * 1000
  );


function updateUptime() {

  let seconds =
    Math.floor(
      (Date.now() - startTime) / 1000
    );


  const days =
    Math.floor(seconds / 86400);

  seconds %= 86400;


  const hours =
    Math.floor(seconds / 3600);

  seconds %= 3600;


  const minutes =
    Math.floor(seconds / 60);


  document.getElementById(
    "uptime"
  ).textContent =
    `${days}d ${hours}h ${minutes}m`;

}


setInterval(updateUptime, 1000);

updateUptime();



/* =========================
   VISITOR COUNTER
========================= */

/*
   GitHub Pages is static.

   This gives you a local visitor counter.
   For a GLOBAL visitor counter, replace this
   later with a counter API.
*/

const visitorKey =
  "wtap-profile-visits";


let visits =
  Number(
    localStorage.getItem(visitorKey) || 0
  ) + 1;


localStorage.setItem(
  visitorKey,
  visits
);


document.getElementById(
  "visitors"
).textContent =
  String(visits).padStart(6, "0");



/* =========================
   YEAR
========================= */

document.getElementById(
  "year"
).textContent =
  new Date().getFullYear();



/* =========================
   MUSIC UI
========================= */

let playing = false;

let progress = 35;


const playButton =
  document.getElementById("play");


const progressBar =
  document.getElementById("progress");


playButton.addEventListener(
  "click",
  function () {

    playing = !playing;

    playButton.textContent =
      playing ? "Ⅱ" : "▶";

  }
);


setInterval(
  function () {

    if (!playing) return;


    progress += 0.12;


    if (progress > 100) {

      progress = 0;

    }


    progressBar.style.width =
      progress + "%";

  },
  100
);
```
```javascript
/* =========================
   CUSTOM CURSOR HOVER EFFECT
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor-glow");

  if (!cursor) {
    console.error("Cursor element not found!");
    return;
  }

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
});

