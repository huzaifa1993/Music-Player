export const songs = [
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



export const image = document.querySelector('img');
export const title = document.getElementById('title');
export const artist = document.getElementById('artist');
export const music = document.querySelector ('audio');
export const progressContainer =document.getElementById('progress-container');
export const progress = document.getElementById('progress');  
export const currentTimeEl = document.getElementById('current-time');
export const durationEl = document.getElementById('duration');
export const prevBtn = document.getElementById('prev');
export const playBtn = document.getElementById('play');
export const nextBtn = document.getElementById('next');

export function setProgressBar(e) {
    console.log(e);
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const {duration} = music;
    music.currentTime = (clickX / width) * duration;
}
