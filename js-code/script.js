let counter = 0;

function sayHello() {
    alert("Hello from JavaScript 👋");
}

function increase() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function decrease() {
    counter--;
    document.getElementById("counter").textContent = counter;
}

function changeText() {
    document.getElementById("dom-text").textContent =
        "DOM updated successfully 🚀";
}
	function toggleCard(card) {
		document.querySelectorAll('.card').forEach(c => {
			if (c !== card) c.classList.remove('open');
		});
		card.classList.toggle('open');
	}

