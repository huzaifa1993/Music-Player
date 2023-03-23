const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector ('audio');
const progressContainer =document.getElementById('progress-contasiner');
const progress = document.getElementById('progress');  

const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songs = [
    {
        name: '1',
        displayName: 'Al Fatiha',
        artist :'Abu Baker Shatri',
    },
    {
        name: '2',
        displayName: 'Al Kader',
        artist :'Mashari Alafasi',
    },
    {
        name: '3',
        displayName: 'Al Fajar ',
        artist :'Islam Sobhi',
    },
    {
        name: '4',
        displayName: 'Al Maearej',
        artist :'Abdurahman Osi',
    }
];

let isPlaying = false;

function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'pause');
    music.play();
}

function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'play');
     music.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

function loadSong (song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

let songIndex = 0;

function prevSong () {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong () {
    songIndex++;
    if (songIndex > songs.length -1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

loadSong(songs[songIndex]);
function updateProgressBar(e) {
    if (isPlaying) {
        const {duration , currentTime} = e.srcElement;
        console.log(duration, currentTime);
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);