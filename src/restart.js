import request from "./request";
import buildResultPage from "./result-page";
import buildErrorPage from "./error-page";
import buildStartPage from "./start-page";
import { playSubmit } from "./sound-engine";

export default function restart() {
  buildStartPage()
    .then((query) => {
      playSubmit().start()
      return Promise.all([request(query)]);
    })
    .then((values) => {
      buildResultPage(values[0]);
    })
    .catch((err) => {
      buildErrorPage(err);
    });
}
