document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".menu_item .item");
    const infoBox = document.querySelector(".infomation");

    // Dữ liệu hiển thị cho từng mục
    const contents = {
        "Thông tin tài khoản": `
      <h2>Thông tin tài khoản</h2>

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
      <div class="in4">
        <div class="in4_row">
          <label class="in4_label" for="old_password">Mật khẩu cũ</label>
          <div class="password-wrapper">
            <input class="in4_input" id="old_password" type="password" name="old_password">
            <button type="button" id="toggleOldPassword">👁</button>
          </div>
        </div>
    
        <div class="in4_row">
          <label class="in4_label" for="password">Mật khẩu mới</label>
          <div class="password-wrapper">
            <input class="in4_input" id="password" type="password" name="password">
            <button type="button" id="togglePassword">👁</button>
          </div>
        </div>
    
        <div class="in4_row">
          <label class="in4_label" for="confirm_password">Xác nhận mật khẩu mới</label>
          <div class="password-wrapper">
            <input class="in4_input" id="confirm_password" type="password" name="confirm_password">
            <button type="button" id="toggleConfirmPassword">👁</button>
          </div>
        </div>
        <div class="in4_row">
            <input class="log" id="log" type="submit" value="Xác nhận">
        </div>
      </div>
            `,
        "Đăng xuất": `
      <h2>Đăng xuất</h2>
      <p>Bạn có chắc muốn đăng xuất không?</p>
      <button id="logout-btn">Đăng xuất</button>`
    };
    // 👉 Gán mặc định hiển thị "Thông tin tài khoản" khi load
    infoBox.innerHTML = contents["Thông tin tài khoản"];

    items.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const text = item.textContent.trim();
            infoBox.innerHTML = contents[text] || "<p>Chưa có nội dung</p>";

            // Nếu người dùng bấm "Đổi mật khẩu" thì kích hoạt toggle
            if (text === "Đổi mật khẩu") {
                const password = document.getElementById('password');
                const confirmPassword = document.getElementById('confirm_password');
                const old_password = document.getElementById('old_password');

                const togglePassword = document.getElementById('togglePassword');
                const toggleConfirm = document.getElementById('toggleConfirmPassword');
                const toggleOld = document.getElementById('toggleOldPassword');

                const setToggle = (btn, input) => {
                    btn.addEventListener('mouseover', () => input.type = 'text');
                    btn.addEventListener('mouseout', () => input.type = 'password');
                };
                setToggle(togglePassword, password);
                setToggle(toggleConfirm, confirmPassword);
                setToggle(toggleOld, old_password);
            }
        });
    });
});

