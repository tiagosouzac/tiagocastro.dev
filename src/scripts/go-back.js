function goBackToPreviousPage(event) {
  event.preventDefault();
  window.history.back();
}

const goBackLink = document.querySelector(".not-found a");
goBackLink?.addEventListener("click", goBackToPreviousPage);
