import { navigateTo } from "../../router";
import styleImports from "@css/style.css?inline";

class Bike extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const priceRaw = Number(this.getAttribute("price"));
    const currency = this.getAttribute("currency") || "USD";

    const priceFormatted = priceRaw.toLocaleString("en-US", {
      style: "currency",
      currency,
    });

    const imgAttr = this.getAttribute("img");
    const altAttr = this.getAttribute("alt");
    const titleAttr = this.getAttribute("title");
    const descriptionAttr = this.getAttribute("description");
    const electricMotorAttr = this.getAttribute("electricMotor") || "";
    const maxSpeedAttr = this.getAttribute("maxSpeed") || "";
    const batteryAttr = this.getAttribute("battery") || "";
    const materialAttr = this.getAttribute("material") || "";
    const weightAttr = this.getAttribute("weight") || "";
    const heightAttr = this.getAttribute("height") || "";
    const widthAttr = this.getAttribute("width") || "";
    const depthAttr = this.getAttribute("depth") || "";
    const gearsAttr = this.getAttribute("gears") || "";
    const wheelAttr = this.getAttribute("wheelSize") || "";
    const estimateAtrr = this.getAttribute("estimate") || "";
    const unitAttr = this.getAttribute("unit") || "";
    const stockAttr = this.getAttribute("stock") || "";

    /* html */
    this.shadowRoot.innerHTML = `
      <style>${styleImports}</style>
        <section class="line-break bike__description">
          <h1>${titleAttr}</h1>
          <p>${descriptionAttr}</p>
        </section>

        <div class="bike__container__img-info">
          <section class="bike__imgs">
            <img
            src="${imgAttr}"
            alt="${altAttr}" class="bike__img bike__img-main"/>
            <span class="bike__price">${priceFormatted}</span>
            <div class="bike__img-angles">
              <img
              src="${imgAttr}"
              alt="${altAttr}" class="bike__img"/>
              <img
              src="${imgAttr}"
              alt="${altAttr}" class="bike__img"/>
            </div>  
          </section>
          
          <section class="line-break">
            <span class="uppercase bold">Information</span>
            <ul class="bike__info">
              <li>
                <span class="display-block"><strong>Eletric Motor</strong></span>
                <span>${electricMotorAttr}</span>
              </li>
              <li>
                <span class="display-block"><strong>Max Speed</strong></span>
                <span>${maxSpeedAttr}</span>
              </li>
              <li>
                <span class="display-block"><strong>Battery</strong></span>
                <span>${batteryAttr}</span>
              </li>
              <li>
                <span class="display-block"><strong>Material</strong></span>
                <span>${materialAttr}</span>
              </li>
            </ul>

            <span class="uppercase bold">Technical Specifications</span>
            <ul class="bike__tech-specs">
              <li>
                <span class="display-block"><strong>Weight</strong></span>
                <span>${weightAttr}</span>
              </li>
              <hr />
              <li>
                <span class="display-block"><strong>Height</strong></span>
                <span>${heightAttr}</span>
              </li>
              <hr />
              <li>
                <span class="display-block"><strong>Width</strong></span>
                <span>${widthAttr}</span>
              </li>
              <hr />
              <li>
                <span class="display-block"><strong>Depth</strong></span>
                <span>${depthAttr}</span>
              </li>
              <hr />
              <li>
                <span class="display-block"><strong>Gears</strong></span>
                <span>${gearsAttr}</span>
              </li>
              <hr />
              <li>
                <span class="display-block"><strong>Wheel</strong></span>
                <span>${wheelAttr}</span>
              </li>
            </ul>

            <div class="bike__method-container">
              <div class="bike__method">
                <img src="/images/icons/delivery.svg" />
                <spa>Delivery in ${estimateAtrr} ${unitAttr}</spa bn>
              </div>
              <div class="bike__method">
                <img src="/images/icons/stock.svg" />
                <span>${stockAttr} in stock</span>
              </div>
            </div>

            <wc-button label="BUY NOW" style=""></wc-button>
          </section>
        </div>
    `;

    const buyButton = this.shadowRoot.querySelector("wc-button");

    buyButton.addEventListener("click", () => {
      const pathParts = window.location.pathname.split("/");
      const id = pathParts[2]; // "rider-a1"
      console.log(pathParts);
      navigateTo(`/checkout/${id}`);
    });
  }
}
666;
export default Bike;
