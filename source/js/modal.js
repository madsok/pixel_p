'use strict';

  var contactsLink = document.querySelector(".contacts__link"),
      modal = document.querySelector(".modal-wrapper"),
      modalForm = modal.querySelector(".modal__form"),
      modalClose = document.querySelector(".modal__close");

  contactsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-wrapper--active");
  });

  modalForm.button.onclick = function () {
    for (var i = 0; i < modalForm.elements.length; i++) {
      if (modalForm.elements[i].value === '' && modalForm.elements[i].hasAttribute('required')) {
        modalForm.elements[i].placeholder = "Поле обязательно для заполнения";
        modalForm.elements[i].classList.add("modal__input--invalid");
        modalForm.elements[i].classList.add("modal__input--invalid::placeholder");
        return false;
      }
    }
  };

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-wrapper--active")) {
      modal.classList.remove("modal-wrapper--active");
    }
  }
})

  modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-wrapper--active");
})
