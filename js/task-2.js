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

const addListIngredientsRef = arr =>
  arr.map(item => {
    const addLi = document.createElement('li');
    addLi.textContent = item;
    // console.log(addLi);
    return addLi;
  });

// console.log(addListIngredientsRef(ingredients));
// const test = addListIngredientsRef(ingredients);
// console.log('test:', typeof test);

ingredientsRef.append(...addListIngredientsRef(ingredients));

console.log(ingredientsRef);
