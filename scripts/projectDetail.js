$(document).ready(function(){
    
    var siteURL = window.location.href;
	
	var commentsOn = false;
	var additionalInfoOn = false;
	var projectAttachmentsOn = false;
	var otherSection1On = false;

	//alert('Project Detail');

	// View button functionality.
	$('.pd_buttonViewOff').hover(function() {
		$(this).removeClass('pd_buttonViewOff').addClass('pd_buttonViewOver');
	});
	
	$('.pd_buttonViewOff').mouseout(function() {								   
		$(this).removeClass('pd_buttonViewOver').addClass('pd_buttonViewOff');
	});	
	
	$('.pd_buttonViewOff').click(function() {															
		$(this).parent().parent().find('#pd_detailInfo').slideDown('fast');
		$(this).css('display', 'none').parent().find('.pd_buttonViewOn').css('display', 'block');
	});	
	
	$('.pd_buttonViewOn').click(function() {
		$(this).parent().parent().find('#pd_detailInfo').slideUp('fast');
		$(this).css('display', 'none').parent().find('.pd_buttonViewOff').css('display', 'block');
	});
	
	// Set the alternating row colors for the detail row elements.
	$('.pd_detailRow:even').addClass('pd_detailRowEven');	
	
	$('#pd_backTitle').click(function(event) {
		event.preventDefault();	
	});	

	$('#pd_completeCheckbox').click(function() {
		if ($('#pd_completeCheckbox').attr('checked')) {
			$('#pd_detailContainer').find('.pd_statusComplete').parent().show();	
		} else {
			$('#pd_detailContainer').find('.pd_statusComplete').parent().hide();
		}
	});
	
	$('#pd_backTitle a').click(function() {															
		$('#ProjectList').animate({ opacity : 'toggle' }, 'slow');
		$('#ProjectDetail').animate({ opacity : 'toggle' }, 'slow');	
									
		//$('#ProjectList').removeClass('hideItem');
		//$('#ProjectDetail').addClass('pd_hideItem');
	});
	
	/*
	$('#completeCheckbox').click(function() {									  
		if ($('#completeCheckbox:checked').val() == "on") {
			alert('checked');
		} else {
			alert('not checked');
		}
		
	});
	*/									  
	
	$('[title=DetailComments]').hover(function() {
		if (commentsOn == false) {									   	
			$(this).find('.label').toggleClass('labelOver');
		}
	});
	
	$('[title=DetailComments]').find('.label').click(function() {
		if (additionalInfoOn == false && projectAttachmentsOn == false && otherSection1On == false) {														  
			var element = '[title=DetailComments]';													  
			if (commentsOn == false) {
				$(element).find('.leftBG1').addClass('leftOverBG1');
				$(element).find('.rightBG').addClass('rightBGOver');
				$(element).find('.rightBG').addClass('rightBGOver');
				
				if ($(element).find('#pd_topNavOverlay').css('display') == 'none') {
					$(element).find('#pd_topNavOverlay').css('display','block');
				}
				
				$(element).find('.label').addClass('labelOn');
				commentsOn = true;
			} else if (commentsOn == true) {
				$(element).find('.leftBG1').removeClass('leftOverBG1');
				$(element).find('.rightBG').removeClass('rightBGOver');
				$(element).find('.rightBG').removeClass('rightBGOver');
				
				$(element).find('#pd_topNavOverlay').css('display','none');
				
				$(element).find('.label').removeClass('labelOn');
				commentsOn = false;	
			}
		}
	});	
	
	$('[title=DetailAdditionalInfo]').hover(function() {
		if (additionalInfoOn == false) {									   	
			$(this).find('.label').toggleClass('labelOver');
		}
	});
	
	$('[title=DetailAdditionalInfo]').find('.label').click(function() {
		if (commentsOn == false && projectAttachmentsOn == false && otherSection1On == false) {																
			var element = '[title=DetailAdditionalInfo]';	
			if (additionalInfoOn == false) {
				$(element).find('.leftBG2').addClass('leftOverBG2');
				$(element).find('.rightBG').addClass('rightBGOver');
				$(element).find('.rightBG').addClass('rightBGOver');
				
				if ($(element).find('#pd_topNavOverlay').css('display') == 'none') {
					$(element).find('#pd_topNavOverlay').css('display','block');
				}
				
				$(element).find('.label').addClass('labelOn');
				additionalInfoOn = true;
			} else if (additionalInfoOn == true) {
				$(element).find('.leftBG2').removeClass('leftOverBG2');
				$(element).find('.rightBG').removeClass('rightBGOver');
				$(element).find('.rightBG').removeClass('rightBGOver');
				
				$(element).find('#pd_topNavOverlay').css('display','none');
				
				$(element).find('.label').removeClass('labelOn');
				additionalInfoOn = false;			
			}
		}
	});
	
	$('[title=DetailProjectAttachments]').hover(function() {
		if (projectAttachmentsOn == false) {									   	
			$(this).find('.label').toggleClass('labelOver');
		}
	});	
	
	$('[title=DetailProjectAttachments]').find('.label').click(function() {
		if (commentsOn == false && additionalInfoOn == false && otherSection1On == false) {																		
			var element = '[title=DetailProjectAttachments]';
			if (projectAttachmentsOn == false) {
				$(element).find('.leftBG2').addClass('leftOverBG2');
				$(element).find('.rightBG').addClass('rightBGOver');
				$(element).find('.rightBG').addClass('rightBGOver');
				
				if ($(element).find('#pd_topNavOverlay').css('display') == 'none') {
					$(element).find('#pd_topNavOverlay').css('display','block');
				}
				
				$(element).find('.label').addClass('labelOn');
				projectAttachmentsOn = true;
			} else if (projectAttachmentsOn == true) {
				$(element).find('.leftBG2').removeClass('leftOverBG2');
				$(element).find('.rightBG').removeClass('rightBGOver');
				$(element).find('.rightBG').removeClass('rightBGOver');
				
				$(element).find('#pd_topNavOverlay').css('display','none');
				
				$(element).find('.label').removeClass('labelOn');
				projectAttachmentsOn = false;			
			}
		}
	});
	
	$('[title=DetailOtherSection1]').hover(function() {
		if (otherSection1On == false) {									   	
			$(this).find('.label').toggleClass('labelOver');
		}
	});	
	
	$('[title=DetailOtherSection1]').find('.label').click(function() {
		if (commentsOn == false && additionalInfoOn == false && projectAttachmentsOn == false) {																   
			var element = '[title=DetailOtherSection1]';
			if (otherSection1On == false) {
				$(element).find('.leftBG2').addClass('leftOverBG2');
				$(element).find('.rightBG').addClass('rightBGOver');
				$(element).find('.rightBG').addClass('rightBGOver');
				
				if ($(element).find('#pd_topNavOverlay').css('display') == 'none') {
					$(element).find('#pd_topNavOverlay').css('display','block');
				}
				
				$(element).find('.label').addClass('labelOn');
				otherSection1On = true;
			} else if (otherSection1On == true) {
				$(element).find('.leftBG2').removeClass('leftOverBG2');
				$(element).find('.rightBG').removeClass('rightBGOver');
				$(element).find('.rightBG').removeClass('rightBGOver');
				
				$(element).find('#pd_topNavOverlay').css('display','none');
				
				$(element).find('.label').removeClass('labelOn');
				otherSection1On = false;			
			}
		}
	});		
});	