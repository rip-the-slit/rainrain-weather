import apiCaller from "./api-caller";
import parse from "./parse";
import buildStartPage from "./start-page";
import "./start-page";
import "./common.css";
import "./start-page.css";
import detectCloud from "./cloud-detector";
export default document.querySelector(".content");

function request() {
  apiCaller(prompt("Enter location", "valle de la pascua"))
    .then((response) => {
      return parse(response);
    })
    .then((data) => alert(JSON.stringify(data)))
    .catch((err) => alert(err));
}

request;
buildStartPage();

const bgVideo = document.querySelector(".video");
bgVideo.addEventListener("loadeddata", () => {
  detectCloud(bgVideo);
});
