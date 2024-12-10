import request from "./request";
import buildResultPage from "./result-page";
import buildErrorPage from "./error-page";
import buildStartPage from "./start-page";
import buildLoadingPage from "./loading-page";

export default function restart() {
  buildStartPage()
    .then((query) => {
      return Promise.all([request(query), buildLoadingPage()]);
    })
    .then((values) => {
      buildResultPage(values[0]);
    })
    .catch((err) => {
      buildErrorPage(err);
    });
}
