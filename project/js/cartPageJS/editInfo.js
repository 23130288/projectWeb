const editBtn = document.getElementById('editBtn');
const inputs = ['name', 'phone', 'address'].map(id => document.getElementById(id));

let isEditing = false;

editBtn.addEventListener('click', () => {
    isEditing = !isEditing;
    inputs.forEach(input => input.disabled = !isEditing);

    // Thay đổi icon & màu
    editBtn.textContent = isEditing ? 'Lưu thông tin 💾' : 'Chỉnh sửa thông tin ✏️';
});
