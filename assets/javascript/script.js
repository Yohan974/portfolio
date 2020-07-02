(function ($) {
    var isBuilder = $('html').hasClass('is-builder');

    // Functions from plugins for
    // compatible with old projects 
    function setActiveCarouselItem(card) {
        var $target = $(card).find('.carousel-item:first');
        $target.addClass('active');
    }
    function initTestimonialsCarousel(card) {
        var $target = $(card),
            $carouselID = $target.attr('ID') + "-carousel";
        $target.find('.carousel').attr('id', $carouselID);
        $target.find('.carousel-controls a').attr('href', '#' + $carouselID);
        $target.find('.carousel-indicators li').attr('data-target', '#' + $carouselID);
        setActiveCarouselItem($target);
    }
    function initClientCarousel(card) {
        var $target = $(card),
            countElems = $target.find('.carousel-item').length,
            visibleSlides = $target.find('.carousel-inner').attr('data-visible');
        if (countElems < visibleSlides) {
            visibleSlides = countElems;
        }
        $target.find('.carousel-inner').attr('class', 'carousel-inner slides' + visibleSlides);
        $target.find('.clonedCol').remove();

        $target.find('.carousel-item .col-md-12').each(function () {
            if (visibleSlides < 2) {
                $(this).attr('class', 'col-md-12');
            } else if (visibleSlides == '5') {
                $(this).attr('class', 'col-md-12 col-lg-15');
            } else {
                $(this).attr('class', 'col-md-12 col-lg-' + 12 / visibleSlides);
            }
        });

        $target.find('.carousel-item').each(function () {
            var itemToClone = $(this);
            for (var i = 1; i < visibleSlides; i++) {
                itemToClone = itemToClone.next();
                if (!itemToClone.length) {
                    itemToClone = $(this).siblings(':first');
                }
                var index = itemToClone.index();
                itemToClone.find('.col-md-12:first').clone().addClass('cloneditem-' + i).addClass('clonedCol').attr('data-cloned-index', index).appendTo($(this).children().eq(0));
            }
        });
    }



    if (!isBuilder) {
        if (typeof window.initClientPlugin === 'undefined') {
            if ($(document.body).find('.clients').length != 0) {
                window.initClientPlugin = true;
                $(document.body).find('.clients').each(function (index, el) {
                    if (!$(this).attr('data-isinit')) {
                        initTestimonialsCarousel($(this));
                        initClientCarousel($(this));
                    }
                });
            }
        }

        if (typeof window.initTabsPlugin === 'undefined') {
            window.initTabsPlugin = true;
            initTabs(document.body);
        }
    }
}(jQuery));
