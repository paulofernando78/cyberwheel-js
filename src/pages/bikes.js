export function Bikes(app) {
  /*html*/ 
  app.innerHTML = `
  <section class="line-break">
  <h1>Our Bikes</h1>
  <div>
    <p>Check out our cutting-edge bikes.</p>
  </div>
  <div class="wrapper" aria-label="Bikes">
    <button class="left-button" id="left">❮</button>
    <ul class="carousel">
      <li class="card">
        <img src="/images/bikes/rider-a1.png" alt="" />
        <h2>Rider A1</h2>
        <h3>Everyday Evolution</h3>
        <p>
          Designed for those who value comfort, balance, and effortless motion.
          The Rider A1 blends minimalism with modern electric engineering,
          providing a smooth ride through city streets and open roads alike.
          With a lightweight frame and intuitive pedal-assist, it’s built for
          everyone — sleek, simple, and ready for daily rides.
        </p>
      </li>
      <li class="card">
        <img src="/images/bikes/urban-z3.png" alt="" />
        <h2>Urban Z3</h2>
        <h3>Precision Meets Power</h3>
        <p>
          Bridging elegance and performance, the Rider Z3 is crafted for riders
          who crave more. With a redefined aerodynamic frame, improved torque
          delivery, and advanced smart control, it delivers both stability and
          acceleration when you need it most. It’s not just a ride — it’s the
          transition from everyday to exceptional.
        </p>
      </li>
      <li class="card">
        <img src="/images/bikes/ares-x10.png" alt="" />
        <h2>Ares X10</h2>
        <h3>The Pinnacle of Speed</h3>
        <p>
          Unleash the future of biking with the Areas X10. Every curve, every
          light, every motion is engineered for maximum performance. Its
          hyper-responsive carbon body and high-output electric drive deliver
          unmatched velocity and precision — the fastest, boldest, and most
          advanced machine in the CyberWheel lineup.
        </p>
      </li>
      <li class="card">
        <img src="/images/bikes/ares-x10.png" alt="" />
        <h2>Ares X10</h2>
        <h3>The Pinnacle of Speed</h3>
        <p>
          Unleash the future of biking with the Areas X10. Every curve, every
          light, every motion is engineered for maximum performance. Its
          hyper-responsive carbon body and high-output electric drive deliver
          unmatched velocity and precision — the fastest, boldest, and most
          advanced machine in the CyberWheel lineup.
        </p>
      </li>
    </ul>
    <button class="right-button" id="right">❯</button>
  </div>
</section>
  `;

    const carousel = document.querySelector(".carousel");
    const leftBtn = document.querySelector("#left");
    const rightBtn = document.querySelector("#right");

    if (leftBtn && rightBtn && carousel) {
      leftBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
      });
      rightBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
      });
    }
}
