import '../scss/style.scss';

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const greetingInput = document.querySelector('.greeting__input');
const focusInput = document.querySelector('.focus__input');
class Time {
    constructor () {
        this.timeBox = document.querySelector('.time__text');
        this.dateBox = document.querySelector('.time__date');
        this.greeting = document.querySelector('.greeting__text');
        this.body = document.querySelector('.body');
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
            time.switchGreeting('Morning');
        } else if (time.timeNumbers[0] >= 12 && time.timeNumbers[0] < 18) {
            time.switchGreeting('Day');
        } else if (time.timeNumbers[0] >= 18 && time.timeNumbers[0] < 24) {
            time.switchGreeting('Evening');
        } else {
            time.switchGreeting('Night');
        }
    }

    switchBg() {
        if (time.curentBg !== time.timeNumbers[0]) {
            time.curentBg = time.timeNumbers[0];
            this.body.style.backgroundImage = `url('/src/assets/images/${time.curentBg + 1}.jpg')`;
            time.checkTime();
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
}

addToLocalStorage();
generateEvents();

let time = new Time();
time.showTime();
time.showDate();
