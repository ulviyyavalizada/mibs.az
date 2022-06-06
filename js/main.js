$(document).ready(function() {
    $(".nav-button").click(function() {
        $(this).toggleClass("active"), $(".main-nav").toggleClass("active")
    }), $(".footer__nav-button").click(function() {
        $(this).toggleClass("active"), $(".footer__nav").slideToggle(200)
    });
    var t = $(".anim");

    function e() {
        for (var e = t.length - 1; 0 <= e; e--) window.pageYOffset + window.innerHeight >= $(t[e]).offset().top + 50 && $(t[e]).addClass("active")
    }

    function o() {
        for (var e = $(window).scrollTop(), t = $(".parallax-1"), o = $(".parallax-2"), a = $(".parallax-3"), i = $(".parallax-4"), s = 0; s < t.length; s++) {
            var r = e - $(t[s]).offset().top;
            $(t[s]).css("transform", "translateY(" + (0 - .05 * r) + "px)")
        }
        for (s = 0; s < o.length; s++) {
            r = e - $(o[s]).offset().top;
            $(o[s]).css("transform", "translateY(" + (0 - .1 * r) + "px)")
        }
        for (s = 0; s < a.length; s++) {
            r = e - $(a[s]).offset().top;
            $(a[s]).css("transform", "translateY(" + (0 - .13 * r) + "px)")
        }
        for (s = 0; s < i.length; s++) {
            r = e - $(i[s]).offset().top;
            $(i[s]).css("transform", "translateY(" + (0 - .16 * r) + "px)")
        }
    }
    e(), o(), $(window).scroll(function() {
        e(), o(), 1 < window.pageYOffset ? $(".header_home").addClass("scrolled") : $(".header_home").removeClass("scrolled")
    }), $(".banner__scroll").click(function() {
        $("html, body").animate({
            scrollTop: $(".banner").outerHeight() - $(".header").outerHeight()
        }, 500)
    }), $(".js-masonry").masonry({
        itemSelector: ".js-masonry__item"
    });
    var a = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M35.41 5.41A2 2 0 0 0 32.6 2.6l-20 20a2 2 0 0 0 0 2.82l20 20a2 2 0 0 0 2.82-2.82L16.83 24 35.4 5.41z"/></svg>';
    
    $(".reviews__slider-wrapper").owlCarousel({
        autoplayHoverPause: false,
        nav: !0,
        items: 1,
        margin: 30,
        navText: [a, a]
    }); $(".section-slider-block").owlCarousel({
        nav: !0,
        items: 1,
        autoHeight: 1,
        navText: ["<img src='/i/icons/left.svg'><span>ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð¸Ð¹</span>", "<span>Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹</span><img src='/i/icons/left.svg'>"]
    });
    
    $(".prices__slider-wrapper").owlCarousel({
        nav: !0,
        margin: 0,
        navText: [a, a],
        // autoplay: true,
        // loop: true,
        // autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1230: {
                items: 3
            },
            1550: {
                items: 4
            }
        }
    });

    var s = "";
    $(".row__slider-wrapper").on("initialized.owl.carousel changed.owl.carousel", function(e) {
        var t = e.relatedTarget;
        $(".banner__timeline").css("display", "none"), t.current() + 1 === t.items().length ? s = setTimeout(function() {
            var e = $(".row__slider .owl-dot");
            $(e[0]).trigger("click")
        }, 8e3) : clearTimeout(s)
    }).owlCarousel({
        nav: !0,
        smartSpeed: 100,
        autoplayTimeout: 7e3,
        autoplaySpeed: 100,
        animateOut: "fadeOut",
        animateIn: "fadeInTranslate",
        autoplayHoverPause: 1,
        items: 1,
        mouseDrag: !1,
        touchDrag: !1,
        autoHeight: !0,
        autoplay: !0,
        autoplayTimeout: 7e3,
        onTranslated: function() {
            r()
        }
    });

    function r() {
        var e = $(".row__slider .owl-item"),
            t = $(".row__slider .owl-dot");
        for (i = 0; i < e.length - 1; i++) $(e[i]).hasClass("active") && ($(".row__timeline").css("left", $(t[i]).position().left + $(t[i]).outerWidth() + 37), $(".row__timeline").css("width", parseInt($(t[i + 1]).position().left) - $(t[i]).outerWidth() - $(t[i]).position().left - 7), $(".row__timeine-loader").css("width", "0").stop().animate({
            width: "100%"
        }, 7e3), $(".row__loaded").css("width", $(t[i]).position().left))
    }
    r(), $(".row__slider .owl-dot").on("click", function() {
        var e = $(".row__slider .owl-item"),
            t = $(".row__slider .owl-dot");
        for (i = 0; i < e.length - 1; i++) $(e[i]).hasClass("active") && $(".row__loaded").css("width", $(t[i]).position().left)
    })
});



var a = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M35.41 5.41A2 2 0 0 0 32.6 2.6l-20 20a2 2 0 0 0 0 2.82l20 20a2 2 0 0 0 2.82-2.82L16.83 24 35.4 5.41z"/></svg>';



$("[name=phone]").mask("+7 (999) 999-99-99");
$("[name=tel]").mask("+7 (999) 999-99-99");
$("[placeholder='ÐÐ¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°']").mask("+7 (999) 999-99-99");


// ÑÐºÑ€Ð¸Ð¿Ñ‚ ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ ÑƒÐ´Ð°Ð»ÑÐµÑ‚ Ð¸Ð¼Ñ ÐºÐ»Ð°ÑÑÐ° Ð¿Ñ€Ð¸ Ñ€Ð°Ð·Ñ€ÐµÑˆÐµÐ½Ð¸Ð¸ Ð¼ÐµÐ½ÑŒÑˆÐµ Ñ‡ÐµÐ¼ 900 px

$("#section-review .reviews__slider-wrapper").owlCarousel({
    nav: !0,
    items: 1,
    margin: 10,
    navText: [a, a],
    loop: true,
    slideBy: 2,
    responsive: { //ÐÐ´Ð°Ð¿Ñ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒ. ÐšÐ¾Ð»-Ð²Ð¾ Ð²Ñ‹Ð²Ð¾Ð´Ð¸Ð¼Ñ‹Ñ… ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ð¿Ñ€Ð¸ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð½Ð¾Ð¹ ÑˆÐ¸Ñ€Ð¸Ð½Ðµ.
        1000: {
            items: 2
        }
    }
});

$(window).on("load resize", function() {
    var maxHeight = 0;
    $(".tarif-price-section-area").find(".tarif-price-section-blocks-options-table").height("auto").each(function() {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);
    var maxHeight = 0;
    $("#section-project-team").find(".section-project-team-block").height("auto").each(function() {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);
    var maxHeight = 0;
    $("#section-coast-terms").find(".section-coast-terms-block").height("auto").each(function() {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);
    var maxHeight = 0;
    $("#section-review").find(".reviews__item").height("auto").each(function() {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);
});
$(function() {
    jQuery('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
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

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

});

/*Ð’Ð¸Ð´ÐµÐ¾ Ð² Ð¼Ð¾Ð´Ð°Ð»ÑŒÐ½Ð¾Ð¼ Ð¾ÐºÐ½Ðµ*/
$(".reviews__item-button").modalVideo({
    youtube: {
        controls: 0,
        nocookie: true
    }
});
// Ð±Ñ€Ð¸Ñ„ ÐºÐ½Ð¾Ð¿ÐºÐ° checket		
$('.custom-label input:checked').parent().addClass('active');
$('.custom-label').click(function() {
    $('.custom-label').removeClass('active');
    $(':checked').parent().addClass('active');
})
// Ð±Ñ€Ð¸Ñ„ ÐºÐ½Ð¾Ð¿ÐºÐ° checket		
/*ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€*/
$(document).ready(function() {
    var total = 0;
    var count = 0;
    var saletotal = 0;
    var all_checkboxes = $(':checkbox').length;

    function CalculateTotal() {
        $("input:checkbox").each(function() {
            if ($(this).is(":checked")) {
                count = $(':checkbox:checked').length;
                total += parseFloat($(this).val());
            }
        });
    }



    var element_id_teg = document.getElementById('section-calc-summ-all');
    if (element_id_teg) {
        $("input:checkbox").change(function() {
            total = 0;
            count = 0;
            saletotal = 0;
            CalculateTotal();
            if ((count > 1) && (count < all_checkboxes)) {
                document.getElementById('section-calc-summ-all').innerHTML = 'Ð¾Ñ‚ <span>' + total.toLocaleString() + '</span> Ñ€ÑƒÐ±.';
                saletotal = total - (total * 0.07);
                document.getElementById('section-calc-summ-sale').innerHTML = 'Ð’ÑÐµÐ³Ð¾: Ð¾Ñ‚ <span>' + saletotal.toLocaleString() + '</span> Ñ€ÑƒÐ±.';
            }
            if ((count > 1) && (count == all_checkboxes)) {
                document.getElementById('section-calc-summ-all').innerHTML = 'Ð¾Ñ‚ <span>' + total.toLocaleString() + '</span> Ñ€ÑƒÐ±.';
                saletotal = total - (total * 0.15);
                document.getElementById('section-calc-summ-sale').innerHTML = 'Ð’ÑÐµÐ³Ð¾: Ð¾Ñ‚ <span>' + saletotal.toLocaleString() + '</span> Ñ€ÑƒÐ±.';
            }
            if (count <= 1) {
                saletotal = total;
                document.getElementById('section-calc-summ-all').innerHTML = '';
                document.getElementById('section-calc-summ-sale').innerHTML = 'Ð’ÑÐµÐ³Ð¾: Ð¾Ñ‚ <span>' + saletotal.toLocaleString() + '</span> Ñ€ÑƒÐ±.';
            }
        }).trigger("change");
    }


    let fields = document.querySelectorAll('.field__file');
    Array.prototype.forEach.call(fields, function(input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.field__file-fake').innerText;

        input.addEventListener('change', function(e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.querySelector('.field__file-fake').innerText = 'Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð¾ Ñ„Ð°Ð¹Ð»Ð¾Ð²: ' + countFiles;
            else
                label.querySelector('.field__file-fake').innerText = labelVal;
        });
    });

});