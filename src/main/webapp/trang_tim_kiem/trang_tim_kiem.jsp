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
        <div class="filter-group">
            <label>Hãng sản xuất:</label>
            <input type="text" name="producer"
                   placeholder="Nhập hãng..."
                   value="${producer}">
        </div>

        <div class="filter-panel" id="filterPanel">
            <div class="filter-group">
                <label>Loại:</label>
                <select name="category">
                    <option value="">-- Tất cả --</option>
                    <option value="balo" ${param.category == 'balo' ? 'selected' : ''}>Balo</option>
                    <option value="vali" ${param.category == 'vali' ? 'selected' : ''}>Vali</option>
                </select>
            </div>

            <div class="filter-group">
                <label>Màu sắc:</label>
                <select name="color">
                    <option value="">-- Tất cả --</option>
                    <option value="do" ${param.color == 'do' ? 'selected' : ''}>Đỏ</option>
                    <option value="cam" ${param.color == 'cam' ? 'selected' : ''}>Cam</option>
                    <option value="vang" ${param.color == 'vang' ? 'selected' : ''}>Vàng</option>
                    <option value="luc" ${param.color == 'luc' ? 'selected' : ''}>Lục</option>
                    <option value="xanh" ${param.color == 'xanh' ? 'selected' : ''}>Xanh</option>
                    <option value="tim" ${param.color == 'tim' ? 'selected' : ''}>Tím</option>
                    <option value="hong" ${param.color == 'hong' ? 'selected' : ''}>Hồng</option>
                    <option value="xam" ${param.color == 'xam' ? 'selected' : ''}>Xám</option>
                    <option value="den" ${param.color == 'den' ? 'selected' : ''}>Đen</option>
                </select>
            </div>

            <div class="filter-group">
                <label>Size:</label>
                <select name="size">
                    <option value="">-- Tất cả --</option>
                    <option value="S" ${param.size == 'S' ? 'selected' : ''}>S</option>
                    <option value="M" ${param.size == 'M' ? 'selected' : ''}>M</option>
                    <option value="L" ${param.size == 'L' ? 'selected' : ''}>L</option>
                    <option value="XL" ${param.size == 'XL' ? 'selected' : ''}>XL</option>
                </select>
            </div>

            <div class="filter-group">
                <label>Giá:</label>
                <div class="price-range">
                    <input type="number" name="minPrice"
                           placeholder="Từ"
                           value="${param.minPrice}">
                    <span> - </span>
                    <input type="number" name="maxPrice"
                           placeholder="Đến"
                           value="${param.maxPrice}">
                </div>
            </div>

            <div class="filter-group">
                <label>Sắp xếp:</label>
                <select name="sort">
                    <option value="price_asc" ${param.sort == 'price_asc' ? 'selected' : ''}>
                        Giá thấp → cao
                    </option>
                    <option value="price_desc" ${param.sort == 'price_desc' ? 'selected' : ''}>
                        Giá cao → thấp
                    </option>
                    <option value="name_asc" ${param.sort == 'name_asc' ? 'selected' : ''}>
                        Tên A → Z
                    </option>
                    <option value="name_desc" ${param.sort == 'name_desc' ? 'selected' : ''}>
                        Tên Z → A
                    </option>
                    <option value="best_seller" ${param.sort == 'best_seller' ? 'selected' : ''}>
                        Bán chạy
                    </option>
                    <option value="rating" ${param.sort == 'rating' ? 'selected' : ''}>
                        Đánh giá cao
                    </option>
                    <option value="hot" ${param.sort == 'hot' ? 'selected' : ''}>
                        Sản phẩm hot
                    </option>
                </select>
            </div>
        </div>
    </div>
</div>

<section class="results">
    <c:choose>
    <c:when test="${not empty searchResults}">
        <h1>Kết quả tìm kiếm cho: "${param.query}"</h1>
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
                <strong class="highlight-keyword">"${param.query}"</strong>
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


