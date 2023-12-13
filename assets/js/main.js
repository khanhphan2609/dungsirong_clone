$(document).ready(function () {
    HoverBtn();
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