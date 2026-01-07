<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hỗ trợ</title>
    <link rel="stylesheet" href="helpPage/helpPage.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
</head>
<body>
<jsp:include page="../shareStuff/header/header.jsp" />
<main>
    <h1>Trung tâm hỗ trợ khách hàng</h1>
    <div class="container">
        <form action="support" method="post" class="support-form">
            <!-- topics to choose -->
            <div class="container-topics">
                <label for="topicSelect"></label>
                <select id="topicSelect" name="topic">
                    <option value="" disabled selected>Chọn chủ đề...</option>
                    <option value="order">Kiểm tra, hủy hoặc thay đổi đơn hàng</option>
                    <option value="login">Đăng nhập/Đăng ký</option>
                    <option value="payment">Phương thức thanh toán</option>
                    <option value="question">Câu hỏi khác</option>
                </select>
            </div>
            <div class="support-form" id="supportForm">
                <!-- Title -->
                <input type="text" placeholder="Tiêu đề" name="title" required>
                <!-- message -->
                <label>
                    <textarea rows=3 placeholder="Hãy mô tả vấn đề của bạn tại đây..." name="message"></textarea>
                </label>
                <button type="submit" id="sendBtn">Gửi yêu cầu hỗ trợ</button>
            </div>
        </form>
    </div>
</main>
<jsp:include page="../shareStuff/footer/footer.jsp" />
<script src="helpPage/helpPageJS.js"></script>
</body>
</html>