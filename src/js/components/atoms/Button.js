import styleImports from "@css/style.css?inline";
import { lightMode, darkMode } from "../../../assets/images/svg-imports";

class Button extends HTMLElement {
  static get observedAttributes() {
    return ["icon"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = styleImports;
    this.shadowRoot.appendChild(style);

    this.button = document.createElement("button");
    this.shadowRoot.appendChild(this.button);
  }

  connectedCallback() {
    this.updtaeRendering();
    this.button.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("nav-click", {
          bubbles: true,
          composed: true,
        })
      );
    });
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "icon" && oldVal !== newVal) {
      this.updtaeRendering();
    }
  }

  updtaeRendering() {
    const icons = { lightMode, darkMode };
    const iconAttr = this.getAttribute("icon");
    const labelAttr = this.getAttribute("label");
    console.log(labelAttr);

    if (labelAttr) {
      this.button.textContent = labelAttr;
      this.button.className = "btn--with-label";
    } else {
      this.button.innerHTML = icons[iconAttr] || "";
    }
  }
}

export default Button;
