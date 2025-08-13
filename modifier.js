const btnRetour = document.getElementById('btnRetour')
btnRetour.addEventListener('click',function(event){
    window.location.href='index.html';
})



const params = new URLSearchParams(window.location.search);
const index = params.get('index');

// Récupérer les étudiants
let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];

// Si index invalide → retour
if (index === null || !etudiants[index]) {
  alert("Étudiant introuvable !");
  window.location.href = "index.html";
}

// Pré-remplir le formulaire
const form = document.getElementById('formModifier');
form.nom.value = etudiants[index].nom;
form.prenom.value = etudiants[index].prenom;
form.age.value = etudiants[index].age;
form.nationalite.value = etudiants[index].nationalite;
form.email.value = etudiants[index].email;
form.specialite.value = etudiants[index].specialite;

// Quand on soumet → mise à jour
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  etudiants[index] = Object.fromEntries(formData.entries());

  localStorage.setItem('etudiants', JSON.stringify(etudiants));
  alert("Étudiant mis à jour avec succès !");
  window.location.href = "index.html";
});
