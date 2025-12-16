// Toggle mật khẩu
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('mouseover', () => {
    password.type = 'text';
});
togglePassword.addEventListener('mouseout', () => {
    password.type = 'password';
});
