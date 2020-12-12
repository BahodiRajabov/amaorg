document.body.style.marginTop =
  document.querySelector(".header").offsetHeight + "px";
var header = document.querySelector(".header");
var btn = document.querySelector(".header__toggler");
btn.addEventListener("click", () => {
  header.classList.toggle("header--open");
});
