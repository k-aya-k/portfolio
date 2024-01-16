loading
window.onload = () => {
    setTimeout(classAdd, 1400);
}

const classAdd = () => {
    const snipper = document.getElementById('loading');
    snipper.classList.add('loaded');
    const fade = document.getElementsByClassName('top_textbox');
    fade[0].classList.add('show');
}

// returnbtn
const fadeReturnAnime = () => {
    let headerHeight = $('#header').outerHeight();
    let scroll1 = $(window).scrollTop();

    if (headerHeight <= scroll1 + 50) {
        document.getElementById('return').classList.add("fadein_r");
        document.getElementById('return').classList.remove("fadeout_r");
    } else {
        document.getElementById('return').classList.remove("fadein_r");
        document.getElementById('return').classList.add("fadeout_r");
    }
};

// underline
const marker = document.querySelectorAll(".under_line");

document.addEventListener("scroll", () => {
    for (let i = 0; i < marker.length; i++) {
        const element = marker[i];
        const distance = element.getBoundingClientRect().top;
        if (distance < window.innerHeight * .8) {
            element.classList.add("activeline");
        }
    }

})

// menubtn fadein
const fadeMenuAnime = () => {
    let headerHeight = $('#header').outerHeight();
    let scroll = $(window).scrollTop();

    if (headerHeight <= scroll + 50) {
        document.getElementById('target').classList.add("fadein_m");
        document.getElementById('target').classList.remove("fadeout_m");
    } else {
        document.getElementById('target').classList.remove("fadein_m");
        document.getElementById('target').classList.add("fadeout_m");
    }
}

// menu_btn open
const turnColor = () => {
    if (black.classList.contains("active_black")) {
        black.classList.remove("active_black");
        black.classList.add("none_black");
        gray.classList.remove("none_gray");
        gray.classList.add("active_gray");
    } else {
        black.classList.add("active_black");
        black.classList.remove("none_black");
        gray.classList.add("none_gray");
        gray.classList.remove("active_gray");
    }
}
const activebtn = () => {
    let black = document.getElementById("black");
    let gray = document.getElementById("gray");

    document.getElementById('target').classList.toggle("active");
    document.getElementById('nav_target').classList.toggle("nav_active");

    turnColor();
};

const nav_btn = () => {
    document.getElementById('target').classList.remove("active");
    document.getElementById('nav_target').classList.remove("nav_active");
    turnColor();
}

$(document).click(function (event) {
    if (!$(event.target).closest('#nav_target').length && !$(event.target).closest('#target').length) {
        if ($('#target').hasClass('active')) {
            nav_btn();
        }
    }
})

// about
function ScrollTimelineAnime() {
    $('.timeline li').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var startPoint = 280;
        if (scroll >= elemPos - windowHeight - startPoint) {
            var H = $(this).outerHeight(true)
            var percent = (scroll + startPoint - elemPos) / (H / 2) * 100;

            if (percent > 100) {
                percent = 100;
            }

            $(this).children('.border_line').css({
                height: percent + "%",
            });
        }
    });
}

$(window).on('scroll', function () {
    ScrollTimelineAnime();
    fadeMenuAnime();
    fadeReturnAnime();
});

$(window).on('load', function () {
    ScrollTimelineAnime();
    fadeMenuAnime();
    fadeReturnAnime();
    document.getElementById("black").classList.add('active_black');
    document.getElementById("gray").classList.add('none_gray');
});

$(window).scroll(function () {
    var footerTop = $('#footer').offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var distanceToFooter = footerTop - scrollTop;

    if (distanceToFooter <= windowHeight) {
        var bottomPosition = windowHeight - distanceToFooter;
        $('#return').css({ 'position': 'absolute', 'bottom': bottomPosition + 'px' });
    } else {
        $('#return').css({ 'position': 'fixed', 'bottom': '0px' });
    }
});