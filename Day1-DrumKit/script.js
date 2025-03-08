const notes_div = document.querySelectorAll(".key");

window.addEventListener("keyup", (e) => {
  if (e.code.includes("Key")) {
    const audio = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);
    const key_div = document.querySelector(`div[data-key="${e.key.toLowerCase()}"]`);
    if(key_div){
        key_div.classList.add('playing');
    }
    playAudio(audio);
  }
});

notes_div.forEach((div) => {
  div.addEventListener("click", playDrum);
});

notes_div.forEach((div) => {
    div.addEventListener("transitionend", (e) => {
    //   if (e.propertyName === "transform") {
        div.classList.remove("playing");
    //   }
    });
  });

function playDrum(e) {
  this.classList.add('playing');
  const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
  playAudio(audio);
}

const playAudio = (audio) => {
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
};





