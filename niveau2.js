
///excercice 1
/*let prenoms= ['ghofrane','salma', 'cedric', 'feriel','amine'];
for(let i=0; i<=prenoms.length; i++){
    console.log(prenoms[i]); 
}

prenoms.push('rahma');
prenoms.unshift('kadir');

console.log("le tableau apres l'ajout des prenoms: " +prenoms); 

prenoms.sort();
console.log("le tableau trié: " +prenoms);*/

////excercice 2///////
/*
let personne = {
    nom: "bensoltane",
    prenom:"ghofrane" ,
    age:26,
    ville: "paris",
    sePresenter: function(){
        console.log("je suis " +this.nom + " " +this.prenom + " j'ai " +this.age + " ans " + " et j'habite à " +this.ville);

    }
}
console.log(personne.nom, personne.prenom, personne.age, personne.ville);

personne.sePresenter();*/

/////Excercice 3//////
/*let x=5;
let y=3;
let z=8;

function somme(x,y){
    return x*y; 
}
console.log("la somme de " +x + " et " +y + " = " +somme(x,y));

const carre = x => x*x;
console.log("le carre du " +x + " est " +carre(x));

function max(x,y,z){
    return Math.max(x,y,z);
}
console.log("le nombre le plus grand est: " +max(x,y,z));*/

/////Excercice 4/////////

/*let titre = document.getElementById('titre');
titre.style.color='blue';

let texteOriginal = titre.textContent; 
let texteChange = "bienvenue";

let button = document.getElementById('btn');
button.addEventListener('click', function(event){
   if (titre.textContent === texteOriginal) {
                titre.textContent = texteChange;
            } else {
                titre.textContent = texteOriginal;
            }
})

let p = document.createElement('p');
p.textContent='la vie est belle';
document.body.appendChild(p);*/

////////////Excercice5////

let btn_click= document.getElementById('btn_click');
btn_click.addEventListener('click',function(event){
    console.log('il ya un clique ici! ');
})

btn_click.addEventListener('dblclick',function(event){
    btn_click.textContent='double clique!';
})

btn_click.addEventListener("mouseover", function(event) {
    btn_click.style.backgroundColor = "blue";
});

btn_click.addEventListener("mouseout", function(event) {
     btn_click.style.backgroundColor = "";
});