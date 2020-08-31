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
