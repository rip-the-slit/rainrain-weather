import apiCaller from "./api-caller";
import parse from "./parse";

apiCaller("valle de la pascua")
  .then((response) => {
    return parse(response);
  })
  .then((data) => console.log(data));
