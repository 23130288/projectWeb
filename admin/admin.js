document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".menu_item .item");
    const infoBox = document.querySelector(".infomation");

    const contents = {
        "Quản lý sản phẩm": `
            <h2>Quản lý sản phẩm</h2>
            <button class="bt_xac_nhan" id="btn-them-sp">+ Thêm sản phẩm</button>
            <table class="table_data">
                <tr>
                    <th>Mã SP</th><th>Tên sản phẩm</th><th>Còn lại</th><th>Giá</th><th>Thao tác</th>
                </tr>
                <tr>
                    <td>SP001</td><td>Balo du lịch</td><td>5</td><td>500.000₫</td>
                    <td><button class="btn-sua">Sửa</button><button class="btn-xoa">Xóa</button></td>
                </tr>
                <tr>
                    <td>SP002</td><td>Vali cao cấp</td><td>12</td><td>1.200.000₫</td>
                    <td><button class="btn-sua">Sửa</button><button class="btn-xoa">Xóa</button></td>
                </tr>
            </table>
        `,

        "Quản lý người dùng": `
            <h2>Quản lý người dùng</h2>
            <table class="table_data">
                <tr><th>Mã người dùng</th><th>Tên</th><th>Email</th><th>Vai trò</th><th>Thao tác</th></tr>
                <tr><td>U0001</td><td>Nguyễn Văn A</td><td>a@gmail.com</td><td>Người dùng</td>
                    <td><button class="btn-xoa">Xóa</button></td></tr>
                <tr><td>U0002</td><td>Trần Thị B</td><td>b@gmail.com</td><td>Người dùng</td>
                    <td><button class="btn-xoa">Xóa</button></td></tr>
            </table>
        `,

        "Quản lý đơn hàng": `
                <h2>Quản lý đơn hàng</h2>
                <table class="table_data">
                    <tr><th>Mã đơn</th><th>Khách hàng</th><th>Tổng tiền</th><th>Trạng thái</th><th>Thao tác</th></tr>
                    <tr><td>DH001</td><td>Nguyễn Văn A</td><td>750.000₫</td><td>Đang giao</td>
                        <td><button class="btn-xem">Xem</button><button class="btn-huy">Hủy</button></td></tr>
                    <tr><td>DH002</td><td>Trần Thị B</td><td>1.500.000₫</td><td>Hoàn thành</td>
                        <td><button class="btn-xem">Xem</button></td></tr>
                </table>
            `,

        "Quản lý thông báo": `
            <h2>Quản lý đơn hàng</h2>
                <button class="bt_xac_nhan" id="btn-them-sp">+ Thêm thông báo</button>
            <table class="table_data">
                <tr><th>Mã thông báo</th><th>người nhận thông báo</th><th>loại thông báo</th><th>nội dung</th><th>ngày thông báo</th></tr>
                <tr><td>tb001</td><td>0001</td><td>giảm giá</td><td>giảm 100k cho đơn hàng trên 500k</td><td>11/11/2025</td>
                <tr><td>tb001</td><td>0001</td><td>giảm giá</td><td>giảm 100k cho đơn hàng trên 500k</td><td>11/11/2025</td>
            </table>
        `,

        "Trả lời câu hỏi": `
          <h2>Thông báo</h2>
          
          <div class="notification_item" id="selection_shop">
            <div class="avatar">
              <img src="anh/balo2.jpg" alt="Ảnh đại diện">
            </div>
            <div class="info">
              <h4>Balo apolo</h4>
              <p>Mã đơn hàng:đueihoeoi. | người gửi: 0001.</p>
              <span>10/11/2025</span>
            </div>
          </div>
          
          <div class="notification_item">
            <div class="avatar">
              <img src="anh/vali2.jpg" alt="Ảnh đại diện">
            </div>
            <div class="info">
              <h4>Cách dùng mã vận chuyển</h4>
              <p>Mã đơn hàng:abcdefgh. | người gửi: 0002.</p>
              <span>10/04/2025</span>
            </div>
          </div>
          
          <div class="notification_item">
            <div class="avatar">
              <img src="anh/vali1.jpg" alt="Ảnh đại diện">
            </div>
            <div class="info">
              <h4>chính sách đổi trả</h4>
              <p>Mã đơn hàng:12345678. | người gửi: 0003.</p>
              <span>10/10/2025</span>
            </div>
          </div>
          
          <div class="notification_item" id="selection_shop">
            <div class="avatar">
              <img src="anh/balo2.jpg" alt="Ảnh đại diện">
            </div>
            <div class="info">
              <h4>Balo apolo</h4>
              <p>Mã đơn hàng:đueihoeoi. | người gửi: 0001.</p>
              <span>10/11/2025</span>
            </div>
          </div>
          
          <div class="notification_item">
            <div class="avatar">
              <img src="anh/vali2.jpg" alt="Ảnh đại diện">
            </div>
            <div class="info">
              <h4>Cách dùng mã vận chuyển</h4>
              <p>Mã đơn hàng:abcdefgh. | người gửi: 0002.</p>
              <span>10/04/2025</span>
            </div>
          </div>
          
          <div class="notification_item">
            <div class="avatar">
              <img src="anh/vali1.jpg" alt="Ảnh đại diện">
            </div>
            <div class="info">
              <h4>chính sách đổi trả</h4>
              <p>Mã đơn hàng:12345678. | người gửi: 0003.</p>
              <span>10/10/2025</span>
            </div>
          </div>
        `,

        "Thống kê báo cáo": `
            <h2>Thống kê doanh thu</h2>
            <p>Doanh thu tháng này: <b>12.500.000₫</b></p>
            <p>Tổng đơn hàng: <b>58</b></p>
            <p>Sản phẩm bán chạy nhất: <b>Vali cao cấp</b></p>
        `,

        "Đăng xuất": `
            <h2>Đăng xuất</h2>
            <p>Bạn có chắc muốn đăng xuất khỏi trang quản trị?</p>
            <button class="bt_xac_nhan" id="btn-dang-xuat">Đăng xuất</button>
        `
    };

    // Gắn sự kiện cho nút Xóa, Hủy, Sửa, Xem
    function attachEvents() {
        document.querySelectorAll(".btn-xoa, .btn-huy").forEach(btn => {
            btn.addEventListener("click", () => {
                if (confirm("Bạn có chắc muốn xóa mục này không?")) {
                    alert("Đã xóa thành công!");
                }
            });
        });

        document.querySelectorAll(".btn-sua").forEach(btn => {
            btn.addEventListener("click", () => {
                alert("Tính năng sửa đang được phát triển!");
            });
        });

        document.querySelectorAll(".btn-xem").forEach(btn => {
            btn.addEventListener("click", () => {
                alert("Hiển thị thông tin chi tiết đơn hàng!");
            });
        });
    }

    // Hiển thị mặc định
    infoBox.innerHTML = contents["Quản lý sản phẩm"];
    attachEvents();

    // Xử lý menu click
    items.forEach(item => {
        item.addEventListener("click", () => {
            const text = item.textContent.trim();
            infoBox.innerHTML = contents[text] || "<p>Chưa có nội dung</p>";

            if (text === "Đăng xuất") {
                document.getElementById("btn-dang-xuat").addEventListener("click", () => {
                    localStorage.removeItem("admin");
                    if (confirm("Bạn có chắc muốn đăng xuất khỏi trang này không?")) {
                        alert("Đăng xuất thành công!");
                        window.location.href = "dang_nhap.html";
                    }
                });
            }

            if (text === "Quản lý sản phẩm") {
                const btnThem = document.getElementById("btn-them-sp");
                if (btnThem) btnThem.addEventListener("click", () => alert("Tính năng thêm sản phẩm đang được phát triển"));
            }

            if (text === "Trả lời câu hỏi") {
                const notiItems = document.querySelectorAll(".notification_item");
                notiItems.forEach(item => {
                    item.style.cursor = "pointer";
                    item.addEventListener("click", () => {
                        window.location.href = "lien_he.html";
                    });
                });
            }

            attachEvents(); // gắn lại cho nút trong nội dung mới
        });
    });
});
