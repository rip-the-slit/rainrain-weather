import submitUrl from "./assets/submit.wav";
export { playSubmit };

const audioCtx = new AudioContext();

async function fetchAudioBuffer(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  console.log(audioBuffer);
  return audioBuffer;
}

function resumeAudioContext() {
  if (audioCtx.state == "suspended") {
    audioCtx.resume();
  }
}

const submit = await fetchAudioBuffer(submitUrl);

function playSubmit() {
  resumeAudioContext()
  const source = audioCtx.createBufferSource();
  source.buffer = submit;
  source.connect(audioCtx.destination);
  return source;
}
