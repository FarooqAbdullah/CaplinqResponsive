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
	}
);
