const playBtn = document.getElementById("playBtn");

let audioContext;
let audioBuffer;

async function playSound() {
	await loadSound();
	
	await audioContext.resume();
	
	const source = audioContext.createBufferSource();
	
	source.connect(audioContext.destination);
	
	source.buffer = audioBuffer;
	
	source.start(0);
}

async function loadSound() {
	if (!audioContext) {
		audioContext = new AudioContext();
	}
	
	if (!audioBuffer) {
		const resp = await fetch(require("url:./cattle.mp3"));
		
		const buf = await resp.arrayBuffer();
		
		audioBuffer = await audioContext.decodeAudioData(buf);
	}
}

function mousePressed() {
	console.log('hi!')
	playSound();
}

playBtn.addEventListener('click', mousePressed);