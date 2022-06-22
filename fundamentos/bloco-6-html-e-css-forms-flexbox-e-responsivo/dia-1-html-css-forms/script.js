const button = document.getElementById('buttonSubmit');

function getValue(event) {
    event.preventDefault();
}

button.addEventListener('click', getValue);
