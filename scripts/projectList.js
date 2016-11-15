$(document).ready(function(){
    
    var siteURL = window.location.href;
    var currentSection = "LIST";
	var urgentDetailOpen = false;
	var redDetailOpen = false;
	
	$('#listViewButton').addClass('buttonListViewClicked');
	$('#pw_weekNavTab').hide();

	//$('[title=ProjectRole]').css('display','none');
	//$('[title=ProjectType]').css('display','none');

	//alert('Project List');
	
	// Process the click of left detail buttons.
	$('.leftUrgent, .leftRed, .leftYellow, .leftBlue').click(function() {															
		//$(this).parent().find('.moreInfo').slideToggle('fast');
		
		if ($(this).parent().find('.moreInfo').is(':visible')) {
			$(this).parent().find('.moreInfo').slideUp('fast');
		} else {
			$(this).parent().find('.moreInfo').slideToggle('fast');
			$(this).parent().find('.moreInfo').fadeIn('fast');	
		}
		
		if ($(this).hasClass('leftUrgent')) {
			$(this).toggleClass('leftUrgentClicked'); 				 
		} else if ($(this).hasClass('leftRed')) {
			$(this).toggleClass('leftRedClicked'); 				 
		} else if ($(this).hasClass('leftBlue')) {
			$(this).toggleClass('leftBlueClicked'); 				 
		} else if ($(this).hasClass('leftYellow')) {
			$(this).toggleClass('leftYellowClicked'); 				 
		}
	});	

	// Process the click of list item titles.
	$('.projectCell, .typeCell, .statusCell, .priorityCell, .updatedCell').click(function(event) {															
		//$(this).parent().find('.moreInfo').slideToggle('fast');
		
		event.preventDefault();		
		
		$('#ProjectList').animate({ opacity : 'toggle' }, 'fast');
		$('#ProjectDetail').animate({ opacity : 'toggle' }, 'slow');

		//$('#ProjectList').addClass('hideItem');
		//$('#ProjectDetail').removeClass('pd_hideItem');
	});			
	
	// Set the alternating row colors for the more info elements.
	$('.moreInfoBar:even').addClass('moreInfoBarEven');
	
	// View button functionality.
	// Hover methods.
	// LIST VIEW.
	$('#listViewButton').hover(function() {
		$(this).removeClass('buttonListViewOff').addClass('buttonListViewOn');
	});
	
	$('#listViewButton').mouseout(function() {
		if (currentSection != "LIST") {									   
			$(this).removeClass('buttonListViewOn').addClass('buttonListViewOff');
		}
	});	
	
	// DAY VIEW.
	$('#dayViewButton').hover(function() {
		$(this).removeClass('buttonDayViewOff').addClass('buttonDayViewOn');
	});
	
	$('#dayViewButton').mouseout(function() {
		if (currentSection != "DAY") {									  
			$(this).removeClass('buttonDayViewOn').addClass('buttonDayViewOff');
		}
	});	
	
	// WEEK VIEW.
	$('#weekViewButton').hover(function() {
		$(this).removeClass('buttonWeekViewOff').addClass('buttonWeekViewOn');
	});
	
	$('#weekViewButton').mouseout(function() {
		if (currentSection != "WEEK") {									  
			$(this).removeClass('buttonWeekViewOn').addClass('buttonWeekViewOff');
		}
	});	
	
	// MONTH VIEW.
	$('#monthViewButton').hover(function() {
		$(this).removeClass('buttonMonthViewOff').addClass('buttonMonthViewOn');
	});
	
	$('#monthViewButton').mouseout(function() {
		if (currentSection != "MONTH") {									  
			$(this).removeClass('buttonMonthViewOn').addClass('buttonMonthViewOff');
		}
	});		
	
	// Click methods.
	// LIST.
	$('#listViewButton').click(function() {	
		setTimeout(function() {
			$('#projectListViewDetailContainer').fadeIn('fast');
			$('#paginationContainer, #projectViewKey').fadeIn('fast');
		}, 300);										
										
		if ($('#projectListViewDetailContainer').css('display') == 'none') {
			$('#projectWeekViewDetailContainer, pw_weekNavTab, #projectViewKey').fadeOut('fast');
			$('#projectMonthViewDetailContainer, pm_monthNavTab, #projectViewKey').fadeOut('fast');
			
			currentSection = "LIST";
		}

		$(this).removeClass('buttonListView').addClass('buttonListViewClicked');
		$('#dayViewButton').removeClass('buttonDayViewClicked').addClass('buttonDayView');
		$('#weekViewButton').removeClass('buttonWeekViewClicked').addClass('buttonWeekView');
		$('#monthViewButton').removeClass('buttonMonthViewClicked').addClass('buttonMonthView');
	});	
	
	// DAY.
	$('#dayViewButton').click(function() {	
		if ($('#projectListViewDetailContainer').css('display') !== 'none' || $('#projectWeekViewDetailContainer').css('display') !== 'none' || $('#projectMonthViewDetailContainer').css('display') !== 'none') {							   
			$('#projectListViewDetailContainer, #paginationContainer, #projectViewKey').fadeOut('fast');
			$('#projectWeekViewDetailContainer, pw_weekNavTab').fadeOut('fast');
			$('#projectMonthViewDetailContainer, pm_monthNavTab').fadeOut('fast');
			
			currentSection = "DAY";
		}
		$('#listViewButton').removeClass('buttonListViewClicked').addClass('buttonListView');
		$(this).removeClass('buttonDayView').addClass('buttonDayViewClicked');
		$('#weekViewButton').removeClass('buttonWeekViewClicked').addClass('buttonWeekView');
		$('#monthViewButton').removeClass('buttonMonthViewClicked').addClass('buttonMonthView');
	});
	
	// WEEK.
	$('#weekViewButton').click(function() {	
		setTimeout(function() {
			$('#projectWeekViewDetailContainer, #pw_weekNavTab, #projectViewKey').fadeIn('fast');
		}, 300);
																	
		if ($('#projectListViewDetailContainer').css('display') !== 'none') {							   
			$('#projectListViewDetailContainer, #paginationContainer, #projectViewKey').fadeOut('fast');		
		}
		if ($('#projectMonthViewDetailContainer').css('display') !== 'none') {							   
			$('#projectMonthViewDetailContainer, #pm_monthNavTab, #projectViewKey').fadeOut('fast');			
		}
		
		currentSection = "WEEK";
		
		$('#listViewButton').removeClass('buttonListViewClicked').addClass('buttonListView');
		$('#dayViewButton').removeClass('buttonDayViewClicked').addClass('buttonDayView');
		$(this).removeClass('buttonWeekView').addClass('buttonWeekViewClicked');
		$('#monthViewButton').removeClass('buttonMonthViewClicked').addClass('buttonMonthView');
	});
	
	$('#monthViewButton').click(function() {	
		setTimeout(function() {
			$('#projectMonthViewDetailContainer, #pm_monthNavTab, #projectViewKey').fadeIn('fast');
		}, 300);
																	
		if ($('#projectListViewDetailContainer').css('display') !== 'none') {							   
			$('#projectListViewDetailContainer, #paginationContainer, #projectViewKey').fadeOut('fast');			
		}
		if ($('#projectWeekViewDetailContainer').css('display') !== 'none') {							   
			$('#projectWeekViewDetailContainer, #pw_weekNavTab, #projectViewKey').fadeOut('fast');			
		}
		
		currentSection = "MONTH";
		
		$('#listViewButton').removeClass('buttonListViewClicked').addClass('buttonListView');
		$('#dayViewButton').removeClass('buttonDayViewClicked').addClass('buttonDayView');
		$('#weekViewButton').removeClass('buttonWeekViewClicked').addClass('buttonWeekView');
		$(this).removeClass('buttonMonthView').addClass('buttonMonthViewClicked');
	});	
	
	// Pagination.
	$('.pageTo').click(function(event) {		
		alert($(this).find('.paginationButtonOn').text());
		event.preventDefault();
	});
});	