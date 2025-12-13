document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire et le scroll en haut

    // Supprime les messages d'erreur précédents
    const oldError = form.querySelector(".error-message");
    if (oldError) oldError.remove();

    // Récupération des champs
    const name = form.querySelector("input[type='text']");
    const email = form.querySelector("input[type='email']");
    const message = form.querySelector("textarea");

    let errorMessages = [];

    if (!name.value.trim()) {
      errorMessages.push("Please enter your name.");
    }

    if (!email.value.trim()) {
      errorMessages.push("Please enter your email.");
    }

    if (!message.value.trim()) {
      errorMessages.push("Please enter your message.");
    }

    if (errorMessages.length > 0) {
      // Affiche le message d'erreur
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("error-message", "text-danger", "mb-3");
      errorDiv.innerHTML = errorMessages.join("<br>");
      form.prepend(errorDiv);
    } else {
      alert("Message sent successfully! (Simulation, no backend)");
      form.reset();
    }
  });
});
