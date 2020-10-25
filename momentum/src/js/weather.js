export default class Weather {
    constructor() {
        this.weatherTemperature = document.querySelector('.weather__temperature');
        this.weatherIcon = document.querySelector('.weather__icon');
        this.weatherHumidity = document.querySelector('.weather__humidity-info');
        this.weatherSpeed = document.querySelector('.weather__speed-info');
    }

    async getWeather(city = Minsk) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6ebdd0fd3d344c146430ede697227fdf`);
            this.weather = await response.json();
            console.log(this.weather);
            this.sendWeather();
        } catch(e) {
            alert(`City ${window.localStorage.city} is not found`);
            window.localStorage.city = 'Minsk';
        }
    }

    sendWeather() {
        this.weatherTemperature.textContent = `${Math.round(this.weather.main.temp - 273.15)}°C`;
        this.weatherIcon.src = `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`;
        this.weatherHumidity.textContent = `${this.weather.main.humidity}%`;
        this.weatherSpeed.textContent = `${this.weather.wind.speed}m/s`;
    }

}

(() => {
    const cityInput = document.querySelector('.weather__city-name');
    const weather = new Weather();

    cityInput.addEventListener('click', () => {
        cityInput.textContent = '';
    });
    
    cityInput.addEventListener('blur', () => {
        if (cityInput.textContent === '') {
            cityInput.textContent = window.localStorage.city;
        } else {
            window.localStorage.city = cityInput.textContent;
            weather.getWeather(window.localStorage.city);
        }
    });

    if (!window.localStorage.city) {
        window.localStorage.setItem('city', cityInput.textContent);
    } else {
        cityInput.textContent = window.localStorage.city;
    }

    weather.getWeather(window.localStorage.city);

})();
