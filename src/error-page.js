import createCloseButton from "./close-button";
import cleanDOM from "./dom-cleaner";
import content from "./index";
import { playError } from "./sound-engine";

export default function buildErrorPage(err) {
  cleanDOM();
  content.classList.add("error");

  const div = document.createElement("div");

  const code = document.createElement("h1");
  code.classList.add("code");
  code.textContent = err.message;
  div.appendChild(code);

  const cause = document.createElement("p");
  cause.classList.add("cause");
  let causeText;
  switch (err.message) {
    case "400":
      causeText = "Even when requesting an API you need manners...";
      break;
    case "401":
      causeText = "You are not allowed to know the weather";
      break;
    case "404":
      causeText = "That's not a real place... probably";
      break;
    case "429":
      causeText = "Weather data is for a select few";
      break;
    case "500":
      causeText = "Even we don't know what happened, try again maybe";
      break;
    default:
      break;
  }

  cause.textContent = causeText;

  div.appendChild(cause);

  div.appendChild(createCloseButton())

  content.appendChild(div);

  playError().start(0)
}
