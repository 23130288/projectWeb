function initHistoryJS() {
    const tabs = document.querySelectorAll('.tab-menu');
    const contents = document.querySelectorAll('.product-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.querySelector(`.${tab.dataset.tab}`).classList.add('active');
        });
    });
}