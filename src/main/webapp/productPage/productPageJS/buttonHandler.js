function showMessage(msg, color = 'green') {
    const status = document.getElementById('statusMessage');
    status.textContent = msg;
    status.style.color = color;
    status.classList.add('show');
    setTimeout(() => status.classList.remove('show'), 2000);
}


const colorButtons = document.querySelectorAll('.color-btn'); // get button color
const sizeButtons = document.querySelectorAll('.size-options button'); // get button size

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


/* ============================================== button handler =============================================== */
/* ============================================================================================================= */
const buyBtn = document.getElementById('buyBtn'); // get button to cart page
const addToCartBtn = document.getElementById('addToCartBtn'); // get button to cart page

addToCartBtn.addEventListener('click', () => {
    const colorSelected = document.querySelector('.color-btn.active');
    const sizeSelected = document.querySelector('.size-options button.active');

    if (!colorSelected || !sizeSelected) {
        showMessage('Vui lòng chọn cả màu và kích cỡ trước khi thêm vào giỏ hàng!', 'red');
        return;
    }
    showMessage('Sản phẩm đã được thêm vào giỏ hàng!');
});

/* ======= buy button ======= */
/* open and off */
const buyPopup = document.getElementById('buyPopup');
const confirmBuy = document.getElementById('confirmBuy');
const cancelBuy = document.getElementById('cancelBuy');
buyBtn.addEventListener('click', () => {
    const colorSelected = document.querySelector('.color-btn.active');
    const sizeSelected = document.querySelector('.size-options button.active');

    if (!colorSelected || !sizeSelected) {
        showMessage('Vui lòng chọn cả màu và kích cỡ trước khi thêm vào giỏ hàng!', 'red');
        return;
    }
    buyPopup.style.display = 'flex';
});
cancelBuy.addEventListener('click', () => {
    buyPopup.style.display = 'none';
});
/* Buy handler */
confirmBuy.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    if (!name || !phone || !address) {
        showMessage('Vui lòng điền đầy đủ thông tin trước khi xác nhận!', 'red');
        return;
    }
    showMessage('Cảm ơn, Đơn hàng của bạn đang được xử lý.')
    buyPopup.style.display = 'none';
});