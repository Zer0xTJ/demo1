let counterElement = document.getElementById("counter");
let counter = 0;
setInterval(() => (counterElement.innerText = counter++), 1000);
