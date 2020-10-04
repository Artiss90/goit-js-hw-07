const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsRef = document.querySelector('#ingredients');
// console.log(ingredientsRef);

const listIngredientsRef = arr =>
  arr.map(item => {
    const addLi = document.createElement('li');
    addLi.textContent = item;
    // console.log(addLi);
    return addLi;
  });

// console.log(listIngredientsRef(ingredients));
// const test = listIngredientsRef(ingredients);
// console.log('test:', typeof test);

ingredientsRef.append(...listIngredientsRef(ingredients));

console.log(ingredientsRef);
