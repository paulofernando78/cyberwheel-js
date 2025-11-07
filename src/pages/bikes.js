import { navigateTo } from "../js/router";

export function Bikes(app) {
  const carouselData = [
    {
      img: "/images/bikes/rider-a1.png",
      alt: "Rider A1 model",
      title: "Rider A1",
      subtitle: "Everyday Evolution",
      description:
        "Designed for those who value comfort, balance, and effortless motion. The Rider A1 blends minimalism with modern electric engineering, providing a smooth ride through city streets and open roads alike. With a lightweight frame and intuitive pedal-assist, it’s built for everyone — sleek, simple, and ready for daily rides.",
    },
    {
      img: "/images/bikes/urban-z3.png",
      alt: "",
      title: "Urban Z3",
      subtitle: "Precision Meets Power",
      description:
        "Bridging elegance and performance, the Rider Z3 is crafted for riders who crave more. With a redefined aerodynamic frame, improved torque delivery, and advanced smart control, it delivers both stability and acceleration when you need it most. It’s not just a ride — it’s the transition from everyday to exceptional.",
    },
    {
      img: "/images/bikes/ares-x10.png",
      alt: "",
      title: "Ares X10",
      subtitle: "The Pinnacle of Speed",
      description:
        "Unleash the future of biking with the Areas X10. Every curve, every light, every motion is engineered for maximum performance. Its hyper-responsive carbon body and high-output electric drive deliver unmatched velocity and precision — the fastest, boldest, and most advanced machine in the CyberWheel lineup.",
    },
  ];

  /* html */
  app.innerHTML = `
    <section class="line-break">
      <h1>Our bikes</h1>
        <p>Check out our cutting-edge bikes models.</p>
        <div class="wrapper">
          <ul class="carousel">
            ${carouselData
              .map(
                /* html */
                (bike) => `
              <li class="carousel__card">
                <figure>
                  <div class="carousel__img-wrapper">
                    <img src="${bike.img}" alt="${bike.alt}" class="carousel__card-img"/>
                    <button class="carousel__button--left">❮</button>
                    <button class="carousel__button--right">❯</button>
                  </div>
                  <figcaption>
                    <h2>${bike.title}</h2>
                    <h3>${bike.subtitle}</h3>
                    <p>${bike.description}</p>
                  </figcaption>
                </figure> 
                <button class="carousel__button__link">Details</button>
              </li>
              `
              )
              .join("")}  
          </ul>
        </div>
    </section>
      `;

  const ul = app.querySelector("ul"); // Needed to link to *ul.scrollBy*
  const leftBtns = app.querySelectorAll(".carousel__button--left");
  const rightBtns = app.querySelectorAll(".carousel__button--right");

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
  const linkBtns = app.querySelectorAll(".carousel__button__link");
  linkBtns[0].addEventListener("click", () => {
    navigateTo("/bikes/rider-a1");
  });

  linkBtns[1].addEventListener("click", () => {
    navigateTo("/bikes/urban-z3");
  });

  linkBtns[2].addEventListener("click", () => {
    navigateTo("/bikes/ares-x10");
  });
}
