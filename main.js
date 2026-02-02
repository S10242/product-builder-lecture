class LottoNumbers extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.numbers = new Set();
    }

    connectedCallback() {
        this.generateNumbers();
    }

    generateNumbers() {
        this.numbers.clear();
        while (this.numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            this.numbers.add(randomNumber);
        }
        this.render();
    }

    render() {
        const sortedNumbers = Array.from(this.numbers).sort((a, b) => a - b);
        this.shadowRoot.innerHTML = `
            <style>
                .number-container {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }
                .number {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: var(--secondary-color, #ff9d3b);
                    color: var(--background-color, #1a1a1a);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    box-shadow: 0 0 10px rgba(255, 157, 59, 0.5);
                }
            </style>
            <div class="number-container">
                ${sortedNumbers.map(num => `<div class="number">${num}</div>`).join('')}
            </div>
        `;
    }
}

customElements.define('lotto-numbers', LottoNumbers);

document.getElementById('generate-btn').addEventListener('click', () => {
    document.querySelector('lotto-numbers').generateNumbers();
});

const themeSwitch = document.getElementById('checkbox');
const body = document.body;

themeSwitch.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeSwitch.checked = true;
    }
});
