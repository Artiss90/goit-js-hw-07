const categories = document.querySelector('ul#categories');
const categoriesChild = categories.querySelectorAll('li.item');
/*функция подсчета категорий*/
const countCategories = arr => `В списке ${arr.length} категории.`;
console.log(countCategories(categoriesChild));

console.log(categoriesChild.length);
