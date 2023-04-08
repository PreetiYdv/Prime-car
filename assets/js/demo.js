// video play-pause btn
  // Video
  var video = document.getElementById("video");
  // Buttons
  var playButton = document.getElementById("play-pause");

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();
    playButton.innerHTML = "    ";
  } else {
    video.pause();
    playButton.innerHTML = "";
  }
});


// tilt hover
let el = document.getElementById('tilt')

const height = el.clientHeight
const width = el.clientWidth
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 20 * ((xVal - width / 2) / width)
  const xRotation = -20 * ((yVal - height / 2) / height)
  
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  el.style.transform = string
}
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})
