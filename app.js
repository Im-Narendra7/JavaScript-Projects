let counter = document.getElementById('counter-value');

function updateColor(value) {
if (value < 0) {
counter.style.color = 'red';
} else if (value > 0) {
counter.style.color = 'green';
} else {
counter.style.color = 'black';
}
}

function decrease() {
   let previousCounter = counter.textContent;
   let updatedCounter = parseInt(previousCounter) - 1;
    counter.textContent = updatedCounter;
   updateColor(updatedCounter);
}
function increase() {
    let previousCounter = counter.textContent;
   let updatedCounter = parseInt(previousCounter) + 1;
   
    counter.textContent = updatedCounter;
    updateColor(updatedCounter);
}


function reset() {
let previousCounter = counter.textContent;
   let updatedCounter = parseInt(previousCounter) - parseInt(previousCounter);
   
    counter.textContent = updatedCounter;
    updateColor(updatedCounter);
}
