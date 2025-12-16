<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="dang_nhap/dang_nhap.css">
    <title>Title</title>
</head>
<body>
<div class="section_2" id="section_2">
    <a href="../trang_chu/trang_chu.html">
        <img src="dang_nhap/image/logo_white.png" alt="Logo" class="logo">
    </a>
</div>

<div class="section_1" id="section_1">
    <h1>Đăng nhập tài khoản của bạn</h1>
    <form action="dang_nhap" method="post">
        <%
            String err = (String) request.getAttribute("err");
            if (err == null) err = "";

            String email = (String) request.getParameter("email");
            if (email == null) email = "";
        %>
        <span class="login-error"><%= err %></span>
        <div class="container" id="container_email">
            <label for="email">Email hoặc tên người dùng:</label>
            <input type="text" id="email" name="email" value="<%= email%>">
        </div>

        <div class="container" id="container_password">
            <label for="password">Mật khẩu:</label>
            <div class="password-wrapper">
                <input type="password" id="password" name="password">
                <button type="button" id="togglePassword">👁</button>
            </div>
        </div>

        <div class="container" id="container_log">
            <input class="log" type="submit" value="Đăng nhập">
        </div>

    </form>
    <footer class="footer" id="container_more">
        người dùng mới:&nbsp;
        <a class="link" href="dang_ky/dang_ky.html">Tạo tài khoản</a>
    </footer>
    <script src="dang_nhap/dang_nhap.js"></script>
</div>

</body>
</html>