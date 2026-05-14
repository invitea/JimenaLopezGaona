const EVENT_DATE_TEXT = 'Lunes 18 de Mayo';

// Fecha del evento: 18 de mayo de 2026
// En JavaScript: enero = 0, mayo = 4
const EVENT_DATE = new Date(2026, 4, 18, 0, 0, 0);

function setFixedDate() {
  const dynamicDateElement = document.getElementById('dynamicDate');

  if (dynamicDateElement) {
    dynamicDateElement.textContent = EVENT_DATE_TEXT;
  }
}

function updateCountdown() {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  const messageElement = document.getElementById('countdown-message');

  if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
    return;
  }

  const now = new Date().getTime();
  const distance = EVENT_DATE.getTime() - now;

  if (distance <= 0) {
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';

    if (messageElement) {
      messageElement.textContent = '¡Hoy es el gran día!';
    }

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.textContent = days.toString().padStart(2, '0');
  hoursElement.textContent = hours.toString().padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');

  if (messageElement) {
    if (days === 0) {
      messageElement.textContent = '¡Hoy es el gran día!';
    } else if (days === 1) {
      messageElement.textContent = '¡Mañana es el gran día!';
    } else if (days < 7) {
      messageElement.textContent = '¡Ya casi celebramos!';
    } else {
      messageElement.textContent = '¡Nos vemos pronto!';
    }
  }
}

function initMusicButton() {
  const music = document.getElementById('backgroundMusic');
  const button = document.getElementById('musicToggle');

  if (!music || !button) {
    return;
  }

  button.addEventListener('click', function() {
    if (music.paused) {
      music.play()
        .then(() => {
          button.textContent = '⏸️';
          button.classList.add('playing');
          button.setAttribute('aria-label', 'Pausar música');
        })
        .catch(() => {
          button.textContent = '🎵';
          button.classList.remove('playing');
          button.setAttribute('aria-label', 'Reproducir música');
        });
    } else {
      music.pause();
      button.textContent = '🎵';
      button.classList.remove('playing');
      button.setAttribute('aria-label', 'Reproducir música');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setFixedDate();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  initMusicButton();
});
