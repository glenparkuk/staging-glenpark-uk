(function ($) { // reference query
    $(function () { // shorthand for onLoad()


        var $menuItems = $('.js-menu-item');

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

    });
})(jQuery);