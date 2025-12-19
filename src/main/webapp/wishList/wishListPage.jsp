<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Yêu thích</title>
    <link rel="stylesheet" href="wishList/wishListPage.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
</head>
<body>
<main>
    <h1>Sản phẩm yêu thích</h1>
    <div class="container">
        <!-- Header -->
        <div class="wishlist-header">
            <div class="wishlist-header-content" id="wishlist-header-title">Sản phẩm</div>
            <div class="wishlist-header-content" id="wishlist-header-price">Đơn giá</div>
            <div class="wishlist-header-content" id="wishlist-header-status">Tình trạng</div>
            <div class="wishlist-header-content" id="wishlist-header-action">Thao tác</div>
        </div>

        <!-- products -->
        <div class="container-wishlist-items">
            <c:forEach var="p" items="${list}" varStatus="st">
                <div class="wishlist-item">
                    <div class="wishlist-item-title">
                        <a href="">
                            <img src="${p.mainImage.image}" alt="${p.name}">
                        </a>
                        <div class="wishlist-item-info">
                            <label>${p.name}</label>
                            <div class="rating">
                                <c:forEach begin="1" end="5" var="i">
                                    <span class="star">
                                        <c:choose>
                                            <c:when test="${i <= avgs[st.index]}">
                                                <i class="fa-solid fa-star"></i>
                                            </c:when>
                                            <c:otherwise>
                                                <i class="fa-regular fa-star"></i>
                                            </c:otherwise>
                                        </c:choose>
                                    </span>
                                </c:forEach>
                                <span class="rating-number">(${avgs[st.index]})</span>
                            </div>
                        </div>
                    </div>
                    <div class="wishlist-item-price">${p.variants[0].price} Đ</div>
                    <div class="wishlist-item-status ${p.totalQuantity > 0 ? 'hasProduct' : 'outOfProduct'}">
                        <c:choose>
                            <c:when test="${p.totalQuantity > 0}">
                                <i class="fa-solid fa-circle-check"></i>
                                Còn hàng (${p.totalQuantity})
                            </c:when>
                            <c:otherwise>
                                <i class="fa-solid fa-circle-xmark"></i>
                                Hết hàng
                            </c:otherwise>
                        </c:choose>
                    </div>
                    <div class="wishlist-item-buttons">
                        <button class="add-to-cart">Thêm vào giỏ</button>
                        <button class="remove-btn">Xóa</button>
                    </div>
                </div>
            </c:forEach>
        </div>
    </div>
</main>
</body>
</html>