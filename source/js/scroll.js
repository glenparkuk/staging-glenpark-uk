(function($) { // reference query
	$(function() { // shorthand for onLoad()

		$(".scroll").click(function(event){
				//prevent the default action for the click event
				event.preventDefault();
				//get the full url - like mysitecom/index.htm#home
				var full_url = this.href;
				//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
				var parts = full_url.split("#");
				var trgt = parts[1];
				//get the top offset of the target anchor
				var target_offset = $("#"+trgt).offset();
				var target_top = target_offset.top;
				//goto that anchor by setting the body scroll top to anchor top
				$('html, body').animate({scrollTop:target_top}, 500);
            });
            

           // TODO this is too specific
           // we should create a re-usable bit of code for ths (maybe a link which tagets a data attribute or elsewhere on the page)
		  $(".scroll-buy-now").click(function(event){
		    //prevent the default action for the click event
		    event.preventDefault();
		    //get the top offset of the target anchor
		    var target_offset = $("#buyNow").offset();
		    var target_top = target_offset.top;
		    //goto that anchor by setting the body scroll top to anchor top
		    $('html, body').animate({scrollTop:target_top}, 1000);
		  });

	});
})(jQuery);