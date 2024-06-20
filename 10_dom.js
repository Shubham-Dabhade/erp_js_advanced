// Create a new element
let newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
document.body.appendChild(newDiv);

// Modify an existing element
let existingDiv = document.getElementById('myDiv');
existingDiv.style.color = 'blue';

// Event handling
existingDiv.addEventListener('click', () => {
    alert('Div clicked!');
});
