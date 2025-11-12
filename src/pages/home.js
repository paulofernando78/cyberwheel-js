export function Home(home) {
  /*html*/
  home.innerHTML = `
  <div class="line-break">
  <!--  Introduction -->
  <section class="home__introduction line-break" aria-label="Introduction">
    <h1 class="home__future">The <span id="future">future</span> of biking starts here</h1>
      <p>
        Experience cutting-edge, battery-powered bicycles designed for the
        ultimate ride. Our sleek models redefine mobility, combining effortless
        speed with futuristic design. Embrace the next generation of
        biking—where innovation meets elegance, and every destination feels
        within reach.
      </p>
      <img src="/images/shop.png" alt="Bicycle shop" class="shop"/>
  </section>

  <!-- Customization -->
  <section class="home__customization line-break" aria-label="Customization">
    <h1>Customize yours now</h1>
    <img src="/images/shop.png" alt="Bicycle shop" class="shop"/>
  </section>

  <!-- Technology -->
  <section class="home__technology" aria-label="Technology">
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
          Cyber Wheel is designed with precision and built for durability, offering
          a smooth and efficient ride. Engineered for long-distance performance,
          our bikes are powered by advanced battery technology, ensuring
          effortless speed and endurance.
        </p>
      </div>
      <div class="line-break">
        <h2>Tracking</h2>
        <p>
          We know how precious your bike is, so we have added trackers and
          anti-theft systems to ensure your peace of mind.
        </p>
      </div>
    </div>
  </section>

  <!--  Review -->
  <section class="home__review-container" aria-label="Review">
    <img src="/images/review-woman.png" alt="A woman riding a bike" />
    <div class="home__review">
      <p class="home__review-text">
        Cycling has always been my passion, and what I found at Cyber Wheel intensified my love for this activity. I recommend it to everyone I
        care about.
      </p>
    </div>
  </section>

  <!-- Our Partners -->
  <section aria-label="Our Partners">
    <h1 class="home__partners">Our Partners</h1>
      <div class="home__partners-slider">
        <ul class="home__partners-slider__group">
          <li><img src="/images/partners/caravan.svg" alt="Caravan logo"/></li>
          <li><img src="/images/partners/dogs.svg" alt="Dogs logo" /></li>
          <li><img src="/images/partners/flexblog.svg" alt="Flexblog logo" /></li>
          <li><img src="/images/partners/handel.svg" alt="Handel logo" /></li>
          <li><img src="/images/partners/lescone.svg" alt="Lescone logo" /></li>
          <li><img src="/images/partners/ranek.svg" alt="Ranek logo" /></li>
          <li><img src="/images/partners/surfbot.svg" alt="Surfbot logo" /></li>
          <li><img src="/images/partners/wildbeast.svg" alt="Wildbeast logo" />
          </li>
        </ul>

        <ul class="home__partners-slider__group" aria-hidden="true">
          <li><img src="/images/partners/caravan.svg" alt="Caravan logo"/></li>
          <li><img src="/images/partners/dogs.svg" alt="Dogs logo" /></li>
          <li><img src="/images/partners/flexblog.svg" alt="Flexblog logo" /></li>
          <li><img src="/images/partners/handel.svg" alt="Handel logo" /></li>
          <li><img src="/images/partners/lescone.svg" alt="Lescone logo" /></li>
          <li><img src="/images/partners/ranek.svg" alt="Ranek logo" /></li>
          <li><img src="/images/partners/surfbot.svg" alt="Surfbot logo" /></li>
          <li><img src="/images/partners/wildbeast.svg" alt="Wildbeast logo" />
          </li>
        </ul>
        
      </div>
      
  </section>
</div>
  `;
}
