import { playToggleAudio, toggleAudioContext } from "./sound-engine"

export default function addEventListenerToSoundIcon() {
  const player = document.querySelector(".sound")
  player.classList.add("playing")
  player.addEventListener("click", () => {
    playToggleAudio().start()
    toggleAudioContext()
    if (player.classList.contains("playing")) {
      player.setLooping(false)
      player.classList.remove("playing")
      player.classList.add("paused")
    } else {
      player.setLooping(true)
      player.play()
      player.classList.remove("paused")
      player.classList.add("playing")
    }
  })
}