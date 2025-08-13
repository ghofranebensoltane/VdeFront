const btnAjouter = document.getElementById('btnAjouter');
const tbody = document.querySelector('#tableEtudiants tbody');
let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];
const inputSearch = document.getElementById('search');


btnAjouter.addEventListener('click',function(event){
    window.location.href='ajout.html';
});



function afficherEtudiants() {
  tbody.innerHTML = ''; // vide le tableau avant de remplir
  etudiants.forEach((etudiant, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${etudiant.nom}</td>
      <td>${etudiant.prenom}</td>
      <td>${etudiant.age}</td>
      <td>${etudiant.nationalite}</td>
      <td>${etudiant.email}</td>
      <td>${etudiant.specialite}</td>
      <td>
      <button class="btnModif" onclick="modifierEtudiant(${index})">Modifier</button>
      <button class="btnSuppr" onclick="supprimerEtudiant(${index})">Supprimer</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
afficherEtudiants();

function supprimerEtudiant(index) {
  if (confirm("Voulez-vous vraiment supprimer cet étudiant ?")) {
    etudiants.splice(index, 1);
    localStorage.setItem('etudiants', JSON.stringify(etudiants));
    afficherEtudiants();
  }
}

function modifierEtudiant(index) {
  window.location.href =`modifier.html?index=${index}`;;
}



inputSearch.addEventListener('input', function () {
    const terme = inputSearch.value.toLowerCase();
    const etudiantsFiltres = etudiants.filter(etudiant =>
        etudiant.nom.toLowerCase().includes(terme) ||
        etudiant.prenom.toLowerCase().includes(terme) ||
        etudiant.nationalite.toLowerCase().includes(terme) ||
        etudiant.email.toLowerCase().includes(terme) ||
        etudiant.specialite.toLowerCase().includes(terme)
    );
    afficherEtudiantsFiltres(etudiantsFiltres);
});
function afficherEtudiantsFiltres(liste) {
    tbody.innerHTML = '';
    liste.forEach((etudiant, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${etudiant.nom}</td>
            <td>${etudiant.prenom}</td>
            <td>${etudiant.age}</td>
            <td>${etudiant.nationalite}</td>
            <td>${etudiant.email}</td>
            <td>${etudiant.specialite}</td>
            <td>
                <button class="btnModif" onclick="modifierEtudiant(${index})">Modifier</button>
                <button class="btnSuppr" onclick="supprimerEtudiant(${index})">Supprimer</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}