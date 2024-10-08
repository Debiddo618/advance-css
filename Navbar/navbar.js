// function loadNavbar() {
//   fetch("https://debiddo618.github.io/advance-css/Navbar/navbar.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("navbar-placeholder").innerHTML = data;
//     })
//     .catch((error) => console.error("Error loading navbar:", error));
// }

function loadNavbar() {
  fetch("../Navbar/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading navbar:", error));
}

document.addEventListener("DOMContentLoaded", loadNavbar);
