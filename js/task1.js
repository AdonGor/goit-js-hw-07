"use strict";

const quantity = document.querySelectorAll('.item');
console.log(`В списке ${quantity.length} категории`);

quantity.forEach((element) => {
    const categories = element.querySelector('h2').textContent;
    const quantityCategories = element.querySelectorAll('li').length;
  
console.log(`Категория: ${categories} 
Количество элементов: ${quantityCategories}`)  
});














