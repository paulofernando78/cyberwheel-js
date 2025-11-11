import styleImports from "@css/imports.css?inline";

class Bike extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const imgAttr = this.getAttribute("img")
    const altAttr = this.getAttribute("alt")
    const titleAttr = this.getAttribute("title")
    const descriptionAttr = this.getAttribute("description")

    const inforList = JSON.parse(this.getAttribute("info") || "[]")

    const techList = JSON.parse(this.getAttribute("tech") || "[]")
    
    /* html */ 
    this.shadowRoot.innerHTML = `
      <style>${styleImports}</style>
      <div class="bike__container">
        <section class="line-break bike__description">
          <h1>${titleAttr}</h1>
          <p>${descriptionAttr}</p>
        </section>

        <div class="bike__container__img-info">
          <section class="bike__img-container">
            <img
            src="${imgAttr}"
            alt="${altAttr}" class="bike__img bike__img-1"/>
            <img
            src="${imgAttr}"
            alt="${altAttr}" class="bike__img"/>
            <img
            src="${imgAttr}"
            alt="${altAttr}" class="bike__img"/>
          </section>
          
          <section class="container-line-break">
            <span class="uppercase bold">Information</span>
            <ul class="bike__info">
            ${inforList.map(item => /* html*/ `
              <li class="bike__info-list">
              <span class="display-block"><strong>${item.title}</strong></span>
              <span>${item.info}</span>
              </li>
              `).join("")}
              </ul>
            <span class="uppercase bold">Technical Specifications</span>
            <ul class="bike__tech-specs">
              ${techList.map(item => /*html*/ `
                <li class="bike__tech-specs-list">
                  <span><strong>${item.title}</strong></span>
                  <span>${item.info}</span>
                </li>
              `).join("")}
            </ul>
            <div class="bike__buy-now__wrapper">
              <button>BUY NOW</button>
              <div class="bike__method-container">
                <span class="bike__method">Delivery in 5 days</span>
                <span class="bike__method">18 in stock</span>
              </div>
              
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

export default Bike;
