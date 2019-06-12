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
	var index = Math.floor(Math.random() * holds.original.length)
	display(holds.original[index].moves)
	display_grades(holds.original[index].grade)
}

function display(moves) {
	clear_board();
	for (var i = moves.length - 1; i >= 0; i--) {
		var hold = document.getElementsByClassName(moves[i])[0];
		hold.classList.add('m-fadeIn');
		hold.classList.remove('m-fadeOut');
	}
}

function display_grades(grades) {
	console.log(grades)
	var container = document.getElementById("grade-container");
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	for (var algorithm in grades){
		console.log("wow")
        var text = document.createElement('p');
        text.append(algorithm + " " + grades[algorithm]);
        container.append(text);
      }
}