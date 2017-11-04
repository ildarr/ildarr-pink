var toggle_button = document.querySelector(".page-header__toggle");
var main_nav = document.querySelector(".main-nav");
var page_header_heading = document.querySelector(".page-header__heading");
var page_header = document.querySelector(".page-header");
var page_header_inner = document.querySelector(".page-header--inner");
var page_header_menu = document.querySelector(".page-header__menu");
var popup = document.querySelector(".popup");
var popup_error = document.querySelector(".popup--error");
var popup_container = document.querySelector(".popup__container");
var popup_container_error = document.querySelector(".popup__container--error");
var popup_button = document.querySelector(".popup__button");
var popup_button_error = document.querySelector(".popup__button--error");
var form = document.querySelector(".form");
var form_button = document.querySelector(".form__button");
var first_name = document.querySelector("[name=first-name]");
var last_name = document.querySelector("[name=last-name]");
var mail = document.querySelector("[name=mail]");
var map = document.querySelector(".map");

document.addEventListener("DOMContentLoaded", function (evt) {
  evt.preventDefault();
  main_nav.classList.remove("main-nav--visible");
  page_header_heading.classList.remove("page-header__heading--background");
  page_header_menu.classList.remove("page-header__menu--position");
  page_header.classList.remove("page-header--position");
  toggle_button.classList.remove("page-header__toggle--open");
  if (form) {
    page_header_inner.classList.remove("page-header--inner-position");
    first_name.classList.remove("form__input--color");
    last_name.classList.remove("form__input--color");
    mail.classList.remove("form__input--color");
  }
});

toggle_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  main_nav.classList.toggle("main-nav--visible");
  page_header_heading.classList.toggle("page-header__heading--background");
  page_header_menu.classList.toggle("page-header__menu--position");
  page_header.classList.toggle("page-header--position");
  toggle_button.classList.toggle("page-header__toggle--open");
  if (page_header_inner) {
    page_header_inner.classList.toggle("page-header--inner-position");
  }
});

if (form) {
  form_button.addEventListener("click", function (evt) {
    if (!first_name.value || !last_name.value || !mail.value) {
      evt.preventDefault();
      popup_error.classList.add("popup--visible");
      popup_container_error.classList.add("popup__container--visible");
      popup_container_error.classList.add("popup__container--error-visible");
      first_name.classList.add("form__input--color");
      last_name.classList.add("form__input--color");
      mail.classList.add("form__input--color");
      if (first_name.value) {
        first_name.classList.remove("form__input--color");
      }
      if (last_name.value) {
        last_name.classList.remove("form__input--color");
      }
      if (mail.value) {
        mail.classList.remove("form__input--color");
      }
    } else {
      evt.preventDefault();
      if (!popup.classList.contains("popup--error")) {
        popup.classList.add("popup--visible");
        popup_container.classList.add("popup__container--visible");
      }
      if (first_name.classList.contains("form__input--color")) {
        first_name.classList.remove("form__input--color");
      }
      if (last_name.classList.contains("form__input--color")) {
        last_name.classList.remove("form__input--color");
      }
      if (mail.classList.contains("form__input--color")) {
        mail.classList.remove("form__input--color");
      }
    }
  });

  popup_button_error.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup_error.classList.contains("popup--visible")) {
      popup_error.classList.remove("popup--visible");
    }
    if (popup_container_error.classList.contains("popup__container--visible")) {
      popup_container_error.classList.remove("popupcontainer--visible");
    }
    if (popup_container_error.classList.contains("popup__container--error-visible")) {
      popup_container_error.classList.remove("popup__container--error-visible");
    }
  });

  popup_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup.classList.contains("popup--visible")) {
      popup.classList.remove("popup--visible");
    }
    if (popup_container.classList.contains("popup__container--visible")) {
      popup_container.classList.remove("popup__container--visible");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("popup--visible")) {
        popup.classList.remove("popup--visible");
      }
      if (popup_container.classList.contains("popup__container--visible")) {
        popup_container.classList.remove("popup__container--visible");
      }
      if (popup_error.classList.contains("popup--visible")) {
        popup_error.classList.remove("popup--visible");
      }
      if (popup_container_error.classList.contains("popup__container--visible")) {
        popup_container_error.classList.remove("popupcontainer--visible");
      }
      if (popup_container_error.classList.contains("popup__container--error-visible")) {
        popup_container_error.classList.remove("popup__container--error-visible");
      }
    }
  });
}

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(59.9387,30.3231)
  };
  var map = new google.maps.Map(document.getElementById("map-pink"), mapOptions);
  var myLatLng = new google.maps.LatLng(59.9387,30.3231);
  var marker = "../img/icon-map-marker.svg";
  var beachMaker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: marker
  });
}

if (map) {
  google.maps.event.addDomListener(window, "load", initialize);
}
