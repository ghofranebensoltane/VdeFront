//Excerice 1
/*console.log('Bonjour javaScript');

console.log('Nom: Ghofrane');
console.log('Age: 26ans');

alert('Bienvenue!');*/


//////Excercice 2///////////
/*let nom = "Ghofrane";
let age =26; 
console.log ("je m'appelle: " +nom + " " + "et j'ai: " +age);

age = 27;
console.log ("je m'appelle: " +nom + " " + "et j'ai: " +age);*/

////Exercice 3//////////

/*let nombre1= Number(prompt('Entrez un nombre : '));
let nombre2= Number(prompt('Entrez un autre nombre : '));

let somme = nombre1 + nombre2;
let difference = nombre1 - nombre2;
let produit = nombre1 * nombre2;

console.log("la somme de deux nombre est : " +somme + 
    "\nla differnce de deux nombre est : " +difference +
    "\nle produit  de deux nombre est : " +produit); 
*/

///Excercice 4////

/*let nombre = Number(prompt("Entrez un nombre"));

if (nombre > 0){
    console.log("le nombre que vous avez entrer " + nombre + " est positif");
}
else if(nombre < 0){
    console.log("le nombre que vous avez entrer " + nombre + " est negatif");
}
else {
    console.log("le nombre est null");
}

if (nombre % 2 ==0){
    console.log("le nombre que vous avez entrer " + nombre + " est pair");
}
else {
    console.log("le nombre que vous avez entrer " + nombre + " est impair");
}*/

//////Exercice 5/////////

for (let i =0 ; i<= 10; i++){
   console.log(i);
}

for (let i=0; i<=20; i++){
    if (i %2==0){
        console.log(i);
    }
}

for (let i=0; i<=10; i++){
    console.log("7 * " +i + " = " +(7*i));
}