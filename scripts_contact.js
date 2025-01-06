document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Empêche l'envoi par défaut

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // Réinitialise les messages d'erreur
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach((error) => (error.style.display = "none"));

      let hasError = false;

      // Validation du nom
      if (name.value.trim() === "") {
          showError(name, "Le nom est requis.");
          hasError = true;
      }

      // Validation de l'email
      if (email.value.trim() === "") {
          showError(email, "L'email est requis.");
          hasError = true;
      } else if (!isValidEmail(email.value)) {
          showError(email, "Veuillez entrer une adresse email valide.");
          hasError = true;
      }

      // Validation du message
      if (message.value.trim() === "") {
          showError(message, "Le message est requis.");
          hasError = true;
      }

      // Si aucune erreur, soumission
      if (!hasError) {
          alert("Merci pour votre message ! Nous vous répondrons sous peu.");
          form.reset();
      }
  });

  // Fonction pour afficher une erreur
  function showError(input, message) {
      const errorSpan = input.parentElement.querySelector(".error-message");
      errorSpan.textContent = message;
      errorSpan.style.display = "block";
  }

  // Fonction pour valider un email
  function isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }
});

