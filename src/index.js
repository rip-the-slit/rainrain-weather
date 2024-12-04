import buildStartPage from "./start-page";
import "./start-page";
import "./common.css";
import "./start-page.css";
import "./result-page.css";
import "./error-page.css";
import detectCloud from "./cloud-detector";
import request from "./request";
import buildResultPage from "./result-page";
import buildErrorPage from "./error-page";
export default document.querySelector(".content");

buildStartPage()
  .then((query) => {
    return Promise.all([request(query)]);
  })
  .then((values) => {
    buildResultPage(values[0]);
  })
  .catch((err) => {
    buildErrorPage(err);
  });

const bgVideo = document.querySelector(".video");
bgVideo.addEventListener("loadeddata", () => {
  detectCloud(bgVideo);
});
