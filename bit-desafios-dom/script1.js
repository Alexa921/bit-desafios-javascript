/*1. HTML con únicamente un div, replicar la muestra de la manipulación del DOM
explicada en clase, Debe mostrar su nombre completo con el texto a color.*/

const elementoManipulacionDom = document.getElementById('manipulacion-dom');
console.log(elementoManipulacionDom);

elementoManipulacionDom.textContent = 'Alexandra Restrepo Agudelo';
elementoManipulacionDom.className = 'nombre';