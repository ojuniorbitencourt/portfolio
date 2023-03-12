// function playAudio() {
//   var audio = document.getElementById("audio");
//   if (audio.paused) {
//     audio.play();
//   } else {
//     audio.pause();
//   }
// }

function playAudio() {
  var audio = document.getElementById("audio");
  var music = document.querySelector(".music");
  var bars = document.querySelectorAll(".bar");
  
  if (audio.paused) {
    audio.play();
    music.classList.add("playing");
    for (var i = 0; i < bars.length; i++) {
      bars[i].style.animationPlayState = "running";
    }
  } else {
    audio.pause();
    music.classList.remove("playing");
    for (var i = 0; i < bars.length; i++) {
      bars[i].style.animationPlayState = "paused";
    }
  }
}

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  });
});