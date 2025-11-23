import { navigateTo } from "../js/router";

export function Bikes(app) {
  const carouselData = [
    {
      img: "/images/bikes/rider-a1-1.png",
      alt: "Rider A1 model",
      title: "Rider A1",
      subtitle: "Everyday Evolution",
      description:
        "Designed for those who value comfort, balance, and effortless motion.",
    },
    {
      img: "/images/bikes/urban-z3-1.png",
      alt: "",
      title: "Urban Z3",
      subtitle: "Precision Meets Power",
      description:
        "Bridging elegance and performance, it is crafted for riders who crave more.",
    },
    {
      img: "/images/bikes/ares-x10-1.png",
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
      <div class="content-margin">
        <h1>Our bikes</h1>
        <p class="bikes__description">Check out our cutting-edge bike models.</p>
      </div>
      <div class="bikes__carousel-wrapper content-margin">
        <button class="bikes__carousel__button-left">
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#999999"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
        </button>
        <button class="bikes__carousel__button-right">
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#999999"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </button>
        <ul class="bikes__carousel">
        ${carouselData.map((bike) => /* html */ `
          <li class="bikes__carousel__card">
            <figure>
              <div class="bikes__carousel__img-wrapper">
                <img src="${bike.img}" alt="${bike.alt}" class="img-brightness"/>
              </div>
              <figcaption>
                <h2>${bike.title}</h2>
                <h3>${bike.subtitle}</h3>
                <p class="bikes__carousel__description">${bike.description}</p>
                <wc-button label="DETAILS" class="bikes__carousel__button-link" ></wc-button>
              </figcaption>
            </figure> 
          </li>
            `
          )
          .join("")}  
          </ul>
          </div>
          <div class="bikes__carousel-dots">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
    </section>
            `;

  const ul = app.querySelector("ul"); // Needed to link to *ul.scrollBy*
  const leftBtns = app.querySelectorAll(".bikes__carousel__button-left");
  const rightBtns = app.querySelectorAll(".bikes__carousel__button-right");
  const dots = app.querySelectorAll(".bikes__carousel-dots span");

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

  function updateButtons() {
    if (ul.scrollLeft === 0) {
      leftBtns.forEach((btn) => (btn.disabled = true));
    } else {
      leftBtns.forEach((btn) => (btn.disabled = false));
    }

    if (ul.scrollLeft + ul.clientWidth >= ul.scrollWidth) {
      rightBtns.forEach((btn) => (btn.disabled = true));
    } else {
      rightBtns.forEach((btn) => (btn.disabled = false));
    }
  }

  ul.addEventListener("scroll", updateButtons);
  updateButtons();

  // Dots
  function updateDots() {
    const index = Math.round(ul.scrollLeft / ul.clientWidth);

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  ul.addEventListener("scroll", updateDots);
  updateDots();

  // Details
  const linkBtns = app.querySelectorAll(".bikes__carousel__button-link");
  const bikeRoutes = ["/bikes/rider-a1", "/bikes/urban-z3", "/bikes/ares-x10"];

  // Shorter version
  linkBtns.forEach((Btn, i) => {
    if (bikeRoutes[i]) {
      Btn.addEventListener("click", () => navigateTo(bikeRoutes[i]));
    }
  });

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
