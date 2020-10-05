const inputRef = document.querySelector('input#font-size-control');
const spanRef = document.querySelector('span#text');
// spanRef.style.fontSize = '30px';
// console.log(spanRef.style);
// console.log(spanRef.style.fontSize);
// console.log(inputRef.value + 'px');

const handleInputScroll = () => {
  spanRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener('input', handleInputScroll);
