export function riderA1(app) {
  const bikeData = [
    {
      img: "/images/bikes/rider-a1.png",
      alt: "Rider A1 model",
      title: "Rider A1",
      subtitle: "Everyday Evolution",
      description:
        "Designed for those who value comfort, balance, and effortless motion.",
    },
  ];

  /* html */
  app.innerHTML = `
    <section class="line-break">
      <img src="/images/bikes/urban-z3.png" alt="Rider A1 Model" class="rider-a1__img"/>
      <h1>Rider A1</h1>
      <p>The Rider A1 blends minimalism with modern electric engineering, providing a smooth ride through city streets and open roads alike. With a lightweight frame and intuitive pedal-assist, it’s built for everyone — sleek, simple, and ready for daily rides.
      </p>
    </section>
  `;
}
