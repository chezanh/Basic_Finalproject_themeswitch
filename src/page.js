function changeTheme() {
  const body = document.querySelector("body");

  // Toggle the theme class
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
}

const themeButton = document.querySelector(".themeButton");

// Make sure the DOM is loaded before adding the event listener
document.addEventListener("DOMContentLoaded", function () {
  if (themeButton) {
    themeButton.addEventListener("click", changeTheme);
  }
});
