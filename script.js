const count = document.querySelector(".count");
const  lower= document.querySelector(".lower");
const add = document.querySelector(".add");
let counter = 0;

function addCount() {
	count.textContent = ++counter;
}

function lowerCount() {
	count.textContent = --counter;
}

add.addEventListener("click", addCount);
lower.addEventListener("click", lowerCount);


