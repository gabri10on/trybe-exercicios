const button = document.getElementById('buttonSubmit');
const inputName = document.getElementById('input-name')


function getValue(event) {
    event.preventDefault();
    console.log('aaa');
}

button.addEventListener('click', getValue)