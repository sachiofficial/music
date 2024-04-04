// JavaScript for Music Player

// Get DOM elements
const musicContainer = document.getElementById("music-container");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");


//SONGS HOME PAGE ------------------------


document.getElementById("play2").addEventListener("click", () => {
  loadSong("Nimawa");
  playSong();
});


document.getElementById("play3").addEventListener("click", () => {
  loadSong("Ape Hadhakam");
  playSong();
});


document.getElementById("play4").addEventListener("click", () => {
  loadSong("Alinde");
  playSong();
});


document.getElementById("play5").addEventListener("click", () => {
  loadSong("Hadakari");
  playSong();
});


document.getElementById("play6").addEventListener("click", () => {
  loadSong("Mathaka Makala");
  playSong();
});


document.getElementById("play7").addEventListener("click", () => {
  loadSong("Kasi Saban Pena");
  playSong();
});



// SONG NAMES --------------------

const songs = [
  "Aaley Wandanawak",
  "Alinde",
  "Ape Hadhakam",
  "Hadaganna Me Hitha",
  "Hadakari",
  "Highway wage yan",
  "Kasi Saban Pena",
  "Maga Haree",
  "Mathaka Makala",
  "Mithya Mayam",
  "Nimawa"
];
let songIndex = 0;

// Function to capitalize song title
function getSongTitle(song) {
  return song.charAt(0).toUpperCase() + song.slice(1);
}

// Load song details
function loadSong(song) {
  title.innerText = getSongTitle(song);
  audio.src = `https://github.com/sachiofficial/music/blob/main/song/${song}.mp3?raw=true`;
  cover.src = `https://github.com/sachiofficial/music/blob/main/cover%20images/${song}.png?raw=true`;
}

// Play song
function playSong() {
  musicContainer.classList.add("play");
  playButton.querySelector("i.fas").classList.remove("fa-play");
  playButton.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  playButton.querySelector("i.fas").classList.remove("fa-pause");
  playButton.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadSong(songs[songIndex]);
  playSong();
}

// Next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0;
  loadSong(songs[songIndex]);
  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress on click
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playButton.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  isPlaying ? pauseSong() : playSong();
});

prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);

// Initial song load
loadSong(songs[songIndex]);
