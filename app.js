const acceptButton = document.getElementById("accept");
const declineButton = document.getElementById("decline");

acceptButton.addEventListener("click", () => {
  console.log("Cookies accepted!");
});

declineButton.addEventListener("click", () => {
  console.log("Cookies declined!");
});

acceptButton.addEventListener("click", () => {
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=true";
});

declineButton.addEventListener("click", () => {
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=false";
});

const cookiesAccepted = document.cookie.includes("cookiesAccepted");
if (!cookiesAccepted) {
  cookieNotice.style.display = "fixed";
}

const toggleThemeButton = document.getElementById("toggleMode");
toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.cookie = "darkModePreferred=true";
});
