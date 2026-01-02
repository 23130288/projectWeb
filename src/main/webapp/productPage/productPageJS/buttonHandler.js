function showMessage(msg, color = 'green') {
    const status = document.getElementById('statusMessage');
    status.textContent = msg;
    status.style.color = color;
    status.classList.add('show');
    setTimeout(() => status.classList.remove('show'), 2000);
}


// size and color buttons
const colorButtons = document.querySelectorAll('.color-btn'); // get color buttons
const sizeButtons = document.querySelectorAll('.size-options button'); // get size buttons
let selectedColor = null;
let selectedSize = null;
colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        colorButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        selectedColor = btn.dataset.color;
        selectedSize = null;

        document.querySelectorAll('.size-btn').forEach(b => {
            b.classList.remove('active', 'disabled');
        });
        const validSizes = variants.filter(v => v.color === selectedColor).map(v => v.size);
        sizeButtons.forEach(b => {
            if (!validSizes.includes(b.dataset.size)) {
                b.classList.add('disabled');
            }
        });
    });
});
sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.classList.contains('disabled')) return;

        document.querySelectorAll('.size-btn')
            .forEach(b => b.classList.remove('active'));

        btn.classList.add('active');
        selectedSize = btn.dataset.size;
    });
});


/* ============================================== button handler =============================================== */
/* ============================================================================================================= */
/* ======= add to cart button ======= */
const addToCartBtn = document.getElementById('addToCartBtn'); // get button to cart page
addToCartBtn.addEventListener('click', () => {
    if (!selectedColor || !selectedSize) {
        showMessage('Vui lòng chọn cả màu và kích cỡ trước khi thêm vào giỏ hàng!', 'red');
        return;
    }
    const variant = variants.find(v =>
        v.color === selectedColor && v.size === selectedSize
    );
    showMessage('Thêm vào giỏ hàng thành công!', 'green');
    const link = document.getElementById("addCartLink");
    link.href = `add-cart?pid=${p.pid}&pvid=${variant.pvid}&mainImg=${mainImg.image}&q=1`;
    link.dispatchEvent(new MouseEvent('click'));
});

/* ======= buy button ======= */
/* open and off */
const buyPopup = document.getElementById('buyPopup');
const buyBtn = document.getElementById('buyBtn'); // get button to cart page
buyBtn.addEventListener('click', () => {
    const colorSelected = document.querySelector('.color-btn.active');
    const sizeSelected = document.querySelector('.size-options button.active');

    if (!colorSelected || !sizeSelected) {
        showMessage('Vui lòng chọn cả màu và kích cỡ trước khi thêm vào giỏ hàng!', 'red');
        return;
    }
    buyPopup.style.display = 'flex';
});
const cancelBuy = document.getElementById('cancelBuy');
cancelBuy.addEventListener('click', () => {
    buyPopup.style.display = 'none';
});
/* Buy handler */
const confirmBuy = document.getElementById('confirmBuy');
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