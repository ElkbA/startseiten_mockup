function headlines_vis(){
	var headlinesList = document.getElementById("home-headlines-list-id");

	if (headlinesList.className == "home-headlines-list") {

		//hide the headlines
		headlinesList.className = "home-headlines-list invisible";

		//rotate the caret
		var test = document.getElementById("headlines-caret");
		test.className = "fas fa-caret-down rotate270";

		//hide the chevrons
		document.getElementById("angle-left").className = "fas fa-chevron-left both-angles invisible";
		document.getElementById("angle-right").className = "fas fa-chevron-right both-angles invisible";

		//increase the top-property of home-tabs
		var homeTabs = document.getElementsByClassName("home-tabs");
		homeTabs[0].style.top = "50px";

		//increase the top-property of footer-class
		var footerCl = document.getElementsByClassName("footer");
		footerCl[0].style.top = "75px";
	} 
	else if (headlinesList.className == "home-headlines-list invisible") {

		//show headlines
		headlinesList.className = "home-headlines-list";

		//rotate caret
		var test = document.getElementById("headlines-caret");
		test.className = "fas fa-caret-down";
		
		//show the chevrons
		document.getElementById("angle-left").className = "fas fa-chevron-left both-angles";
		document.getElementById("angle-right").className = "fas fa-chevron-right both-angles";

		//decrease the top-property of home-tabs
		var homeTabs = document.getElementsByClassName("home-tabs");
		homeTabs[0].style.top = "25px";

		//decrease the top-property of footer-class
		var footerCl = document.getElementsByClassName("footer");
		footerCl[0].style.top = "50px";
	}
}

function scroll_headlines_right() {
	var all_cards = document.getElementsByClassName("headline-card");
	var found = false;
	var ind = 0;
	while (!found && ind < all_cards.length) {
		if (all_cards[ind].className == "headline-card card-visible" && ((ind+4) < all_cards.length)){

			//hide the current 4 cards
			for(var i = 0; i < 4; i++) {
				all_cards[ind + i].className = "headline-card card-invisible";
			}

			//display the next 4 cards
			for(i = 4; i < 8; i++){
				if ((ind + i) < all_cards.length ) {
					all_cards[ind + i].className = "headline-card card-visible";
				}
			}
			
			found = true;
		}
		else {
			ind++;
		}
	}
}


function scroll_headlines_left(){
	var all_cards = document.getElementsByClassName("headline-card");
	var found = 0;
	var ind = 0;

	while(!found){

		//find all visible cards
		if(all_cards[ind].className == "headline-card card-visible") {
			found = true;

			if (ind > 3){
				//hide all currently visible cards
				var i = 0;
				while (i < 4 && (ind + i) < all_cards.length){
					all_cards[ind+i].className = "headline-card card-invisible";
					i++;
				}

				//show the previous 4 cards
				for (i = 4; i > 0; i--){
					all_cards[ind-i].className = "headline-card card-visible";
				}
			}
		}
		else {
			ind++;
		}
	}
}

function show_hide_bookmarks(){
	var bookmarks = document.getElementsByClassName("home-header-bookmarks");
	if (bookmarks[0].className == "home-header-bookmarks bookmarks-unvis") {
		bookmarks[0].className = "home-header-bookmarks bookmarks-vis";
		//console.log(bookmarks[0].className);
	}
	else if (bookmarks[0].className == "home-header-bookmarks bookmarks-vis") {
		bookmarks[0].className = "home-header-bookmarks bookmarks-unvis";
		//console.log(bookmarks[0].className);
	}
}

function show_hide_help_menu(){
	var help_menu = document.getElementsByClassName("home-header-help");
	if (help_menu[0].className == "home-header-help help-unvis") {
		help_menu[0].className = "home-header-help help-vis";
		//console.log(help_menu[0].className);
	}
	else if (help_menu[0].className == "home-header-help help-vis") {
		help_menu[0].className = "home-header-help help-unvis";
		//console.log(help_menu[0].className);
	}
}

function show_hide_appsLauncher(){
	var appsLauncher = document.getElementsByClassName("home-header-appsLauncher");
	if (appsLauncher[0].className == "home-header-appsLauncher home-header-appsLauncher-unvis") {
		appsLauncher[0].className = "home-header-appsLauncher home-header-appsLauncher-vis";
		//console.log(appsLauncher[0].className);
	}
	else if(appsLauncher[0].className == "home-header-appsLauncher home-header-appsLauncher-vis") {
		appsLauncher[0].className = "home-header-appsLauncher home-header-appsLauncher-unvis";
		//console.log(appsLauncher[0].className);
	}

}

window.addEventListener('mouseup', function(event) {
	if (event.target.className != "glossy-btn elkbApps") {
		var appsLauncher = document.getElementsByClassName("home-header-appsLauncher");
		if (appsLauncher[0].className == "home-header-appsLauncher home-header-appsLauncher-vis") {
			appsLauncher[0].className = "home-header-appsLauncher home-header-appsLauncher-unvis";
		}
	}

	if(event.target.className != "glossy-btn bookmark-btn") {
		var elkbBookmarks = document.getElementsByClassName("home-header-bookmarks");
		if (elkbBookmarks[0].className == "home-header-bookmarks bookmarks-vis") {
			elkbBookmarks[0].className = "home-header-bookmarks bookmarks-unvis";
		}
	}
})


//retrieves the order of the tabs from localStorage

$(function(){
	if (localStorage.getItem("homeTabs")) {
		if(JSON.parse(localStorage.homeTabs).length == $(".home-my-tabs-list").children().length ) {
		} else {
			console.log("es fehlt was");
			localStorage.removeItem("homeTabs");
		}
		var tab_order_lS = localStorage.getItem("homeTabs");
		var tab_order = new Array();
		var li_tabs = $(".home-my-tabs-list").children();
		for (i = 0; i < li_tabs.length; i++) {
			tab_order.push($(li_tabs[i]).attr('id'));
		}

		if (tab_order_lS != JSON.stringify(tab_order)) {
			$(".home-my-tabs-list").empty();
			var single_tabs = JSON.parse(tab_order_lS);
			for (i = 0; i < single_tabs.length; i++) {
				if (single_tabs[i] == "home-tab-1"){
					$(".home-my-tabs-list").append('<li id="home-tab-1"><a href="#intranet">Intranet</a></li>');
				} else if (single_tabs[i] == "home-tab-2") {
					$(".home-my-tabs-list").append('<li id="home-tab-2"><a href="#lkaIntern">LKA-Intern</a></li>');
				} else if (single_tabs[i] == "home-tab-3") {
					$(".home-my-tabs-list").append('<li id="home-tab-3"><a href="#kiv">KIV</a></li>');
				} else if (single_tabs[i] == "home-tab-4") {
					$(".home-my-tabs-list").append('<li id="home-tab-4"><a href="#orgas_portale">Meine Portale und Organisationen</a></li>');
				} else if (single_tabs[i] == "home-tab-5") {
					$(".home-my-tabs-list").append('<li id="home-tab-5"><a href="#newTab">noch ein Tab</a></li>');
				}
			}
		}
	}
});


$(document).ready(function(){	

	//Enables the rearranging of the tabs and saves the current order to localStorage
	var tabs = $(".home-my-tabs").tabs();
	tabs.find(".ui-tabs-nav").sortable({
		axis: "x",
		stop: function(){
			tabs.tabs("refresh");
			var tab_order = new Array();
			var li_tabs = $(".home-my-tabs-list").children();
			for(i = 0; i < li_tabs.length; i++){
				//tab_order.push($(li_tabs[i]).attr('aria-controls'));
				tab_order.push($(li_tabs[i]).attr('id'));
			}
			localStorage.setItem("homeTabs", JSON.stringify(tab_order));
		}
	});

	window.onscroll = function(){
		if (window.pageYOffset > 50) {
			//$(".first_line").css("box-shadow", "0px 15px 10px -15px #7c52ae");
			$(".first_line").css("box-shadow", "0px 10px 10px -9px #7c52ae");
		} else {
			$(".first_line").css("box-shadow", "0px 0px 0px 0px #fff");
		}
	}	
});

//Toggle between visible and invisible Kommentare and Newsletter section, toggle between invisible and visible favorite-stars

$(function (){
	$(".kommentare-newsletter-p").click(function(){
		$(".kommentare-arrow").toggleClass("kommentare-newsletter-arrow-visible");
		$(".newsletter-arrow").toggleClass("kommentare-newsletter-arrow-visible");
		$("#kommentare-image").toggle();
		$("#newsletter-image").toggle();
		$("#kommentare-liste").toggle();
		$("#newsletter-liste").toggle();
	});

	$(".info-star .fa-star").click(function(){
		$(this).toggleClass("star-favorite");
		var star_id= $(this).attr('id');
		var pure_id = star_id.slice(5);
		var app_id = 'app' + pure_id.slice(0,1).toUpperCase() + pure_id.slice(1);

		// if classlist of the star now includes star-favorite, add the app to the list of personal app favorites
		if ($(this).hasClass("star-favorite")){
			var a_id = '#' + star_id.replace('star', 'li') + ' .nav-submenu-link';			
			var a_href = $(a_id).attr('href');
			var a_text = $(a_id).text();
			console.log(a_text);

			// set the right icon
			if (star_id == 'star-archikart') {
				var fa_icon_class= ".fa-sign";
				var fa_icon = "<i class='fas fa-sign'></i>";
			} else if (star_id == 'star-kv-wahlen') {
				var fa_icon_class= ".fa-person-booth";
				var fa_icon = "<i class='fas fa-person-booth'></i>";
			} else if (star_id == 'star-tauschboerse') {
				var fa_icon_class= ".fa-exchange-alt";
				var fa_icon = "<i class='fas fa-exchange-alt'></i>";
			} else {
				var fa_icon_class= ".fa-chalkboard-teacher";
				var fa_icon = "<i class='fas fa-chalkboard-teacher'></i>";
			}

			$(".home-header-appsLauncher").append("<div class='home-header-appsLauncher-item' id='" + app_id + "'>" +
																						"<a href='" + a_href + "' target='_blank' title='" + a_text + "'>" +
																						"<div class='appLauncher-icon'>" + fa_icon + "</div><span>" + a_text + "</span></a>" +
																						"</div>");

			var col_num = Math.floor(Math.random() * 5);
			switch (col_num) {
  			case 0:
    			var icon_color = "#0ad";
    			break;
  			case 1:
    			var icon_color = "#ff6600";
    			break;	
    		case 2:
    			var icon_color = "#12b296";
    			break;
    		case 3:
    			var icon_color = "#d42222";
    			break;
    		case 4:
    			var icon_color = "#7c52ae";
    			break;
			}

			$('#' + app_id + ' ' + fa_icon_class).css('color', icon_color);
						

		} else {
			// if classlist of the star now does not include star-favorite, remove the app from the list of personal app favorites
			$('#' + app_id).remove();
		}

		
	});

	//show infobox of a particular application in the main navigation when clicking the question mark
	/*$(".info-star .fa-question-circle").click(function(){
		var info_id = $(this).attr('id');
		var li_id = info_id.replace("info", "li");
		$("#"  + li_id + " .nav-submenu-li-item-question").toggleClass("info-visible");
	});*/



	$(".info-star .fa-question-circle").hover(function(){
		var info_id = $(this).attr('id');
		var li_id = info_id.replace("info", "li");
		$("#" + li_id + " .nav-submenu-li-item-question").css('display', 'block');
	}, function(){
		var info_id = $(this).attr('id');
		var li_id = info_id.replace("info", "li");
		$("#" + li_id + " .nav-submenu-li-item-question").css('display', 'none');
	});
});
