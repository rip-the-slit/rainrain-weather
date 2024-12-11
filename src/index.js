import "./start-page";
import "./common.css";
import "./start-page.css";
import "./result-page.css";
import "./error-page.css";
import "./loading-page.css"
import detectCloud from "./cloud-detector";
import restart from "./restart";
import addEventListenerToSoundIcon from "./sound-icon";
export default document.querySelector(".content");

restart()

addEventListenerToSoundIcon()

const bgVideo = document.querySelector(".video");
detectCloud(bgVideo)
