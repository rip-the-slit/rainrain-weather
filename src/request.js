import apiCaller from "./api-caller";
import parse from "./parse";

export default function request(query) {
  return new Promise((resolve) => {
    apiCaller(query)
      .then((response) => {
        return parse(response);
      })
      .then((data) => resolve(JSON.stringify(data)))
      .catch((err) => alert(err));
  });
}
