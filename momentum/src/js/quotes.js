export default class Quotes {
    constructor() {
        this.quoteBox = document.querySelector('.quotes__quote');
        this.authorBox = document.querySelector('.quotes__author');
    }

    async getQuote() {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        this.quote = data[Math.floor(Math.random() * (data.length - 1) + 1)];
        this.sendQuote();
    }

    sendQuote() {
        this.quoteBox.textContent = `"${this.quote['text']}"`;
        this.authorBox.textContent = `© ${this.quote['author']}`;
    }
}

(() => {
    const quotes = new Quotes();
    quotes.getQuote();
})();
