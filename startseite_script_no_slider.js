//show more headlines
$(function(){
	$("#headlines-plus-minus").click(function(){
		$(".second-row-link").toggleClass("visible");
		if ($(".second-row-link").hasClass("visible")) {
			$("#headlines-plus-minus").removeClass("fa-plus");
			$("#headlines-plus-minus").addClass("fa-minus");
			$('#headlines-plus-minus').prop('title', 'weniger Schlagzeilen anzeigen');
		} else {
			$("#headlines-plus-minus").removeClass("fa-minus");
			$("#headlines-plus-minus").addClass("fa-plus");
			$('#headlines-plus-minus').prop('title', 'mehr Schlagzeilen anzeigen');
		}
	});
});

//hide and show the headlines
$(function(){
	$(".elkb-schlagzeilen-ueberschrift-no-slider").click(function(){
		$(".headlines-no-slider-all").toggleClass("invisible");
		$(".fa-caret-down").toggleClass("rotate270");
		if ($(".headlines-no-slider-all").hasClass("invisible")) {
			if ($(".second-row-link").hasClass("visible")) {
				$(".second-row-link").removeClass("visible");
				$("#headlines-plus-minus").removeClass("fa-minus");
				$("#headlines-plus-minus").addClass("fa-plus");
			}
			$(".fa-plus").css('display', 'none');
		} else{
			$(".fa-plus").css('display', 'inline');
		}
	});
});