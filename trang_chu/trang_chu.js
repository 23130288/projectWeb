document.addEventListener('DOMContentLoaded', function() {
    const noiBatLink = Array.from(document.querySelectorAll('nav ul li a')).find(a => a.textContent.includes('NỔI BẬT'));

    if (noiBatLink) {
        noiBatLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'trang_san_pham_noi_bat.html';
        });
    }
});
document.querySelectorAll(".slider-container").forEach(container => {
    const grid = container.querySelector(".product-grid");
    const cards = grid.querySelectorAll(".product-card");
    let index = 0;
    const showCount = 3;

    function update() {
        cards.forEach((card, i) => {
            card.style.display = (i >= index && i < index + showCount) ? "block" : "none";
        });
    }

    container.querySelector(".arrow.left").addEventListener("click", () => {
        index = (index - showCount + cards.length) % cards.length;
        update();
    });

    container.querySelector(".arrow.right").addEventListener("click", () => {
        index = (index + showCount) % cards.length;
        update();
    });

    update();
});