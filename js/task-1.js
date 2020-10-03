const categoriesEl = document.querySelector('ul#categories');
const categoriesChildEl = categoriesEl.querySelectorAll('li.item');
/*функция подсчета категорий*/
const countCategories = arr => console.log(`В списке ${arr.length} категории.`);
/*вызов функции*/
countCategories(categoriesChildEl);

/*функция подсчета элементов внутри категории*/

// categoriesChildEl.forEach(child =>
//   console.log(
//     `Категория: ${child.firstElementChild.textContent}
// Количество элементов: ${child.querySelectorAll('li').length}`,
//   ),
// );

const countItem = items =>
  items.forEach(child =>
    console.log(
      `Категория: ${child.firstElementChild.textContent}
Количество элементов: ${child.querySelectorAll('li').length}`,
    ),
  );
/*вызов функции*/
countItem(categoriesChildEl);
