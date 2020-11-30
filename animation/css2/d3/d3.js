
const starContainer = document.querySelector("#stars");

// Create Stars
for (let i = 1; i <= 100; i++) {
  let star = document.createElement("div");
  star.classList.add("star");
  starContainer.appendChild(star);
}

const stars = document.querySelectorAll(".star");

function randomPct() {
  let pct = Math.floor(Math.random() *100);
  return pct + "%";
}

// Place stars randomly throughout sky
stars.forEach(star => {
  star.style.left = randomPct();
  star.style.top = randomPct();
});