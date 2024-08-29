class ShadowButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.createStyle());
        shadow.appendChild(this.createButton());
    }

    createButton() {
        const button = document.createElement('button');
        button.textContent = 'Logout';
        button.addEventListener('click', () => {
            logout();
        });

        return button;
    }

    createStyle() {
        const style = document.createElement('style');
        style.textContent = buttonStyles;
        return style;
    }
}

const buttonStyles = `
    button {
        background-color: #6200ee;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        font-size: 16px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
    }
    button:hover {
        transform: scale(1.05);
    }
`;

customElements.define('logout-button', ShadowButton);
