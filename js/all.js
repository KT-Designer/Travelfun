
$(document).ready(function () {
    // 浮動選單收合功能_PC
    $(".close").click(function () {
        $(".menu_pc").animate({ right: '-200' }, 600, function () {
            $(".open").animate({ right: '0' }, 500);
        });
    });

    $(".open").click(function () {
        $(".open").animate({ right: '-50' }, 600, function () {
            $(".menu_pc").animate({ right: '0' }, 700);
        });
    });




    // 浪漫歐洲
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


// 置頂鍵
window.onscroll = function () {
    var e = document.getElementById("scrolltop");
    if (!e) {
        e = document.createElement("a");
        e.id = "scrolltop";
        e.href = "#";
        document.body.appendChild(e);
    }
    e.style.display = document.documentElement.scrollTop > 300 ? "block" : "none";
    e.onclick = (ev) => {
        ev.preventDefault();
        document.documentElement.scrollTop = 0;
    };
};







// 浮動選單_監聽網頁滾動
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    var anchorLinks = document.getElementsByClassName('anchor-link');
    for (var i = 0; i < anchorLinks.length; i++) {
        var targetId = anchorLinks[i].firstChild.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            var targetPosition = targetElement.offsetTop - 100; // 偏移量，根據需要自行調整

            if (scrollPosition >= targetPosition && scrollPosition < targetPosition + targetElement.offsetHeight) {
                // 將之前的活動錨點取消活動狀態
                var activeLinks = document.getElementsByClassName('anchor-link active');
                for (var j = 0; j < activeLinks.length; j++) {
                    activeLinks[j].classList.remove('active');
                }

                // 將目前滾動到的區塊的錨點設置為活動狀態
                anchorLinks[i].classList.add('active');
                anchorLinks[i].firstChild.classList.add('active');
            } else {
                // 若區塊滾動出視窗，則移除活動狀態
                anchorLinks[i].classList.remove('active');
                anchorLinks[i].firstChild.classList.remove('active');
            }
        }
    }
});










// Lottie
var animation = bodymovin.loadAnimation({
    container: document.getElementById('scroll_down'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://kt-designer.github.io/Travelfun/images/scroll_down.json'
})


var animation = bodymovin.loadAnimation({
    container: document.getElementById('swipe_up'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://kt-designer.github.io/Travelfun/images/swipe_up.json'
})








