const musicButton = document.querySelector("#musicButton");

const audio = new Audio("assets/audio/hero cancion.mp3");

audio.loop = true;

let isPlaying = false;

musicButton.addEventListener("click", () => {

    if (isPlaying) {
        
        audio.pause();

        isPlaying = false;

        musicButton.textContent = "♫";

        musicButton.classList.remove("is-playing");

    } else {

        audio.play()
        .then(() => {

            isPlaying = true;

            musicButton.textContent = "❚❚";

            musicButton.classList.add("is-playing");

        })
        .catch(() => {

            isPlaying = false;

            musicButton.textContent = "♫";

            musicButton.classList.remove("is-playing");

        });

    }

});