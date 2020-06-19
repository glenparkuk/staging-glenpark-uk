(function ($) { // reference query
    $(function () { // shorthand for onLoad()

        var MainNavigation = function() {

            this.navigationClass = 'js-main-navigation';
            this.navigationToggleClass = 'js-navigation-toggle';
            this.menuItemClass = 'js-menu-item';
            this.subMenuClass = 'js-sub-menu-item';
            this.menuItems = $('.js-main-navigation .' + this.menuItemClass);

            // TODO remove this logic. makes debugging difficult.
            // also if the user were to resize the window this would cause problems
            this.isMobile = function() {

                if ($( window ).width() < 960) return true;

                return false;

            };


            this.setupMainNavigationToggle = function() {

                var $navigationToggle = $('.' + this.navigationToggleClass);

                if ($navigationToggle.length === 0) return;

                var $mainNavigation = this;

                $navigationToggle.on('click', function() {

                    $('.' + $mainNavigation.navigationClass).toggleClass('is-open');

                });
            };          

            this.setupDesktopEvents = function($menuItem) {

                var $mainNavigation = this;

                $menuItem.on('mouseenter', function() {

                    if ($mainNavigation.isMobile() === true) return;

                    $subMenuItem = $menuItem.find('.' + $mainNavigation.subMenuClass);
    
                    $subMenuItem.addClass('is-open');
    
                });

                $menuItem.on('mouseleave', function() {

                    if ($mainNavigation.isMobile() === true) return;

                    $subMenuItem = $menuItem.find('.' + $mainNavigation.subMenuClass);
    
                    $subMenuItem.removeClass('is-open');
    
                });

            };
            
            this.setupMobileEvents = function($menuItem) {

                var $mainNavigation = this;

                var $hamburger = $menuItem.find('.hamburger');

                $hamburger.on('click', function() {
        
                    $subMenuItem = $menuItem.find('.' + $mainNavigation.subMenuClass);
    
                    $subMenuItem.toggleClass('is-open');
    
                });

            };

            this.setupEvents = function() {

                this.setupMainNavigationToggle();

                if (this.menuItems.length === 0) return;

                var $mainNavigation = this;

                this.menuItems.each(function(key, menuItem) {

                    var $menuItem = $(menuItem);
        
                    if ($menuItem.length === 0) return;

                    $mainNavigation.setupDesktopEvents($menuItem);

                    $mainNavigation.setupMobileEvents($menuItem);
    
                });
        
            };

        };

    var mainNavigation = new MainNavigation();
    mainNavigation.setupEvents();

    });
})(jQuery);