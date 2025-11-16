export function riderA1(app) {
  /* html */
  app.innerHTML = `
    <wc-bike
      img="/images/bikes/rider-a1.png"
      alt="Rider A1 model"
      price="4500"
      title="Rider A1"
      subtitle="Everyday Evolution"
      description=
        "The Rider A1 blends minimalism with modern electric engineering, providing a smooth ride through city streets and open roads alike. With a lightweight frame and intuitive pedal-assist, it’s built for everyone — sleek, simple, and ready for daily rides."
      electricMotor="Rear hub 250 W, pedal-assist"
      maxSpeed="20 km/h assisted"
      battery="36V 10Ah, 4-6h charge"
      material="Lightweight aluminum frame"
      weight="12 kg"
      height="60 cm"
      width="120 cm"
      depth="10 cm"
      gears="10-speed"
      wheelSize="29 in"
    >
    </wc-bike>
  `;
}
