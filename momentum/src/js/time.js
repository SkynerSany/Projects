export default class Time {
    constructor () {
        this.timeBox = document.querySelector('.time__text');
        this.dateBox = document.querySelector('.time__date');
        this.greeting = document.querySelector('.greeting__text');
        this.body = document.querySelector('.body');
        this.week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.dayTime = 'Morning';
        this.bgMas = [];
        this.timeNumbers = [];
        this.curentBg = null;
    }

    addZero(number) {
        return number < 10 ? `0${number}` : number; 
    }

    getTime() {
        const timeInfo = new Date();
        this.timeNumbers[0] = timeInfo.getHours();
        this.timeNumbers[1] = timeInfo.getMinutes();
        this.timeNumbers[2] = timeInfo.getSeconds();

        this.sendTime(`${this.addZero(this.timeNumbers[0])} : ${this.addZero(this.timeNumbers[1])} : ${this.addZero(this.timeNumbers[2])} PM`);
    }

    getDate() {
        const timeInfo = new Date();
        this.timeNumbers[3] = timeInfo.getDay();
        this.timeNumbers[4] = timeInfo.getDate();
        this.timeNumbers[5] = timeInfo.getMonth();

        this.sendDate(`${this.week[this.timeNumbers[3]]}, ${this.timeNumbers[4]} ${this.months[this.timeNumbers[5]]}`);
    }

    sendTime(strTime) {
        this.switchBg();
        this.timeBox.textContent = strTime;
    }

    sendDate(strDate) {
        this.dateBox.textContent = strDate;
    }

    showTime() {
        this.getTime.bind(this)();
        setInterval(this.getTime.bind(this), 1000);
    }

    showDate() {
        if (!this.dateBox.length) {
            this.getDate();
        }
    }

    checkTime() {
        if (this.timeNumbers[0] >= 6 && this.timeNumbers[0] < 12) {
            this.dayTime = 'Morning';
        } else if (this.timeNumbers[0] >= 12 && this.timeNumbers[0] < 18) {
            this.dayTime = 'Day';
        } else if (this.timeNumbers[0] >= 18 && this.timeNumbers[0] < 24) {
            this.dayTime = 'Evening';
        } else {
            this.dayTime = 'Night';
        }
    }

    generateBgMas() {
        for (let i = 1; i < 25; i++) {
            this.bgMas.push(Math.floor(Math.random() * (20 - 1) + 1));
        }
    }

    switchBg(fromBtn) {
        if (fromBtn) {
            if (!this.tempBg && this.tempBg !== 0) {
                this.tempBg = this.curentBg;
            }

            if (this.tempBg < 23) {
                this.tempBg += 1;
            } else {
                this.tempBg = 0;
            }

            const img = document.createElement('img');
            img.src = `../assets/images/${this.dayTime}/${this.bgMas[this.tempBg]}.jpg`;
            img.onload = () => {
                this.body.style.backgroundImage = `url('${img.src}')`;
            };
        }

        if (this.curentBg !== this.timeNumbers[0]) {
            this.curentBg = this.timeNumbers[0];
            this.checkTime();
            this.body.style.backgroundImage = `url('../assets/images/${this.dayTime}/${this.bgMas[this.curentBg]}.jpg')`;
            this.switchGreeting(this.dayTime);
        }
    }

    switchGreeting(dayTime) {
        this.greeting.textContent = `Good ${dayTime}`;
    }

}

(() => {
    const greetingInput = document.querySelector('.greeting__input');
    const focusInput = document.querySelector('.focus__input');
    const switchBgBtn = document.querySelector('.switch-bg');

    const time = new Time();
    
    const init = {
        generateEvents() {
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
        },

        addToLocalStorage() {
            if (!window.localStorage.name) {
                window.localStorage.setItem('name', greetingInput.textContent);
                window.localStorage.setItem('focus', focusInput.textContent);
            } else {
                greetingInput.textContent = window.localStorage.name;
                focusInput.textContent = window.localStorage.focus;
            }
        }
    };
    
    time.generateBgMas();
    time.showTime();
    time.showDate();

    init.generateEvents();
    init.addToLocalStorage();
})();
