import request from "./request";
import buildResultPage from "./result-page";
import buildErrorPage from "./error-page";
import buildStartPage from "./start-page";
import buildLoadingPage from "./loading-page";

export default function restart() {
  buildStartPage()
    .then((query) => {
      return Promise.allSettled([request(query), buildLoadingPage()]);
    })
    .then((values) => {
      values[1].value.stop();
      if (values[0].status == "rejected") {
        buildErrorPage(values[0].reason);
      } else {
        buildResultPage(values[0].value);
      }
    });
}
