import content from "./index";

const canvas = document.createElement("canvas");

canvas.width = 50;
canvas.height = 20;

const ctx = canvas.getContext("2d");

export default function detectCloud(video) {
  ctx.drawImage(video, 50, 0, 50, 20, 0, 0, 50, 20);
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let globalBrightness = 0;
  for (let i = 0; i < imgData.length; i += 4) {
    globalBrightness += (imgData[i] + imgData[i + 1] + imgData[i + 2]) / 3;
  }
  const averageBrightness = globalBrightness / (imgData.length / 4);

  const displayBrightness = 1.4 - averageBrightness / 310;

  setTimeout(() => {
    for (const element of content.children) {
      element.style.filter = `brightness(${Math.trunc(displayBrightness * 100) / 100})`;
    }
  }, 700);

  setTimeout(() => {
    detectCloud(video);
  }, 500);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
