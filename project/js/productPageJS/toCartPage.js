const colorButtons = document.querySelectorAll('.color-btn'); // get button color
const sizeButtons = document.querySelectorAll('.size-options button'); // get button size
const addToCartBtn = document.getElementById('addToCartBtn'); // get button to cart page

// handle selection for color, change border when clicked in css
colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        colorButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// handle selection for size, background changes color when clicked in css
sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        sizeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// handle Add to Cart button, make sure options are selected to continue
addToCartBtn.addEventListener('click', () => {
    const colorSelected = document.querySelector('.color-btn.active');
    const sizeSelected = document.querySelector('.size-options button.active');

    if (!colorSelected || !sizeSelected) {
        alert('Vui lòng chọn cả màu và kích cỡ trước khi thêm vào giỏ hàng!');
        return;
    }

    window.location.href = 'cartPage.html';
});