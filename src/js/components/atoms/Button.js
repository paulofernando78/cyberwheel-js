import styleImports from "@css/style.css?inline";
import styleButton from "@css/components/button.css?inline";
import { lightMode, darkMode } from "../../../assets/images/svg-imports";

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    [styleImports, styleButton].forEach((imports) => {
      const style = document.createElement("style");
      style.textContent = imports;
      this.shadowRoot.appendChild(style);
    });

    this.button = document.createElement("button");
    this.shadowRoot.appendChild(this.button);
  }

  connectedCallback() {
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

    this.button.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("nav-click", {
          bubbles: true,
          composed: true,
        })
      );
    });
  }
}

export default Button;
