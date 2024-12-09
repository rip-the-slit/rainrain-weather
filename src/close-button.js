import buildStartPage from "./start-page";

export default function createCloseButton() {
  const button = document.createElement("button");
  button.id = "close";
  button.textContent = "close";
  button.addEventListener("click", buildStartPage);
  return button;
}
