//phần làm nút hiện mật khẩu
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Hover để xem mật khẩu
togglePassword.addEventListener('mouseover', () => {
    password.type = 'text';
});
togglePassword.addEventListener('mouseout', () => {
    password.type = 'password';
});

//sử lí nút
document.getElementById('log').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'tai_khoan.html';
});

