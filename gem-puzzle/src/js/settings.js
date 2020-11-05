/* global document */

export default class Settings {
  constructor() {
    this.btnsPause = document.querySelectorAll('.pause');
    this.overlay = document.querySelector('.overlay');
  }

  switchVisibleBtn(a, b) {
    this.btnsPause[a].classList.remove('visible');
    this.btnsPause[b].classList.add('visible');
  }

  changeVisibleSettings(isClose) {
    if (isClose) {
      this.overlay.classList.add('visible');
    } else this.overlay.classList.remove('visible');
  }

  changeMenu(target) {
    this.prevMenu = document.querySelector('.active');
    const targetElem = document.querySelector(`[data-screen-name="${target}"]`);

    this.prevMenu.classList.remove('active');
    this.prevMenu.classList.add('hidden');
    targetElem.classList.remove('hidden');
    targetElem.classList.add('active');
  }
}

(() => {
  const btnsPause = document.querySelectorAll('.pause');
  const overlay = document.querySelector('.overlay');
  const btnStart = document.querySelector('.start');

  const settings = new Settings();

  btnsPause[0].addEventListener('click', () => {
    settings.switchVisibleBtn(0, 1);
    settings.changeVisibleSettings(true);
  });

  btnsPause[1].addEventListener('click', () => {
    settings.switchVisibleBtn(1, 0);
    settings.changeVisibleSettings(false);
  });

  overlay.addEventListener('click', (event) => {
    if (event.target.dataset.screen) {
      settings.changeMenu(event.target.dataset.screen);
    }
  });

  btnStart.addEventListener('click', () => {
    settings.switchVisibleBtn(1, 0);
    settings.changeVisibleSettings(false);
  });
})();
