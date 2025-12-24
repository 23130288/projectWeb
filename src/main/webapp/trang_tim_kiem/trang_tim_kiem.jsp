<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TÌM KIẾM </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
    <link rel="stylesheet" href="trang_tim_kiem/trang_tim_kiem.css">
    <link rel="stylesheet" href="../shareStuff/header/header.css">
    <link rel="stylesheet" href="../shareStuff/footer/footer.css">
</head>
<body>
<header>
    <div id="header-placeholder"></div>
    <script src="../shareStuff/header/headerGetter.js"></script>
</header>
<div class="container-search">
    <div class="search-bar">
        <input type="text" name="query" placeholder="Tên sản phẩm..."/>
        <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>

    <div class="filter-container">

        <button class="filter-toggle" id="filterToggle">
            <label>Bộ lọc</label>
            <i class="fa-solid fa-plus"></i>
        </button>
        <!-- FILTER DROPDOWN -->
        <div class="filter-panel" id="filterPanel">
            <div class="filter-group">
                <label>Danh mục:</label>
                <div class="filter-tags">
                    <span class="tag">Balo</span>
                    <span class="tag">Vali</span>
                </div>
            </div>

            <div class="filter-group">
                <label>Giá:</label>
                <div class="filter-tags">
                    <span class="tag">0 - 200k</span>
                    <span class="tag">200k - 500k</span>
                    <span class="tag">500k - 1 triệu</span>
                </div>
            </div>

            <div class="filter-group">
                <label>Sắp xếp:</label>
                <div class="filter-tags">
                    <span class="tag">Tên A → Z</span>
                    <span class="tag">Tên Z → A</span>
                    <span class="tag">Giá thấp → cao</span>
                    <span class="tag">Giá cao → thấp</span>
                </div>
            </div>
        </div>
    </div>
</div>
<section class="results">
    <c:choose>
    <c:when test="${not empty searchResults}">
        <h1>Kết quả tìm kiếm cho: "${lastSearch}"</h1>
        <div class="slider-container">
            <div class="product-grid">
                <c:forEach var="p" items="${searchResults}">
                    <div class="product-card">
                        <a href="productDetail?pid=${p.pid}">
                            <img src="${p.mainImage.image}" alt="${p.name}">
                            <h2>${p.name}</h2>
                        </a>
                        <p class="price">
                                <span class="new-price">
                                    <fmt:formatNumber value="${p.variants[0].price}" pattern="#,###"/>đ
                                </span>
                        </p>
                        <div class="product-actions">
                            <button class="buy-btn">Mua Ngay</button>
                            <div class="inner-circle1">
                                <i class="fa fa-shopping-cart"></i>
                            </div>
                        </div>
                    </div>
                </c:forEach>
            </div>
        </div>
    </c:when>
    <c:otherwise>
        <div class="no-results-container">
            <h2 class="no-results-title">Không tìm thấy sản phẩm nào!</h2>
            <p class="no-results-text">
                Rất tiếc, chúng tôi không tìm thấy kết quả cho từ khóa:
                <strong class="highlight-keyword">"${searchNotResults}"</strong>
            </p>
            <p class="no-results-subtext">Vui lòng kiểm tra lại chính tả hoặc tìm kiếm bằng từ khóa khác.</p>
        </div>
    </c:otherwise>
    </c:choose>
</section>
<footer>
    <div id="footer-placeholder"></div>
    <script src="../shareStuff/footer/footerGetter.js"></script>
</footer>
<script src="trang_tim_kiem.js"></script>
</body>


