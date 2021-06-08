const $ = require("jquery");
import { navbar, mainNav, navItem, burger } from "./selectors";

//new version of $(document).ready()
$(function () {
  (function scrollDown() {
    let lastScrollPos = $(window).scrollTop();

    $(window).scroll(function () {
      const currentScrollPos = $(window).scrollTop();

      if (!mainNav.hasClass("navigation__visible")) {
        if (lastScrollPos > currentScrollPos) {
          navbar.removeClass("hide");
          lastScrollPos = currentScrollPos;
        } else {
          if (navbar.height() < currentScrollPos) {
            navbar.addClass("hide");
            lastScrollPos = currentScrollPos;
          }
        }
      }
    });
  })();
});
