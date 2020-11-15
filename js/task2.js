'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemList = document.createElement('ul');
itemList.id = 'ingredients';

const foodIngredients = ingredients.forEach(ingredient => {

  let itemsProduct = document.createElement('li');

  itemsProduct.textContent = ingredient;
  itemList.append(itemsProduct);

});

console.log(itemList);






