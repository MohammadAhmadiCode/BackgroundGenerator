var backgroundText = document.querySelector("h3");
var leftColor = document.querySelector(".leftColor");
var rightColor = document.querySelector(".rightColor");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ leftColor.value 
	+ ", " 
	+ rightColor.value 
	+ ")";

	backgroundText.textContent = body.style.background + ";";
}

leftColor.addEventListener("input", setGradient);
rightColor.addEventListener("input", setGradient);