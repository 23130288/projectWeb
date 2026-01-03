<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Giỏ hàng</title>
    <link rel="stylesheet" href="cartPage/cartPage.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
</head>
<body>
<main>
    <h1>Giỏ hàng</h1>
    <div class="container">
        <%-- ====================================== products ====================================== --%>
        <div class="product-info">
            <div class="product-info-header">
                <div class="product-info-header-content" id="product-info-header-title">Sản phẩm</div>
                <div class="product-info-header-content" id="product-info-header-price">Đơn giá</div>
                <div class="product-info-header-content" id="product-info-header-quantity">Số lượng</div>
                <div class="product-info-header-content" id="product-info-header-total">Tổng</div>
                <div class="product-info-header-content" id="product-info-header-action">Thao tác</div>
            </div>

            <div class="container-product-items">
                <c:if test="${empty cartItems}">
                    <p>Giỏ hàng trống</p>
                </c:if>
                <c:forEach var="item" items="${cartItems}">
                    <div class="product-item">
                        <div class="product-item-title">
                            <a href="../productPage/productPage.html">
                                <img src="${item.mainImg}" class="img_Show" alt="">
                            </a>
                            <div class="product-item-info">
                                <label>${item.product.name}</label>
                                <p>item.product.description</p>
                                <div class="product-item-variant">
                                    <p>Màu sắc:
                                        <button class="variant-color"></button>
                                    </p>
                                    <p>Kích cỡ: <span class="variant-size">XL</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="product-item-more">
                            <p class="price">${item.price} đ</p>
                        </div>
                        <div class="product-item-quantity">
                            <button class="minus-quantity-button">-</button>
                            <p class="quantity">${item.quantity}</p>
                            <button class="plus-quantity-button">+</button>
                        </div>
                        <div class="product-item-more">
                            <p class="total">${item.price * item.quantity} đ</p>
                        </div>
                        <div class="product-item-more">
                            <label class="action-select-product">
                                <input type="checkbox" name="select-checkbox">
                            </label>
                            <button class="action-delete-product">Xóa</button>
                        </div>
                    </div>
                </c:forEach>
            </div>
        </div>

        <%-- ====================================== Price ====================================== --%>
        <div class="container-product-price">
            <div class="container-price" id="container-voucher">
                <label>Voucher:</label>
                <div class="vouchers">
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
            <div class="container-price">
                <label>Tổng tiền:</label>
                <p>690.000 đ</p>
            </div>
            <div class="container-price">
                <label>Giảm giá:</label>
                <p>0 đ</p>
            </div>
            <div class="container-price" id="final-price">
                <label class="title">Tổng thanh toán:</label>
                <p class="price">690.000 đ</p>
            </div>
        </div>

        <%-- ====================================== user info ====================================== --%>
        <div class="user-info">
            <form id="form-input-info" action="../ct_Order/ct_Order.html">
                <div class="container-user-title">
                    <h2>Thông tin người dùng</h2>
                    <button type="button" class="edit-btn" id="editBtn">Chỉnh sửa <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
                <div class="form-container">
                    <div class="user-info-container">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Họ tên:</label>
                                <input type="text" id="name" placeholder="Họ tên" value="Name placeholder" required
                                       disabled>
                            </div>
                            <div class="form-group">
                                <label for="phone">Số điện thoại:</label>
                                <input type="text" id="phone" placeholder="Số điện thoại" value="0123456789" required
                                       disabled>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="address">Địa chỉ:</label>
                            <input type="text" id="address"
                                   placeholder="Địa chỉ..." value="1A/1 Tổ 1A, Khu phố 1, Phường An Bình, Tỉnh Đồng Nai"
                                   required disabled>
                        </div>
                        <div class="form-group">
                            <label for="note">Thông tin thêm:</label>
                            <textarea id="note" rows="3" placeholder="Optional"></textarea>
                        </div>
                    </div>

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

                    <div class="container-buttons">
                        <button type="submit" class="confirm-btn">Thanh toán</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</main>
<footer>
    <div id="footer-placeholder"></div>
    <script src="../shareStuff/footer/footerGetter.js"></script>
</footer>
<script src="cartPageJS/quantity.js"></script>
<script src="cartPageJS/editInfo.js"></script>
</body>
</html>