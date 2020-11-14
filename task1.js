// const quantity = document.querySelectorAll('.item');
// console.log(`В списке ${quantity.length} категории`);

// quantity.forEach((element) => {
//     const categories = element.querySelector('h2').innerHTML;
//     const quantityCategories = element.querySelectorAll('li').length;
  
// console.log(`Категория: ${categories} 
// Количество элементов: ${quantityCategories}`)  
// });

"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);














