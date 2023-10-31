const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const changeFont = () => {
    spanEl.style.fontSize = inputEl.value + 'px'  
}

const onInputEl = () => {
   changeFont();
}
changeFont();
inputEl.addEventListener('input',onInputEl );