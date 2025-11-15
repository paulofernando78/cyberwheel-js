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
      info='[
      {
        "title":"Electric Motor",
        "info":"Mid-drive 350 W brushless motor"
      },
      {
        "title":"Max Speed",
        "info":"35 km/h assisted"
      },
      {
        "title":"Battery",
        "info":"48V 14Ah lithium-ion, 5h charge"
      }
      ,
      {
        "title":"Material",
        "info":"Carbon fiber and aluminum alloy"
      }
      ]'
      tech='[
        {
          "title": "Weight",
          "info": "9 kg"
        },
        {
          "title": "Height",
          "info": "60 cm"
        },
        {
        "title": "Width",
        "info": "120 cm"
        },
        {
        "title": "Depth",
        "info": "10 cm"
        },
        {
        "title": "Gears",
        "info": "16-speed"
        },
        {
        "title": "Wheel Size",
        "info": "29 in"
        }
      ]'
    >
    </wc-bike>
  `;
}