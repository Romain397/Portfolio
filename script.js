// Validation bootstrap + custom
(() => {
  'use strict';
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault(); // on empêche envoi réel (pas de backend)
      alert('Formulaire envoyé (simulation) — vérifier console.');
      // Ici tu peux collecter les données et afficher une confirmation
      console.log({
        prenom: document.getElementById('prenom').value,
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        objet: document.getElementById('objet').value,
        message: document.getElementById('message').value
      });
    }
    form.classList.add('was-validated');
  }, false);
})();
