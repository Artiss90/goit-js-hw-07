const inputRef = document.querySelector('#name-input');
const wellcomeNameRef = document.querySelector('#name-output');

// console.log(wellcomeNameRef);

// const input = document.querySelector('input');
// const log = document.getElementById('values');

const handleTargetInput = event => {
  wellcomeNameRef.textContent = event.target.value;
  if (event.target.value === '') {
    wellcomeNameRef.textContent = 'незнакомец';
  }
};
inputRef.addEventListener('input', handleTargetInput);

// console.log(wellcomeNameRef.textContent);
