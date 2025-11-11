function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
function getProductData() {
    return [

        { name: "Vali Kéo 24 inch", category: "VALI", keywords: ["vali", "kéo", "24 inch"], price: "900.000₫", oldPrice: "1.200.000₫", discount: "-25%", image: "image/vai_keo_24_inch.png" },
        { name: "Vali Kéo Chống Nước", category: "VALI", keywords: ["vali", "chống nước", "kéo"], price: "910.000₫", oldPrice: "1.300.000₫", discount: "-30%", image: "image/vali_keo_chong_nuoc.jpg" },
        { name: "Vali Kéo Mini Xách Tay 20 inch", category: "VALI", keywords: ["vali", "mini", "xách tay", "20 inch"], price: "780.000đ", oldPrice: "1.200.000₫", discount: "-35%", image: "image/vali_keo_mini_xach_tay.png" },
        { name: "Vali Kéo 28 inch", category: "VALI", keywords: ["vali", "kéo", "28 inch"], price: "1.500.000₫", oldPrice: "2.000.000₫", discount: "-25%", image: "image/vali_keo_28_inch.png" },
        { name: "Vali Kéo Thời Trang Nữ 28 inch", category: "VALI", keywords: ["vali", "thời trang", "nữ", "28 inch"], price: "1.275.000₫", oldPrice: "1.700.000₫", discount: "-25%", image: "image/vali_thoi_trang_nu_28_inch.png" },
        { name: "Vali Kéo Thời Trang Nam 24 inch", category: "VALI", keywords: ["vali", "thời trang", "nam", "24 inch"], price: "980.000₫", oldPrice: "1.400.000₫", discount: "-30%", image: "image/vali_thoi_trang_nam_24_inch.png" },
        { name: "Vali Kéo Vải 24 inch", category: "VALI", keywords: ["vali", "kéo", "vải", "24 inch"], price: "1.960.000₫", oldPrice: "2.800.000₫", discount: "-30%", image: "image/vali_keo_vai_24_inch.png" },
        { name: "Vali Kéo Vải 28 inch", category: "VALI", keywords: ["vali", "kéo", "vải", "28 inch"], price: "2.640.000₫", oldPrice: "3.300.000₫", discount: "-20%", image: "image/vali_keo_vai_28_inch.png" },
        { name: "Vali Chống Va Đập 24 inch", category: "VALI", keywords: ["vali", "chống va đập", "24 inch"], price: "1.250.000₫", oldPrice: "1.800.000₫", discount: "-25%", image: "image/vali_chong_va_dap_24_inch.png" },

        { name: "Balo Du Lịch Chống Nước", category: "BALO", keywords: ["balo", "du lịch", "chống nước"], price: "975.000₫", oldPrice: "1.300.000₫", discount: "-25%", image: "image/balo_chong_nuoc.png" },
        { name: "Balo Du Lịch Gọn Nhẹ", category: "BALO", keywords: ["balo", "du lịch", "gọn nhẹ"], price: "630.000₫", oldPrice: "900.000₫", discount: "-30%", image: "image/balo_du_lich_gon_nhe.png" },
        { name: "Balo Thời Trang", category: "BALO", keywords: ["balo", "thời trang"], price: "715.000₫", oldPrice: "1.100.000₫", discount: "-35%", image: "image/bao_thoi_trang.png" },
        { name: "Balo 1 quai đeo", category: "BALO", keywords: ["balo", "1 quai", "đeo"], price: "480.000₫", oldPrice: "600.000₫", discount: "-20%", image: "image/balo_1_quai_đeo.png" },
        { name: "Balo Phượt", category: "BALO", keywords: ["balo", "phượt"], price: "720.000₫", oldPrice: "900.000₫", discount: "-20%", image: "image/balo_phuot.png" },
        { name: "Balo Cắm Trại", category: "BALO", keywords: ["balo", "cắm trại"], price: "1.200.000₫", oldPrice: "1.600.000₫", discount: "-25%", image: "image/balo_cam_trai.png" },
        { name: "Balo Leo Núi", category: "BALO", keywords: ["balo", "leo núi"], price: "1.275.000₫", oldPrice: "1.500.000₫", discount: "-15%", image: "image/balo_leo_nui.png" },
        { name: "Balo Giữ Nhiệt", category: "BALO", keywords: ["balo", "giữ nhiệt"], price: "456.000₫", oldPrice: "570.000₫", discount: "-20%", image: "image/balo_giu_nhiet.png" },
        { name: "Balo Simplecarry TWB", category: "BALO", keywords: ["balo", "simplecarry", "twb"], price: "841.500₫", oldPrice: "990.000₫", discount: "-15%", image: "image/balo_simplecarry_twb.png" },

        { name: "Vali Chống Va Đập 24 inch (Nổi Bật)", category: "VALI", keywords: ["vali", "chống va đập", "24 inch", "nổi bật"], price: "900.000₫", oldPrice: "1.200.000₫", discount: "-25%", image: "image/img1.png" },
        { name: "Vali Chống Bể Vỡ 20 inch", category: "VALI", keywords: ["vali", "chống bể vỡ", "20 inch"], price: "910.000₫", oldPrice: "1.300.000₫", discount: "-30%", image: "image/img2.png" },
        { name: "Vali Chống Va Đập 20 inch", category: "VALI", keywords: ["vali", "chống va đập", "20 inch"], price: "780.000₫", oldPrice: "1.200.000₫", discount: "-35%", image: "image/img3.png" },
        { name: "Vali Khung Nhôm Cao Cấp 20 inch", category: "VALI", keywords: ["vali", "khung nhôm", "cao cấp", "20 inch"], price: "1.500.000₫", oldPrice: "2.000.000₫", discount: "-25%", image: "image/img4.png" },
        { name: "Vali Khung Nhôm Cao Cấp 24 inch", category: "VALI", keywords: ["vali", "khung nhôm", "cao cấp", "24 inch"], price: "1.275.000₫", oldPrice: "1.700.000₫", discount: "-25%", image: "image/img5.png" },
        { name: "Vali Khung Nhôm Cao Cấp 28 inch", category: "VALI", keywords: ["vali", "khung nhôm", "cao cấp", "28 inch"], price: "980.000₫", oldPrice: "1.400.000₫", discount: "-30%", image: "image/img6.png" },

        { name: "Balo 14 inch (Nổi Bật)", category: "BALO", keywords: ["balo", "14 inch", "nổi bật"], price: "975.000₫", oldPrice: "1.300.000₫", discount: "-25%", image: "image/img7.png" },
        { name: "Balo 15.6 inch", category: "BALO", keywords: ["balo", "15.6 inch", "laptop"], price: "630.000₫", oldPrice: "900.000₫", discount: "-30%", image: "image/img8.png" },
        { name: "Balo Simplecarry E-Cityh", category: "BALO", keywords: ["balo", "simplecarry", "e-city", "thời trang"], price: "715.000₫", oldPrice: "1.100.000₫", discount: "-35%", image: "image/img9.png" },
        { name: "Balo Mikkor The Irvin", category: "BALO", keywords: ["balo", "mikkor", "the irvin", "1 quai"], price: "480.000₫", oldPrice: "600.000₫", discount: "-20%", image: "image/img10.png" },
        { name: "Balo The Edwin Backpack", category: "BALO", keywords: ["balo", "the edwin", "backpack", "phượt"], price: "720.000₫", oldPrice: "900.000₫", discount: "-20%", image: "image/img11.png" },
        { name: "Balo Simplecarry K-City", category: "BALO", keywords: ["balo", "simplecarry", "k-city", "cắm trại"], price: "1.200.000₫", oldPrice: "1.600.000₫", discount: "-25%", image: "image/img12.png" }
    ];
}


document.addEventListener('DOMContentLoaded', function() {
    const category = getUrlParameter('category').toUpperCase();
    const query = getUrlParameter('query');
    const searchInfo = document.getElementById('search-info');
    const resultsSection = document.querySelector('.results');

    // 1. HIỂN THỊ THÔNG TIN TÌM KIẾM
    if (category && query) {
        searchInfo.innerHTML = `
            <p>Bạn đã tìm kiếm <strong>${category}</strong> với từ khóa: <strong>"${query}"</strong></p>
        `;
    } else {
        searchInfo.innerHTML = '<p>Vui lòng nhập từ khóa để tìm kiếm.</p>';
        return;
    }

    const allProducts = getProductData();
    const normalizedQuery = query.toLowerCase();

    const filteredProducts = allProducts.filter(product => {
        const isCategoryMatch = product.category === category;
        const isQueryMatch = product.name.toLowerCase().includes(normalizedQuery) ||
            product.keywords.some(keyword => keyword.includes(normalizedQuery));

        return isCategoryMatch && isQueryMatch;
    });

    const resultsGrid = document.createElement('div');
    resultsGrid.classList.add('product-grid'); // Sử dụng class CSS của trang chủ cho kết quả

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <div class="discount-badge">${product.discount}</div>
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">
                        <span class="old-price">${product.oldPrice}</span>
                        <span class="new-price">${product.price}</span>
                    </p>
                    <button class="buy-btn">Mua Ngay</button>
                </div>
            `;
            resultsGrid.innerHTML += productCard;
        });
        resultsSection.appendChild(resultsGrid);
    } else {
        const noResults = document.createElement('p');
        noResults.innerHTML = `Không tìm thấy sản phẩm ${category} nào phù hợp với từ khóa "<strong>${query}</strong>".`;
        noResults.style.textAlign = 'center';
        noResults.style.fontSize = '1.2em';
        resultsSection.appendChild(noResults);
    }
});