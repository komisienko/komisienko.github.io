"use strict";


// create redips container
	
var redips = {};


// redips initialization
redips.init = function () {
	// reference to the REDIPS.drag object
	var	rd = REDIPS.drag;
	// initialization
	rd.init();
	// REDIPS.drag settings
	rd.dropMode = 'single';			// dragged elements can be placed only to the empty cells
	rd.hover.colorTd = '#9BB3DA';	// set hover color
	rd.clone.keyDiv = true;			// enable cloning DIV elements with pressed SHIFT key
	// prepare node list of DIV elements in table2
	redips.divNodeList = document.getElementById('tc_table').getElementsByTagName('div');
	// show / hide report buttons (needed for dynamic version - with index.php)
	rd.event.deleted = function () {
		redips.printMessage('Content has been deleted!');
		// show / hide report buttons
		redips.reportButton();
	};
	// if any element is clicked, then make all subjects in timetable visible
	rd.event.clicked = function () {
		redips.showAll();
	};
};


// save elements and their positions
redips.save = function () {
	// scan timetable content
	var content = REDIPS.drag.saveContent('tc_table');
	// and save content
	window.location.href = 'db_save.php?' + content;
};

// print message
redips.printMessage = function (message) {
	document.getElementById('message').innerHTML = message;
};


// function show all subjects in timetable
redips.showAll = function () {
	var	i; // loop variable
	for (i = 0; i < redips.divNodeList.length; i++) {
	}
};
	
// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', redips.init, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redips.init);
}