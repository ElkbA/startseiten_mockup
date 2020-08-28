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

function showTab(evt, tabToShow) {
	var i, tabcontent, tablinks;

	//Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	//Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	//Show the current tab and add an "active" class to the button that opened the tab
	document.getElementById(tabToShow).style.display = "block";
	evt.currentTarget.className += " active";
}

function show_hide_bookmarks(){
	var bookmarks = document.getElementsByClassName("home-header-bookmarks");
	if (bookmarks[0].className == "home-header-bookmarks bookmarks-unvis") {
		bookmarks[0].className = "home-header-bookmarks bookmarks-vis";
		console.log(bookmarks[0].className);
	}
	else if (bookmarks[0].className == "home-header-bookmarks bookmarks-vis") {
		bookmarks[0].className = "home-header-bookmarks bookmarks-unvis";
		console.log(bookmarks[0].className);
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

$(document).ready(function(){
	var tabs = $(".home-my-tabs").tabs();
	tabs.find(".ui-tabs-nav").sortable({
		axis: "x",
		stop: function(){
			tabs.tabs("refresh");
		}
	});
});
