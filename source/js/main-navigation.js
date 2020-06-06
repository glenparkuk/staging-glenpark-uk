(function ($) { // reference query
    $(function () { // shorthand for onLoad()


        var $menuItems = $('.js-menu-item');
        // var $subMenu = $('.js-sub-menu-item');

        $menuItems.each(function(key, menuItem) {

            var $menuItem = $(menuItem);

            if ($menuItem.length === 0) return;

            $menuItem.on('mouseenter', function() {

                $subMenuItem = $menuItem.find('.js-sub-menu-item');

                $subMenuItem.addClass('is-active');

            });

            $menuItem.on('mouseleave', function() {

                $subMenuItem = $menuItem.find('.js-sub-menu-item');

                $subMenuItem.removeClass('is-active');

            });

        });


        // TODO DELETE THE BELOW CODE
        function menuHovers() {

            //wrap H6 with spans
            $('#content h6').each(function () {

                $(this).html('<span>' + $(this).text() + '</span>');

            });

            //main vars
            var liLen = $('#menu li:not(#menu li ul li)').length;
            var startOpacity = (10 - liLen);

            //sets the initial opacity and adds a class to them to indicate the initial opacity so we can access it later
            var i = startOpacity;
            var i2 = 1;

            $('#menu li:not(#menu li ul li)').each(function () {

                $(this).attr('id', 'menu_' + i2);
                $(this).prepend('<span></span><span class="hover"></span>');
                $(this).children('span').css({ opacity: '.' + i }).addClass('' + i);
                i++; i2++;

            });

            $('#menu li ul li').each(function () {

                $(this).prepend('<span></span>');

            });

            //hover effects
            $('#menu li:not(#menu li ul li)').hover(function () {

                $('#menu li.current span').stop().animate({ opacity: 0 }, 200);

                var curTemp = $(this).attr('id').split('_');
                var current = curTemp[1];
                var current1 = (current - 1) + 2;

                var pos = (liLen - current);
                var initialOp = ((startOpacity - 1) + pos);
                var initOp = null;

                if (current > 1) {

                    initOp = (startOpacity - 2);

                    for (i = current1; i <= liLen; i++) {

                        $('#menu_' + i).children('span:not(.hover)').stop().animate({ opacity: '.' + initOp }, 200);
                        initOp++;

                    }

                    var pos2 = (pos - 1) + 2;
                    var initOp2 = (startOpacity - 2) + pos2;

                    for (i = 1; i < current; i++) {

                        $('#menu_' + i).children('span:not(.hover)').stop().animate({ opacity: '.' + initOp2 }, 200);
                        initOp2++;

                    }

                } else {

                    initOp = (startOpacity - 2);

                    for (i = current1; i <= liLen; i++) {

                        $('#menu_' + i).children('span:not(.hover)').stop().animate({ opacity: '.' + initOp }, 200);
                        initOp++;

                    }

                }

                $(this).children('.hover').css({ display: 'block', opacity: 0 });
                $(this).children('.hover').stop().animate({ opacity: 1 }, 200);

            }, function () {

                $('#menu li span.hover').stop().animate({ opacity: 0 }, 200);
                var backOp2 = $('#menu li.current span').attr('class');
                $('#menu li.current span').stop().animate({ opacity: '.' + backOp2 }, 400);

            });

            $('#menu li ul li').hover(function () {

                $(this).children('span').css({ display: 'block', opacity: 0 }).stop().animate({ opacity: 1 }, 200);

            }, function () {

                $(this).children('span').stop().animate({ opacity: 0 }, 200, function () {

                    $(this).hide();

                });

            });

            $('#menu').children('li').hover(function () {

                $(this).children('ul:first').stop().css({ display: 'block', opacity: 0 }).animate({ opacity: 1 }, 400);

            }, function () {

                $(this).children('ul:first').stop().animate({ opacity: 0 }, 400, function () {

                    $(this).hide();

                });

            });

        }


        function hideShowSubmenu() {

            if($.cookie('show-submenu') == null) { $.cookie("show-submenu", true); }

            if($.cookie('show-submenu') == 'false') { $('#submenu').hide(); $('#show-hide-submenu').addClass('show-submenu'); }

            $('#show-hide-submenu').click(function() {

                if($(this).attr('class') == '') {

                    $('#submenu').fadeOut(200);
                    $(this).addClass('show-submenu');

                    $.cookie("show-submenu", false);

                } else {

                    $('#submenu').fadeIn(200);
                    $(this).removeClass('show-submenu');

                    $.cookie("show-submenu", true);

                }

            });

        }

        // menuHovers();

    });
})(jQuery);