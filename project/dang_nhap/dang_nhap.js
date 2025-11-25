// Toggle mật khẩu
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('mouseover', () => {
    password.type = 'text';
});
togglePassword.addEventListener('mouseout', () => {
    password.type = 'password';
});

// Xử lý nút đăng nhập
document.getElementById('log').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '../tai_khoan/tai_khoan.html';
});
