$(document).ready(function () {
	$('#employees').dataTable();
});
//текущаяя дата
document.getElementById("current_data").innerHTML = get_date();

function get_date() {
	var d = new Date(),
		minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
		hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
		months = ['01.', '02', '03', '04.', '05', '06', '07', '08', '09', '10', '11', '12'],
		days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
	return hours + ':' + minutes + ' ' + days[d.getDay()] + '</br>' + d.getDate() + '/' + months[d.getMonth()] + '/' + d.getFullYear();
}

// Работа с таблицей
$(document).ready(function () {
	$('#employees').dataTable();
});
	(function () { //чтобы не засорять глобал.
		var inputs = document.getElementById('all').getElementsByTagName('input');
		document.getElementById('checkAll').addEventListener('click', function checkme(e, check) {
			check = check === undefined ? false : true;
			for (var i = 0, inputs_len = inputs.length; i < inputs_len; i++) {
				if (!check && !inputs[i].checked) {
					checkme(e, true);
					return;
				}
				inputs[i].checked = check;
			}
		});
	})();
