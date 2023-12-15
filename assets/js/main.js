$(document).ready(function () {
    HoverBtn();

    $(document).on('click', '.btn', function() {
        ClickBtnCommingSoon();
    });
});

function HoverBtn() {
    // Handle image hover event for all images with the 'img--off' class
    $('.img--off').hover(
        function () {
            // Change the source to the 'on' image when hovered
            $(this).attr('src', $(this).attr('src').replace('-off', '-on'));
            // Optional: Toggle the 'img--off' and 'img--on' classes
            $(this).toggleClass('img--off img--on');
        },
        function () {
            // Change the source back to the 'off' image when not hovered
            $(this).attr('src', $(this).attr('src').replace('-on', '-off'));
            // Optional: Toggle the 'img--off' and 'img--on' classes
            $(this).toggleClass('img--off img--on');
        }
    );
}

function checkDevide() {
    if (navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
        var androi = document.querySelector('.download--android')
        androi.classList.add('hide-on-mobile-tablet')

        var apk = document.querySelector('.download--apk')
        apk.classList.add('hide-on-mobile-tablet')
    } else {
        var appstore = document.querySelector('.download--ios')
        appstore.classList.add('hide-on-mobile-tablet')
    }
}
checkDevide();

// SweetAlert
function ClickBtnCommingSoon() {
    swal("Comming Soon...");
}