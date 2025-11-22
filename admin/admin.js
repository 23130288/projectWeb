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

        "Quản lý voucher": `
            <h2>Quản lý voucher</h2>
                <button class="bt_xac_nhan" id="btn-them-tb">+ Thêm voucher</button>
            <table class="table_data">
                <tr><th>Mã voucher</th><th>đối tượng nhận</th><th>loại voucher</th><th>nội dung</th><th>có hiệu lực đến</th></tr>
                <tr><td>v001</td><td>all</td><td>giảm giá</td><td>giảm 100k cho đơn hàng trên 500k</td><td>15/11/2025</td>
                <tr><td>v001</td><td>0001</td><td>giảm giá</td><td>giảm 100k cho đơn hàng trên 500k</td><td>15/11/2025</td>
            </table>
        `,

        "Quản lý thông báo": `
            <h2>Quản lý đơn hàng</h2>
                <button class="bt_xac_nhan" id="btn-them-tb">+ Thêm thông báo</button>
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
            <button class="bt_xac_nhan" id="btn_dang_xuat">Đăng xuất</button>
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
                openAdminPopup(
                    "Sửa sản phẩm",
                    `
            <div class="popup_item">
                <label>Mã sản phẩm:</label>
                <input type="text" id="sp-id" value="SP001">
            </div>
            
            <div class="popup_item">
                <label>Tên sản phẩm:</label>
                <input type="text" id="sp-name" value="Balo du lịch">
            </div>
            
            <div class="popup_item">
                <label>Giá:</label>
                <input type="number" id="sp-price" value="500000">
            </div>
            
            <div class="popup_item">
                <label>Số lượng:</label>
                <input type="number" id="sp-quantity" value="5">
            </div>
            
            <div class="popup_item">
                <label>Ảnh sản phẩm:</label>
                <div class="img-upload-box" id="drop-zone">
                    <span>+</span>
                    <p>Kéo hoặc click để thêm ảnh</p>
                </div>
                
                <div class="preview-list" id="preview-list">
                    <div class="preview-item">
                        <img src="anh/balo1.jpg" alt="Balo 1">
                    </div>
                    <div class="preview-item">
                        <img src="anh/balo2.jpg" alt="Balo 2">
                    </div>
                </div>
            </div>
            `,
                    () => {
                        alert("✔ Sửa sản phẩm xong (dữ liệu tạm thời)!");
                    }
                );
            });
        });


        document.querySelectorAll(".btn-xem").forEach(btn => {
            btn.addEventListener("click", () => {
                openAdminPopup(
                    "Chi tiết đơn hàng",
                    `
            <div class="popup_item">
                <label>Mã đơn:</label>
                <input type="text" value="DH001" readonly>
            </div>
            
            <div class="popup_item">
                <label>Khách hàng:</label>
                <input type="text" value="Nguyễn Văn A" readonly>
            </div>
            
            <div class="popup_item">
                <label>Tổng tiền:</label>
                <input type="text" value="750.000₫" readonly>
            </div>
            
            <div class="popup_item">
                <label>Trạng thái:</label>
                <input type="text" value="Đang giao" readonly>
            </div>
            
            <div class="popup_item">
                <label>Sản phẩm trong đơn:</label>
                <textarea readonly>Balo du lịch x2 - 500.000₫
Vali cao cấp x1 - 1.200.000₫</textarea>
            </div>
            
            <div class="popup_item">
                <label>Ghi chú:</label>
                <input type="text" value="Không có" readonly>
            </div>
            `,
                    () => {
                        alert("✔ Đóng popup chi tiết đơn hàng");
                    }
                );
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
                if (btnThem) btnThem.addEventListener("click", () => {
                    openAdminPopup(
                        "Thêm sản phẩm mới",
                        `
                 <div class="popup_item">
                    <label>Mã sản phẩm:</label>
                    <input type="text" id="sp-id">
                </div>
                
                <div class="popup_item">
                    <label>Tên sản phẩm:</label>
                    <input type="text" id="sp-name">
                </div>
                
                <div class="popup_item">
                    <label>Giá:</label>
                    <input type="number" id="sp-price">
                </div>
                
                <div class="popup_item">
                    <label>Số lượng:</label>
                    <input type="number" id="sp-quantity">
                </div>
                
                <div class="popup_item">
                    <label>Ảnh sản phẩm:</label>
                
                    <!-- Khu vực kéo/thả -->
                    <div class="img-upload-box" id="drop-zone">
                        <span>+</span>
                        <p>Kéo hoặc click để thêm ảnh</p>
<!--                        <input type="file" id="sp-img" accept="image/*" multiple>-->
                    </div>
                
                    <!-- Khu vực preview nhiều ảnh -->
                    <div class="preview-list" id="preview-list">
                        <div class="preview-item">
                            <img src="anh/balo1.jpg" alt="Balo 1">
                        </div>
                        <div class="preview-item">
                            <img src="anh/balo2.jpg" alt="Balo 2">
                        </div>
                    </div>
                </div>
            `,
                        () => {
                            // callback sau khi nhấn xác nhận
                            alert("Thêm sản phẩm: " + name);
                        }
                    );
                });
            }

            if (text === "Quản lý voucher") {
                const btnThemTB = document.getElementById("btn-them-tb");
                if (btnThemTB) btnThemTB.addEventListener("click", () => {
                    openAdminPopup(
                        "Tạo voucher mới",
                        `
                <label>Đối tượng nhận voucher:</label>
                <select id="tb-target-type">
                    <option value="all">Tất cả</option>
                    <option value="specific">Cụ thể</option>
                </select>
                
                <!-- Ô nhập UID chỉ hiện khi chọn "specific" -->
                <div id="uid-box" style="display:none; margin-top: 5px;">
                    <label>Nhập UID (hoặc danh sách UID, cách nhau bằng dấu phẩy):</label>
                    <input type="text" id="tb-uid" placeholder="VD: 0001, 0002, 0003">
                </div>

                <label>Loại voucher:</label>
                <select id="tb-type">
                    <option value="giam_gia">Giảm giá (VNĐ)</option>
                    <option value="phan_tram">Giảm theo %</option>
                    <option value="mien_phi_van_chuyen">Miễn phí vận chuyển</option>
                </select>
                
                <label>Nội dung:</label>
                <div id="content-area">
                    <!-- Nội dung sẽ tự thay đổi bằng JS -->
                </div>
                
                <label>Ngày hết hạn:</label>
                <input type="date" id="tb-expired">

            `,
                        () => {
                            alert(`✔ Đã tạo voucher.`);
                        }
                    );
                });
            }

            if (text === "Quản lý thông báo") {
                const btnThemTB = document.getElementById("btn-them-tb");
                if (btnThemTB) btnThemTB.addEventListener("click", () => {
                    openAdminPopup(
                        "Tạo thông báo mới",
                        `
                <label>Người nhận (UID):</label>
                <input type="text" id="tb-uid">

                <label>Loại thông báo:</label>
                <input type="text" id="tb-type">

                <label>Nội dung:</label>
                <textarea id="tb-content"></textarea>
            `,
                        () => {
                            alert(`✔ Đã tạo thông báo cho UID: 12345`);
                        }
                    );
                });
            }

            if (text === "Trả lời câu hỏi") {
                const notiItems = document.querySelectorAll(".notification_item");
                notiItems.forEach(item => {
                    item.addEventListener("click", () => {
                        window.location.href = "lien_he.html";
                    });
                });
            }

            attachEvents(); // gắn lại cho nút trong nội dung mới
        });
    });
});
/* ======= button popup======= */
/* open and off */
function openAdminPopup(title, bodyHTML, onConfirm) {
    const popup = document.getElementById("adminPopup");
    const popupTitle = document.getElementById("popup-title");
    const popupBody = document.getElementById("popup-body");
    const btnConfirm = document.getElementById("popup-confirm");
    const btnCancel = document.getElementById("popup-cancel");

    popupTitle.textContent = title;
    popupBody.innerHTML = bodyHTML;
    popup.style.display = "flex";

    btnCancel.onclick = () => popup.style.display = "none";
    btnConfirm.onclick = () => {
        popup.style.display = "none";
        if (onConfirm) onConfirm();
    };

    // ======= XỬ LÝ VOUCHER =========
    const targetSelect = document.getElementById("tb-target-type");
    const uidBox = document.getElementById("uid-box");
    const typeSelect = document.getElementById("tb-type");
    const contentArea = document.getElementById("content-area");

    if (targetSelect && uidBox) {
        targetSelect.addEventListener("change", () => {
            uidBox.style.display = targetSelect.value === "specific" ? "block" : "none";
        });
    }

    function updateContentInput() {
        if (!typeSelect || !contentArea) return;

        const type = typeSelect.value;

        if (type === "giam_gia") {
            contentArea.innerHTML = `
                <input type="number" id="amount" placeholder="Số tiền giảm (VD: 50000)">
                <input type="number" id="min" placeholder="Áp dụng cho đơn hàng từ (VD: 200000)">
            `;
        } else if (type === "phan_tram") {
            contentArea.innerHTML = `
                <input type="number" id="percent" placeholder="Giảm (%) (VD: 10)">
                <input type="number" id="min" placeholder="Áp dụng cho đơn hàng từ (VD: 200000)">
            `;
        } else if (type === "mien_phi_van_chuyen") {
            contentArea.innerHTML = `
                <input type="number" id="min" placeholder="Miễn phí vận chuyển cho đơn từ (VD: 300000)">
            `;
        }
    }

    if (typeSelect) {
        typeSelect.addEventListener("change", updateContentInput);
        updateContentInput(); // gọi 1 lần khi mở popup
    }
}