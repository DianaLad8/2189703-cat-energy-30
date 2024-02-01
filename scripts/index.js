// source/scripts/index.js
var navPage = document.querySelector(".nav-page");
var navToggle = document.querySelector(".nav-page__toggle");
var contactsMap = document.querySelector(".contacts__map");
var pageBody = document.querySelector(".page__body");
pageBody.classList.remove("page__body--nojs");
contactsMap.classList.remove("contacts__map--nojs");
navPage.classList.remove("nav-page--nojs");
navPage.classList.add("nav-page--closed");
navPage.classList.remove("nav-page--opened");
navToggle.addEventListener("click", () => {
  navPage.classList.toggle("nav-page--closed");
  navPage.classList.toggle("nav-page--opened");
});
//# sourceMappingURL=index.js.map
