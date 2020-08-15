
(function ($) {
    "use strict";

    $(window).on('load', function () {

        function preLoader() {
            setTimeout(function () {
                $('#preloader .scroll-static').addClass('loaded');
                setTimeout(function () {
                    $('#preloader').addClass('loaded');
                    setTimeout(function () {
                        $('#preloader').remove();
                    }, 400);

                    // wow init
                    var wow = new WOW().init();

                }, 600);
            }, 1000);
        };
        preLoader();

        /* projectFilter Init
        ============================ */
        function projectFilter() {
			var $gridt = $('.zoom-gallery');
			$gridt.isotope();
			$('.filter-buttons').on('click', 'button', function () {
				var filterValue = $(this).attr('data-filter');
				$gridt.isotope({
					filter: filterValue
				});
				$(this).addClass('active').siblings().removeClass('active');
			});
		};
        projectFilter();

    });

    $(window).on('scroll', function () {

        var scrollTop = $(window).scrollTop();

        /* shapeRotate Init
        ============================ */
        function shapeRotate() {
            var rotate = 0 + scrollTop / 3 + 'deg';
            $('.shape').css({
                '-webkit-transform' : 'rotateZ(' + rotate + ')',
                '-moz-transform'    : 'rotateZ(' + rotate + ')',
                '-ms-transform'     : 'rotateZ(' + rotate + ')',
                '-o-transform'      : 'rotateZ(' + rotate + ')',
                'transform'         : 'rotateZ(' + rotate + ')'
            });
        };
        shapeRotate();

        /* navFixed Init
        ============================ */
        function navFixed() {
            if (scrollTop >= 100) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        };
        navFixed();

        /* scrollToTop-ShowHide Init
        ============================ */
        function scrollToTop() {
            if (scrollTop >= 400) {
                $('.scroll-to-top').addClass('show');
            } else {
                $('.scroll-to-top').removeClass('show');
            }
        };
        scrollToTop();

        /* scroll-indicator Init
        ============================ */
        (function(){
            window.onscroll = function() {ProgressBar()};
            function ProgressBar() {
                var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var scrolled = (winScroll / height) * 100;
                document.querySelector(".scroll-indicator").style.height = scrolled + "%";
            }
        }());

    });


    $(document).ready(function () {

        /* menu Init
        ============================ */
        function menu() {
            $('.menu-btn').on('click', function () {
                $(this).toggleClass('close-menu');
                $('.nav-bar').toggleClass('show');
                $('.nav-bar-overlay').toggleClass('show');
            });
            $('.nav-item .nav-link, .scroll-to-top').on('click', function () {
                $('.menu-btn').removeClass('close-menu');
                $('.nav-bar').removeClass('show');
                $('.nav-bar-overlay').removeClass('show');
            });
        };
        menu();

        /* NavActiveClass Init
        ============================ */
        function navActiveClass() {
            $('body').scrollspy({ 
                target: '#menu-list'
            });
            // Smooth-Scroll Init
            $('a.nav-link, a.scroll-to-top').on("click", function() {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                    if (target.length) {
                        $("html, body").animate({
                            scrollTop: target.offset().top
                        }, 1000, "easeInOutExpo");
                        return false;
                    }
                }
                return false;
            });
        };
        navActiveClass();

        /* tiltJS Init
        ============================ */
        function tiltInit() {
            $('.tilt-wrap').tilt();
        };
        tiltInit();

        /* CounterUp Init
        ============================ */
        function workPopup() {
            $(".zoom-gallery").magnificPopup({
                delegate: "a.zoom-image",
                type: "image",
                closeOnContentClick: !1,
                closeBtnInside: !1,
                mainClass: "mfp-with-zoom mfp-img-mobile",
                image: {
                    verticalFit: !0
                },
                gallery: {
                    enabled: !0
                },
                zoom: {
                    enabled: !0,
                    duration: 300,
                    opener: function (a) {
                        return a.find("img");
                    }
                },
                closeOnBgClick: true,
                fixedContentPos: false,
                callbacks: {
                    open: function() {
                        jQuery('body').addClass('noscroll');
                    },
                    close: function() {
                        jQuery('body').removeClass('noscroll');
                    }
                }
            });
        };
        workPopup();

        /* clients-Carousel Init
        ============================ */
        function clientsCarousel() {
            $('.owl-carousel.clients-carousel').owlCarousel({
                loop:true,
                margin:30,
                autoplay:true,
                nav:false,
                dots:false,
                autoplayTimeout:7000,
                responsive : {
                    0 : {
                        items:1,
                    },
                    480 : {
                        items:2,
                    },
                    575 : {
                        items:3,
                    },
                    991 : {
                        items:4,
                    }
                }
            });
        };
        clientsCarousel();

    });


})(jQuery);
