import content from "./index";

export default function detectCloud(video) {
  const canvas = document.createElement("canvas");

  canvas.width = 50;
  canvas.height = 20;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 50, 0, 50, 20, 0, 0, 50, 20);
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let globalBrightness = 0;
  for (let i = 0; i < imgData.length; i += 4) {
    const red = imgData[i];
    const green = imgData[i + 1];
    const blue = imgData[i + 2];
    const localBrightness = (red + green + blue) / 3;
    globalBrightness += localBrightness;
  }
  const averageBrightness = globalBrightness / (imgData.length / 4);

  const displayBrightness = 1.4 - averageBrightness / 310;

  new Promise((resolve) => {
    setTimeout(resolve, 700);
  }).then(() => {
    for (const element of content.children) {
      element.style.filter = `brightness(${displayBrightness})`;
    }
  });
  new Promise((resolve) => {
    setTimeout(resolve, 500);
  }).then(() => detectCloud(video));
}
