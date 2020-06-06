(function ($) { // reference query
    $(function () { // shorthand for onLoad()

        var $hamburgers = $('.js-hamburger');
        
        $hamburgers.each(function(key, hamburger) {

            $(hamburger).on('click', function() {

                var $this = $(this);

                $this.toggleClass('is-active');

            });

        });

    });
})(jQuery);