// JavaScript functionality for the music player

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3'); // Path to your songs
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.querySelector('.masterSong');
let songItems = Array.from(document.getElementsByClassName('songItemPlay'));

// Songs data
let songs = [
    { songName: "Baaton ko teri bhula na sake", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "KAUN TUJHE", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Hangover", filePath: "songs/3.mp3", coverPath: "Hangover.jpg" },
    { songName: "Teri baaton mein aisa uljha jiya", filePath: "songs/4.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let Me Love You", filePath: "songs/5.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let Me Love You", filePath: "songs/6.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let Me Love You", filePath: "songs/7.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let Me Love You", filePath: "songs/8.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let Me Love You", filePath: "songs/9.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let Me Love You", filePath: "songs/10.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let Me Love You", filePath: "songs/11.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let Me Love You", filePath: "songs/12.mp3", coverPath: "covers/3.jpg" },
    // Add more songs here
];

// Update all song items
songItems.forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.textContent = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});

// Play/pause button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek song
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Next song
let next = document.getElementById('next');
next.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.textContent = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

// Previous song
let previous = document.getElementById('previous');
previous.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.textContent = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

// Utility function to make all play icons uniform
function makeAllPlays() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}
