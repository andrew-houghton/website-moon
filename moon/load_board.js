function reset_board() {
	var myClasses = document.querySelectorAll('.hold'),
	i = 0,
	l = myClasses.length;

	for (i; i < l; i++) {
	    myClasses[i].style.display = 'block';
	}
}

function clear_board() {
	var myClasses = document.querySelectorAll('.hold'),
	i = 0,
	l = myClasses.length;

	for (i; i < l; i++) {
	    myClasses[i].style.display = 'none';
	}
}

holds = [
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
]

function load_board() {
	clear_board();

	for (var i = holds.length - 1; i >= 0; i--) {
		var desired_class = "col_"+holds[i][0]+" row_"+holds[i][1];
		var hold = document.getElementsByClassName(desired_class)[0];
	    hold.style.display = 'block';
	}
}