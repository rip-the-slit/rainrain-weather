import apiCaller from "./api-caller";
import parse from "./parse";

export default function request(query) {
  return new Promise((resolve, reject) => {
    apiCaller(query)
      .then((response) => {
        return parse(response);
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
