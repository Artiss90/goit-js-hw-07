const categoriesEl:Element|null = document.querySelector('ul#categories');
const categoriesChildEl:NodeListOf<Element> | undefined = categoriesEl?.querySelectorAll('li.item');
/*функция подсчета категорий*/
type CountCategories = (nodeList:NodeListOf<Element> | undefined)=>void
const countCategories:CountCategories = arr => console.log(`В списке ${arr?.length} категории.`);
/*вызов функции*/
countCategories(categoriesChildEl);

/*функция подсчета элементов внутри категории*/

// categoriesChildEl.forEach(child =>
//   console.log(
//     `Категория: ${child.firstElementChild.textContent}
// Количество элементов: ${child.querySelectorAll('li').length}`,
//   ),
// );

type CountItems = (nodeList:NodeListOf<Element> | undefined)=>void
const countItems:CountItems = items =>{
  if (items) {
    items.forEach(child => {
      let textMessage: string = ''
      if (child !== null) {
        textMessage = `Категория: ${child.firstElementChild?.textContent}
Количество элементов: ${child.querySelectorAll('li').length}`
      }
      console.log(textMessage)
    }
    );
  }
}
/*вызов функции*/
countItems(categoriesChildEl);
