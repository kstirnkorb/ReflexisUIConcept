$(document).ready(function(){
	
    var siteURL = window.location.href;
	
	/* Array of sample data. */
	var projectDetailArray0 = new Array({dateStart:"10/18/2010",dateEnd:"10/20/2010",task:"My days off",category:"",percentComplete:"",code:"",status:"Not Started"});
	var projectDetailArray1 = new Array({dateStart:"10/23/2010",dateEnd:"10/23/2010",task:"Managers Wkly Call",category:"",percentComplete:"",code:"",status:"Not Started"});
	var projectDetailArray2 = new Array({dateStart:"10/16/2010",dateEnd:"10/17/2010",task:"Training Action",category:"STORE",percentComplete:"90%",code:"Red",status:"Urgent"});
	var projectDetailArray3 = new Array({dateStart:"10/5/2010",dateEnd:"10/17/2010",task:"Seasonal Planogram",category:"STORE",percentComplete:"75%",code:"Yellow",status:"Due Today"});
	var projectDetailArray4 = new Array({dateStart:"10/8/2010",dateEnd:"10/19/2010",task:"TMP - Superbowl Promo Setup",category:"STORE",percentComplete:"25%",code:"Blue",status:"In Progress"});
	var projectDetailArray5 = new Array({dateStart:"10/13/2010",dateEnd:"10/19/2010",task:"Winter Season Shelving Reset",category:"ELECTRONICS",percentComplete:"10%",code:"Blue",status:"In Progress"});
	var projectDetailArray6 = new Array({dateStart:"10/17/2010",dateEnd:"10/17/2010",task:"RECALL - Peanut Butter",category:"STORE",percentComplete:"0%",code:"Urgent",status:"Urgent"});
	var projectDetailArray7 = new Array({dateStart:"10/19/2010",dateEnd:"10/21/2010",task:"KPI Out of Stock",category:"HOMEGOODS",percentComplete:"0%",code:"Blue",status:"In Progess"});
	var projectDetailArray8 = new Array({dateStart:"10/22/2010",dateEnd:"10/25/2010",task:"Training Action",category:"STORE",percentComplete:"0%",code:"Blue",status:"Not Started"});
	var projectDetailArray9 = new Array({dateStart:"10/22/2010",dateEnd:"10/26/2010",task:"KPI - Winter tires rack update",category:"AUTOMOTIVE",percentComplete:"0%",code:"Blue",status:"Not Started"});
	var projectDetailArray10 = new Array({dateStart:"10/22/2010",dateEnd:"10/27/2010",task:"Another Project #1",category:"DEPARTMENT",percentComplete:"20%",code:"Blue",status:"In Progress"});
	var projectDetailArray11 = new Array({dateStart:"10/22/2010",dateEnd:"11/2/2010",task:"Another Project #2",category:"DEPARTMENT",percentComplete:"0%",code:"Blue",status:"Not Started"});

	var projectWeekArray = new Array(projectDetailArray0,projectDetailArray1,projectDetailArray2,projectDetailArray3,projectDetailArray4,projectDetailArray5,projectDetailArray6,projectDetailArray7,projectDetailArray8,projectDetailArray9,projectDetailArray10,projectDetailArray11);
	
	var yPosition = 80;
	var pastStartXPos = -80;
	var startXPos = 30;
	var barWidthFactor = 110;
	var barYPosFactor = 22;
	
	var detailPopUpActive = false;
	
	for (var i = 0; i < projectWeekArray.length; i++) {
		//alert(projectWeekArray[i][0].dateStart);
	}
	
	// One day center bar spans 102 pixels.
	// The ends are 10 pixels wide each.
	// Day column width is 110 pixels.
	// Rows are 22 pixels apart.
	// Day before x = -80.
	// Day 1 x = 30.
	// Day 2 x = 140.
	// Day 3 x = 250.
	// Day 4 x = 360.
	// Day 5 x = 470.
	// Day 6 x = 580.
	// Day 7 x = 690.
	
	// Add elements to pw_projectViewDetailBarContainer.
	
	/* Set initial date for display. */
	var monthArray = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");
	var dayArray = new Array("SUN","MON","TUE","WED","THU","FRI","SAT");
	var firstDate = new Date();
	var secondDate = new Date();
	secondDate.setDate(secondDate.getDate() + 6);
	var pastDate = firstDate;
	var futureDate = firstDate;
	var firstDateYear = firstDate.getFullYear();
	var secondDateYear = secondDate.getFullYear();
	var defaultStartDate = monthArray[firstDate.getMonth()] + " " + firstDate.getDate();
	var defaultEndDate = monthArray[secondDate.getMonth()] + " " + secondDate.getDate();
	var pastDay1Date = new Date();
	var pastDay2Date = new Date();
	var pastDay3Date = new Date();
	var pastDay4Date = new Date();
	var pastDay5Date = new Date();
	var pastDay6Date = new Date();
	var pastDay7Date = new Date();
	var pastDay1Date2 = new Date();
	var pastDay2Date2 = new Date();
	var pastDay3Date2 = new Date();
	var pastDay4Date2 = new Date();
	var pastDay5Date2 = new Date();
	var pastDay6Date2 = new Date();
	var pastDay7Date2 = new Date();
	var pastDay1Month = 0;
	var pastDay2Month = 0;
	var pastDay3Month = 0;
	var pastDay4Month = 0;
	var pastDay5Month = 0;
	var pastDay6Month = 0;
	var pastDay7Month = 0;
	
	var futureDay1Date = new Date();
	var futureDay2Date = new Date();
	var futureDay3Date = new Date();
	var futureDay4Date = new Date();
	var futureDay5Date = new Date();
	var futureDay6Date = new Date();
	var futureDay7Date = new Date();
	var futureDay1Date2 = new Date();
	var futureDay2Date2 = new Date();
	var futureDay3Date2 = new Date();
	var futureDay4Date2 = new Date();
	var futureDay5Date2 = new Date();
	var futureDay6Date2 = new Date();
	var futureDay7Date2 = new Date();
	var futureDay1Month = 0;
	var futureDay2Month = 0;
	var futureDay3Month = 0;
	var futureDay4Month = 0;
	var futureDay5Month = 0;
	var futureDay6Month = 0;
	var futureDay7Month = 0;	
	
	// Variables for the days of the week.
	var day1Date = new Date();
	day1Date.setDate(day1Date.getDate());
	var day1Day = dayArray[day1Date.getDay()];
	var day1Month = day1Date.getMonth();
	day1Month++;
	var day2Date = new Date();
	day2Date.setDate(day2Date.getDate() + 1);
	var day2Day = dayArray[day2Date.getDay()];
	var day2Month = day2Date.getMonth();
	day2Month++;
	var day3Date = new Date();
	day3Date.setDate(day3Date.getDate() + 2);
	var day3Day = dayArray[day3Date.getDay()];
	var day3Month = day3Date.getMonth();
	day3Month++;
	var day4Date = new Date();
	day4Date.setDate(day4Date.getDate() + 3);
	var day4Day = dayArray[day4Date.getDay()];
	var day4Month = day4Date.getMonth();
	day4Month++;
	var day5Date = new Date();
	day5Date.setDate(day5Date.getDate() + 4);
	var day5Day = dayArray[day5Date.getDay()];
	var day5Month = day5Date.getMonth();
	day5Month++;
	var day6Date = new Date();
	day6Date.setDate(day6Date.getDate() + 5);
	var day6Day = dayArray[day6Date.getDay()];
	var day6Month = day6Date.getMonth();
	day6Month++;
	var day7Date = new Date();
	day7Date.setDate(day7Date.getDate() + 6);
	var day7Day = dayArray[day7Date.getDay()];
	var day7Month = day7Date.getMonth();
	day7Month++;

	// Set initial date display elements.
	$('#weekRange').html('<b>' + defaultStartDate + '&nbsp;<span class="year">' + firstDateYear + '</span> - ' + defaultEndDate + '&nbsp;<span class="year">' + secondDateYear + '</span></b>');	
	$('#weekDay1').html('<b>' + day1Day + '</b> ' + day1Month + '/' + day1Date.getDate());
	$('#weekDay2').html('<b>' + day2Day + '</b> ' + day2Month + '/' + day2Date.getDate());
	$('#weekDay3').html('<b>' + day3Day + '</b> ' + day3Month + '/' + day3Date.getDate());
	$('#weekDay4').html('<b>' + day4Day + '</b> ' + day4Month + '/' + day4Date.getDate());
	$('#weekDay5').html('<b>' + day5Day + '</b> ' + day5Month + '/' + day5Date.getDate());
	$('#weekDay6').html('<b>' + day6Day + '</b> ' + day6Month + '/' + day6Date.getDate());
	$('#weekDay7').html('<b>' + day7Day + '</b> ' + day7Month + '/' + day7Date.getDate());
	
	currentDayCheck();
	initializePopUpFunctionality();
	
	// Previous week nav.
	$('.buttonLeft').click(function() {							
		pastDate.setDate(firstDate.getDate() - 7);
		secondDate.setDate(secondDate.getDate() - 7);

		firstDateYear = pastDate.getFullYear();
		secondDateYear = secondDate.getFullYear();

		defaultStartDate = monthArray[pastDate.getMonth()] + " " + pastDate.getDate();
		defaultEndDate = monthArray[secondDate.getMonth()] + " " + secondDate.getDate();
		
		// Set date display element in the week tab.
		$('#weekRange').html('<b>' + defaultStartDate + '&nbsp;<span class="year">' + firstDateYear + '</span> - ' + defaultEndDate + '&nbsp;<span class="year">' + secondDateYear + '</span></b>');	
	
		// Variables for the days of the week.
		pastDay1Date = new Date(pastDate);
		pastDay2Date = new Date(pastDate);
		pastDay3Date = new Date(pastDate);
		pastDay4Date = new Date(pastDate);
		pastDay5Date = new Date(pastDate);
		pastDay6Date = new Date(pastDate);
		pastDay7Date = new Date(pastDate);
		
		pastDay1Date2 = pastDay1Date;
		pastDay1Date2.setDate(pastDay1Date2.getDate());
		pastDay1Day = dayArray[pastDay1Date2.getDay()];
		pastDay1Month = pastDay1Date2.getMonth();
		pastDay1Month++;
		pastDay2Date2 = pastDay2Date;
		pastDay2Date2.setDate(pastDay2Date2.getDate() + 1);
		pastDay2Day = dayArray[pastDay2Date2.getDay()];
		pastDay2Month = pastDay2Date2.getMonth();
		pastDay2Month++;
		pastDay3Date2 = pastDay3Date;
		pastDay3Date2.setDate(pastDay3Date2.getDate() + 2);
		pastDay3Day = dayArray[pastDay3Date2.getDay()];
		pastDay3Month = pastDay3Date2.getMonth();
		pastDay3Month++;
		pastDay4Date2 = pastDay4Date;
		pastDay4Date2.setDate(pastDay4Date2.getDate() + 3);
		pastDay4Day = dayArray[pastDay4Date2.getDay()];
		pastDay4Month = pastDay4Date2.getMonth();
		pastDay4Month++;
		pastDay5Date2 = pastDay5Date;
		pastDay5Date2.setDate(pastDay5Date2.getDate() + 4);
		pastDay5Day = dayArray[pastDay5Date2.getDay()];
		pastDay5Month = pastDay5Date2.getMonth();
		pastDay5Month++;
		pastDay6Date2 = pastDay6Date;
		pastDay6Date2.setDate(pastDay6Date2.getDate() + 5);
		pastDay6Day = dayArray[pastDay6Date2.getDay()];
		pastDay6Month = pastDay6Date2.getMonth();
		pastDay6Month++;
		pastDay7Date2 = pastDay7Date;
		pastDay7Date2.setDate(pastDay7Date2.getDate() + 6);
		pastDay7Day = dayArray[pastDay7Date2.getDay()];
		pastDay7Month = pastDay7Date2.getMonth();
		pastDay7Month++;

		$('#weekDay1').html('<b>' + day1Day + '</b> ' + pastDay1Month + '/' + pastDay1Date2.getDate());
		$('#weekDay2').html('<b>' + day2Day + '</b> ' + pastDay2Month + '/' + pastDay2Date2.getDate());
		$('#weekDay3').html('<b>' + day3Day + '</b> ' + pastDay3Month + '/' + pastDay3Date2.getDate());
		$('#weekDay4').html('<b>' + day4Day + '</b> ' + pastDay4Month + '/' + pastDay4Date2.getDate());
		$('#weekDay5').html('<b>' + day5Day + '</b> ' + pastDay5Month + '/' + pastDay5Date2.getDate());
		$('#weekDay6').html('<b>' + day6Day + '</b> ' + pastDay6Month + '/' + pastDay6Date2.getDate());
		$('#weekDay7').html('<b>' + day7Day + '</b> ' + pastDay7Month + '/' + pastDay7Date2.getDate());
		
		currentDayCheck();
		detailPopUpActive = false;	
		initializePopUpFunctionality();
	});	
	
	// Next week nav.
	$('.buttonRight').click(function() {
		futureDate.setDate(firstDate.getDate() + 7);
		secondDate.setDate(secondDate.getDate() + 7);
		
		firstDateYear = futureDate.getFullYear();
		secondDateYear = secondDate.getFullYear();

		defaultStartDate = monthArray[futureDate.getMonth()] + " " + futureDate.getDate();
		defaultEndDate = monthArray[secondDate.getMonth()] + " " + secondDate.getDate();
		
		// Set date display element in the week tab.
		$('#weekRange').html('<b>' + defaultStartDate + '&nbsp;<span class="year">' + firstDateYear + '</span> - ' + defaultEndDate + '&nbsp;<span class="year">' + secondDateYear + '</span></b>');	
	
		// Variables for the days of the week.
		futureDay1Date = new Date(futureDate);
		futureDay2Date = new Date(futureDate);
		futureDay3Date = new Date(futureDate);
		futureDay4Date = new Date(futureDate);
		futureDay5Date = new Date(futureDate);
		futureDay6Date = new Date(futureDate);
		futureDay7Date = new Date(futureDate);
		
		futureDay1Date2 = futureDay1Date;
		futureDay1Date2.setDate(futureDay1Date2.getDate());
		futureDay1Day = dayArray[futureDay1Date2.getDay()];
		futureDay1Month = futureDay1Date2.getMonth();
		futureDay1Month++;
		futureDay2Date2 = futureDay2Date;
		futureDay2Date2.setDate(futureDay2Date2.getDate() + 1);
		futureDay2Day = dayArray[futureDay2Date2.getDay()];
		futureDay2Month = futureDay2Date2.getMonth();
		futureDay2Month++;
		futureDay3Date2 = futureDay3Date;
		futureDay3Date2.setDate(futureDay3Date2.getDate() + 2);
		futureDay3Day = dayArray[futureDay3Date2.getDay()];
		futureDay3Month = futureDay3Date2.getMonth();
		futureDay3Month++;
		futureDay4Date2 = futureDay4Date;
		futureDay4Date2.setDate(futureDay4Date2.getDate() + 3);
		futureDay4Day = dayArray[futureDay4Date2.getDay()];
		futureDay4Month = futureDay4Date2.getMonth();
		futureDay4Month++;
		futureDay5Date2 = futureDay5Date;
		futureDay5Date2.setDate(futureDay5Date2.getDate() + 4);
		futureDay5Day = dayArray[futureDay5Date2.getDay()];
		futureDay5Month = futureDay5Date2.getMonth();
		futureDay5Month++;
		futureDay6Date2 = futureDay6Date;
		futureDay6Date2.setDate(futureDay6Date2.getDate() + 5);
		futureDay6Day = dayArray[futureDay6Date2.getDay()];
		futureDay6Month = futureDay6Date2.getMonth();
		futureDay6Month++;
		futureDay7Date2 = futureDay7Date;
		futureDay7Date2.setDate(futureDay7Date2.getDate() + 6);
		futureDay7Day = dayArray[futureDay7Date2.getDay()];
		futureDay7Month = futureDay7Date2.getMonth();
		futureDay7Month++;

		$('#weekDay1').html('<b>' + day1Day + '</b> ' + futureDay1Month + '/' + futureDay1Date2.getDate());
		$('#weekDay2').html('<b>' + day2Day + '</b> ' + futureDay2Month + '/' + futureDay2Date2.getDate());
		$('#weekDay3').html('<b>' + day3Day + '</b> ' + futureDay3Month + '/' + futureDay3Date2.getDate());
		$('#weekDay4').html('<b>' + day4Day + '</b> ' + futureDay4Month + '/' + futureDay4Date2.getDate());
		$('#weekDay5').html('<b>' + day5Day + '</b> ' + futureDay5Month + '/' + futureDay5Date2.getDate());
		$('#weekDay6').html('<b>' + day6Day + '</b> ' + futureDay6Month + '/' + futureDay6Date2.getDate());
		$('#weekDay7').html('<b>' + day7Day + '</b> ' + futureDay7Month + '/' + futureDay7Date2.getDate());	
		
		currentDayCheck();
		detailPopUpActive = false;	
		initializePopUpFunctionality();
	});
	
	function currentDayCheck() {
		var todaysDate = new Date();
		var todaysDateString = todaysDate.getMonth()+1 + "/" + todaysDate.getDate();

		for (i=1; i<8; i++) {
			if ($('#weekDay'+i).html().substr(11) == todaysDateString) {
				$('.tallCell'+i).addClass('currentDay');
			} else {
				$('.tallCell'+i).removeClass('currentDay');
			}
		}		
	}
	
	function initializePopUpFunctionality() {
		$('.detailBar').click(function() {					   
			$('#pw_detailPopUp').addClass('pw_hideItem');
			detailPopUpActive = false;																												  
																											  
			var x = $(this).position().left;
			var y = $(this).position().top;
			var popUpColLocation = 0;
			var popUpArrowYPos = "";
			
			if (detailPopUpActive == false) {													 
				$('#pw_detailPopUp').removeClass('pw_hideItem');
				detailPopUpActive = true;
			}

			// x: 29, 139, 249, 359, 469, 579, 689 = columns 1,2,3,4,5,6,7.
			
			if (x < 450) {
				// This cell is in column range 1-4.
				$('#pw_detailPopUp').css('left','60px');
			} else {
				// This cell is in column range 5-7.
				$('#pw_detailPopUp').css('left','410px');
			}

			// Position pop up detail box arrow.
			if (y < 290) {
				var yPos = (y + 10) + "px";
				$('#pw_detailPopUp').css('top',yPos);
				popUpArrowYPos = "-205px";
				$('#pw_detailPopUp #pointerArrow').removeClass('downArrow');
				$('#pw_detailPopUp #pointerArrow').addClass('upArrow');
			} else {
				var yPos = (y + -215) + "px";
				$('#pw_detailPopUp').css('top',yPos);	
				popUpArrowYPos = "3px";
				$('#pw_detailPopUp #pointerArrow').removeClass('upArrow');
				$('#pw_detailPopUp #pointerArrow').addClass('downArrow');
			}

			if (x < 130) {
				$('#pw_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','20px');
			} else if (x > 135 && x < 240) {
				$('#pw_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','130px');
			} else if (x > 245 && x < 350) {
				$('#pw_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','245px');
			} else if (x > 355 && x < 460) {
				$('#pw_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','315px');
			} else if (x > 465 && x < 570) {
				$('#pw_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','105px');
			} else if (x > 575 && x < 680) {	
				$('#pw_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','215px');
			} else if (x > 685) {
				$('#pw_detailPopUp #pointerArrow').css('top',popUpArrowYPos).css('left','305px');
			}
			
			$('#pw_detailPopUp .detailHeader').html('SEASONAL PLANOGRAM RESET');	
		});
		
		$('.buttonCheckboxClose').click(function() {
			$('#pw_detailPopUp').addClass('pw_hideItem');
			detailPopUpActive = false;										 
		});
	}	
});	