import { navigateTo } from "../js/router";

export function Bikes(app) {

  const carouselData = [
    {
      img: "/images/bikes/rider-a1.png",
      alt: "Rider A1 model",
      title: "Rider A1",
      subtitle: "Everyday Evolution",
      description:
        "Designed for those who value comfort, balance, and effortless motion.",
    },
    {
      img: "/images/bikes/urban-z3.png",
      alt: "",
      title: "Urban Z3",
      subtitle: "Precision Meets Power",
      description:
        "Bridging elegance and performance, it is crafted for riders who crave more.",
    },
    {
      img: "/images/bikes/ares-x10.png",
      alt: "",
      title: "Ares X10",
      subtitle: "The Pinnacle of Speed",
      description:
        "Unleash the future of biking with this this extradionary model.",
    },
  ];

  /* html */
  app.innerHTML = `
    <section class="line-break">
      <h1>Our bikes</h1>
      <p class="bikes__description">Check out our cutting-edge bike models.</p>
        <ul class="bikes__carousel">
          ${carouselData.map((bike) => /* html */ `
            <li class="bikes__carousel__card">
              <figure>
                <div class="bikes__carousel__img-wrapper">
                  <img src="${bike.img}" alt="${bike.alt}" class="bikes__carousel__card-img"/>
                  <button class="bikes__carousel__button-left">❮</button>
                  <button class="bikes__carousel__button-right">❯</button>
                  <div class="">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <figcaption>
                  <div class="bikes__carousel__info">
                    <h2>${bike.title}</h2>
                    <h3>${bike.subtitle}</h3>
                    <p class="bikes__carousel__description">${bike.description}</p>
                    <wc-button label="DETAILS" class="bikes__carousel__button-link"></wc-button>
                  </div>
                </figcaption>
              </figure> 
            </li>
          `).join("")}  
        </ul>
    </section>
            `;

  const ul = app.querySelector("ul"); // Needed to link to *ul.scrollBy*
  const leftBtns = app.querySelectorAll(".bikes__carousel__button-left");
  const rightBtns = app.querySelectorAll(".bikes__carousel__button-right");

  // Left Button
  leftBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      ul.scrollBy({ left: -ul.offsetWidth, behavior: "smooth" });
    });
  });

  // Right Button
  rightBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      ul.scrollBy({ left: ul.offsetWidth, behavior: "smooth" });
    });
  });

  // Details
  const linkBtns = app.querySelectorAll(".bikes__carousel__button-link");
  const bikeRoutes = ["/bikes/rider-a1", "/bikes/urban-z3", "/bikes/ares-x10"]

  // Shorter version
  linkBtns.forEach((Btn, i) => {
    if (bikeRoutes[i]) {
      Btn.addEventListener("click", () => navigateTo(bikeRoutes[i]))
    }
  })

  // linkBtns[0].addEventListener("click", () => {
  //   navigateTo("/bikes/rider-a1");
  // });

  // linkBtns[1].addEventListener("click", () => {
  //   navigateTo("/bikes/urban-z3");
  // });

  // linkBtns[2].addEventListener("click", () => {
  //   navigateTo("/bikes/ares-x10");
  // });
}
