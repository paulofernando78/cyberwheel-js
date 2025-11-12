export function aresX10(app) {
  const bikeData = [
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
    <wc-bike
      img="/images/bikes/ares-x10.png",
      alt="",
      title="Ares X10",
      subtitle="The Pinnacle of Speed",
      description="Unleash the future of biking with the Areas X10. Every curve, every light, every motion is engineered for maximum performance. Its hyper-responsive carbon body and high-output electric drive deliver unmatched velocity and precision — the fastest, boldest, and most advanced machine in the CyberWheel lineup.",
      info='[
      {
        "title":"Electric Motor",
        "info":""
      },
      {
        "title":"Max Speed",
        "info":"80"
      },
      {
        "title":"Battery",
        "info":""
      }
      ,
      {
        "title":"Material",
        "info":""
      }
      ]'
      tech='[
        {
          "title": "Weight",
          "info": "7 kg"
        },
        {
          "title": "Height",
          "info": "50 cm"
        },
        {
        "title": "Width",
        "info": "100 cm"
        },
        {
        "title": "Depth",
        "info": "8 cm"
        },
        {
        "title": "Gears",
        "info": "20-speed"
        },
        {
        "title": "Wheel Size",
        "info": "27 in"
        }
      ]'
    >
    </wc-bike>
  `;
}
