function reset_board() {
	var myClasses = document.querySelectorAll('.hold'),
	i = 0,
	l = myClasses.length;

	for (i; i < l; i++) {
		myClasses[i].classList.add('m-fadeIn');
		myClasses[i].classList.remove('m-fadeOut');
	}
}

function clear_board() {
	var myClasses = document.querySelectorAll('.hold'),
	i = 0,
	l = myClasses.length;

	for (i; i < l; i++) {
		myClasses[i].classList.add('m-fadeOut');
		myClasses[i].classList.remove('m-fadeIn');
	}
}

var getJSON = function(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			var status = xhr.status;
			if (status === 200) {
				callback(null, xhr.response);
			} else {
				callback(status, xhr.response);
			}
		};
		xhr.send();
};


function load_climbs() {
	getJSON('/moon/climbs/lstm_2016.json',
	function(err, data) {
		if (err !== null) {
			alert('Can\'t load climb data: ' + err);
		} else {
			holds = data
		}
	});
}

holds = [[
	["A", "18"],
	["A", "11"],
	["B", "8"],
	["C", "13"],
	["C", "10"],
	["D", "15"],
	["E", "13"],
	["E", "11"],
	["F", "8"],
	["F", "5"],
	["G", "13"],
	["H", "10"],
	["H", "5"],
	["I", "8"],
]]

function random_climb() {
	clear_board();
	var climb = holds[Math.floor(Math.random() * holds.length)]

	for (var i = climb.length - 1; i >= 0; i--) {
		var desired_class = "col_"+climb[i][0]+" row_"+climb[i][1];
		var hold = document.getElementsByClassName(desired_class)[0];
		hold.classList.add('m-fadeIn');
		hold.classList.remove('m-fadeOut');
	}
}