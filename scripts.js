// Fonction pour créer un cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Fonction pour lire un cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
      const [cookieName, cookieValue] = cookies[i].split("=");
      if (cookieName === name) {
          return cookieValue;
      }
  }
  return null;
}

// Affichage de la bannière si le cookie n'est pas défini
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");

  if (!getCookie("cookiesAccepted")) {
      banner.classList.add("visible");
  }

  document.getElementById("accept-cookies").addEventListener("click", () => {
      setCookie("cookiesAccepted", "true", 365);
      banner.classList.remove("visible");
  });

  document.getElementById("decline-cookies").addEventListener("click", () => {
      setCookie("cookiesAccepted", "false", 365);
      banner.classList.remove("visible");
  });
});
