// const itemList = document.createElement('ul');
// itemList.id = 'ingredients';
// console.log(itemList);

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const potato = document.createElement('li');
// potato.textContent = ingredients[0];
// const muchrooms = document.createElement('li');
// muchrooms.textContent = ingredients[1];
// const garlic = document.createElement('li');
// garlic.textContent = ingredients[2];
// const tomato = document.createElement('li');
// tomato.textContent = ingredients[3];
// const greens = document.createElement('li');
// greens.textContent = ingredients[4];
// const spice = document.createElement('li');
// spice.textContent = ingredients[5];

// itemList.append(potato, muchrooms, garlic, tomato, greens, spice);

"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  ulList.append(items);
  parent.append(...items)
});

console.log(foodIngredients);






