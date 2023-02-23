const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

// Добавляем обработчик событий по клику клавиатуры;
document.addEventListener('keydown', function(event) {
	jump(); //добавляет анимацию с классом .jump из css к элементу
});

function jump() {
	if (dino.classList != 'jump') {
		dino.classList.add('jump');
	}
	setTimeout(function() {
		dino.classList.remove('jump');
	}, 300) // каждые 300 милисек удаляет класс jump
}

// setInterval позволяет вызывать функцию регулярно через определенный интервал времени:
let isAlive = setInterval (function(){
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

	if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
		alert('	GAME OVER!!!')
	}
}, 10);