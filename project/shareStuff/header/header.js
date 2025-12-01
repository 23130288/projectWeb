const input = document.querySelector('input[name="query"]');
const suggestions = document.getElementById('suggestions');

input.addEventListener('focus', () => {
    suggestions.style.display = "block";
});

input.addEventListener('blur', () => {
    setTimeout(() => {
        suggestions.style.display = "none";
    }, 150);
});

// Khi click vào gợi ý → tự động điền vào input
document.querySelectorAll('#suggestions li').forEach(item => {
    item.addEventListener('click', () => {
        input.value = item.innerText;
    });
});
