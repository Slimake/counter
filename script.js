const count = document.querySelector(".count");
const  lower= document.querySelector(".lower");
const add = document.querySelector(".add");
let counter = 0;

function addCount() {
	if (counter >= 0) {
		count.textContent = ++counter;
	}
}

function lowerCount() {
	if (counter > 0) {
		count.textContent = --counter;
	}
}

add.addEventListener("click", addCount);
lower.addEventListener("click", lowerCount);