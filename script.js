const count = document.querySelector(".count");
const  lower= document.querySelector(".lower");
const add = document.querySelector(".add");
let counter = 0;

function addCount() {
	count.textContent = ++counter;
	if (counter === 0) {
		count.style.color = "black";
	}
	if (counter > 0) {
		count.style.color = "green";
	}
}

function lowerCount() {
	count.textContent = --counter;
	if (counter === 0) {
		count.style.color = "black";
	}
	if (counter < 0) {
		count.style.color = "red";
	}
}

add.addEventListener("click", addCount);
lower.addEventListener("click", lowerCount);