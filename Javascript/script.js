// Effect 1
let text1 = document.querySelector(".text1");
let spans = text1.innerText
  .split("")
  .map((letter, i) => {
    return `<span style="transition-delay:${i * 40}ms; filter:hue-rotate(${
      i * 30
    }deg);">${letter}</span>`;
  })
  .join("");

text1.innerHTML = spans;

// Effect 2

let text2 = document.querySelector(".text2");

let htmlSpans = text2.innerText
  .split("")
  .map((letter, i) => {
    return `<span style= "animation-duration: ${
      Math.random() * 5
    }s; filter: hue-rotate(${i * 50}deg">${letter}</span>`;
  })
  .join("");

text2.innerHTML = htmlSpans;

// Effect 5
let container = document.querySelector(".container");
let toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});

// Effect 6
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let scrollDistance = window.scrollY;
    let secDistance = sec.offsetTop;

    if (scrollDistance >= secDistance - 150) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

// Effect 7

let pattern = document.querySelector(".bg");

window.addEventListener("scroll", () => {
  pattern.style.backgroundPosition = window.scrollY + "px";
});

// Effect 8

let section = document.querySelector(".effect8");
let j = 0;

while (j < 200) {
  let star = document.createElement("i");
  let x = Math.floor(Math.random() * window.innerWidth);
  star.style.left = `${x}px`;
  let y = Math.floor(Math.random() * window.innerHeight);
  star.style.top = `${y}px`;

  let size = Math.random() * 4;
  star.style.width = `${1 + size}px`;
  star.style.height = `${1 + size}px`;

  let duration = Math.random() * 2;
  star.style.animationDuration = `${duration + 1}s`;

  section.appendChild(star);
  j++;
}

// Effect 9

const sun = document.querySelector(".sun");
const scene = document.querySelector(".effect9");
sun.addEventListener("click", () => {
  scene.classList.toggle("night");
});

// Effect 10
let navToggle = document.querySelector(".navToggle");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
});

// Effect 11
let video = document.querySelector(".video");
let thumbs = document.querySelectorAll(".effect11 ul li");

thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => {
    video.src = `../assets/video${i + 1}.mp4`;
  });
});

// Effect 12
let container2 = document.querySelector(".effect12 .container");

for (let i = 0; i < 20; i++) {
  let glitchBox = document.createElement("div");
  glitchBox.classList.add("box");
  container2.appendChild(glitchBox);
}

setInterval(function () {
  let glitches = document.querySelectorAll(".box");
  glitches.forEach((glitch) => {
    glitch.style.left = Math.random() * 100 + "vw";
    glitch.style.top = Math.random() * 100 + "vw";
    glitch.style.height = Math.random() * 100 + "px";
    glitch.style.width = Math.random() * 400 + "px";
    glitch.style.backgroundPosition = Math.random() * 50 + "px";
  });
}, 200);

// Effect 13
let navigation = document.querySelector(".effect13 .navigation");

navigation.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

// Effect 14
let navigation2 = document.querySelector(".effect14 .navigation");

navigation2.addEventListener("click", () => {
  navigation2.classList.toggle("active");
});
