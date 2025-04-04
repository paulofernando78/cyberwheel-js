class BicycleCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const globalStyles = document.createElement("link");
    globalStyles.rel = "stylesheet";
    globalStyles.href = "/css/global.css";
    this.shadowRoot.appendChild(globalStyles);

    const style = document.createElement("style"); /*css*/
    style.textContent = `
      .container {
        display: grid;
        grid-template-columns: repeat(3, 350px);
        gap: 15px;
        padding: 10px;
        overflow-x: auto;
      }

      .card {
        padding: 10px;
        margin-block: 10px;
        background: lightgray;
        /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08); */
        box-shadow: 0 0 5px white;
        border-radius: 5px;
        transition: transform 0.3s ease;
        position: relative;
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
      }

      .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }

      .card:hover {
        transform: scale(1.02);
      }
    `;
    this.shadowRoot.appendChild(style);

    const container = document.createElement("div");
    container.classList.add("container");

    const items = [
      {
        img: "/assets/img/bicycles/velocity-z3.gif",
        alt: "Velocity Z3 Bike",
        price: "$4,999",
        title: "Velocity Z3",
        description:
          "The Velocity Z3 is a high-speed machine built for racing and extreme performance. With an aerodynamic frame, ultra-light materials, and cutting-edge battery technology, this bike delivers lightning-fast acceleration and top speeds, perfect for those who crave adrenaline on every ride.",
      },
      {
        img: "/assets/img/bicycles/vortex-v9.gif",
        alt: "Vortex V9",
        price: "$5,999",
        title: "Vortex V9",
        description:
          "The Vortex V9 is designed for effortless urban commuting with a focus on comfort and pleasure. Its smooth ride, ergonomic design, and intelligent assistance features make it the perfect choice for relaxed city journeys. With a long-lasting battery this bike ensures every ride feels enjoyable.",
      },
      {
        img: "/assets/img/bicycles/quantum-x1.gif",
        alt: "Quantum X1",
        price: "$6,999",
        title: "Quantum X1",
        description:
          "The <b>Vortex V9</b> is designed for effortless urban commuting with a focus on comfort and pleasure. Its smooth ride, ergonomic design, and intelligent assistance features make it the perfect choice for relaxed city journeys. With a long-lasting battery this bike ensures every ride feels enjoyable.",
      },
    ];

    items.forEach((items) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.classList.add("img");
      img.src = items.img;
      img.alt = items.alt;

      const price = document.createElement("span");
      price.classList.add("price");
      price.textContent = items.price;

      const title = document.createElement("h1");
      title.classList.add("title");
      title.textContent = items.title;

      const description = document.createElement("p");
      description.classList.add("description");
      description.textContent = items.description;

      container.appendChild(card);
      card.appendChild(img);
      card.appendChild(price);
      card.appendChild(title);
      card.appendChild(description);
    });

    this.shadowRoot.appendChild(container);
  }
}

export default BicycleCard;
