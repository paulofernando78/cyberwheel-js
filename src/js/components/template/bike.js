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

    const imgOneAttr = this.getAttribute("imgOne");
    const altOneAttr = this.getAttribute("altOne");
    const imgTwoAttr = this.getAttribute("imgTwo");
    const altTwoAttr = this.getAttribute("altTwo");
    const imgThreeAttr = this.getAttribute("imgThree");
    const altThreeAttr = this.getAttribute("altThree");
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
      <section class="line-break bike__description content-margin">
        <h1>${titleAttr}</h1>
        <p>${descriptionAttr}</p>
        <div class="bike__container__img-info">
          <div class="bike__imgs">
            <div class="zoom-in-icon">
              <img
                src="${imgOneAttr}"
                alt="${altOneAttr}" class="bike__img bike__img-main img-brightness"
              />
            </div>
           
            <span class="bike__price">${priceFormatted}</span>
            <div class="bike__img-angles">
                <div class="zoom-in-icon">
                  <img src="${imgTwoAttr}" alt="${altTwoAttr}" class="bike__img img-brightness"/>
                </div>
                <div class="zoom-in-icon">
                  <img src="${imgThreeAttr}" alt="${altThreeAttr}" class="bike__img img-brightness"/>
                </div>
            </div>  
          </div>
            
            <div class="line-break">
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
                  <span>Delivery in ${estimateAtrr} ${unitAttr}</span>
                </div>
                <div class="bike__method">
                  <img src="/images/icons/stock.svg" />
                  <span>${stockAttr} in stock</span>
                </div>
            </div>
            <wc-button label="BUY NOW" style=""></wc-button>
          </div>
        </div>
      </section>
    `;

    this.shadowRoot.querySelectorAll(".zoom-in-icon").forEach((iconWrapper) => {
      iconWrapper.addEventListener("click", () => {
        const imgEl = iconWrapper.querySelector("img")

        const modal = document.createElement("div");
        modal.className = "modal";

        modal.innerHTML = /* html */ `
      <div class="modal__backdrop"></div>
      <div class="modal__content">
        <div class="zoom-out-icon">
          <img src="${imgEl.src}" alt="${imgEl.alt}" />
        </div>
      </div>
      `;

        this.shadowRoot.appendChild(modal);

        const close = () => modal.remove();

        modal.querySelector(".zoom-out-icon").addEventListener("click", close)

        modal
          .querySelector(".modal__backdrop")
          .addEventListener("click", close);

        const escHandler = (e) => {
          if (e.key === "Escape") {
            close();
            document.removeEventListener("keydown", escHandler);
          }
        };
        document.addEventListener("keydown", escHandler);
      });
    });

    const buyButton = this.shadowRoot.querySelector("wc-button");

    buyButton.addEventListener("click", () => {
      const pathParts = window.location.pathname.split("/");
      const id = pathParts[2]; // "rider-a1"
      console.log(pathParts);
      navigateTo(`/checkout/${id}`);
    });
  }
}

export default Bike;
