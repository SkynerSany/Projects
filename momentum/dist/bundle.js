!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./src/scss/style.scss\nvar style = __webpack_require__(1);\n\n// CONCATENATED MODULE: ./src/js/quotes.js\nclass Quotes {\r\n    constructor() {\r\n        this.quoteBox = document.querySelector('.quotes__quote');\r\n        this.authorBox = document.querySelector('.quotes__author');\r\n        this.container = document.querySelector('.container');\r\n        this.waitImg = document.querySelector('.wait-img');\r\n    }\r\n\r\n    async getQuote() {\r\n        const response = await fetch('https://type.fit/api/quotes');\r\n        this.quotes = await response.json();\r\n        this.takeQuote();\r\n    }\r\n\r\n    takeQuote() {\r\n        this.quote = this.quotes[Math.floor(Math.random() * (this.quotes.length - 1) + 1)];\r\n        this.sendQuote();\r\n    }\r\n\r\n    sendQuote() {\r\n        this.quoteBox.textContent = `\"${this.quote['text']}\"`;\r\n        this.authorBox.textContent = `© ${this.quote['author']}`;\r\n        this.waitImg.style.display = 'none';\r\n        this.container.style.display = 'block';\r\n    }\r\n}\r\n\r\n(() => {\r\n    const refreshBtn = document.querySelector('.quotes__refresh');\r\n    const quotes = new Quotes();\r\n    quotes.getQuote();\r\n    refreshBtn.addEventListener('click', () => {\r\n        quotes.takeQuote();\r\n    });\r\n})();\r\n\n// CONCATENATED MODULE: ./src/js/time.js\nclass Time {\r\n    constructor () {\r\n        this.timeBox = document.querySelector('.time__text');\r\n        this.dateBox = document.querySelector('.time__date');\r\n        this.greeting = document.querySelector('.greeting__text');\r\n        this.body = document.querySelector('.body');\r\n        this.week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\r\n        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\r\n        this.dayTime = 'Morning';\r\n        this.bgMas = [];\r\n        this.timeNumbers = [];\r\n        this.curentBg = null;\r\n    }\r\n\r\n    addZero(number) {\r\n        return number < 10 ? `0${number}` : number; \r\n    }\r\n\r\n    getTime() {\r\n        const timeInfo = new Date();\r\n        this.timeNumbers[0] = timeInfo.getHours();\r\n        this.timeNumbers[1] = timeInfo.getMinutes();\r\n        this.timeNumbers[2] = timeInfo.getSeconds();\r\n\r\n        this.sendTime(`${this.addZero(this.timeNumbers[0])} : ${this.addZero(this.timeNumbers[1])} : ${this.addZero(this.timeNumbers[2])} PM`);\r\n    }\r\n\r\n    getDate() {\r\n        const timeInfo = new Date();\r\n        this.timeNumbers[3] = timeInfo.getDay();\r\n        this.timeNumbers[4] = timeInfo.getDate();\r\n        this.timeNumbers[5] = timeInfo.getMonth();\r\n\r\n        this.sendDate(`${this.week[this.timeNumbers[3]]}, ${this.timeNumbers[4]} ${this.months[this.timeNumbers[5]]}`);\r\n    }\r\n\r\n    sendTime(strTime) {\r\n        this.switchBg();\r\n        this.timeBox.textContent = strTime;\r\n    }\r\n\r\n    sendDate(strDate) {\r\n        this.dateBox.textContent = strDate;\r\n    }\r\n\r\n    showTime() {\r\n        this.getTime.bind(this)();\r\n        setInterval(this.getTime.bind(this), 1000);\r\n    }\r\n\r\n    showDate() {\r\n        if (!this.dateBox.length) {\r\n            this.getDate();\r\n        }\r\n    }\r\n\r\n    checkTime() {\r\n        if (this.timeNumbers[0] >= 6 && this.timeNumbers[0] < 12) {\r\n            this.dayTime = 'Morning';\r\n        } else if (this.timeNumbers[0] >= 12 && this.timeNumbers[0] < 18) {\r\n            this.dayTime = 'Day';\r\n        } else if (this.timeNumbers[0] >= 18 && this.timeNumbers[0] < 24) {\r\n            this.dayTime = 'Evening';\r\n        } else {\r\n            this.dayTime = 'Night';\r\n        }\r\n    }\r\n\r\n    generateBgMas() {\r\n        for (let i = 1; i < 25; i++) {\r\n            this.bgMas.push(Math.floor(Math.random() * (20 - 1) + 1));\r\n        }\r\n    }\r\n\r\n    switchBg(fromBtn) {\r\n        if (fromBtn) {\r\n            if (!this.tempBg && this.tempBg !== 0) {\r\n                this.tempBg = this.curentBg;\r\n            }\r\n\r\n            if (this.tempBg < 23) {\r\n                this.tempBg += 1;\r\n            } else {\r\n                this.tempBg = 0;\r\n            }\r\n\r\n            const img = document.createElement('img');\r\n            img.src = `/skynersany-JS2020Q3/momentum/src/assets/images/${this.dayTime}/${this.bgMas[this.tempBg]}.jpg`;\r\n            img.onload = () => {\r\n                this.body.style.backgroundImage = `url('${img.src}')`;\r\n            };\r\n        }\r\n\r\n        if (this.curentBg !== this.timeNumbers[0]) {\r\n            this.curentBg = this.timeNumbers[0];\r\n            this.checkTime();\r\n            this.body.style.backgroundImage = `url('/skynersany-JS2020Q3/momentum/src/assets/images/${this.dayTime}/${this.bgMas[this.curentBg]}.jpg')`;\r\n            this.switchGreeting(this.dayTime);\r\n        }\r\n    }\r\n\r\n    switchGreeting(dayTime) {\r\n        this.greeting.textContent = `Good ${dayTime}`;\r\n    }\r\n\r\n}\r\n\r\n(() => {\r\n    const greetingInput = document.querySelector('.greeting__input');\r\n    const focusInput = document.querySelector('.focus__input');\r\n    const switchBgBtn = document.querySelector('.switch-bg');\r\n\r\n    const time = new Time();\r\n    \r\n    const init = {\r\n        generateEvents() {\r\n            greetingInput.addEventListener('click', () => {\r\n                greetingInput.textContent = '';\r\n            });\r\n            \r\n            greetingInput.addEventListener('blur', () => {\r\n                if (greetingInput.textContent === '') {\r\n                    greetingInput.textContent = window.localStorage.name;\r\n                } else {\r\n                    window.localStorage.name = greetingInput.textContent;\r\n                }\r\n            });\r\n            \r\n            focusInput.addEventListener('click', () => {\r\n                focusInput.textContent = '';\r\n            });\r\n            \r\n            focusInput.addEventListener('blur', () => {\r\n                if (focusInput.textContent === '') {\r\n                    focusInput.textContent = window.localStorage.focus;\r\n                } else {\r\n                    window.localStorage.focus = focusInput.textContent;\r\n                }\r\n            });\r\n    \r\n            switchBgBtn.addEventListener('click', () => {\r\n                switchBgBtn.disabled = true;\r\n                setTimeout(() => { \r\n                    switchBgBtn.disabled = false; \r\n                }, 1000);\r\n                time.switchBg(true);\r\n            });\r\n        },\r\n\r\n        addToLocalStorage() {\r\n            if (!window.localStorage.name) {\r\n                window.localStorage.setItem('name', greetingInput.textContent);\r\n                window.localStorage.setItem('focus', focusInput.textContent);\r\n            } else {\r\n                greetingInput.textContent = window.localStorage.name;\r\n                focusInput.textContent = window.localStorage.focus;\r\n            }\r\n        }\r\n    };\r\n    \r\n    time.generateBgMas();\r\n    time.showTime();\r\n    time.showDate();\r\n\r\n    init.generateEvents();\r\n    init.addToLocalStorage();\r\n})();\r\n\n// CONCATENATED MODULE: ./src/js/weather.js\nclass Weather {\r\n    constructor() {\r\n        this.weatherTemperature = document.querySelector('.weather__temperature');\r\n        this.weatherIcon = document.querySelector('.weather__icon');\r\n        this.weatherHumidity = document.querySelector('.weather__humidity-info');\r\n        this.weatherSpeed = document.querySelector('.weather__speed-info');\r\n    }\r\n\r\n    async getWeather(city = Minsk) {\r\n        try {\r\n            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6ebdd0fd3d344c146430ede697227fdf`);\r\n            this.weather = await response.json();\r\n            console.log(this.weather);\r\n            this.sendWeather();\r\n        } catch(e) {\r\n            alert(`City ${window.localStorage.city} is not found`);\r\n            window.localStorage.city = 'Minsk';\r\n        }\r\n    }\r\n\r\n    sendWeather() {\r\n        this.weatherTemperature.textContent = `${Math.round(this.weather.main.temp - 273.15)}°C`;\r\n        this.weatherIcon.src = `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`;\r\n        this.weatherHumidity.textContent = `${this.weather.main.humidity}%`;\r\n        this.weatherSpeed.textContent = `${this.weather.wind.speed}m/s`;\r\n    }\r\n\r\n}\r\n\r\n(() => {\r\n    const cityInput = document.querySelector('.weather__city-name');\r\n    const weather = new Weather();\r\n\r\n    cityInput.addEventListener('click', () => {\r\n        cityInput.textContent = '';\r\n    });\r\n    \r\n    cityInput.addEventListener('blur', () => {\r\n        if (cityInput.textContent === '') {\r\n            cityInput.textContent = window.localStorage.city;\r\n        } else {\r\n            window.localStorage.city = cityInput.textContent;\r\n            weather.getWeather(window.localStorage.city);\r\n        }\r\n    });\r\n\r\n    if (!window.localStorage.city) {\r\n        window.localStorage.setItem('city', cityInput.textContent);\r\n    } else {\r\n        cityInput.textContent = window.localStorage.city;\r\n    }\r\n\r\n    weather.getWeather(window.localStorage.city);\r\n\r\n})();\r\n\n// CONCATENATED MODULE: ./src/js/app.js\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js_+_3_modules?")},function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?")}]);