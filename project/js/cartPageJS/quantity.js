const quantityContainers = document.querySelectorAll('.product-info-content-quantity');

quantityContainers.forEach(container => {
    const minusBtn = container.querySelector('.minus-quantity-button');
    const plusBtn = container.querySelector('.plus-quantity-button');
    const quantitySpan = container.querySelector('.quantity');

    let quantity = parseInt(quantitySpan.textContent);

    plusBtn.addEventListener('click', () => {
        quantity++;
        quantitySpan.textContent = quantity;
    });

    minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantitySpan.textContent = quantity;
        }
    });
});