export function Home(home) {
  /*html*/ 
  home.innerHTML = `
  <div class="line-break">
  <!--  Introduction -->
  <section class="line-break">
    <h1>The future of biking starts here</h1>
    <div>
      <p>
        Experience cutting-edge, battery-powered bicycles designed for the
        ultimate ride. Our sleek models redefine mobility, combining effortless
        speed with futuristic design. Embrace the next generation of
        biking—where innovation meets elegance, and every destination feels
        within reach.
      </p>
    </div>
  </section>

  <!-- Customization -->
  <section class="customization line-break">
    <h1>Customize yours now</h1>
    <img src="/images/bicycle-shop.webp" alt="Bicycle shop" />
  </section>

  <!-- Technology -->
  <section class="technology">
    <div class="line-break">
      <h1>Advance technology</h1>
      <p>
        Our bicycles are equipped with the latest in battery technology,
        providing more range, faster charging, and intelligent power management
        to optimize every ride. Welcome to the future of transportation.
      </p>
    </div>
    <div class="line-break">
      <div class="line-break">
        <h2>Durability</h2>
        <p>
          Bikcraft is designed with precision and built for durability, offering
          a smooth and efficient ride. Engineered for long-distance performance,
          our bikes are powered by advanced battery technology, ensuring
          effortless speed and endurance.
        </p>
      </div>
      <div class="line-break">
        <h2>Tracking</h2>
        <p>
          We know how precious your Bikcraft is, so we have added trackers and
          anti-theft systems to ensure your peace of mind.
        </p>
      </div>
    </div>
  </section>

  <!--  Review -->
  <section class="review-container">
    <img src="/images/review-woman.png" alt="A woman riding a bike" />
    <div class="review">
      <p class="review-text">
        Cycling has always been my passion, and what the people at Bikcraft did
        was intensify my love for this activity. I recommend it to everyone I
        care about.
      </p>
    </div>
  </section>

  <!-- Our Partners -->
  <section class="our-partners">
    <h1>Our Partners</h1>
  </section>
</div>
  `
}

