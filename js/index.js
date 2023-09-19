/* function pour valider le formulaire */
function validerForm() {
  const select = document.querySelector("select");
  const textarea = document.querySelector("textarea");
  const form = document.getElementById("myForm");
  const changerEle = document.getElementById("message-bien");
  /* condition  */
  if (select.value === "-- Sélectionnez --") {
    alert("Veuillez choisir un chat ");
    select.classList.add("red-border");
  } else if (textarea.value.length < 15) {
    alert(" Veuillez écrire un texte d'au moins 15 caractères");
    textarea.classList.add("red-border");
    form.reset();
  } else {
    changerEle.style.display = "block";
    form.style.display = "none";
    form.reset();
  }
}
