export function Bikes(app) {
  app.innerHTML = "";

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

  const section = document.createElement("section");
  section.className = "line-break";
  app.appendChild(section);

  const h1 = document.createElement("h1");
  h1.textContent = "Our bikes";
  section.appendChild(h1);

  const p = document.createElement("p");
  p.textContent = "Check out our cutting-edge bikes.";
  section.appendChild(p);

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const ul = document.createElement("ul");
  ul.className = "carousel";

  carouselData.forEach((bike) => {
    const li = document.createElement("li");
    li.className = "card";
    /* html*/
    li.innerHTML = `
    <figure>
      <div class="img-wrapper">
        <img src="${bike.img}" alt="${bike.alt}" class="bike-img"/>
        <button class="left-button">❮</button>
        <button class="right-button">❯</button>
      </div>
      <figcaption>
        <h2>${bike.title}</h2>
        <h3>${bike.subtitle}</h3>
        <p>${bike.description}</p>
    </figcaption>
      
    </figure>
      
      
    `;
    ul.appendChild(li);
  });

  wrapper.append(ul);
  section.appendChild(wrapper);

  if (ul) {
    const leftBtn = document.querySelectorAll(".left-button");
    const rightBtn = document.querySelectorAll(".right-button");

    leftBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        ul.scrollBy({ left: -ul.offsetWidth, behavior: "smooth" });
      });
    });

    rightBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        ul.scrollBy({ left: ul.offsetWidth, behavior: "smooth" });
      });
    });
  }
}
