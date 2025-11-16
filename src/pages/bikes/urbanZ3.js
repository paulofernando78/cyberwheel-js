export function urbanZ3(app) {
  /* html */ 
  app.innerHTML = `
    <wc-bike
      img="/images/bikes/urban-z3.png"
      alt="Urban Z3 model"
      price="6500"
      title= "Urban Z3"
      subtitle= "Precision Meets Power"
      description=
        "With a redefined aerodynamic frame, improved torque delivery, and advanced smart control, it delivers both stability and acceleration when you need it most. It’s not just a ride — it’s the transition from everyday to exceptional."
      electricMotor="Mid-drive 350 W brushless motor"
      maxSpeed="35 km/h assisted"
      battery="48V 14Ah lithium-ion, 5h charge"
      material="Carbon fiber and aluminum alloy"
      weight="9 kg"
      height="60 cm"
      width="120 cm"
      depth="10 cm"
      gears="16-speed"
      wheelSize="29 in"
    >
    </wc-bike>
  `;
}