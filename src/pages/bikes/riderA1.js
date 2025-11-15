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
      info='[
      {
        "title":"Electric Motor",
        "info":"Rear hub 250 W, pedal-assist"
      },
      {
        "title":"Max Speed",
        "info":"20 km/h assisted"
      },
      {
        "title":"Battery",
        "info":"36V 10Ah, 4-6h charge"
      }
      ,
      {
        "title":"Material",
        "info":"Lightweight aluminum frame"
      }
      ]'
      tech='[
        {
          "title": "Weight",
          "info": "12 kg"
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
        "info": "10-speed"
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
