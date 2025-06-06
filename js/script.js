// 3D
const card = document.getElementById('card');
const body = document.body;

body.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  const rotateY = x * 30;
  const rotateX = -y * 30;

  card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.03)`;
});

body.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
});

// pew pew
const hoverSound = document.getElementById("hoverSound");
document.querySelectorAll(".icons a").forEach(icon => {
  icon.addEventListener("click", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

// Stars background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array(200).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.2,
  d: Math.random() * 100
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff66";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach(s => {
    s.y += 0.2;
    if (s.y > canvas.height) s.y = 0;
  });
}

function animateStars() {
  drawStars();
  updateStars();
  requestAnimationFrame(animateStars);
}
animateStars();
