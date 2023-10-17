let color1 = document.getElementsByTagName("input")[0] ;
let color2 = document.getElementsByTagName("input")[1] ;

let h3 = document.getElementsByTagName("h3")[0] ;

let body = document.getElementById("gradient");

const setGradient = () => {
	
	body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value + ")";

	h3.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);