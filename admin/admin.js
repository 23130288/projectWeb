document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".menu_item .item");
    const infoBox = document.querySelector(".infomation");

    // Nội dung cho từng mục menu
    const contents = {
        "Quản lý sản phẩm": `
      <h2>Quản lý sản phẩm</h2>
      <button class="bt_xac_nhan" id="btn-them-sp">+ Thêm sản phẩm</button>
      <table class="table_data">
        <tr>
          <th>Mã SP</th><th>Tên sản phẩm</th><th>Giá</th><th>Thao tác</th>
        </tr>
        <tr>
          <td>SP001</td><td>Balo du lịch</td><td>500.000₫</td>
          <td><button>Sửa</button><button>Xóa</button></td>
        </tr>
        <tr>
          <td>SP002</td><td>Vali cao cấp</td><td>1.200.000₫</td>
          <td><button>Sửa</button><button>Xóa</button></td>
        </tr>
      </table>
    `,

        "Quản lý người dùng": `
      <h2>Quản lý người dùng</h2>
      <table class="table_data">
        <tr><th>Tên</th><th>Email</th><th>Vai trò</th><th>Thao tác</th></tr>
        <tr><td>Nguyễn Văn A</td><td>a@gmail.com</td><td>Người dùng</td>
            <td><button>Khóa</button><button>Xóa</button></td></tr>
        <tr><td>Trần Thị B</td><td>b@gmail.com</td><td>Người dùng</td>
            <td><button>Khóa</button><button>Xóa</button></td></tr>
      </table>
    `,

        "Quản lý đơn hàng": `
      <h2>Quản lý đơn hàng</h2>
      <table class="table_data">
        <tr><th>Mã đơn</th><th>Khách hàng</th><th>Tổng tiền</th><th>Trạng thái</th><th>Thao tác</th></tr>
        <tr><td>DH001</td><td>Nguyễn Văn A</td><td>750.000₫</td><td>Đang giao</td>
            <td><button>Xem</button><button>Hủy</button></td></tr>
        <tr><td>DH002</td><td>Trần Thị B</td><td>1.500.000₫</td><td>Hoàn thành</td>
            <td><button>Xem</button></td></tr>
      </table>
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

    // Hiển thị mặc định "Quản lý sản phẩm"
    infoBox.innerHTML = contents["Quản lý sản phẩm"];

    // Xử lý khi nhấn vào từng mục menu
    items.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const text = item.textContent.trim();
            infoBox.innerHTML = contents[text] || "<p>Chưa có nội dung</p>";

            if (text === "Đăng xuất") {
                document.getElementById("btn-dang-xuat").addEventListener("click", () => {
                    localStorage.removeItem("admin");
                    alert("Đăng xuất thành công!");
                    window.location.href = "dang_nhap.html";
                });
            }

            if (text === "Quản lý sản phẩm") {
                const btnThem = document.getElementById("btn-them-sp");
                if (btnThem) btnThem.addEventListener("click", () => alert("Tính năng thêm sản phẩm đang được phát triển"));
            }
        });
    });
});
