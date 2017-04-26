$(document).ready(function() {

    /*
     * Replace all SVG images with inline SVG
     */
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

    /*
     * Word auto changing every 2 sec
     */

    $(function () {
        words = ["lettering", "electro music", "design packagings", "astrophysics", "logo elaboration", "tarantino movies", "animals", "meditation", "vegan food"];
        count = 0;
        setInterval(function () {
            count++;
            $(".word-auto-change").fadeOut(400, function () {
                $(this).text(words[count % words.length]).fadeIn(400);
            })
        }, 2000);
    });

    /*
     * Smooth scrolling
     */
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /*
     * Mobile Menu Animation
     */

    $('#toggle').click(function() {
        $(this).toggleClass('active');
    });

    /*
     * Closing menu when clicking on link
     */

    $('.nav a').on('click', function(){
        $('.navbar-toggle').click(); //bootstrap 3.x by Richard
    });

});