<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sản phẩm</title>
    <link rel="stylesheet" href="productPage/productPage.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
</head>
<body>
<main>
    <div class="section-product">
        <div class="container-images">
            <img src="../images/balos/apollo/apollo1.webp" class="main-image" alt="Product">
            <div class="images-list">
                <img class="sub-image active" src="../images/balos/apollo/apollo1.webp" alt="">
                <img class="sub-image" src="../images/balos/apollo/apollo2.webp" alt="">
                <img class="sub-image" src="../images/balos/apollo/apollo3.webp" alt="">
                <img class="sub-image" src="../images/balos/apollo/apollo4.webp" alt="">
                <img class="sub-image" src="../images/balos/apollo/apollo5.webp" alt="">
            </div>
        </div>
        <div class="product-details">
            <!--general info section-->
            <h2>Balo Apollo đựng laptop</h2>
            <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9734;</span>
                <span class="rating-number">(4.0)</span>
            </div>
            <p class="price">345.000 đ</p>
            <label>Mô tả sản phẩm:</label>
            <p class="desc">1. Thông tin chi tiết
                - Chất liệu: Da tráng PU chống thấm. Vải lót trượt nước.
                Balo của MDR được sử dụng chất liệu vải bố tráng PU chống thấm, độ bền cao, có thể giặt và vệ sinh thoải
                mái.
                - Màu sắc: ĐEN, ĐEN PHỐI TRẮNG, XÁM
                - Kích thước: 40x28x16 cm
                - Tính năng: Bên trong gồm 1 ngăn chính, 1 ngăn chống sốc laptop và 1 ngăn phụ nhỏ.
                Quai đeo thiết kế với đệm mút chống nhức mỏi. Ngăn chống sốc laptop 15 inch.

                2. Cách sử dụng balo
                Thiết kế phù hợp cho cả nam và nữ, dùng để đựng laptop, sách vở, đồ dùng cá nhân hoặc hành lý nhẹ.
                Thích hợp sử dụng khi đi học, đi làm, du lịch ngắn ngày, dạo phố hoặc công tác.
                Ngăn chứa rộng rãi, có nhiều ngăn phụ giúp sắp xếp đồ dùng gọn gàng và tiện lợi.
            </p>

            <!--option section-->
            <div class="container-options">
                <div class="option">
                    <label>Chọn màu: </label>
                    <div class="color-options">
                        <button class="color-btn black"></button>
                        <button class="color-btn red"></button>
                        <button class="color-btn blue"></button>
                    </div>
                </div>
                <div class="option">
                    <label>Chọn kích cỡ: </label>
                    <div class="size-options">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                </div>
            </div>

            <!--Button section-->
            <div class="container-buttons">
                <button id="buyBtn"><i class="fa-solid fa-money-check-dollar"></i> Mua</button>
                <button id="addToCartBtn"><i class="fa-solid fa-cart-shopping"></i></button>
                <button id="addToWishListBtn"><i class="fa-solid fa-heart"></i></button>
            </div>
            <p id="statusMessage" class="status-msg"></p>
            <div class="popup" id="buyPopup">
                <div class="popup-content">
                    <div class="container-popup-title">
                        <h2>Thông tin mua hàng</h2>
                        <button type="button" class="edit-btn" id="editBtn">Chỉnh sửa <i class="fa-solid fa-pen"></i>
                        </button>
                    </div>
                    <label>Họ tên:<input type="text" id="name" placeholder="Nhập họ tên..."
                                         value="Name placeholder" required disabled></label>

                    <label>Số điện thoại:<input type="text" id="phone"
                                                placeholder="Nhập số điện thoại..." value="0123456789" required
                                                disabled></label>

                    <label>Địa chỉ giao hàng:<input id="address"
                                                    placeholder="Nhập địa chỉ..."
                                                    value="1A/1 Tổ 1A, Khu phố 1, Phường An Bình, Tỉnh Đồng Nai"
                                                    required disabled></label>

                    <div class="payment-container">
                        <label>Phương thức thanh toán</label>
                        <div class="radio-container">
                            <label><input type="radio" name="payment" required>Vietcombank
                                <img src="../images/bankImages/vietcombank.jpg" alt="Chuyển ngân hàng">
                            </label>
                            <label><input type="radio" name="payment">Visa
                                <img src="../images/bankImages/visa.jpeg" alt="Chuyển ngân hàng">
                            </label>
                            <label><input type="radio" name="payment">Tiền mặt</label>
                        </div>
                    </div>

<!--                    <div class="container-voucher" id="container-voucher">-->
<!--                        <label for="voucher">Voucher:</label>-->
<!--                        <div class="voucher-input">-->
<!--                            <input type="text" id="voucher" placeholder="Nhập mã giảm giá">-->
<!--                            <button id="apply-voucher">Áp dụng</button>-->
<!--                        </div>-->
<!--                    </div>-->

                    <div class="container-voucher" id="container-voucher">
                        <label>Voucher:</label>
                        <div class="voucher-container">
                            <label>
                                <input type="checkbox" name="voucher" value="5%">
                                <span class="voucher-name">Giảm giá 5%</span>
                                <span class="voucher-condition">Áp dụng cho đơn từ 200k</span>
                            </label>

                            <label>
                                <input type="checkbox" name="voucher" value="free_ship">
                                <span class="voucher-name">Miễn phí vận chuyển</span>
                                <span class="voucher-condition">Áp dụng cho đơn từ 0đ</span>
                            </label>

                            <label>
                                <input type="checkbox" name="voucher" value="10%">
                                <span class="voucher-name">Giảm 10%</span>
                                <span class="voucher-condition">Áp dụng cho đơn từ 500k</span>
                            </label>
                        </div>
                    </div>

                    <div class="container-product-price">
                        <div class="container-price">
                            <label>Tổng tiền:</label>
                            <p>345.000 đ</p>
                        </div>
                        <div class="container-price">
                            <label>Giảm giá:</label>
                            <p>0 đ</p>
                        </div>
                        <div class="container-price" id="final-price">
                            <label class="title">Tổng thanh toán:</label>
                            <p class="final-price-para">345.000 đ</p>
                        </div>
                    </div>
                    <div class="popup-buttons">
                        <a href="../ct_Order/ct_Order.html">
                            <button id="confirmBuy">Xác nhận</button>
                        </a>
                        <button id="cancelBuy">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--This is a comment section-->
    <div class="section-review">
        <div class="container-review">
            <!-- Rating -->
            <form class="container-rating">
                <h3>Đánh giá</h3>
                <div class="stars">
                    <input type="radio" id="star1" name="rating" value="1">
                    <label for="star1">★</label>
                    <input type="radio" id="star2" name="rating" value="2">
                    <label for="star2">★</label>
                    <input type="radio" id="star3" name="rating" value="3">
                    <label for="star3">★</label>
                    <input type="radio" id="star4" name="rating" value="4">
                    <label for="star4">★</label>
                    <input type="radio" id="star5" name="rating" value="5">
                    <label for="star5">★</label>
                </div>
            </form>

            <!-- Comment -->
            <form class="comment-form">
                <label>
                    <textarea rows="4" placeholder="Viết bình luận của bạn về sản phẩm" required></textarea>
                </label>
                <button type="submit">Đăng bình luận</button>
            </form>
        </div>

        <div class="comment-list">
            <div class="comment">
                <h4>name placeholder 1</h4>
                <div class="rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9734;</span>
                    <span class="rating-number">(4.0)</span>
                </div>
                <p>a comment about how bad the product is</p>
                <span>3 ngày trước</span>
            </div>
            <div class="comment">
                <h4>name placeholder 2</h4>
                <div class="rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9734;</span>
                    <span class="rating-number">(4.0)</span>
                </div>
                <p>a comment about how good the product is</p>
                <span>5 ngày trước</span>
            </div>
        </div>
    </div>
</main>
<script src="productPageJS/changeImage.js"></script>
<script src="productPageJS/buttonHandler.js"></script>
<script src="../cartPage/cartPageJS/editInfo.js"></script>
</body>
</html>