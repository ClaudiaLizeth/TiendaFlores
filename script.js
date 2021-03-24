const hamburguesa = document.querySelector('#btn-menu');
let rayatop = document.querySelector('#rayatop');
let rayamedio = document.querySelector('#rayamedio');
let rayabottom = document.querySelector('#rayabottom');

hamburguesa.addEventListener('click', () =>{
   

    rayatop.classList.toggle('equis01');
    rayamedio.classList.toggle('equis02');
    rayabottom.classList.toggle('equis03');
})