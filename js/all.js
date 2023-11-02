// Lottie
var animation = bodymovin.loadAnimation({
    container: document.getElementById('scroll_down'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://kt-designer.github.io/Travelfun/images/scroll_down.json'
})













// 浪漫歐洲
$(document).ready(function () {
    // 初始化 Slider
    $('.slider').each(function () {
        var $slider = $(this);
        var $nav = $slider.find('.slider-nav .icon');
        var $slides = $slider.find('.slider-content .slide');

        // 當點選 ICON 時切換 Slide
        $nav.click(function () {
            var slideIndex = $(this).data('slide');
            $slides.hide();
            $slides.filter('[data-slide="' + slideIndex + '"]').show();
        });

        // 預設顯示第一張 Slide
        $nav.first().click();
    });
});


// 浪漫歐洲_點選時維持特效
const icons = document.querySelectorAll('.icon');

// 將點擊事件添加到每個圖片上
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // 移除所有圖片的 active 類別
        icons.forEach(icon => icon.classList.remove('active'));
        // 將被點擊的圖片添加 active 類別，改變濾鏡效果
        icon.classList.add('active');
    });
});


