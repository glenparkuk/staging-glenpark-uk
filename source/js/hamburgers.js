(function ($) { // reference query
    $(function () { // shorthand for onLoad()

        var $hamburgers = $('.hamburger');
        
        $hamburgers.each(function(key, hamburger) {

            $(hamburger).on('click', function() {

                var $this = $(this);

                $this.toggleClass('is-active');

                // enable main naviation
                if ($this.data('control') === 'main-navigation') {
                    $('.js-main-navigation').toggleClass('is-active');
                }

            });

        });

    });
})(jQuery);