const topics = document.querySelectorAll('.topic');
const selectedTopic = document.getElementById('selectedTopic');

topics.forEach(topic => {
    topic.addEventListener('click', () => {
        // Bỏ active ở tất cả các nút
        topics.forEach(t => t.classList.remove('active'));

        // Thêm active cho nút được click
        topic.classList.add('active');
        // Update h2
        const topicText = topic.querySelector('span').innerText;
        selectedTopic.innerText = 'Chủ đề: ' + topicText;
    });
});