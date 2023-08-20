console.log("Welcome to My Music Player");

// INITIALIZE VARIABLES
let songIndex = 0;

let AudioElement = new Audio("WanoKuni.mp3");

let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressBar");
let songItem = Array.from(document.getElementsByClassName("SongItem"));
let progress;
let buttons = Array.from(document.getElementsByClassName("PlayTheSong"));
let PreviousSong = document.getElementById("PreviousSong");
let NextSong = document.getElementById("NextSong");
let masterSongName=document.getElementById("masterSongName");

let songs = [
  { songName: "Drums of Liberation", filePath: "WanoKuni.mp3" },
  { songName: "Cartoon On", filePath: "CartoonOn.mp3" },
  { songName: "Blank Space", filePath: "BlankSpace.mp3" },
  { songName: "Deja Vu", filePath: "DejaVu.mp3" },
  { songName: "The Lazy Song", filePath: "LazySong.mp3" },
  { songName: "Heat Waves", filePath: "HeatWaves.mp3" },
  { songName: "Love The Way You Lie", filePath: "LoveTheWayYouLie.mp3" },
  { songName: "Mocking Bird", filePath: "MokingBird.mp3" },
  { songName: "Paper Rings", filePath: "PaperRings.mp3" },
  { songName: "Traitor", filePath: "Traitor.mp3" },
  { songName: "Thunderclouds", filePath: "Thunderclouds.mp3" },
  { songName: "Vampire", filePath: "vampire.mp3" },
  { songName: "Sunflower", filePath: "Sunflower.mp3" },
];

//Filling The songs in the List
songItem.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle Play/Pause on Click

masterPlay.addEventListener("click", function () {
  if (AudioElement.paused || AudioElement.currentTime <= 0) {
    AudioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    AudioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});

AudioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");

  /* update SeekBar */

  progress = parseInt((AudioElement.currentTime / AudioElement.duration) * 100);

  // console.log(progress);
  myProgressbar.value = progress;
});

// Change Time of the song by Changing the progress bar
myProgressbar.addEventListener("change", () => {
  AudioElement.currentTime =
    (myProgressbar.value * AudioElement.duration) / 100;
});

songItem.forEach((element) => {
  element.addEventListener("click", function (presser) {
    // console.log(presser.target);
    // makeAllPlays()
    // removed a class from class List
    // added a class to class List
    songIndex = parseInt(presser.target.id);
    // console.log('songIndex')
    // console.log(songIndex)
//


masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");


    masterSongName.innerText =songs[songIndex].songName;
    AudioElement.src = songs[songIndex].filePath;
    AudioElement.currentTime = 0;
    AudioElement.play();
  });
});

NextSong.addEventListener("click", function () {
  if (songIndex >=12) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  masterSongName.innerText =songs[songIndex].songName;
  AudioElement.src = songs[songIndex].filePath;
  AudioElement.currentTime = 0;
  AudioElement.play();
});

PreviousSong.addEventListener("click", function () {
  if (songIndex == 0) {
    songIndex = 12;
  } else {
    songIndex -= 1;
  }
  masterSongName.innerText =songs[songIndex].songName;
  AudioElement.src = songs[songIndex].filePath;
  AudioElement.currentTime = 0;
  AudioElement.play();
});


