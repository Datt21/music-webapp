let playing = true;
let random = false;

const playBtn = document.querySelector('.player-play');
const nextBtn = document.querySelector('.player-next');
const prevBtn = document.querySelector('.player-prev');
const thumb = document.querySelector('.player-image');
// const song = document.querySelector('.player-song');
const songList = document.querySelectorAll('.song');
const songType = document.querySelectorAll('.player-type');
const songTitle = document.querySelectorAll('.player-title');
const progressBar = document.querySelector('#progress-bar');

let songIndex = 0;

let songs = [
    {   
        id : '01',
        idd: '1',
        name: 'Ampyx Holo',
        type: 'Pop King',
        image: './images/Beat.jpg',
        song: './files/Picking Up A Girl.mp3'
    },
    {   
        id : '02',
        idd: '2',
        name: 'Spark',
        type: 'Pop King',
        image: './images/diadon.jpg',
        song: './files/spark.mp3'
    },
    {   
        id : '03',
        idd: '3',
        name: 'Summer',
        type: 'Pop King',
        image: './images/single.jpg',
        song: './files/summer.mp3'
    },
    {   
        id : '04',
        idd: '4',
        name: 'Never Give Up',
        type: 'Pop King',
        image: './images/musicband.jpg',
        song: './files/TunePocket-Never-Give-Up-Preview.mp3'
    },
    {   
        id : '05',
        idd: '5',
        name: 'On The Way',
        type: 'Pop King',
        image: './images/Beat.jpg',
        song: './files/TunePocket-On-The-Way-To-Eternity-Preview.mp3'
    },
    {   
        id : '06',
        idd: '6',
        name: 'A Big Day Ahead',
        type: 'Pop King',
        image: './images/Anne.jpg',
        song: './files/A Big Day Ahead.mp3'
    },
    {   
        id : '07',
        idd: '7',
        name: 'A Nature Symphony',
        type: 'Pop King',
        image: './images/Beat.jpg',
        song: './files/A Nature Symphony.mp3'
    },
    {   
        id : '08',
        idd: '8',
        name: 'Ampyx Holo',
        type: 'Pop King',
        image: './images/Beat.jpg',
        song: './files/03. Picking Up A Girl.mp3'
    },
    {   
        id : '09',
        idd: '9',
        name: 'Ampyx Holo',
        type: 'Pop King',
        image: './images/Beat.jpg',
        song: './files/03. Picking Up A Girl.mp3'
    },
    {   
        id : '10',
        idd: '10',
        name: 'Ampyx Holo',
        type: 'Pop King',
        image: './images/Beat.jpg',
        song: './files/03. Picking Up A Girl.mp3'
    },
    {   
        id : '11',
        idd: '11',
        name: 'Ampyx Holo',
        type: 'Pop King',
        image: './images/Beat.jpg',
        song: './files/03. Picking Up A Girl.mp3'
    },
    {   
        id : '12',
        idd: '12',
        name: 'Ampyx Holo',
        type: 'Pop King',
        image: './images/Beat.jpg',
        song: './files/03. Picking Up A Girl.mp3'
    },
    {   
        id : '13',
        idd: '13',
        name: 'Ampyx Holo',
        type: 'Pop King',
        image: './images/Beat.jpg',
        song: './files/03. Picking Up A Girl.mp3'
    },
    {   
        id : '14',
        idd: '14',
        name: 'Ampyx Holo',
        type: 'Pop King',
        image: './images/Beat.jpg',
        song: './files/03. Picking Up A Girl.mp3'
    },
];

let show_song = document.querySelector('#show-song');

songs.forEach(e => {
    let list = `
    <div class="song" data-index="${e.idd}">
        <span class="song-index">${e.id}</span>
        <img src="${e.image}" alt="" class="song-image">
        <i class='bx bx-caret-right song-play' ></i>
        <h4 class="song-title">${e.name}</h4>
        <h5 class="song-album">${e.type}</h5>
        <time class="song-time">3:49</time>
        <i class='bx bx-dots-vertical-rounded song-icon'></i>
    </div>
    `
    show_song.insertAdjacentHTML("beforeend", list)
})

function handleClickEachSong(e) {
    const index = parseInt(e.target.dataset.index);
    nextSong(index);
}

