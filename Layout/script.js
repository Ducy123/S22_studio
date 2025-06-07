// Chờ cho toàn bộ nội dung trang web được tải xong
document.addEventListener('DOMContentLoaded', function () {

    // --- XỬ LÝ MENU HAMBURGER CHO MOBILE ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');
    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', function () {
            mainNav.classList.toggle('is-open');
        });
    }

    // --- THÊM HIỆU ỨNG ĐỔ BÓNG CHO HEADER KHI CUỘN ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- XỬ LÝ NÚT SCROLL TO TOP ---
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
        // Hiển thị nút khi cuộn xuống 20px
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        // Cuộn lên đầu khi click
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
