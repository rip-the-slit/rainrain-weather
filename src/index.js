import apiCaller from "./api-caller";
import parse from "./parse";

apiCaller(prompt("Enter location", "valle de la pascua"))
  .then((response) => {
    return parse(response);
  })
  .then((data) => alert(JSON.stringify(data)))
  .catch((err) => alert(err));
