const button = document.getElementById('buttonSubmit');
const inputName = document.getElementById('input-name');
const concordo = document.getElementById('concordo');


function getValue(event) {
    event.preventDefault();
    console.log(concordo)
}

button.addEventListener('click', getValue)

console.log(concordo)