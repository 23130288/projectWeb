const topics = document.querySelectorAll('.topic');
const selectedTopic = document.getElementById('selectedTopic');

topics.forEach(topic => {
    topic.addEventListener('click', (event) => {
        event.preventDefault();

        topics.forEach(t => t.classList.remove('active'));
        topic.classList.add('active');

        const topicText = topic.querySelector('span').innerText;
        selectedTopic.innerText = 'Chủ đề: ' + topicText;

    });
});

document.getElementById("sendBtn").addEventListener("click", () => {
    alert("Đã gưit phản hồi cho người dùng thành công!");
    window.location.href = "../admin/admin.jsp";
});
