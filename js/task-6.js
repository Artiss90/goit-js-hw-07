// #validation-input { border: 3px solid #bdbdbd; }

// #validation-input.valid { border-color: #4caf50; }

// #validation-input.invalid { border-color: #f44336; }

const inputRef = document.querySelector('#validation-input');

const handleInputValidBlur = () => {
  if (inputRef.value.length == inputRef.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', handleInputValidBlur);
