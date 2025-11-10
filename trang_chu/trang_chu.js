document.addEventListener('DOMContentLoaded', function() {
    const noiBatLink = Array.from(document.querySelectorAll('nav ul li a')).find(a => a.textContent.includes('NỔI BẬT'));

    if (noiBatLink) {
        noiBatLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'trang_san_pham_noi_bat.html';
        });
    }
});