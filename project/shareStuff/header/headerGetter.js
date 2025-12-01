fetch('../shareStuff/header/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;

        // TẢI file JS của header
        const script = document.createElement('script');
        script.src = '../shareStuff/header/header.js';
        document.body.appendChild(script);
    });

/*
================= HOW TO USE =================
Bỏ vào file ở đây như vậy, còn hạn chế nên đừng có tạo bỏ file linh tinh
chỉ hoạt động với file theo format này
trang_chu
  + trang_chu.html

<header>
    <div id="header-placeholder"></div>
    <script src="../shareStuff/header/headerGetter.js"></script>
</header>
*/