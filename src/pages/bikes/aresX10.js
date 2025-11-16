export function aresX10(app) {
  /* html */
  app.innerHTML = `
    <wc-bike
      img="/images/bikes/ares-x10.png",
      alt="Ares X10",
      price="8500",
      title="Ares X10",
      subtitle="The Pinnacle of Speed",
      description="Every curve, every light, every motion is engineered for maximum performance. Its hyper-responsive carbon body and high-output electric drive deliver unmatched velocity and precision — the fastest, boldest, and most advanced machine in the CyberWheel lineup.",
      electricMotor="Dual-drive 500 W high-torque motor"
      maxSpeed="80 km/h assisted"
      battery="72V 20Ah graphene cell, 2h fast charge"
      material="Ultra-light carbon fiber monocoque frame"
      weight="7 kg"
      height="50 cm"
      width="100 cm"
      depth="8 cm"
      gears="20-speed"
      wheelSize="27 in"
    >
    </wc-bike>
  `;
}
