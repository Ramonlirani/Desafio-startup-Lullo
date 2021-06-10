
/**
 * Desafio 1
 * 
 * Boa sorte no primeiro desafio!
 */
 const ul = document.createElement('ul');

 const numberList = [1, 2, 3, 4, 5, 6];

 const subItemList = [1, 2, 3];

 document.getElementById('resposta-1').appendChild(ul);
 numberList.forEach(renderNumberList);
 ul.setAttribute('class','ul-main')

 function renderNumberList(element, index) {  //criaçao do elemento
     const item = document.createElement('li');
     item.setAttribute('class', 'item-main');

     const textItem = document.createElement('text'); //foi feito a atribuiçao de um text, para fazer a estilizaçao do elemento item-main
     textItem.setAttribute('class', 'text-item-main');
     textItem.innerText = 'Item - ' + index

     item.appendChild(textItem);
     ul.appendChild(item);


     if (index % 2 == 0) {
         const innerUl = document.createElement('ul');
         item.appendChild(innerUl)
         subItemList.forEach(function (element, index) {
             renderSubItem(element, index, innerUl)
         });
     }
 }
 function renderSubItem(element, index, item) {
     const subItem = document.createElement('li');
     subItem.setAttribute('class', 'sub-item');
     subItem.textContent = 'Item interno - ' + index


     item.appendChild(subItem);
 }   