document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".menu_item .item");
    const infoBox = document.querySelector(".infomation");

    // Dữ liệu hiển thị cho từng mục
    const contents = {
        "Thông tin tài khoản": `
      <h2 id="ìn4_header">Thông tin tài khoản</h2>

         <div class="in4">
        <div class="in4_row">
            <label class="in4_label" for="email">Tên tài khoản</label>
            <input class="in4_input" type="text" id="email" name="email" value="Nguyễn Văn A" readonly>
        </div>


        <div class="in4_row">
            <label class="in4_label" for="email">Thông tin đăng nhập</label>
            <input class="in4_input" type="text" id="email" name="email" value="nguyenvana@example.com" readonly>
        </div>

        <div class="in4_row">
            <label class="in4_label" for="email">Số điện thoại *</label>
            <input class="in4_input" ="text" id="email" name="email" value="09782534" readonly>
        </div>

        <div class="in4_row">
            <label class="in4_label" for="email">Địa chỉ *</label>
            <input class="in4_input" type="text" id="email" name="email" value="phường a, thành phố b, defg" readonly>
        </div>
        
         <div class="in4_row">
          <label class="in4_label">Giới tính</label>
          <div class="in4_input" id="gt">
            <label><input class="radio_gt" type="radio" name="gender" value="male"> Nam</label>
            <label><input class="radio_gt" type="radio" name="gender" value="female"> Nữ</label>
            <label><input class="radio_gt" type="radio" name="gender" value="other"> Khác</label>
          </div>
        </div>
    </div>
    `,
        "Thông báo": `
      <h2>Thông báo</h2>
      <ul>
        <li>Bạn có 2 thông báo mới.</li>
        <li>Tài khoản của bạn đã được cập nhật.</li>
      </ul>
    `,
        "Đổi mật khẩu": `
      <h2>Đổi mật khẩu</h2>
      <form>
        <label>Mật khẩu cũ:</label><br>
        <input type="password"><br>
        <label>Mật khẩu mới:</label><br>
        <input type="password"><br>
        <label>Nhập lại mật khẩu mới:</label><br>
        <input type="password"><br><br>
        <button type="submit">Xác nhận</button>
      </form>
    `,
        "Đăng xuất": `
      <h2>Đăng xuất</h2>
      <p>Bạn có chắc muốn đăng xuất không?</p>
      <button id="logout-btn">Đăng xuất</button>
    `
    };

    // Gắn sự kiện click cho từng mục menu
    items.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // không cho nhảy trang
            const text = item.textContent.trim();
            infoBox.innerHTML = contents[text] || "<p>Chưa có nội dung</p>";
        });
    });
});
