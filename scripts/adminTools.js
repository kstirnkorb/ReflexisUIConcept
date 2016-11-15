$(document).ready(function(){
    
    var siteURL = window.location.href;
	
	$('#newProjectContainer .largeButtonBG').click(function() {
		$('#AdminTools').animate({ opacity : 'toggle' }, 'fast');
		$('#NewProject').animate({ opacity : 'toggle' }, 'slow');
	});
	
	$('.buttonCheckboxClose').click(function() {
		$('#AdminTools').animate({ opacity : 'toggle' }, 'slow');
		$('#NewProject').animate({ opacity : 'toggle' }, 'fast');
		if (document.getElementById('tcal')) {
			// hide elements
			this.e_div = f_getElement('tcal');
			this.e_shade = f_getElement('tcalShade');
			this.e_iframe =  f_getElement('tcalIF')
			
			if (this.e_iframe)
				this.e_iframe.style.visibility = 'hidden';
			if (this.e_shade)
				this.e_shade.style.visibility = 'hidden';
			this.e_div.style.visibility = 'hidden';
			
			// change icon and status
			document.getElementById('tcalico_0').src = 'images/tigra/cal.gif';
			document.getElementById('tcalico_0').title = 'Open Calendar';
			
			document.getElementById('tcalico_1').src = 'images/tigra/cal.gif';
			document.getElementById('tcalico_1').title = 'Open Calendar';
		}			
	});	
});	
