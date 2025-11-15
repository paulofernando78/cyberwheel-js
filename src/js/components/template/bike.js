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
    const priceAttr = this.getAttribute("price");
    const titleAttr = this.getAttribute("title");
    const descriptionAttr = this.getAttribute("description");

    const inforList = JSON.parse(this.getAttribute("info") || "[]");
    const techList = JSON.parse(this.getAttribute("tech") || "[]");

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
          
          <section class="container-line-break">
            <span class="uppercase bold">Information</span>
            <ul class="bike__info">
            ${inforList
              .map(
                (item) => /* html*/ `
              <li class="bike__info-list">
              <span class="display-block"><strong>${item.title}</strong></span>
              <span>${item.info}</span>
              </li>
              `
              )
              .join("")}
              </ul>
            <span class="uppercase bold">Technical Specifications</span>
            <ul class="bike__tech-specs">
              ${techList
                .map(
                  (item) => /*html*/ `
                <li class="bike__tech-specs-list">
                  <span><strong>${item.title}</strong></span>
                  <span>${item.info}</span>
                </li>
              `
                )
                .join("")}
            </ul>
            <div class="bike__method-container">
              <div class="bike__method">
                <img src="/images/delivery.svg" />
                <span>Delivery in 5 days</span>
              </div>
              <div class="bike__method">
                <img src="/images/stock.svg" />
                <span>18 in stock</span>
              </div>
            </div>
            <wc-button label="BUY NOW" style=""></wc-button>
          </section>
        </div>
    `;

    const buyButton = this.shadowRoot.querySelector("wc-button");

    buyButton.addEventListener("click", () => {
      navigateTo("/checkout");
    });
  }
}

export default Bike;
