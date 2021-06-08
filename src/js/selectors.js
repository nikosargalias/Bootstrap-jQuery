const $ = require("jquery");
let navbar, mainNav, navItem, burger, footerNavItem;

//new version of $(document).ready()
$(function () {
  navbar = $("#navbar");
  mainNav = $("#main-nav");
  navItem = $(".navigation__item");
  footerNavItem = $(".footer__navigation__item");
  burger = $("#burger");
});

export { navbar, mainNav, navItem, burger, footerNavItem };
