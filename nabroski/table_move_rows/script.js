// Code goes here
$(document).ready(function() {
    var stockTable = $('#table1').dataTable({
       // "sPaginationType": "full_numbers",
      //  "bFilter": false,
         "scrollY": "400px"
         
    }); // first table 
    
	var catalogTable = $('#table2').dataTable({
       // "sPaginationType": "full_numbers",
        "bFilter": true
       
    }); // Second table 
   
    stockTable.on('click', 'tbody tr' ,function() {
		 $(this).toggleClass('selected');
    });
	catalogTable.on('click', 'tbody tr' ,function() {
		 $(this).toggleClass('selected');
    });
	
	$('#LeftMove').on('click',function () {
		moveRows(catalogTable, stockTable);
	});
	
	$('#RightMove').on('click',function () {
		moveRows(stockTable, catalogTable);
	});
	
});
	
function moveRows(fromTable, toTable){
	var $row= fromTable.find(".selected");
	$.each($row, function(k, v){
		if(this !== null){
			addRow = fromTable.fnGetData(this);
			toTable.fnAddData(addRow);
			fromTable.fnDeleteRow(this);
		}
	});
};


 