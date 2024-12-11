import submitUrl from "./assets/submit.wav";
import errorUrl from "./assets/error.wav";
import closeUrl from "./assets/close.wav";
import normalUrl from "./assets/normal.wav";
import rainyUrl from "./assets/rainy.wav";
import longingUrl from "./assets/longing.wav";
import toggleAudioUrl from "./assets/toggle-audio.wav";
export {
  playSubmit,
  playError,
  playClose,
  playNormal,
  playRainy,
  playLonging,
  playToggleAudio,
  toggleAudioContext
};

const audioCtx = new AudioContext();

async function fetchAudioBuffer(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  console.log(audioBuffer);
  return audioBuffer;
}

function toggleAudioContext() {
  if (audioCtx.state == "suspended") {
    audioCtx.resume();
  } else {
    audioCtx.suspend();
  }
}

function play(bufferSource, loop = false, gain = 1, fadeIn = false) {
  return function () {
    const source = audioCtx.createBufferSource();
    source.buffer = bufferSource;
    source.loop = loop;
    if (gain) {
      const gainNode = audioCtx.createGain();
      if (fadeIn) {
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          gain,
          audioCtx.currentTime + 2
        );
      } else {
        gainNode.gain.setValueAtTime(gain, audioCtx.currentTime);
      }
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
const longing = await fetchAudioBuffer(longingUrl);
const toggleAudio = await fetchAudioBuffer(toggleAudioUrl);

const playSubmit = play(submit);
const playError = play(error, false, 1.5);
const playClose = play(close);
const playNormal = play(normal);
const playRainy = play(rainy);
const playLonging = play(longing, true, 0.7, true);
const playToggleAudio = play(toggleAudio);
