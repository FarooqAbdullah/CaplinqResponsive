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
	

			

              