let count = 0;

let CURRENT_NUMBER = document.getElementById('currentNumber');
console.log(CURRENT_NUMBER)

function increment() {
	count++;
	if (count >= 0){
		CURRENT_NUMBER.style.color = "black"
	}
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	if (count < 0 ) {
		CURRENT_NUMBER.style.color = "red"
	}
	CURRENT_NUMBER.innerHTML = count;
}

function clean() {
	CURRENT_NUMBER.innerHTML = 0;
	count = 0
	CURRENT_NUMBER.style.color = "black"
}
