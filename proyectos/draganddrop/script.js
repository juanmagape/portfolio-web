/*
* JS para la funcionalidad del carrito de compras
*/

document.addEventListener("DOMContentLoaded", function() {
    // Variables
    const draggableElements = document.querySelectorAll('.draggable');
    const cart = document.getElementById('cart');
    const totalDisplay = document.getElementById('total');
    let totalPrice = 0;
    let originalPositions = {};

    // Event Listeners
    draggableElements.forEach(element => {
        element.addEventListener('dragstart', dragStart);
        originalPositions[element.id] = { x: element.offsetLeft, y: element.offsetTop };
    });
    cart.addEventListener('dragover', dragOver);
    cart.addEventListener('drop', drop);

    // Functions
    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const id = event.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(id);
        const price = parseInt(draggedElement.getAttribute('data-price'));
        
        // Cloning and adding the element to the cart
        const clonedElement = draggedElement.cloneNode(true);
        cart.appendChild(clonedElement);
        totalPrice += price;
        totalDisplay.textContent = `Total: €${totalPrice}`;
        
        // Creating delete button for the newly added element
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            cart.removeChild(clonedElement);
            totalPrice -= price;
            totalDisplay.textContent = `Total: €${totalPrice}`;
            // Restoring original position before returning it to the left section
            const originalElement = document.getElementById(id);
            originalElement.style.position = '';
            originalElement.style.left = '';
            originalElement.style.top = '';
        });
        clonedElement.appendChild(deleteButton);
    }
});
