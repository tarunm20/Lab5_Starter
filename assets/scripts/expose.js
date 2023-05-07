// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const input = document.getElementById('volume');
  input.addEventListener('input', () => {
    audio.volume = input.value/100;
    if (input.value == 0) {
      image[1].src = '../assets/icons/volume-level-0.svg';
    }
    else if(input.value < 33) {
      image[1].src = '../assets/icons/volume-level-1.svg';
    }
    else if (input.value < 67) {
      image[1].src = '../assets/icons/volume-level-2.svg';
    }
    else {
      image[1].src = '../assets/icons/volume-level-3.svg';
    }
  });

  const select = document.getElementById('horn-select');
  var image = document.getElementsByTagName('img');
  var audio = document.getElementsByTagName('audio')[0];

  select.addEventListener('change', () => {
    switch (select.value) {
      case 'air-horn':
        image[0].src = '../assets/images/air-horn.svg';
        audio.src = '../assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        image[0].src = '../assets/images/car-horn.svg';
        audio.src = '../assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        image[0].src = '../assets/images/party-horn.svg';
        audio.src = '../assets/audio/party-horn.mp3';
        break;
      default:
        image[0].src = '../assets/images/no-image.png';
        audio.src = '';
    }
  });

  const jsConfetti = new JSConfetti();
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', () => {
    audio.play();
    if(select.value == 'party-horn') {
      jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 500,
      });
    }
  });
}