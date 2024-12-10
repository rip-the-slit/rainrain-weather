import restart from "./restart";
import { playClose } from "./sound-engine";

export default function createCloseButton() {
  const button = document.createElement("button");
  button.id = "close";
  button.textContent = "close";
  button.addEventListener("click", () => {
    restart()
    playClose().start()
  });
  return button;
}
