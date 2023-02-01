const modalWindow = document.querySelector(".modal-window"),
  modalContent = document.querySelector(".modal-content"),
  registerBtn = document.querySelector(".register-btn"),
  closeBtn = document.querySelector(".close-btn");

registerBtn.addEventListener("click", () => {
  modalWindow.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-window")) {
    // modalContent.classList.toggle("shaker");
    modalWindow.classList.add("hidden");
  }
});
