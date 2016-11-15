$(document).ready(function(){
    
    var siteURL = window.location.href;
	var currentPriority = "LOW";
	
	// Priority button functionality.
	// Hover methods.
	// LOW.
	$('#priorityLowButton').hover(function() {
		$(this).removeClass('buttonLowOff').addClass('buttonLowOn');
	});
	
	$('#priorityLowButton').mouseout(function() {
		if (currentPriority != "LOW") {									   
			$(this).removeClass('buttonLowOn').addClass('buttonLowOff');
		}
	});	
	
	// MEDIUM.
	$('#priorityMedButton').hover(function() {
		$(this).removeClass('buttonMedOff').addClass('buttonMedOn');
	});
	
	$('#priorityMedButton').mouseout(function() {
		if (currentPriority != "MED") {									  
			$(this).removeClass('buttonMedOn').addClass('buttonMedOff');
		}
	});	
	
	// HIGH.
	$('#priorityHighButton').hover(function() {
		$(this).removeClass('buttonHighOff').addClass('buttonHighOn');
	});
	
	$('#priorityHighButton').mouseout(function() {
		if (currentPriority != "HIGH") {									  
			$(this).removeClass('buttonHighOn').addClass('buttonHighOff');
		}
	});		
});	