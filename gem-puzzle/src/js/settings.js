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
};

(() => {
  const btnsPause = document.querySelectorAll('.pause');

  const settings = new Settings();

  btnsPause[0].addEventListener('click', () => {
    settings.switchVisibleBtn(0, 1);
    settings.changeVisibleSettings(true);
  })

  btnsPause[1].addEventListener('click', () => {
    settings.switchVisibleBtn(1, 0);
    settings.changeVisibleSettings(false);
  })

})();
