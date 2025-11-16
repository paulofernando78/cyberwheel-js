import styleImports from "@css/style.css?inline";

class Logo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = styleImports;
    this.shadowRoot.appendChild(style);

    const logoContainer = document.createElement("div");
    logoContainer.className = "logo__container";
    /* html*/
    logoContainer.innerHTML = `
      <img src="/images/icons/logo.svg" alt="Logo"/>
      <span>CYBER WHEEL</span>
    `;

    this.shadowRoot.appendChild(logoContainer);
  }
}

export default Logo;
