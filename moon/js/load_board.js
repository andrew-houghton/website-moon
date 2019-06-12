
// Swap board

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

function random_climb() {
	var model = document.querySelector('input[name="model"]:checked').value;
	var index = Math.floor(Math.random() * holds[model].length)
	display(holds[model][index].moves)
	display_grades(holds[model][index].grade)
}

function display(moves) {
	clear_board();
	for (var i = moves.length - 1; i >= 0; i--) {
		var hold = document.getElementById(moves[i]);
		if (hold != null) {
			hold.classList.add('m-fadeIn');
			hold.classList.remove('m-fadeOut');
		}
	}
}

function display_grades(grades) {
	var container = document.getElementById("grade-container");
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	for (var algorithm in grades){
        var text = document.createElement('p');
        text.append(algorithm + " " + grades[algorithm]);
        container.append(text);
      }
}