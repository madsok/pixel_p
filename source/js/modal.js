var contactsLink = document.querySelector(".contacts__link"),
    modal = document.querySelector(".modal-wrapper"),
    userName = modal.querySelector("[name=name]"),
    userTel = modal.querySelector("[name=tel]"),
    userEmail = modal.querySelector("[name=email]"),
    modalForm = modal.querySelector(".modal__form"),
    modalInput = modal.querySelector(".modal__input"),
    modalClose = document.querySelector(".modal__close");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-wrapper--active");
  userName.focus();
});
