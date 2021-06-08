const $ = require("jquery");
import lg from "./media-query";
import { footerNavItem, mainNav, navItem, burger } from "./selectors";

//new version of $(document).ready()
$(function () {
  burger.click(showNav);

  function showNav() {
    burger.toggleClass("burger__open");
    mainNav.toggleClass("navigation__visible");
  }

  navItem.click(openDropdown);
  footerNavItem.click(openDropdown);

  function openDropdown() {
    const dropdown = $(this.children[1]);
    if (!lg.matches && dropdown) {
      dropdown.toggleClass("open");
    }
  }

  (function hideMobileDropdownOnDesktop() {
    $(window).resize(function () {
      console.log($(".navigation__dropdown-list--open"));
      if (lg.matches) {
        $(".open").removeClass("open");
      }
    });
  })();
});
