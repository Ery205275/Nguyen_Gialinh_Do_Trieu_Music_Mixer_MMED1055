(() => {
	// select and work with the element 
	console.log('fired!');


let theAudio = document.querySelector("audio"),
	playButton = document.querySelector("button"),
	albumArt = document.querySelector(".track-ref");

function playTrack() {
	
	let targetTrack = this.dataset.trackref;

	theAudio.src = 'audio/${targetTrack}.mp3';

	theAudio.volume= 0.25;

	theAudio.load();

	playTrack();
}

function stopTrack(){
	theAudio.pause();
}
function playTrack(){
	theAudio.play();
}

function rewindTrack() {
	theAudion.currentTime =0;
}


for (cover of albumArt) {
	debugger;
	cover.addEventListener("click", loadTrack)
}

controlButtons{0}.addEventListener("click", playTrack);
controlButtons{1}.addEventListener("click", stopTrack);
controlButtons{2}.addEventListener("click", rewindTrack);

})()