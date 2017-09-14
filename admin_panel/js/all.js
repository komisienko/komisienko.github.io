
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

