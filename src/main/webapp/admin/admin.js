document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".menu_item .item");
    const infoBox = document.querySelector(".infomation");

    const contents = {
        "Quản lý sản phẩm": `
            <h2>Quản lý sản phẩm</h2>
            <div class="Menu-bar">
                <button class="bt_menu" id="btn-them-sp">+ Thêm sản phẩm</button>
                
                <div class="search-bar">
                    <input type="text" name="query" placeholder="Tên sản phẩm..."/>
                    <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            
            <div class="table-wrapper">
                <table class="table_data" id="productTable">
<!--                  load nội dung bằng hàm riêng-->
                </table>
            </div>         
        `,

        "Quản lý biến thể sản phẩm": `
            <h2>Quản lý biến thể sản phẩm</h2>
            <div class="Menu-bar">
<!--                <button class="bt_menu" id="btn-them-sp">+ Thêm biến thể</button>-->
                
                <div class="search-bar">
                    <input type="text" name="query" placeholder="Tên sản phẩm..."/>
                    <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            
            <div class="table-wrapper">
                <table class="table_data">
                    <tr><th>Mã SP</th><th>Tên sản phẩm</th><th>Còn lại</th><th>Màu</th><th>Size</th><th>Giá</th><th>Trạng thái</th><th>Thao tác</th></tr>
                    <tr>
                        <td>SP001</td><td>Balo du lịch</td><td>5</td><td>dỏ</td><td>M</td><td>500.000₫</td><td>đang bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP002</td><td>Vali cao cấp</td><td>12</td><td>vàng</td><td>XL</td><td>1.200.000₫</td><td>bán chạy</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP003</td><td>Balo leo núi</td><td>5</td><td>đen</td><td>M</td><td>1500.000₫</td><td>dừng bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                     <tr>
                        <td>SP001</td><td>Balo du lịch</td><td>5</td><td>dỏ</td><td>M</td><td>500.000₫</td><td>đang bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP002</td><td>Vali cao cấp</td><td>12</td><td>vàng</td><td>XL</td><td>1.200.000₫</td><td>bán chạy</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP003</td><td>Balo leo núi</td><td>5</td><td>đen</td><td>M</td><td>1500.000₫</td><td>dừng bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr> <tr>
                        <td>SP001</td><td>Balo du lịch</td><td>5</td><td>dỏ</td><td>M</td><td>500.000₫</td><td>đang bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP002</td><td>Vali cao cấp</td><td>12</td><td>vàng</td><td>XL</td><td>1.200.000₫</td><td>bán chạy</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP003</td><td>Balo leo núi</td><td>5</td><td>đen</td><td>M</td><td>1500.000₫</td><td>dừng bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr> <tr>
                        <td>SP001</td><td>Balo du lịch</td><td>5</td><td>dỏ</td><td>M</td><td>500.000₫</td><td>đang bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP002</td><td>Vali cao cấp</td><td>12</td><td>vàng</td><td>XL</td><td>1.200.000₫</td><td>bán chạy</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP003</td><td>Balo leo núi</td><td>5</td><td>đen</td><td>M</td><td>1500.000₫</td><td>dừng bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr> <tr>
                        <td>SP001</td><td>Balo du lịch</td><td>5</td><td>dỏ</td><td>M</td><td>500.000₫</td><td>đang bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP002</td><td>Vali cao cấp</td><td>12</td><td>vàng</td><td>XL</td><td>1.200.000₫</td><td>bán chạy</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP003</td><td>Balo leo núi</td><td>5</td><td>đen</td><td>M</td><td>1500.000₫</td><td>dừng bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr> <tr>
                        <td>SP001</td><td>Balo du lịch</td><td>5</td><td>dỏ</td><td>M</td><td>500.000₫</td><td>đang bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP002</td><td>Vali cao cấp</td><td>12</td><td>vàng</td><td>XL</td><td>1.200.000₫</td><td>bán chạy</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>SP003</td><td>Balo leo núi</td><td>5</td><td>đen</td><td>M</td><td>1500.000₫</td><td>dừng bán</td>
                        <td><button class="btn-sua" id="sua_bt">Sửa</button><button class="btn-xoa">Xóa</button></td>
                    </tr> 
                </table>
            </div>
        `,

        "Quản lý người dùng": `
            <h2>Quản lý người dùng</h2>
            <div class="Menu-bar">                
                <div class="search-bar">
                    <input type="text" name="query" placeholder="Tên người dung..."/>
                    <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            
            <div class="table-wrapper">
                <table class="table_data" id="userTable">
<!--                  load nội dung bằng hàm riêng-->
                </table>
            </div>
        `,

        "Quản lý đơn hàng": `
            <h2>Quản lý đơn hàng</h2>
            <div class="Menu-bar">
                <div class="search-bar">
                    <input type="text" name="query" placeholder="Mã đơn hàng..."/>
                    <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            
            <div class="table-wrapper">
                <table class="table_data">
                    <tr><th>Mã đơn</th><th>Khách hàng</th><th>Tổng tiền</th><th>Trạng thái</th><th>Thao tác</th></tr>
                    <tr><td>DH001</td><td>Nguyễn Văn A</td><td>750.000₫</td><td>Đang giao</td>
                    <td><button class="btn-xem">Xem</button><button class="btn-huy">Hủy</button></td></tr>
                    <tr><td>DH002</td><td>Trần Thị B</td><td>1.500.000₫</td><td>Hoàn thành</td>
                    <td><button class="btn-xem">Xem</button></td></tr>
                </table>    
            </div>    
        `,

        "Quản lý voucher": `
            <h2>Quản lý voucher</h2>
            <div class="Menu-bar">
                <button class="bt_menu" id="btn-them-tb">+ Thêm voucher</button>
                
                <div class="search-bar">
                    <input type="text" name="query" placeholder="Tên voucher..."/>
                    <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
               
            <div class="table-wrapper"> 
                <table class="table_data">
                    <tr><th>Mã voucher</th><th>Đối tượng nhận</th><th>Loại voucher</th><th>Nội dung</th><th>Có hiệu lực đến</th></tr>
                    <tr><td>v001</td><td>all</td><td>giảm giá</td><td>giảm 100k cho đơn hàng trên 500k</td><td>15/11/2025</td>
                    <tr><td>v002</td><td>0001</td><td>giảm giá</td><td>giảm 5% cho đơn hàng trên 500k</td><td>15/11/2025</td>
                </table>
            </div>
        `,

        "Quản lý dịch vụ, chính sách": `
            <h2>Quản lý dịch vụ, chính sách</h2>
            <div class="Menu-bar">
                <button class="bt_menu" id="btn-them-tb">+ Thêm dịch vụ, chính sách</button>
                
                <div class="search-bar">
                    <input type="text" name="query" placeholder="Tên chính sách, dịch vụ..."/>
                    <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
               
            <div class="table-wrapper">     
                <table class="table_data">
                    <tr><th>Mã</th><th>Tiêu đề</th><th>Nội dung</th><th>Ngày tạo</th><th>Trạng thái</th><th>Thao tác</th></tr>
                    <tr><td>p001</td><td>chính sách mua hàng</td><td>chính sách ......</td><td>15/11/2025</td><td>đang áp dụng</td>
                    <td><button class="btn-sua" id="sua_cs_dv">Sửa</button>
                    <tr><td>p002</td><td>chính sách đổi trả</td><td>chính sách ......</td><td>15/11/2025</td><td>đang áp dụng</td>
                    <td><button class="btn-sua" id="sua_cs_dv">Sửa</button>
                    <tr><td>s001</td><td>dịch vụ tư vấn</td><td>dịch vụ ......</td><td>15/11/2025</td><td>đang áp dụng</td>
                    <td><button class="btn-sua" id="sua_cs_dv">Sửa</button>
                    <tr><td>s001</td><td>dịch vụ đổi cũ lấy mới</td><td>dịch vụ ......</td><td>5/12/2025</td><td>dừng áp dụng</td>
                    <td><button class="btn-sua" id="sua_cs_dv">Sửa</button>
                </table>
            </div>
        `,

        "Quản lý thông báo": `
            <h2>Quản lý đơn hàng</h2>
            <div class="Menu-bar">
                <button class="bt_menu" id="btn-them-tb">+ Thêm thông báo</button>
                
                <div class="search-bar">
                    <input type="text" name="query" placeholder="Tên sản phẩm..."/>
                    <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div class="table-wrapper">     
                <table class="table_data">
                    <tr><th>Mã thông báo</th><th>người nhận thông báo</th><th>loại thông báo</th><th>nội dung</th><th>ngày thông báo</th></tr>
                    <tr><td>tb001</td><td>0001</td><td>giảm giá</td><td>giảm 100k cho đơn hàng trên 500k</td><td>11/11/2025</td>
                    <tr><td>tb002</td><td>all</td><td>giảm giá</td><td>giảm 100k cho đơn hàng trên 500k</td><td>11/11/2025</td>
                </table>
            </div>
        `,

        "Trả lời câu hỏi": `
          <h2>Thông báo</h2>
         
          <div class="notification_item" id="selection_shop">
            <div class="info">
              <h4>Kiểm tra, hủy hoặc thay đổi đơn hàng</h4>
              <p>Mã câu hỏi:đueihoeoi. | người gửi: u0001.</p>
              <span>10/11/2025</span>
            </div>
          </div>
          
          <div class="notification_item">
            <div class="info">
              <h4>Đăng nhập/Đăng ký</h4>
              <p>Mã câu hỏi:đueihoeoi. | người gửi: u0002.</p>
    
              <span>10/04/2025</span>
            </div>
          </div>
          
          <div class="notification_item">
            <div class="info">
              <h4>Phương thức trả tiền</h4>
              <p>Mã câu hỏi:12345678. | người gửi: u0003.</p>
              <span>10/10/2025</span>
            </div>
          </div>
          
          <div class="notification_item" id="selection_shop">
            <div class="info">
              <h4>Câu hỏi khác</h4>
              <p>Mã đơn hàng:akwkofnv. | người gửi: u0001.</p>
              <span>10/11/2025</span>
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

        document.querySelectorAll("#them_sp").forEach(btn => {
            btn.addEventListener("click", () => {
                openAdminPopup(
                    "Thêm biến thể",
                    `
            <div class="popup_item">
                <label>Tên sản phẩm:</label>
                <input type="text" id="sp-name" value="Balo du lịch">
            </div>
            
            <div class="popup_item">
                <label>Màu:</label>
                <select id="sp-color">
                    <option value="red">đỏ</option>
                    <option value="yellow">vàng</option>
                </select>            
            </div>
            
            <div class="popup_item">
                <label>Size:</label>
                <select id="sp-size">
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select> 
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
                <label>Trạng thái:</label>
                <select id="sp-Status">
                    <option value="đang bán">Đang bán</option>
                    <option value="bán chạy">Bán chạy</option>
                    <option value="dừng bán">Dừng bán</option>
                </select>
            </div>

            
            <div class="popup_item">
                <label>Ảnh sản phẩm:</label>
                <div class="img-upload-box" id="drop-zone">
                    <span>+</span>
                    <p>Kéo hoặc click để thêm ảnh</p>
                </div>
                
                <div class="preview-list" id="preview-list">
                    <div class="preview-item">
                        <img src="image/balo1.jpg" alt="Balo 1">
                    </div>
                    <div class="preview-item">
                        <img src="image/balo2.jpg" alt="Balo 2">
                    </div>
                </div>
            </div>
            `,
                    () => {
                        alert("✔ Sửa sản phẩm xong!");
                    }
                );
            });
        });

        document.querySelectorAll("#sua_sp").forEach(btn => {
            btn.addEventListener("click", () => {
                openAdminPopup(
                    "Sửa sản phẩm",
                    `
            <div class="popup_item">
                <label>Tên sản phẩm:</label>
                <input type="text" id="sp-name" value="Balo du lịch">
            </div>
            
            <div class="popup_item">
                <label>Loại:</label>
                <select id="sp-Tyoe">
                    <option value="Balo">Balo</option>
                    <option value="Vali">Vali</option>
                </select>            
            </div>
                
            <div class="popup_item">
                <label>Kiểu dáng:</label>
                <select id="sp-size">
                    <option value="túi đeo chéo">túi đeo chéo</option>
                    <option value="túi đeo bụng">túi đeo bụng</option>
                    <option value="túi sách">túi sách</option>
                </select> 
            </div>
          
            <div class="popup_item">
                <label>Chất liệu:</label>
                <select id="sp-Tyoe">
                    <option value="Balo">hợp kim</option>
                    <option value="Vali">coston</option>
                </select>            
            </div>
                
            <div class="popup_item">
                <label>Tên nhà cung cấp:</label>
                <input type="text" id="sp-name" placeholder="Nhập nhà cung cấp">
            </div>
                
            <div class="popup_item">
                <label>Trạng thái:</label>
                <select id="sp-Status">
                    <option value="đang bán">Đang bán</option>
                    <option value="bán chạy">Bán chạy</option>
                    <option value="dừng bán">Dừng bán</option>
                </select>
            </div>

            
            <div class="popup_item">
                <label>Ảnh sản phẩm:</label>
                <div class="img-upload-box" id="drop-zone">
                    <span>+</span>
                    <p>Kéo hoặc click để thêm ảnh</p>
                </div>
                
                <div class="preview-list" id="preview-list">
                    <div class="preview-item">
                        <img src="image/balo1.jpg" alt="Balo 1">
                    </div>
                    <div class="preview-item">
                        <img src="image/balo2.jpg" alt="Balo 2">
                    </div>
                </div>
            </div>
            `,
                    () => {
                        alert("✔ Sửa sản phẩm xong!");
                    }
                );
            });
        });

        document.querySelectorAll("#sua_bt").forEach(btn => {
            btn.addEventListener("click", () => {
                openAdminPopup(
                    "Sửa biến thể sản phẩm",
                    `
            <div class="popup_item">
                <label>Màu:</label>
                <select id="sp-color">
                    <option value="red">đỏ</option>
                    <option value="yellow">vàng</option>
                </select>            
            </div>
            
            <div class="popup_item">
                <label>Size:</label>
                <select id="sp-size">
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select> 
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
                <label>Trạng thái:</label>
                <select id="sp-Status">
                    <option value="đang bán">Đang bán</option>
                    <option value="bán chạy">Bán chạy</option>
                    <option value="dừng bán">Dừng bán</option>
                </select>
            </div>
            `,
                    () => {
                        alert("✔ Sửa sản phẩm xong!");
                    }
                );
            });
        });

        document.querySelectorAll("#sua_cs_dv").forEach(btn => {
            btn.addEventListener("click", () => {
                openAdminPopup(
                    "Sửa chính sách, dịch vụ",
                    `
            <div class="popup_item">
                <label>Tên chính sách, dịch vụ:</label>
                <input type="text" id="cs_dv-name" value="chính sách mua hàng" readonly>
            </div>
            
            <div class="popup_item">
                <label>Loại:</label>
                <input type="text" id="cs_dv-type" value="chính sách" readonly>
            </div>
            
            <div class="popup_item">
                <label>Trạng thái:</label>
                <select id="sp-Status">
                    <option value="đang bán">Đang áp dụng</option>
                    <option value="dừng bán">Dừng áp dụng</option>
                </select>
            </div>
            
             <div class="popup_item">
                <label>Nội dung:</label>
                <textarea id="tb-content">đây là nội dung chính sách</textarea>
            </div>
            `,
                    () => {
                        alert("✔ Sửa sản phẩm xong!");
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
                    localStorage.removeItem("user");
                    alert("Đăng xuất thành công!");
                    window.location.href = "../dang_nhap/dang_nhap.jsp";
                });
            }

            if (text === "Quản lý sản phẩm") {
                loadProductList()
                const btnThem = document.getElementById("btn-them-sp");
                if (btnThem) btnThem.addEventListener("click", () => {
                    openAdminPopup(
                        "Thêm sản phẩm mới",
                        `
                <div class="popup_item">
                    <label>Tên sản phẩm:</label>
                    <input type="text" id="sp-name" placeholder="Nhập tên sản phẩm">
                </div>
                
                <div class="popup_item">
                    <label>Loại:</label>
                    <select id="sp-Tyoe">
                        <option value="Balo">Balo</option>
                        <option value="Vali">Vali</option>
                    </select>            
                </div>
                
                <div class="popup_item">
                    <label>Kiểu dáng:</label>
                    <select id="sp-size">
                        <option value="túi đeo chéo">túi đeo chéo</option>
                        <option value="túi đeo bụng">túi đeo bụng</option>
                        <option value="túi sách">túi sách</option>
                    </select> 
                </div>
          
                <div class="popup_item">
                    <label>Chất liệu:</label>
                    <select id="sp-Tyoe">
                        <option value="Balo">hợp kim</option>
                        <option value="Vali">coston</option>
                    </select>            
                </div>
                
                <div class="popup_item">
                    <label>Tên nhà cung cấp:</label>
                    <input type="text" id="sp-name" placeholder="Nhập nhà cung cấp">
                </div>
                
                <div class="popup_item">
                    <label>Trạng thái:</label>
                    <select id="sp-Status">
                        <option value="đang bán">Đang bán</option>
                        <option value="bán chạy">Bán chạy</option>
                        <option value="dừng bán">Dừng bán</option>
                    </select>
                </div>
            
                <div class="popup_item">
                    <label>Mô tả:</label>
                    <textarea id="tb-content"></textarea>
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
                            <img src="image/balo1.jpg" alt="Balo 1">
                        </div>
                        <div class="preview-item">
                            <img src="image/balo2.jpg" alt="Balo 2">
                        </div>
                    </div>
                </div>
            `,
                        () => {
                            // callback sau khi nhấn xác nhận
                            alert("Thêm sản phẩm: aaaaa");
                        }
                    );
                });
            }

//             if (text === "Quản lý biến thể sản phẩm") {
//                 const btnThem = document.getElementById("btn-them-sp");
//                 if (btnThem) btnThem.addEventListener("click", () => {
//                     openAdminPopup(
//                         "Thêm sản phẩm mới",
//                         `
//                 <div class="popup_item">
//                     <label>Tên sản phẩm:</label>
//                     <input type="text" id="sp-name" placeholder="Nhập tên sản phẩm">
//                 </div>
//                 <div class="popup_item">
//                     <label>Màu:</label>
//                     <select id="sp-color">
//                         <option value="red">đỏ</option>
//                         <option value="yellow">vàng</option>
//                     </select>
//                 </div>
//
//                 <div class="popup_item">
//                     <label>Size:</label>
//                     <select id="sp-size">
//                         <option value="M">M</option>
//                         <option value="L">L</option>
//                         <option value="XL">XL</option>
//                     </select>
//                 </div>
//
//                 <div class="popup_item">
//                     <label>Giá:</label>
//                     <input type="number" id="sp-price" placeholder="Nhập giá sản phẩm">
//                 </div>
//
//                 <div class="popup_item">
//                     <label>Số lượng:</label>
//                     <input type="number" id="sp-quantity" placeholder="Nhập số lượng sản phẩm">
//                 </div>
//
//                 <div class="popup_item">
//                     <label>Trạng thái:</label>
//                     <select id="sp-Status">
//                         <option value="đang bán">Đang bán</option>
//                         <option value="bán chạy">Bán chạy</option>
//                         <option value="dừng bán">Dừng bán</option>
//                     </select>
//                 </div>
//
//                 <div class="popup_item">
//                     <label>Ảnh sản phẩm:</label>
//
//                     <!-- Khu vực kéo/thả -->
//                     <div class="img-upload-box" id="drop-zone">
//                         <span>+</span>
//                         <p>Kéo hoặc click để thêm ảnh</p>
// <!--                        <input type="file" id="sp-img" accept="image/*" multiple>-->
//                     </div>
//
//                     <!-- Khu vực preview nhiều ảnh -->
//                     <div class="preview-list" id="preview-list">
//                         <div class="preview-item">
//                             <img src="image/balo1.jpg" alt="Balo 1">
//                         </div>
//                         <div class="preview-item">
//                             <img src="image/balo2.jpg" alt="Balo 2">
//                         </div>
//                     </div>
//                 </div>
//             `,
//                         () => {
//                             // callback sau khi nhấn xác nhận
//                             alert("Thêm biến thể cho sản phẩm: aaaaa");
//                         }
//                     );
//                 });
//             }

            if (text === "Quản lý người dùng") {
                loadUserList();
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
                <label>Đối tượng nhận thông báo:</label>
                <select id="tb-target-type">
                    <option value="all">Tất cả</option>
                    <option value="specific">Cụ thể</option>
                </select>
                
                <!-- Ô nhập UID chỉ hiện khi chọn "specific" -->
                <div id="uid-box" style="display:none; margin-top: 5px;">
                    <label>Nhập UID (hoặc danh sách UID, cách nhau bằng dấu phẩy):</label>
                    <input type="text" id="tb-uid" placeholder="VD: 0001, 0002, 0003">
                </div>

                <label>Loại thông báo:</label>
                <select id="tb-type">
                    <option value="item">Có sản phẩm mới</option>
                    <option value="voucher">Có voucher mới</option>
                    <option value="policy">Có chính sách hoặc dich vụ mới</option>
                    <option value="Order">Yêu cầu hủy đơn hàng</option>
                </select>

                <label>Nội dung:</label>
                <textarea id="tb-content" placeholder="Nhập nội dung thông báo"></textarea>
            `,
                        () => {
                            alert(`✔ Đã tạo thông báo cho UID: 12345`);
                        }
                    );
                });
            }

            if (text === "Quản lý dịch vụ, chính sách") {
                const btnThemTB = document.getElementById("btn-them-tb");
                if (btnThemTB) btnThemTB.addEventListener("click", () => {
                    openAdminPopup(
                        "Tạo thông báo mới",
                        `
                <label>Tên chính sách, dịch vụ:</label>
                <input type="text" id="cs_dv-name" placeholder="Nhập tiêu đề">
            
                <label>Loại:</label>
                <select id="tb-type">
                    <option value="chính sách">Chính sách</option>
                    <option value="dich_vu">Dịch vụ</option>
                </select>
            
                <label>Trạng thái:</label>
                <select id="sp-Status">
                    <option value="đang bán">Đang áp dụng</option>
                    <option value="dừng bán">Dừng áp dụng</option>
                </select>
            
                <label>Nội dung:</label>
                <textarea id="tb-content" placeholder="Nhập nội dung"></textarea>
            `,
                        () => {
                            alert(`✔ Đã Thêm chính sách, dịch vụ.`);
                        }
                    );
                });
            }

            if (text === "Trả lời câu hỏi") {
                const notiItems = document.querySelectorAll(".notification_item");
                notiItems.forEach(item => {
                    item.addEventListener("click", () => {
                        window.location.href = "../helpPage_admin/helpPage.html";
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

document.addEventListener("DOMContentLoaded", function () {
    const btnDoiThongTin = document.getElementById("btn-doi-thong-tin");
    if (btnDoiThongTin) {
        btnDoiThongTin.addEventListener("click", () => {
            // language=HTML format=false
            openAdminPopup(
                "Thay đổi thông tin",
                `
                <div class="popup_item">
                    <label>Tên tài khoản</label>
                    <input class="in4_input" type="text" id="name" value="Nguyễn Văn A" readonly>
                </div>
                 
                <div class="popup_item"> 
                    <label>Avata</label>                  
                    <div class="popup_avata">
                        <div class="preview-item">
                            <img src="admin/image/avatar.jpg">
                        </div>    
                              
                        <div class="img-upload-box" id="drop-zone">
                            <span>+</span>
                            <p>Kéo hoặc click để thêm ảnh</p>
                        </div>
                    </div>
                </div>
                `,
                () => {
                    alert("Đã thay đổi thông tin thành công!");
                }
            );
        });
    }
});

//hàm hỗ trợ ajax
//load user
function loadUserList() {
    fetch('/projectWeb_war/admin/users')
        .then(res => res.json())
        .then(users => {
            const table = document.getElementById("userTable");

            // XÓA DỮ LIỆU CŨ
            table.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Vai trò</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
            </tr>
            `;
            users.forEach(u => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${u.uid}</td>
                    <td>${u.name}</td>
                    <td>${u.email}</td>
                    <td>${u.role}</td>
                    <td>${u.status ? "Hoạt động" : "Bị khóa"}</td>
                    <td>
                        <button onclick="toggleUserStatus(${u.uid})">
                            ${u.status ? "Khóa" : "Mở"}
                        </button>
                    </td>
                `;
                table.appendChild(row);
            });
        });
}

function toggleUserStatus(uid) {
    if (!confirm("Bạn có chắc muốn thay đổi trạng thái user này?")) {
        return;
    }

    fetch(`/projectWeb_war/admin/user/toggle_user_status?uid=${uid}`, {
        method: "POST"
    })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
            loadUserList(); // load lại bảng
        })
        .catch(err => {
            console.error(err);
            alert("Có lỗi xảy ra");
        });
}

//load product
function loadProductList() {
    fetch('/projectWeb_war/admin/product_load')
        .then(res => res.json())
        .then(products => {
            const table = document.getElementById("productTable");
            // XÓA DỮ LIỆU CŨ
            table.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Loại</th>
                <th>Kiểu dáng</th>
                <th>Chất liệu</th>
                <th>Còn lại</th>
                <th>NCC</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
            </tr>
            `;

            products.forEach(p => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${p.pid}</td>
                    <td>${p.name}</td>
                    <td>${p.type}</td>
                    <td>${p.style}</td>
                    <td>${p.material}</td>
                    <td>${0}</td>
                    <td>${p.producer}</td>
                    <td>${p.status}</td>
                    <td>
                        <button onclick="toggleProductStatus(${p.id})">
                            ${p.status}
                        </button>
                    </td>
                `;
                table.appendChild(row);
            });
        });
}

