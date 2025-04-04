class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style"); /*css*/
    style.textContent = `
      button {
        padding: 8px 13px;
        background: linear-gradient(#fed7aa, #fb923c);
        display: inline-block;
        border-radius: 4px;
        box-shadow: 0 0 2px var(--orange-5);
        text-transform: uppercase;
        font-weight: 600;
        width: max-content;
        height: max-content;
      }

      button:hover {
        background: linear-gradient(#ffb60d, #e59317);
      }
    `;
    this.shadowRoot.appendChild(style);

    const template = document.createElement("template"); /*html*/
    template.innerHTML = `
      <button>teste</button>
  `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Button;
