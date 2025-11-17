export async function handler(app, params) {
  const resp = await fetch("/data/bikes.json");
  const bikes = await resp.json();

  const bike = bikes.find((b) => b.id === params[1]);

  /* html */
  app.innerHTML = `
    <wc-bike
      img="${bike.img}"
      alt="${bike.alt}"
      price="${bike.price}"
      title="${bike.title}"
      subtitle="${bike.subtitle}"
      description="${bike.description}"
      electricMotor="${bike.electricMotor}"
      maxSpeed="${bike.maxSpeed}"
      battery="${bike.battery}"
      material="${bike.material}"
      weight="${bike.weight}"
      height="${bike.height}"
      width="${bike.width}"
      depth="${bike.depth}"
      gears="${bike.gears}"
      wheelSize="${bike.wheelSize}"
    ></wc-bike>
  `;
}
