$(document).ready(function(){
    
    var siteURL = window.location.href;
	
	var urgentTotal = 0;
	var dueTodayTotal = 0;
	var overdueTotal = 0;
	var inProgressTotal = 0;
	var notStartedTotal = 0;
	var urgentSet = false;
	var dueTodaySet = false;
	var overdueSet = false;
	var inProgressSet = false;
	var notStartedSet = false;
	
	var detailPopUpActive = false;
	
	var tasksForThisMonth = false;
	
	var m_currentDate = new Date();
	
	/* Array of sample data. */
	var projectDetailArray0 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/18/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/20/2012",task:"My days off",category:"",percentComplete:"",code:"",status:"Not Started"});
	var projectDetailArray1 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/23/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/23/2012",task:"Managers Wkly Call",category:"",percentComplete:"",code:"",status:"Not Started"});
	var projectDetailArray2 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/16/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/17/2012",task:"Training Action",category:"STORE",percentComplete:"90%",code:"Red",status:"Urgent"});
	var projectDetailArray3 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/5/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/17/2012",task:"Seasonal Planogram",category:"STORE",percentComplete:"75%",code:"Yellow",status:"Due Today"});
	var projectDetailArray4 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/8/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/19/2012",task:"TMP - Superbowl Promo Setup",category:"STORE",percentComplete:"25%",code:"Blue",status:"In Progress"});
	var projectDetailArray5 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/13/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/19/2012",task:"Winter Season Shelving Reset",category:"ELECTRONICS",percentComplete:(m_currentDate.getMonth() + 1).toString() + "%",code:"Blue",status:"In Progress"});
	var projectDetailArray6 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/17/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/17/2012",task:"RECALL - Peanut Butter",category:"STORE",percentComplete:"0%",code:"Urgent",status:"Urgent"});
	var projectDetailArray7 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/19/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/21/2012",task:"KPI Out of Stock",category:"HOMEGOODS",percentComplete:"0%",code:"Blue",status:"In Progess"});
	var projectDetailArray8 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/22/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/25/2012",task:"Training Action",category:"STORE",percentComplete:"0%",code:"Blue",status:"Not Started"});
	var projectDetailArray9 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/22/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/26/2012",task:"KPI - Winter tires rack update",category:"AUTOMOTIVE",percentComplete:"0%",code:"Blue",status:"Not Started"});
	var projectDetailArray10 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/22/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/26/2012",task:"KPI - Winter tires rack update 2",category:"AUTOMOTIVE",percentComplete:"0%",code:"Blue",status:"Not Started"});
	var projectDetailArray11 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/22/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/27/2012",task:"Another Project #1",category:"DEPARTMENT",percentComplete:"20%",code:"Blue",status:"In Progress"});
	var projectDetailArray12 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/22/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/27/2012",task:"Another Project #2",category:"DEPARTMENT",percentComplete:"20%",code:"Blue",status:"In Progress"});
	var projectDetailArray13 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/22/2012",dateEnd:(m_currentDate.getMonth() + 1).toString() + "/27/2012",task:"Another Project #3",category:"DEPARTMENT",percentComplete:"20%",code:"Blue",status:"Overdue"});
	var projectDetailArray14 = new Array({dateStart:(m_currentDate.getMonth() + 1).toString() + "/22/2012",dateEnd:(m_currentDate.getMonth() + 2).toString() + "/2/2012",task:"Another Project #4",category:"DEPARTMENT",percentComplete:"0%",code:"Blue",status:"Not Started"});

	var projectWeekArray = new Array(projectDetailArray0,projectDetailArray1,projectDetailArray2,projectDetailArray3,projectDetailArray4,projectDetailArray5,projectDetailArray6,projectDetailArray7,projectDetailArray8,projectDetailArray9,projectDetailArray10,projectDetailArray11,projectDetailArray12,projectDetailArray13,projectDetailArray14);
	
	/* Set initial date for display. */
	var monthArray = new Array("JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER");
	var fullDayArray = new Array("SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY");
	
	var m_currentMonth = m_currentDate.getMonth();
	var m_currentDateYear = m_currentDate.getFullYear();
	var m_defaultStartMonth = monthArray[m_currentDate.getMonth()];
	var m_defaultDate = new Date(m_currentDate.getFullYear(),m_currentDate.getMonth(),15);
	var m_defaultDate2 = new Date(m_currentDate.getFullYear(),m_currentDate.getMonth(),15);
	var m_pastDate = m_defaultDate;
	var m_futureDate = m_defaultDate;
	var m_firstDayOfMonth = 0;
	var m_lastDayOfMonth = 0;
	var m_monthDayArray = new Array();
	var m_previousDate = m_defaultDate;
	var m_nextDate = m_defaultDate;
	var remainder1 = 0;	

	setMonthDateValues(m_defaultDate);
	setRemaiderDateValues(m_defaultDate2);
	currentDayCheck();

	// Set initial date display elements.
	$('#monthRange').html('<b>' + m_defaultStartMonth + '&nbsp;<span class="year">' + m_currentDateYear + '</span></b>');
	initializePopUpFunctionality();
	
	// Previous month nav.
	$('.buttonLeft').click(function() {	
		m_pastDate.setMonth(m_pastDate.getMonth() - 1);	

		m_defaultDate = new Date(m_pastDate.getFullYear(),m_pastDate.getMonth(),1);
		m_defaultDate2 = new Date(m_pastDate.getFullYear(),m_pastDate.getMonth(),1);
		m_firstDayOfMonth = m_defaultDate.getDay();
		setMonthDateValues(m_defaultDate);
		setRemaiderDateValues(m_defaultDate2);
		currentDayCheck();
		
		// Set date display element in the week tab.
		$('#monthRange').html('<b>' + monthArray[m_pastDate.getMonth()] + '&nbsp;<span class="year">' + m_pastDate.getFullYear() + '</span></b>');
	
		$('#pm_detailPopUp').addClass('pm_hideItem');
		detailPopUpActive = false;
		initializePopUpFunctionality();
	});	
	
	// Next month nav.
	$('.buttonRight').click(function() {
		m_futureDate.setMonth(m_futureDate.getMonth() + 1);	
		
		m_defaultDate = new Date(m_futureDate.getFullYear(),m_futureDate.getMonth(),1);
		m_defaultDate2 = new Date(m_futureDate.getFullYear(),m_futureDate.getMonth(),1);
		m_firstDayOfMonth = m_defaultDate.getDay();
		setMonthDateValues(m_defaultDate);
		setRemaiderDateValues(m_defaultDate2);
		currentDayCheck();

		// Set date display element in the week tab.
		$('#monthRange').html('<b>' + monthArray[m_futureDate.getMonth()] + '&nbsp;<span class="year">' + m_futureDate.getFullYear() + '</span></b>');	
	
		$('#pm_detailPopUp').addClass('pm_hideItem');
		detailPopUpActive = false;	
		initializePopUpFunctionality();
	});
	
	// Fill m_monthDayArray with the necessary numeric values. */
	function setMonthDateValues(inputDate) {
		// If there are any tasks for this month then check by day.
		for (var i = 0; i < projectWeekArray.length; i++) {
			if (projectWeekArray[i][0].dateStart.substring(0,projectWeekArray[i][0].dateStart.indexOf("/")) == (inputDate.getMonth()+1)) {	
				tasksForThisMonth = true;
			} else {
				tasksForThisMonth = false;
			}
		}		
		
		m_firstDayOfMonth = inputDate.getDay();
		m_lastDayOfMonth = 32 - new Date(inputDate.getFullYear(), inputDate.getMonth(), 32).getDate();
		
		m_monthDayArray = new Array();
		remainder1 = 0;
		
		var arrayNumber = 0;
		for (i=35-(35-m_firstDayOfMonth); i>0; i--) {
			m_monthDayArray.push(arrayNumber);
			remainder1++;
		}
		
		var arrayNumber = 1;
		for (i=m_monthDayArray.length; i<m_lastDayOfMonth+(35-(35-m_firstDayOfMonth)); i++) {
			m_monthDayArray.push(arrayNumber);
			arrayNumber++;
		}

		var inputDateString = "";

		/* Use the m_monthDayArray to populate the cell date numbers. */
		for (i=0; i<42; i++) {
			
			$('#pm_projectViewDetailBarContainer .offMonth').removeClass('offMonth');
			
			if (m_monthDayArray[i] > 0) {
				$('#day'+i).html('<b>' + m_monthDayArray[i] + '</b>');
				
				inputDateString = (inputDate.getMonth()+1) + "/" + m_monthDayArray[i] + "/" + inputDate.getFullYear();
				
				if (tasksForThisMonth == true) {
					checkForDayTasks(i,inputDateString);
				}				
				
			} else {
				$('#day'+i).html('<b></b>');
			}
		}
	}
	
	function setRemaiderDateValues(inputDate) {
		m_previousDate = inputDate;
		m_nextDate = inputDate;
		m_previousDate.setMonth(m_previousDate.getMonth() - 1);	
		m_nextDate.setMonth(m_nextDate.getMonth() + 2);
		var previousMonthRemainder = remainder1;
		
		var lastDayOfPreviousMonth = 32 - new Date(m_previousDate.getFullYear(), m_previousDate.getMonth(), 32).getDate();
		
		for (i=previousMonthRemainder-1; i>-1; i--) {
			$('#day'+i).html('<b>' + lastDayOfPreviousMonth-- + '</b>');
			$('#day'+i).addClass('offMonth');
		}
		
		var nextMonthDateNumber = 0;
		var dateValue = 0;
		var dayID = m_lastDayOfMonth + previousMonthRemainder - 1;

		for (i=m_lastDayOfMonth; i<42; i++) {
			dateValue++;
			dayID++;
			$('#day'+dayID).html('<b>' + dateValue + '</b>');
			$('#day'+dayID).addClass('offMonth');
		}
	}
	
	function currentDayCheck() {
		var todaysDate = new Date();
		var previousMonthRemainder = remainder1-1;
		var todaysDateDay = todaysDate.getDate() + previousMonthRemainder;
		if (todaysDate.getMonth() == m_defaultDate.getMonth()) {
			$('#day'+todaysDateDay).addClass('detailCell2');
		}  else {
			$('.detailCell1').removeClass('detailCell2');
		}
	}
	
	function checkForDayTasks(cellID,dateValue) {
		urgentTotal = 0;
		dueTodayTotal = 0;
		overdueTotal = 0;
		inProgressTotal = 0;
		notStartedTotal = 0;
		urgentSet = false;
		dueTodaySet = false;
		overdueSet = false;
		inProgressSet = false;
		notStartedSet = false;
		
		var inputDateString = dateValue;

		for (var i = 0; i < projectWeekArray.length; i++) {
			if (projectWeekArray[i][0].dateStart == inputDateString) {	
				// Fill the buckets for daily tasks.	
				switch(projectWeekArray[i][0].status) {
					case "Urgent":
					  urgentTotal++;
					  break;
					case "Due Today":
					  dueTodayTotal++;
					  break;
					case "Overdue":
					  overdueTotal++;
					  break;
					case "In Progress":
					  inProgressTotal++;
					  break;
					case "Not Started":
					  notStartedTotal++;
					  break;
					default:
				} 
				if (urgentTotal > 0) {
					if (urgentTotal == 1 && urgentSet == false) {
						$('#day'+cellID).append('<div class="pm_taskUrgent">Urgent (' + urgentTotal + ')</div>');
						urgentSet = true;
					} else {
						$('#day'+cellID).find('.taskUrgent').replaceWith('<div class="pm_taskUrgent">Urgent (' + urgentTotal + ')</div>');
					}
				}
				if (dueTodayTotal > 0) {
					if (dueTodayTotal == 1 && dueTodaySet == false) {
						$('#day'+cellID).append('<div class="pm_taskDueToday">Due Today (' + dueTodayTotal + ')</div>');
						dueTodaySet = true;
					} else {
						$('#day'+cellID).find('.taskDueToday').replaceWith('<div class="pm_taskDueToday">Overdue (' + dueTodayTotal + ')</div>');
					}
				}
				if (overdueTotal > 0) {
					if (overdueTotal == 1 && overdueSet == false) {
						$('#day'+cellID).append('<div class="pm_taskOverdue">Overdue (' + overdueTotal + ')</div>');
						overdueSet = true;
					} else {
						$('#day'+cellID).find('.taskOverdue').replaceWith('<div class="pm_taskOverdue">Overdue (' + overdueTotal + ')</div>');
					}
				}
				if (inProgressTotal > 0) {
					if (inProgressTotal == 1 && overdueSet == false) {
						$('#day'+cellID).append('<div class="pm_taskInProgress">In Progress (' + inProgressTotal + ')</div>');
						inProgressSet = true;
					} else {
						$('#day'+cellID).find('.taskInProgress').replaceWith('<div class="pm_taskInProgress">In Progress (' + inProgressTotal + ')</div>');
					}
				}
				if (notStartedTotal > 0) {
					if (notStartedTotal == 1 && notStartedSet == false) {
						$('#day'+cellID).append('<div class="pm_taskNotStarted">Not Started (' + notStartedTotal + ')</div>');
						notStartedSet = true;
					} else {
						$('#day'+cellID).find('.taskNotStarted').replaceWith('<div class="pm_taskNotStarted">Not Started (' + notStartedTotal + ')</div>');
					}
				}				
			}
		}
	}
	
	function initializePopUpFunctionality() {
		$('.pm_taskUrgent, .pm_taskDueToday, .pm_taskOverdue, .pm_taskInProgress, .pm_taskNotStarted').click(function() {
			$('#pm_detailPopUp').addClass('pm_hideItem');
			detailPopUpActive = false;																												  
																											  
			var x = $(this).position().left;
			var y = $(this).position().top;
			var popUpRowLocation = 0;
			var popUpArrowYPos = "";
			
			if (detailPopUpActive == false) {													 
				$('#pm_detailPopUp').removeClass('pm_hideItem');
				detailPopUpActive = true;
			}
	
			// x: 34, 147, 260, 373 = columns 1-4.
			// x: 486, 599, 712 = columns 5-7.
			
			// y: < 190 = rows 1-2.
			// y: > 190 = rows 3-6.
			
			// Pop up BG X position: col1, col2, col3, col4 = 60 and col5, col6, col7 = 410. 
			// Pop up BG Y position: row1=75, row2=165, row3=-30, row4=60, row5=150, row6=240. 
			
			if (x < 450) {
				// This cell is in column range 1-4.
				$('#pm_detailPopUp').css('left','60px');
			} else {
				// This cell is in column range 5-7.
				$('#pm_detailPopUp').css('left','410px');
			}
			
			if (y > 10 && y < 90) {
				// Row 1.
				$('#pm_detailPopUp').css('top','75px');
				popUpRowLocation = 1;
				popUpArrowYPos = "-205px";
			} else if (y > 95 && y < 175) {
				// Row 2.
				$('#pm_detailPopUp').css('top','165px');
				popUpRowLocation = 2;
				popUpArrowYPos = "-205px";
			} else if (y > 180 && y < 270) {
				// Row 3.
				$('#pm_detailPopUp').css('top','255px');
				popUpRowLocation = 3;
				popUpArrowYPos = "-205px";
			} else if (y > 275 && y < 355) {
				// Row 4.
				$('#pm_detailPopUp').css('top','60px');
				popUpRowLocation = 4;
				popUpArrowYPos = "3px";
			} else if (y > 360 && y < 450) {
				// Row 5.
				$('#pm_detailPopUp').css('top','150px');
				popUpRowLocation = 5;
				popUpArrowYPos = "3px";
			} else if (y > 455 && y < 535) {
				// Row 6.
				$('#pm_detailPopUp').css('top','240px');
				popUpRowLocation = 6;
				popUpArrowYPos = "3px";
			}
	
			// Position pop up detail box arrow.
			if (popUpRowLocation == 1 || popUpRowLocation == 2 || popUpRowLocation == 3) {
				$('#pm_detailPopUp #pointerArrow').removeClass('downArrow');
				$('#pm_detailPopUp #pointerArrow').addClass('upArrow');
			} else {
				$('#pm_detailPopUp #pointerArrow').removeClass('upArrow');
				$('#pm_detailPopUp #pointerArrow').addClass('downArrow');
			}		
			
			if (x > 30 && x < 135) {
				$('#pm_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','20px');
			} else if (x > 140 && x < 250) {
				$('#pm_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','130px');
			} else if (x > 255 && x < 360) {
				$('#pm_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','245px');
			} else if (x > 365 && x < 475) {
				$('#pm_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','315px');
			} else if (x > 480 && x < 585) {
				$('#pm_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','135px');
			} else if (x > 590 && x < 700) {	
				$('#pm_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','245px');
			} else if (x > 705) {
				$('#pm_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','315px');
			}
	
			$('#pm_detailPopUp .detailHeader').html($(this).parent().find('b').html());
	
			var displayY = m_currentDateYear;
			var displayM = m_currentMonth;
			var displayD = $('#pm_detailPopUp .detailHeader').html();
			var displayDate = new Date(displayY,displayM,displayD);
			
			// Display of header in month project detail pop up.
			$('#pm_detailPopUp .detailHeader').html(fullDayArray[displayDate.getDay()] + ' ' + displayD + ' <span class="year">' + monthArray[displayM] + ' ' + displayY + '</span>');	
		});
		
		$('.buttonCheckboxClose').click(function() {
			$('#pm_detailPopUp').addClass('pm_hideItem');
			detailPopUpActive = false;										 
		});
	}
});	