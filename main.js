// var $_ = function (selector, node = document) {
//   return node.querySelector(selector);
// };

// var $$_ = function (selector, node = document) {
//   return node.querySelectorAll(selector);
// };

// var header = document.querySelector(".header");
// var btn = document.querySelector(".header__toggler");
// var elModal = document.querySelector(".modal");
// var elModalForm = document.querySelector(".modal__form");
// var elCartBtn = document.querySelector(".shop__product-addcard");
// var elCartBadge = document.querySelector(".header__top-cart-badge");
// var elCart = document.querySelector(".header__top-item--cart");
// var elCartProductTemplate = document.querySelector(".modal-cart__item-template")
//   .content;
// const cartUserLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
// let cartUserProductArray = cartUserLocalStorage || [];
// let updateCartBadge = () => {
//   if (cartUserLocalStorage)
//     elCartBadge.textContent = cartUserLocalStorage.length;
//   else elCartBadge.textContent = "";
// };
// updateCartBadge();

// if (elCartProductTemplate) {
//   var productsFragment = document.createDocumentFragment()
//   cartUserProductArray.forEach((product, index) => {
//     console.log(product);
//     var templateClone = elCartProductTemplate.cloneNode(true);
//     console.log(templateClone );
//     $_("modal-cart__item-img", templateClone).src = product.img;
//     $_("modal-cart__item-title", templateClone).textContent = product.productName;
//     $_("modal-cart__item-count", templateClone).textContent = product.countOfProduct;
//     $_("modal-cart__item-type", templateClone).textContent = product.typeOfProduct;
//     $_("modal-cart__item-delevery",templateClone).textContent = product.deleveryOfProduct;
//     $_("modal-cart__item-agree", templateClone).textContent = product.agreeOfProduct;
//     productsFragment.appendChild(templateClone)
// });
// }

// // header toggler button
// elCart.addEventListener("click", (e) => {});

// btn.addEventListener("click", () => {
//   header.classList.toggle("header--open");
// });

// // set megin top on tablet and mobile mode
// document.body.style.marginTop =
//   document.querySelector(".header").offsetHeight + "px";

// if (elModal) {
//   // listen when add cart button is clicked
//   elCartBtn.addEventListener("click", (e) => {
//     elModal.classList.add("modal--open");
//   });
//   // listen when add cart bg is clicked and remove modal
//   elModal.addEventListener("click", (e) => {
//     if (e.currentTarget == e.target) {
//       elModal.classList.remove("modal--open");
//     }
//   });
//   // listening add to card product
//   elModalForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const newProduct = {
//       countOfProduct: e.target["count"].value,
//       typeOfProduct: e.target["select"].value,
//       deleveryOfProduct: e.target["delevery"].checked,
//       agreeOfProduct: e.target["checkbox"].checked,
//       img: "https://picsum.photos/870/80/80",
//       productName: "Lorem ipsum dollar sit",
//     };
//     cartUserProductArray.push(newProduct);
//     localStorage.setItem("cartProducts", JSON.stringify(cartUserProductArray));
//     elModal.classList.remove("modal--open");
//     alert("Added to cart");
//     updateCartBadge();
//   });
// }
