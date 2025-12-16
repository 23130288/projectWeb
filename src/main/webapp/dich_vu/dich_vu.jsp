<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dich_vu/dich_vu.css">
    <link rel="stylesheet" href="../shareStuff/header/header.css">
    <link rel="stylesheet" href="../shareStuff/footer/footer.css">
</head>
<body>
<header>
    <div id="header-placeholder"></div>
    <script src="../shareStuff/header/headerGetter.js"></script>
</header>

<div class="name">
    <h1>Dịch Vụ</h1>
</div>
<div class="container">
    <div class="sidebar" id="sidebar">
        <h3>DANH MỤC</h3>
        <div class="menu_item">
            <a class="item" data-type="ho_tro" href="#">Hỗ trợ khách hàng</a>
            <a class="item" data-type="tu_van" href="#">Liên hệ tư vấn</a>
            <a class="item" data-type="giao_hang" href="#">Dịch vụ giao hàng</a>
            <a class="item" data-type="doi_tra" href="#">Dịch vụ đổi trả</a>
            <a class="item" data-type="bao_hiem" href="#">Dịch vụ bảo hiểm</a>
        </div>
    </div>

    <main class="content" id="content">
        <!-- JS sẽ tự load nội dung vào đây -->
    </main>

    <script src="dich_vu.js"></script>

</div>
<footer>
    <div id="footer-placeholder"></div>
    <script src="../shareStuff/footer/footerGetter.js"></script>
</footer>
</body>
</html>
