const dataService = {
    ho_tro: `
        <h2>Hỗ trợ khách hàng</h2> 11/12/2018
        <p>Chúng tôi cam kết hỗ trợ khách hàng mọi lúc, mọi nơi để giải quyết thắc mắc, khiếu nại hoặc yêu cầu hỗ trợ kỹ thuật.</p>
        <h3>1. Kênh liên hệ</h3>
        <ul>
            <li>Hotline: 1900-XXXX</li>
            <li>Email: support@website.com</li>
            <li>Chat trực tuyến trên website</li>
        </ul>
        <h3>2. Thời gian phản hồi</h3>
        <p>Chúng tôi cố gắng phản hồi trong vòng 24h làm việc. Trường hợp khẩn cấp sẽ được ưu tiên giải quyết nhanh nhất.</p>
        <h3>3. Cam kết</h3>
        <p>Đảm bảo giải quyết thỏa đáng, lịch sự, và minh bạch với khách hàng.</p>
    `,

    tu_van: `
        <h2>Liên hệ tư vấn</h2> 11/12/2018
        <p>Chúng tôi cung cấp dịch vụ tư vấn sản phẩm và giải pháp tối ưu theo nhu cầu của khách hàng.</p>
        <h3>1. Quy trình tư vấn</h3>
        <ul>
            <li>Bước 1: Khách hàng gửi yêu cầu qua form hoặc hotline.</li>
            <li>Bước 2: Nhân viên tư vấn liên hệ, trao đổi nhu cầu chi tiết.</li>
            <li>Bước 3: Đưa giải pháp, báo giá, và hướng dẫn sử dụng sản phẩm.</li>
        </ul>
        <h3>2. Thời gian tư vấn</h3>
        <p>Từ 8:00 – 21:00 tất cả các ngày trong tuần, kể cả lễ tết.</p>
        <h3>3. Lợi ích khách hàng</h3>
        <p>Nhận thông tin chính xác, giải pháp tối ưu và tiết kiệm thời gian khi mua hàng.</p>
    `,

    giao_hang: `
        <h2>Dịch vụ giao hàng</h2> 11/12/2018
        <p>Chúng tôi đảm bảo giao hàng nhanh chóng, an toàn, đúng hẹn và hỗ trợ theo dõi đơn hàng trực tuyến.</p>
        <h3>1. Phạm vi</h3>
        <ul>
            <li>Giao hàng toàn quốc với nhiều đối tác uy tín.</li>
            <li>Miễn phí giao hàng cho đơn hàng trên giá trị quy định.</li>
        </ul>
        <h3>2. Thời gian</h3>
        <p>Giao trong 1-5 ngày tùy khu vực, có thể theo dõi trực tiếp bằng mã vận đơn.</p>
        <h3>3. Cam kết</h3>
        <p>Đền bù thiệt hại nếu hàng bị hư hỏng hoặc mất mát do lỗi vận chuyển.</p>
    `,

    doi_tra: `
        <h2>Dịch vụ đổi trả</h2> 11/12/2018
        <p>Chúng tôi hỗ trợ đổi trả sản phẩm theo đúng quy định nhằm đảm bảo quyền lợi khách hàng.</p>
        <h3>1. Điều kiện</h3>
        <ul>
            <li>Sản phẩm còn nguyên tem, nguyên vẹn và chưa qua sử dụng.</li>
            <li>Đúng thời hạn đổi trả theo quy định (7 – 30 ngày tùy sản phẩm).</li>
        </ul>
        <h3>2. Quy trình</h3>
        <ul>
            <li>Bước 1: Liên hệ tổng đài hoặc gửi form yêu cầu đổi trả.</li>
            <li>Bước 2: Nhân viên xác nhận và hướng dẫn gửi trả sản phẩm.</li>
            <li>Bước 3: Nhận sản phẩm mới hoặc hoàn tiền tùy lựa chọn.</li>
        </ul>
        <h3>3. Lưu ý</h3>
        <p>Sản phẩm hư hỏng do khách hàng sẽ không được đổi trả miễn phí.</p>
    `,

    bao_hiem: `
        <h2>Dịch vụ bảo hiểm</h2> 11/12/2018
        <p>Chúng tôi cung cấp dịch vụ bảo hiểm bổ sung cho các sản phẩm nhằm bảo vệ quyền lợi khách hàng tối đa.</p>
        <h3>1. Phạm vi bảo hiểm</h3>
        <ul>
            <li>Bảo hiểm mất mát, hư hỏng do thiên tai, tai nạn.</li>
            <li>Bảo hiểm các thiết bị điện tử, hàng giá trị cao.</li>
        </ul>
        <h3>2. Thời gian</h3>
        <p>Bảo hiểm theo hợp đồng: 6 – 12 tháng, tùy loại sản phẩm.</p>
        <h3>3. Quy trình yêu cầu bồi thường</h3>
        <ul>
            <li>Bước 1: Khách hàng thông báo sự cố và cung cấp bằng chứng.</li>
            <li>Bước 2: Nhân viên kiểm tra và xác nhận hợp lệ.</li>
            <li>Bước 3: Thực hiện bồi thường theo hợp đồng.</li>
        </ul>
    `
};

// Khi trang load xong
document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const items = document.querySelectorAll(".menu_item .item");

    // Mặc định hiển thị dịch vụ đầu tiên (Hỗ trợ khách hàng)
    content.innerHTML = dataService["ho_tro"];

    items.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault(); // chặn load lại trang

            const type = this.getAttribute("data-type");
            content.innerHTML = dataService[type];
        });
    });
});
