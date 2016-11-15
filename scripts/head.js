$(document).ready(function(){
	
	var siteURL = window.location.href;
    var currentSection = "";
	defaultTabClick();
	
	$('#projectTabContainer a').click(function(event) {
		event.preventDefault();										   
	});
	
	$('#projectsButton').addClass('tabOn');
	
	$('#projectsButton').hover(function() {	
		if (currentSection != "PROJECTS") {
			var $textLinkElement = $('#projectsButton').find('a');
			$textLinkElement.toggleClass("textLinkHover");
		}
	});
	
	$('#messagesButton').hover(function() {	
		if (currentSection != "MESSAGES") {
			var $textLinkElement = $('#messagesButton').find('a');
			$textLinkElement.toggleClass("textLinkHover");
		}
	});
	
	$('#helpTicketButton').hover(function() {	
		if (currentSection != "HELP TICKET") {
			var $textLinkElement = $('#helpTicketButton').find('a');
			$textLinkElement.toggleClass("textLinkHover");
		}
	});
	
	$('#adminToolsButton').hover(function() {	
		if (currentSection != "ADMIN TOOLS") {
			var $textLinkElement = $('#adminToolsButton').find('a');
			$textLinkElement.toggleClass("textLinkHover");
		}
	});	
	
	// Default tab click.
	function defaultTabClick() {
		$('#projectsButton').removeClass('tab').addClass('tabOn');
		$('#messagesButton').removeClass('tabOn').addClass('tab');
		$('#helpTicketButton').removeClass('tabOn').addClass('tab');
		$('#adminToolsButton').removeClass('tabOn').addClass('tab');
		
		currentSection = "PROJECTS";
		
		var $textLinkElement = $('#projectsButton').find('a');
		$textLinkElement.addClass("textLinkHover");
		$textLinkElement.addClass("textLinkOn");
		
		$('#messagesButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
		$('#helpTicketButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
		$('#adminToolsButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
	}
	
	// Click methods.
	$('#projectsButton').click(function() {	
		$(this).removeClass('tab').addClass('tabOn');
		$('#messagesButton').removeClass('tabOn').addClass('tab');
		$('#helpTicketButton').removeClass('tabOn').addClass('tab');
		$('#adminToolsButton').removeClass('tabOn').addClass('tab');
		
		currentSection = "PROJECTS";
		
		var $textLinkElement = $('#projectsButton').find('a');
		$textLinkElement.addClass("textLinkHover");
		$textLinkElement.addClass("textLinkOn");
		
		$('#messagesButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
		$('#helpTicketButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
		$('#adminToolsButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
	});
	
	$('#messagesButton').click(function() {	
		$(this).removeClass('tab').addClass('tabOn');
		$('#projectsButton').removeClass('tabOn').addClass('tab');
		$('#helpTicketButton').removeClass('tabOn').addClass('tab');
		$('#adminToolsButton').removeClass('tabOn').addClass('tab');
		
		currentSection = "MESSAGES";
		
		var $textLinkElement = $('#messagesButton').find('a');
		$textLinkElement.addClass("textLinkHover");
		$textLinkElement.addClass("textLinkOn");
		
		$('#projectsButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
		$('#helpTicketButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
		$('#adminToolsButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
	});	
	
	$('#helpTicketButton').click(function() {	
		$(this).removeClass('tab').addClass('tabOn');
		$('#projectsButton').removeClass('tabOn').addClass('tab');
		$('#messagesButton').removeClass('tabOn').addClass('tab');
		$('#adminToolsButton').removeClass('tabOn').addClass('tab');
		
		currentSection = "HELP TICKET";
		
		var $textLinkElement = $('#helpTicketButton').find('a');
		$textLinkElement.addClass("textLinkHover");
		$textLinkElement.addClass("textLinkOn");
		
		$('#projectsButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
		$('#messagesButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
		$('#adminToolsButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
	});	
	
	$('#adminToolsButton').click(function() {	
		$(this).removeClass('tab').addClass('tabOn');
		$('#projectsButton').removeClass('tabOn').addClass('tab');
		$('#messagesButton').removeClass('tabOn').addClass('tab');
		$('#helpTicketButton').removeClass('tabOn').addClass('tab');
		
		currentSection = "ADMIN TOOLS";
		
		var $textLinkElement = $('#adminToolsButton').find('a');
		$textLinkElement.addClass("textLinkHover");
		$textLinkElement.addClass("textLinkOn");
		
		$('#projectsButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
		$('#messagesButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
		$('#helpTicketButton a').removeClass("textLinkOn textLinkHover textLinkHover2").addClass("textLinkOff");
	});
	
	$('#projectsButton a').hover(function () {
		if (currentSection != "PROJECTS") {
			$(this).addClass("textLinkHover2");
		}
		}, function () {
		if (currentSection != "PROJECTS") {
			$(this).removeClass("textLinkHover2");
			$(this).addClass("textLinkOff2");
		}
		}
	);
	
	$('#messagesButton a').hover(function () {						
		if (currentSection != "MESSAGES") {
			$(this).addClass("textLinkHover2");
		}
		}, function () {
		if (currentSection != "MESSAGES") {
			$(this).removeClass("textLinkHover2");
			$(this).addClass("textLinkOff2");
		}
		}
	);
	
	$('#helpTicketButton a').hover(function () {						
		if (currentSection != "HELP TICKET") {
			$(this).addClass("textLinkHover2");
		}
		}, function () {
		if (currentSection != "HELP TICKET") {
			$(this).removeClass("textLinkHover2");
			$(this).addClass("textLinkOff2");
		}
		}
	);
	
	$('#adminToolsButton a').hover(function () {						
		if (currentSection != "ADMIN TOOLS") {
			$(this).addClass("textLinkHover2");
		}
		}, function () {
		if (currentSection != "ADMIN TOOLS") {
			$(this).removeClass("textLinkHover2");
			$(this).addClass("textLinkOff2");
		}
		}
	);	
});		