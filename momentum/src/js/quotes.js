export default class Quotes {
    constructor() {
        this.quoteBox = document.querySelector('.quotes__quote');
        this.authorBox = document.querySelector('.quotes__author');
        this.container = document.querySelector('.container');
        this.waitImg = document.querySelector('.wait-img');
    }

    async getQuote() {
        const response = await fetch('https://type.fit/api/quotes');
        this.quotes = await response.json();
        this.takeQuote();
    }

    takeQuote() {
        this.quote = this.quotes[Math.floor(Math.random() * (this.quotes.length - 1) + 1)];
        this.sendQuote();
    }

    sendQuote() {
        this.quoteBox.textContent = `"${this.quote['text']}"`;
        this.authorBox.textContent = `© ${this.quote['author']}`;
        this.waitImg.style.display = 'none';
        this.container.style.display = 'block';
    }
}

(() => {
    const refreshBtn = document.querySelector('.quotes__refresh');
    const quotes = new Quotes();
    quotes.getQuote();
    refreshBtn.addEventListener('click', () => {
        quotes.takeQuote();
    });
})();
