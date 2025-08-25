"use strict";
console.log('hello');
const compteur = document.getElementById('compteur'); //ou bien as HTMLElement (pour que compteur ne soit pas null)
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur?.addEventListener('click', increment);
