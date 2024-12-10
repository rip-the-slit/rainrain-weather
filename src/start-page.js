import logo from "./assets/rain-rain.svg";
import magnify from "./assets/magnify.svg";
import content from "./index";
import cleanDOM from "./dom-cleaner";
import { playSubmit } from "./sound-engine";

export default function buildStartPage() {
  cleanDOM()
  content.classList.add("start");

  const img = document.createElement("img");
  img.classList.add("logo");
  img.src = logo;
  content.appendChild(img);

  const searchbox = document.createElement("div");
  searchbox.classList.add("searchbox");

  const searchIcon = document.createElement("img");
  searchIcon.classList.add("search-icon");
  searchIcon.src = magnify;
  searchbox.appendChild(searchIcon);

  const search = document.createElement("input");
  search.id = "search";
  search.placeholder = "A place, somewhere";
  searchbox.appendChild(search);

  const button = document.createElement("button");
  button.textContent = "Search";
  searchbox.appendChild(button);

  content.appendChild(searchbox);

  return new Promise((resolve) => {
    button.addEventListener("click", () => {
      playSubmit().start()
      if (search.validity.valid) {
        resolve(search.value);
      }
    });
  });
}
