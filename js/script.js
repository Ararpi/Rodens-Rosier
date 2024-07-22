//Seccion Aliento
const txts = document.querySelector(".textos-cambiantes").children,
	txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
	textOutTimer = 2800;

function animateText() {
	for (let i = 0; i < txtsLen; i++) {
		txts[i].classList.remove("text-in", "text-out");
	}
	txts[index].classList.add("text-in");

	setTimeout(function () {
		txts[index].classList.add("text-out");
	}, textOutTimer)

	setTimeout(function () {

		if (index == txtsLen - 1) {
			index = 0;
		}
		else {
			index++;
		}
		animateText();
	}, textInTimer);
}
window.onload = animateText;

//Cambiar Año
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;
