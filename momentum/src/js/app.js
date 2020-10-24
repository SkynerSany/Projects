import '../scss/style.scss';

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const greetingInput = document.querySelector('.greeting__input');
const focusInput = document.querySelector('.focus__input');
const switchBgBtn = document.querySelector('.switch-bg');

class Time {
    constructor () {
        this.timeBox = document.querySelector('.time__text');
        this.dateBox = document.querySelector('.time__date');
        this.greeting = document.querySelector('.greeting__text');
        this.body = document.querySelector('.body');
        this.dayTime = 'Morning';
        this.bgMas = [];
        this.timeNumbers = [];
        this.curentBg = null;
    }

    addZero(number) {
        return number < 10 ? `0${number}` : number; 
    }

    getTime() {
        this.time = new Date();
        time.timeNumbers[0] = this.time.getHours();
        time.timeNumbers[1] = this.time.getMinutes();
        time.timeNumbers[2] = this.time.getSeconds();

        time.sendTime(`${time.addZero(time.timeNumbers[0])} : ${time.addZero(time.timeNumbers[1])} : ${time.addZero(time.timeNumbers[2])} PM`);
    }

    getDate() {
        this.time = new Date();
        time.timeNumbers[3] = this.time.getDay();
        time.timeNumbers[4] = this.time.getDate();
        time.timeNumbers[5] = this.time.getMonth();

        time.sendDate(`${week[time.timeNumbers[3]]}, ${time.timeNumbers[4]} ${months[time.timeNumbers[5]]}`);
    }

    sendTime(strTime) {
        time.switchBg();
        this.timeBox.textContent = strTime;
    }

    sendDate(strDate) {
        this.dateBox.textContent = strDate;
    }

    showTime() {
        setInterval(time.getTime, 100);
    }

    showDate() {
        if (!this.dateBox.length) {
            time.getDate();
        }
    }

    checkTime() {
        if (time.timeNumbers[0] >= 6 && time.timeNumbers[0] < 12) {
            time.dayTime = 'Morning';
        } else if (time.timeNumbers[0] >= 12 && time.timeNumbers[0] < 18) {
            time.dayTime = 'Day';
        } else if (time.timeNumbers[0] >= 18 && time.timeNumbers[0] < 24) {
            time.dayTime = 'Evening';
        } else {
            time.dayTime = 'Night';
        }
    }

    generateBgMas() {
        for (let i = 1; i < 25; i++) {
            time.bgMas.push(Math.floor(Math.random() * (20 - 1) + 1));
        }
    }

    switchBg(fromBtn) {
        if (fromBtn) {
            if (!time.tempBg && time.tempBg !== 0) {
                time.tempBg = time.curentBg;
            }

            if (time.tempBg < 23) {
                time.tempBg += 1;
            } else {
                time.tempBg = 0;
            }

            const img = document.createElement('img');
            img.src = `/src/assets/images/${time.dayTime}/${time.bgMas[time.tempBg + 1]}.jpg`;
            img.onload = () => {
                this.body.style.backgroundImage = `url('${img.src}')`;
            };
        }

        if (time.curentBg !== time.timeNumbers[0]) {
            time.curentBg = time.timeNumbers[0];
            time.checkTime();
            this.body.style.backgroundImage = `url('/src/assets/images/${time.dayTime}/${time.bgMas[time.curentBg + 1]}.jpg')`;
            time.switchGreeting(time.dayTime);
        }
    }

    switchGreeting(dayTime) {
        this.greeting.textContent = `Good ${dayTime}`;
    }

}

function addToLocalStorage() {
    if (!window.localStorage.length) {
        window.localStorage.setItem('name', greetingInput.textContent);
        window.localStorage.setItem('focus', focusInput.textContent);
    } else {
        greetingInput.textContent = window.localStorage.name;
        focusInput.textContent = window.localStorage.focus;
    }
}

function generateEvents() {
    greetingInput.addEventListener('click', () => {
        greetingInput.textContent = '';
    });
    
    greetingInput.addEventListener('blur', () => {
        if (greetingInput.textContent === '') {
            greetingInput.textContent = window.localStorage.name;
        } else {
            window.localStorage.name = greetingInput.textContent;
        }
    });
    
    focusInput.addEventListener('click', () => {
        focusInput.textContent = '';
    });
    
    focusInput.addEventListener('blur', () => {
        if (focusInput.textContent === '') {
            focusInput.textContent = window.localStorage.focus;
        } else {
            window.localStorage.focus = focusInput.textContent;
        }
    });

    switchBgBtn.addEventListener('click', () => {
        switchBgBtn.disabled = true;
        setTimeout(() => { 
            switchBgBtn.disabled = false; 
        }, 1000);
        time.switchBg(true);
    });
}

addToLocalStorage();
generateEvents();

let time = new Time();

time.generateBgMas();
time.showTime();
time.showDate();


