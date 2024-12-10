import "./start-page";
import "./common.css";
import "./start-page.css";
import "./result-page.css";
import "./error-page.css";
import detectCloud from "./cloud-detector";
import restart from "./restart";
export default document.querySelector(".content");

restart()

const bgVideo = document.querySelector(".video");
detectCloud(bgVideo)
