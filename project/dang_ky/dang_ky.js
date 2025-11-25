//phần làm nút hiện mật khẩu
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const togglePassword = document.getElementById('togglePassword');
const toggleConfirm = document.getElementById('toggleConfirmPassword');

// Hover để xem mật khẩu
togglePassword.addEventListener('mouseover', () => {
    password.type = 'text';
});
togglePassword.addEventListener('mouseout', () => {
    password.type = 'password';
});

toggleConfirm.addEventListener('mouseover', () => {
    confirmPassword.type = 'text';
});
toggleConfirm.addEventListener('mouseout', () => {
    confirmPassword.type = 'password';
});


//sử lí nút
document.getElementById('log').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '../tai_khoan/tai_khoan.html';
});

