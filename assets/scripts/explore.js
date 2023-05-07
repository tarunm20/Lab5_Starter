// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voices = [];
  const synth = window.speechSynthesis;
  const select = document.getElementById('voice-select');
  const getVoices = () => {
    voices = synth.getVoices();
    voices.forEach(voice => {
      var option = document.createElement('option');
      option.value = voice.name;
      option.textContent = voice.name + ' (' + voice.lang + ')';
      option.setAttribute('data-name', voice.name);
      select.appendChild(option);
    });
  }
  if(synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
  }

  const speak = () => {
    const text = document.getElementById('text-to-speak').value;
    console.log(text);
    var speakText = new SpeechSynthesisUtterance(text);
    voices.forEach(voice => {
      if(voice.name == select.value) {
        speakText.voice = voice;
      }
    });
    const face = document.getElementsByTagName('img')[0];
    speakText.onstart = e => {
      face.src = 'Lab5_Starter/assets/images/smiling-open.png';
    }
    speakText.onend = e => {
      face.src = 'Lab5_Starter/assets/images/smiling.png';
    }
    synth.speak(speakText);
  }
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', () => {
    speak();
  })
}