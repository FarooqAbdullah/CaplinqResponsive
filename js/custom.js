jQuery(document).ready(
	function($) {
		$(window).resize(
			function() {
				console.log($(window).width());
			}
		);
		$('#search_hide').click(function(e) {
            e.stopPropagation();
        });

        var $menuInput = $('.search_normal input.form-control');
        $($menuInput).hide();
        $('body').click(function() {
            $('.search_normal').removeClass('search_focused');
            $('.search_normal input.form-control').hide();

        });
        $($menuInput).click(function(e) {
            e.stopPropagation();
        });
        $('#search-icon').click(function(e) {
            e.stopPropagation();
            $('.search_normal').addClass('search_focused');
            $($menuInput).animate({width:'toggle'});
        });

	
	
        var stickyNavTop = $('.main_navigation').offset().top;

        var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.main_navigation').addClass('sticky');
        } else {
            $('.main_navigation').removeClass('sticky');
        }
        };

        stickyNav();

        $(window).scroll(function() {
            stickyNav();
            });

	
});
	

			

              