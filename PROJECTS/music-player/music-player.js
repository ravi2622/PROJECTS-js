let progress = document.getElementById("progress");
let ctrlicon = document.getElementById("carticon");
let song = document.getElementById("song");
let carticon_div = document.getElementById("carticon-div")

console.dir(song);

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}


ctrlicon.addEventListener("click", PlayPause);
// ctrlicon.addEventListener("click", PlayPause);

function PlayPause() {
    if (ctrlicon.classList.contains("fa-pause")) {
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
        // song.onloadedmetadata();

    }
    else {
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
        // song.onloadedmetadata();
    }
    
}

if(song.play()) {
    setInterval(() => {
    progress.value = song.currentTime;
    if (song.currentTime == song.duration) {
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
    }, 500);
}


progress.onchange = function() {
    song.currentTime = progress.value;
    song.play();
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
}


