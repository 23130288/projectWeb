fetch('../shareStuff/footer/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });

/*
================= HOW TO USE =================
Bỏ vào file ở đây như vậy, còn hạn chế nên đừng có tạo bỏ file linh tinh
chỉ hoạt động với file theo format này
trang_chu
  + trang_chu.jsp

<footer>
    <div id="footer-placeholder"></div>
    <script src="../shareStuff/footer/footerGetter.js"></script>
</footer>
*/