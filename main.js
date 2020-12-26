var header = document.querySelector(".header");
var btn = document.querySelector(".header__toggler");
var elModal = document.querySelector(".modal");
var elModalForm = document.querySelector(".modal__form");
var elCartBtn = document.querySelector(".shop__product-addcard");
var elCartBadge = document.querySelector(".header__top-cart-badge");
var elCart = document.querySelector(".header__top-item--cart");
const cartUserLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
let cartUserArray = cartUserLocalStorage || [];
let updateCartBadge = () => {
  if (cartUserLocalStorage)
    elCartBadge.textContent = cartUserLocalStorage.length;
  else elCartBadge.textContent = "";
};
updateCartBadge();

// header toggler button

// elCart.addEventListener("click");

btn.addEventListener("click", () => {
  header.classList.toggle("header--open");
});

// set megin top on tablet and mobile mode
document.body.style.marginTop =
  document.querySelector(".header").offsetHeight + "px";

if (elModal) {
  // listen when add cart button is clicked
  elCartBtn.addEventListener("click", (e) => {
    elModal.classList.add("modal--open");
  });
  // listen when add cart bg is clicked and remove modal
  elModal.addEventListener("click", (e) => {
    if (e.currentTarget == e.target) {
      elModal.classList.remove("modal--open");
    }
  });
  // listening add to card product
  elModalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newProduct = {
      countOfProduct: e.target["count"].value,
      typeOfProduct: e.target["select"].value,
      deleveryOfProduct: e.target["delevery"].checked,
      agreeOfProduct: e.target["checkbox"].checked,
    };
    cartUserArray.push(newProduct);
    localStorage.setItem("cartProducts", JSON.stringify(cartUserArray));
    elModal.classList.remove("modal--open");
    alert("Added to cart");
    updateCartBadge();
  });
}
