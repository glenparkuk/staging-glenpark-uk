(function($) { // reference query
	$(function() { // shorthand for onLoad()


		/* COOKIES PLUGIN */

		$.cookie = function(name, value, options) {
			if (typeof value != 'undefined') { // name and value given, set cookie
				options = options || {};
				if (value === null) {
					value = '';
					options.expires = -1;
				}
				var expires = '';
				if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
					var date;
					if (typeof options.expires == 'number') {
						date = new Date();
						date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
					} else {
						date = options.expires;
					}
					expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
				}
				// CAUTION: Needed to parenthesize options.path and options.domain
				// in the following expressions, otherwise they evaluate to undefined
				// in the packed version for some reason...
				var path = options.path ? '; path=' + (options.path) : '';
				var domain = options.domain ? '; domain=' + (options.domain) : '';
				var secure = options.secure ? '; secure' : '';
				document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
			} else { // only name given, get cookie
				var cookieValue = null;
				if (document.cookie && document.cookie != '') {
					var cookies = document.cookie.split(';');
					for (var i = 0; i < cookies.length; i++) {
						var cookie = $.trim(cookies[i]);
						// Does this cookie string begin with the name we want?
						if (cookie.substring(0, name.length + 1) == (name + '=')) {
							cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
							break;
						}
					}
				}
				return cookieValue;
			}
		};


        $.fn.extend({

		portfolioSlide: function() {

			var mainCont = this;
			var ulCont = this.children('ul');

			ulCont.children('li:first').next().addClass('next');
			ulCont.children('li:last').addClass('prev');

			//LETS FIND THE TOTAL WIDTH FIRST
			var totalWidth = 0;
			ulCont.children('li').each(function() {

				totalWidth = (totalWidth + $(this).width()) - 30;

			});

			mainCont.parent().children('.more').click(function() {

				var currentLi = ulCont.children('li.next');
				var nextLi = ulCont.children('li.next').next();

				var prevLi = ulCont.children('li.prev');
				var nextPrevLi = ulCont.children('li.prev').next();

				if(nextLi.length == 0) { nextLi = ulCont.children('li:first'); }
				if(nextPrevLi.length == 0) { nextPrevLi = ulCont.children('li:first'); }

				//Calculate how many items are in front of this guy
				var i = 0;
				var currentGone = 0;
				ulCont.children('li').each(function() {

					if($(this).attr('class') == 'next') {

						currentGone = 1;

					}

					if(currentGone === 0) {

						i++;

					}

				});

				//Calculate the width of the items in front of this guy
				var scrollWidth = 0;
				ulCont.children('li:lt('+i+')').each(function() {

					scrollWidth = (scrollWidth - $(this).width()) - 30;

				});

				//animates our UL
				ulCont.stop().animate({ left: scrollWidth }, 200, function() {

					currentLi.removeClass('next');
					nextLi.addClass('next');

					prevLi.removeClass('prev');
					nextPrevLi.addClass('prev');

				});

			});

			mainCont.parent().children('.minus').click(function() {

				var prevLi = ulCont.children('li.prev');
				var nextPrevLi = ulCont.children('li.prev').prev();
				var currentLi = ulCont.children('li.next');
				var nextLi = ulCont.children('li.next').prev();

				if(nextPrevLi.length === 0) { nextPrevLi = ulCont.children('li:last'); }

				if(nextLi.length === 0) { nextLi = ulCont.children('li:last'); }

				//Calculate how many items are in front of this guy
				var i = 0;
				var currentGone = 0;
				ulCont.children('li').each(function() {

					if($(this).attr('class') == 'prev') {

						currentGone = 1;

					}

					if(currentGone === 0) {

						i++;

					}

				});

				//Calculate the width of the items in front of this guy
				var scrollWidth = 0;
				ulCont.children('li:lt('+i+')').each(function() {

					scrollWidth = (scrollWidth - $(this).width()) - 30;

				});

				//animates our UL
				ulCont.stop().animate({ left: scrollWidth }, 200, function() {

					currentLi.removeClass('next');
					nextLi.addClass('next');

					prevLi.removeClass('prev');
					nextPrevLi.addClass('prev');

				});

			});

		},

		portfolioImageSlider: function() {

			//main vars
			var mainCont = this;
			var contHeight = mainCont.parent().parent().height();

			//lets fix all extra images top position and add our selectors
			if(mainCont.children('a').children('img').length > 1) {

				//inserts our UL selector
				mainCont.append('<ul></ul>');

				//fixes the top position
				mainCont.children('a').children('img:not(.first)').css({ top: contHeight });

				var i = 1;

				//adds our selectors
				mainCont.children('a').children('img').each(function() {

					if(i === 1) {

						mainCont.children('ul').append('<li class="'+i+' currentSel"></li>');

					} else {

						mainCont.children('ul').append('<li class="'+i+'"></li>');

					}

					i++;

				});

			}

			//whenever the user interacts
			mainCont.children('ul').children('li').click(function() {

				//gets our class
				var classTemp = $(this).attr('class').split(' ');

				if(classTemp[1] != 'currentSel') {

					classTemp = classTemp[0];

					//changes the selector
					mainCont.children('ul').children('li.currentSel').removeClass('currentSel');
					$(this).addClass('currentSel');

					//animates the image
					if(mainCont.children('a').children('img:eq('+(classTemp - 1)+')').attr('class') == 'first') {

						mainCont.children('a').children('img:not(.first)').stop().animate({ top: contHeight }, 300);

					} else {

						mainCont.children('a').children('img:not(.first)').css({ 'z-index': 1 });
						mainCont.children('a').children('img:eq('+(classTemp - 1)+')').css({ 'z-index': 2, 'top': contHeight }).stop().animate({ top: 0 }, 300);

					}

				}

			});

		}

	});

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
		  $(".scroll-buy-now").click(function(event){
		    //prevent the default action for the click event
		    event.preventDefault();
		    //get the top offset of the target anchor
		    var target_offset = $("#buyNow").offset();
		    var target_top = target_offset.top;
		    //goto that anchor by setting the body scroll top to anchor top
		    $('html, body').animate({scrollTop:target_top}, 1000);
		  });


		$(".js-slick-carousel").slick({
			fade: true,
			autoplay: true,
			arrows: false,
			autoplaySpeed: 5000
		});

	});
})(jQuery);