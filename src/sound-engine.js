import submitUrl from "./assets/submit.wav";
import errorUrl from "./assets/error.wav";
import closeUrl from "./assets/close.wav";
import normalUrl from "./assets/normal.wav";
import rainyUrl from "./assets/rainy.wav";
export { playSubmit, playError, playClose, playNormal, playRainy };

const audioCtx = new AudioContext();

async function fetchAudioBuffer(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  console.log(audioBuffer);
  return audioBuffer;
}

/* function resumeAudioContext() {
  if (audioCtx.state == "suspended") {
    audioCtx.resume();
  }
} */

function play(bufferSource, loop = false, gain = false) {
  return function () {
    const source = audioCtx.createBufferSource();
    source.buffer = bufferSource;
    source.loop = loop;
    if (gain) {
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 2;
      source.connect(gainNode).connect(audioCtx.destination);
      return source;
    }
    source.connect(audioCtx.destination);
    return source;
  };
}

const submit = await fetchAudioBuffer(submitUrl);
const error = await fetchAudioBuffer(errorUrl);
const close = await fetchAudioBuffer(closeUrl);
const normal = await fetchAudioBuffer(normalUrl);
const rainy = await fetchAudioBuffer(rainyUrl);

const playSubmit = play(submit);
const playError = play(error, false, true);
const playClose = play(close);
const playNormal = play(normal);
const playRainy = play(rainy);
