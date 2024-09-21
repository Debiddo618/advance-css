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
let text2 = document.getElementById("text2");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text2.style.marginTop = `${value * 2.5}px`;
  leaf.style.top = `${value * -1.5}px`;
  leaf.style.left = `${value * 1.5}px`;
  hill5.style.left = `${value * 1.5}px`;
  hill4.style.left = `${value * -1.5}px`;
  hill1.style.top = `${value * 1}px`;
});