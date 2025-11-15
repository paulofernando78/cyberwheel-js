import style from "@css/style.css?inline";
 
const css = /* css */ `
  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px
  }

  span {
    font-size: 2rem;
    font-weight: bold
  }

  img {
    width: 50px;
    box-shadow: none;
    filter: grayscale(100%)
  }
`

class Logo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = style;
    this.shadowRoot.appendChild(style);

    const logoContainer = document.createElement("div");
    logoContainer.className = "logo-container";
    /* html*/ 
    logoContainer.innerHTML = `
      <style>${css}</style>
      <img src="/images/logo.svg" alt="Logo"/>
      <span>CYBER WHEEL</span>
    `

    this.shadowRoot.appendChild(logoContainer);
  }
}

export default Logo;