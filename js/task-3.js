const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');
// console.log(gallery);

// const { url, alt } = images[0];
// console.log(url);
// console.log(alt);

// const addLi = document.createElement('li');
// const addImg = document.createElement('img');
// galleryRef.append(addLi, addImg); //только соседи!!!!
// console.log(galleryRef);

// addImg.src = url;
// addImg.alt = alt;
// addImg.width = 300;
// console.log(addImg);

/*1-й метод*/
// galleryRef.insertAdjacentHTML(
//   'afterbegin',
//   images.reduce((acc, { url, alt }) => {
//     acc += `<li><img src="${url}" alt="${alt}" width=200/></li>`;
//     return acc;
//   }, ''),
// );

/*2-й метод*/
images.forEach(img =>
  galleryRef.insertAdjacentHTML(
    'afterbegin',
    `<li><img src="${img.url}" alt="${img.alt}" width=200/></li>`,
  ),
);
