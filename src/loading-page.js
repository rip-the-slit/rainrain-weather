import cleanDOM from "./dom-cleaner";
import content from "./index"
import loaderSvg from "./assets/loader.svg"
import { playLonging } from "./sound-engine";

export default function buildLoadingPage() {
  cleanDOM()
  content.classList.add("loading")

  const div = document.createElement("div")

  const loader = document.createElement("div")
  loader.classList.add("loader")
  loader.style.backgroundImage = `url(${loaderSvg})`

  div.appendChild(loader)

  content.appendChild(div)

  const sound = playLonging()
  sound.start()

  return new Promise((resolve) => {
    setTimeout(() => {
      sound.stop()
      resolve()
    }, 4500);
  })
}