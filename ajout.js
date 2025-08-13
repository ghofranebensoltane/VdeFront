const btnRetour = document.getElementById('btnRetour');
const form = document.getElementById('formAjouter')

btnRetour.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='index.html';
}); 
    
form.addEventListener('submit',function(event){
    event.preventDefault();

    const formData = new FormData(form);
    const nouvelEtudiant = Object.fromEntries(formData.entries());
    let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];
    etudiants.push(nouvelEtudiant);
    localStorage.setItem('etudiants', JSON.stringify(etudiants));

    alert('Etudiant(e) ajouté avec succes');
    form.reset();
    

})