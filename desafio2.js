
/**
 * Desafio 2
 * Escreva uma função que recebe um array de números inteiros
 * e gera uma linha no DOM com altura 100px para cada elemento do array com o número de colunas igual ao valor com uma cor randômica.
 * Por exemplo:
 * A função populateDOM recebe um array igual a [3, 8, 12].
 * Ela deve deve gerar um DIV pai que inclui 3 DIVS filhos (Linhas).
 * Cada um destes DIVS filhos deve ter mais um nível de DIVS filhos com larguras iguais e altura igual a 100px.
 */

 const subDiv = [3,8,12];

 const div = document.getElementById('resposta-2');
 
 subDiv.forEach(function(element){
      renderNumberDiv(element)
 });
 
 function renderNumberDiv(element){
     const iDiv = document.createElement('div');
     iDiv.setAttribute('class', 'div-main');
     div.appendChild(iDiv);

     for(let i = 0; i < element; i++){
         renderSubDiv(iDiv);
     }        }
 

 function renderSubDiv(div){
       const sDiv = document.createElement('div');
       sDiv.setAttribute('class', 'sub-div');
       sDiv.style.backgroundColor= "#" + (Math.floor(Math.random() * 16777215) .toString(16));

       div.appendChild(sDiv);
 }

 setInterval(() => {
     let divs = document.getElementsByClassName('sub-div');

     for(let i= 0; i< divs.length; i++){
         divs[i].style.backgroundColor ='#' + (Math.floor(Math.random() * 16777215) .toString(16));
     }
 }, 1000);
