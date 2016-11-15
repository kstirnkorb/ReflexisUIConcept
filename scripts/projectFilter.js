$(document).ready(function(){
    
    var siteURL = window.location.href;
	var currentFilter = "MY PROJECTS";
	var activeFilterItems = 0;
	
	$('#myProjectsButton').addClass('buttonFilterMyProjectsOn');
	
	// Filter button functionality.
	// Hover methods.
	// MY PROJECTS.
	$('#myProjectsButton').hover(function() {
		$(this).removeClass('buttonFilterMyProjectsOff').addClass('buttonFilterMyProjectsOver');
	});
	
	$('#myProjectsButton').mouseout(function() {
		if (currentFilter != "MY PROJECTS") {									   
			$(this).removeClass('buttonFilterMyProjectsOver').addClass('buttonFilterMyProjectsOff');
		}
	});	
	
	// MY DEPARTMENT'S PROJECTS.
	$('#myDepartmentProjectsButton').hover(function() {
		$(this).removeClass('buttonFilterMyDepartmentProjectsOff').addClass('buttonFilterMyDepartmentProjectsOver');
	});
	
	$('#myDepartmentProjectsButton').mouseout(function() {
		if (currentFilter != "MY DEPARTMENT'S PROJECTS") {									   
			$(this).removeClass('buttonFilterMyDepartmentProjectsOver').addClass('buttonFilterMyDepartmentProjectsOff');
		}
	});	
	
	// MY STORE'S PROJECTS.
	$('#myStoreProjectsButton').hover(function() {
		$(this).removeClass('buttonFilterMyStoreProjectsOff').addClass('buttonFilterMyStoreProjectsOver');
	});
	
	$('#myStoreProjectsButton').mouseout(function() {
		if (currentFilter != "MY STORE'S PROJECTS") {									   
			$(this).removeClass('buttonFilterMyStoreProjectsOver').addClass('buttonFilterMyStoreProjectsOff');
		}
	});	
	
	/*
	$('[title=projectStatus] .body :first').click(function() {	
		alert('all active');
	});	
	*/

	//$('[title=projectStatus] .body').children().css('background-color', 'red');

	// Process Project Status clicks.
	$('[title=ProjectStatus] .body').children().bind('click', function() {
		//alert($(this).text());
		
		$(this).clone().appendTo('[title=ProjectActiveFilters] .body');
		//$('[title=ProjectActiveFilters] .body').append("<br />");
		$('[title=ProjectActiveFilters] .body a').replaceWith($(this).text());
		$('[title=ProjectActiveFilters] .body #statusItem').prepend('<span class="buttonCheckboxStatus">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
		$(this).addClass('hideItem');
		activeFilterItems++;
		//$(this).remove();
		
		if ($('[title=ProjectActiveFilters]').css('display') == 'none') {
			$('[title=ProjectActiveFilters]').slideToggle('fast');
			$('[title=ProjectActiveFilters]').fadeIn('fast');
		}
		
		if ($('[title=ProjectType]').css('display') == 'none') {
			$('[title=ProjectType]').slideToggle('fast');
			$('[title=ProjectType]').fadeIn('fast');
		}			
		
		if ($('[title=ProjectStatus]').is(':visible')) {
			$('[title=ProjectStatus]').slideToggle('fast');
		}
		
		// Click handler for status filter checkbox.
		$('.buttonCheckboxStatus').click(function() {
			$('[title=ProjectStatus] .body').children().removeClass('hideItem');
			if ($('[title=ProjectRole]').is(':visible')) {
				$('[title=ProjectRole]').slideUp('fast');
			}
			if ($('[title=ProjectType]').is(':visible')) {
				$('[title=ProjectType]').slideUp('fast');
			}
			
			$('#statusItem').remove();
			activeFilterItems--;
			
			if (activeFilterItems == 0) {
				if ($('[title=ProjectActiveFilters]').is(':visible')) {
					$('[title=ProjectActiveFilters]').slideUp('fast');
				}
			}
			
			if ($('[title=ProjectStatus]').is(':hidden')) {
				$('[title=ProjectStatus]').slideToggle('fast');
				$('[title=ProjectStatus]').fadeIn('fast');
			}
			
			if ($('[title=ProjectDepartment]').is(':hidden')) {
				$('[title=ProjectDepartment]').slideToggle('fast');
				$('[title=ProjectDepartment]').fadeIn('fast');
			}			
		});		
	});
	
	$('[title=ProjectStatus] a').click(function(event) {
		event.preventDefault();	
	});	
	
	// Process Project Department clicks.
	$('[title=ProjectDepartment] .body').children().bind('click', function() {
		//alert($(this).text());
		
		$(this).clone().appendTo('[title=ProjectActiveFilters] .body');
		//$('[title=ProjectActiveFilters] .body').append("<br />");
		$('[title=ProjectActiveFilters] .body a').replaceWith($(this).text());
		$('[title=ProjectActiveFilters] .body #departmentItem').prepend('<span class="buttonCheckboxDepartment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
		$(this).addClass('hideItem');
		activeFilterItems++;
		//$(this).remove();
		
		if ($('[title=ProjectActiveFilters]').css('display') == 'none') {
			$('[title=ProjectActiveFilters]').slideToggle('fast');
			$('[title=ProjectActiveFilters]').fadeIn('fast');
		}
		
		if ($('[title=ProjectRole]').css('display') == 'none') {
			$('[title=ProjectRole]').slideToggle('fast');
			$('[title=ProjectRole]').fadeIn('fast');
		}
		
		if ($('[title=ProjectType]').css('display') == 'none') {
			$('[title=ProjectType]').slideToggle('fast');
			$('[title=ProjectType]').fadeIn('fast');
		}	
		
		if ($('[title=ProjectDepartment]').is(':visible')) {
			$('[title=ProjectDepartment]').slideToggle('fast');
		}		
		
		// Initialize clear all filters button.
		if (activeFilterItems == 2) {
			$('#clearFilters').removeClass('buttonClearAllFiltersOff').addClass('buttonClearAllFiltersOn');
			$('#clearFilters').css('cursor','pointer');
		} else {
			$('#clearFilters').removeClass('buttonClearAllFiltersOn').addClass('buttonClearAllFiltersOff');
			$('#clearFilters').css('cursor','default');
		}
		
		// Click handler for department filter checkbox.
		$('.buttonCheckboxDepartment').click(function() {
			$('[title=ProjectDepartment] .body').children().removeClass('hideItem');
			if ($('[title=ProjectRole]').is(':visible')) {
				$('[title=ProjectRole]').slideUp('fast');
			}
			
			$('#departmentItem').remove();
			activeFilterItems--;
			
			if (activeFilterItems == 0) {
				if ($('[title=ProjectActiveFilters]').is(':visible')) {
					$('[title=ProjectActiveFilters]').slideUp('fast');
				}
			}
			
			if ($('[title=ProjectDepartment]').is(':hidden')) {
				$('[title=ProjectDepartment]').slideToggle('fast');
				$('[title=ProjectDepartment]').fadeIn('fast');
			}								  
		});			
	});

	$('#clearFilters').click(function() {						  
		$('[title=ProjectStatus] .body').children().removeClass('hideItem');
		$('[title=ProjectDepartment] .body').children().removeClass('hideItem');
		if ($('[title=ProjectRole]').is(':visible')) {
			$('[title=ProjectRole]').slideUp('fast');
		}
		if ($('[title=ProjectType]').is(':visible')) {
			$('[title=ProjectType]').slideUp('fast');
		}
		
		$('[title=ProjectActiveFilters] .body').children().remove();
		
		if ($('[title=ProjectActiveFilters]').is(':visible')) {
			$('[title=ProjectActiveFilters]').slideUp('fast');
		}
		
		if ($('[title=ProjectStatus]').is(':hidden')) {
			$('[title=ProjectStatus]').slideToggle('fast');
			$('[title=ProjectStatus]').fadeIn('fast');
		}
		
		if ($('[title=ProjectDepartment]').is(':hidden')) {
			$('[title=ProjectDepartment]').slideToggle('fast');
			$('[title=ProjectDepartment]').fadeIn('fast');
		}
		
		activeFilterItems = 0;
	});
	
	$('[title=ProjectDepartment] a').click(function(event) {
		event.preventDefault();	
	});	
	
	// Process Project Role clicks.
	$('[title=ProjectRole] a').click(function(event) {
		event.preventDefault();	
	});	

	// Process Project Type clicks.
	$('[title=ProjectType] a').click(function(event) {
		event.preventDefault();	
	});	
});	