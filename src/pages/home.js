export function Home(app) {
  /*html*/
  app.innerHTML = `
  <div class="line-break">
  <!--  Introduction -->
  <article class="home__introduction" aria-label="Introduction">
    <div class="line-break">
      <h1 class="home__future">The <span id="future">future</span> of biking starts here</h1>
      <p>
        Experience cutting-edge, battery-powered bicycles designed for the
        ultimate ride. Our sleek models redefine mobility, combining effortless
        speed with futuristic design. Embrace the next generation of
        biking—where innovation meets elegance, and every destination feels
        within reach.
      </p>
      </div>
      <img src="/images/introduction-bikes-people.png" alt="Bicycle shop" class="home__people-riding"/>
  </article>

  <!-- Stores -->
  <section class="line-break" aria-label="Stores">
    <div class="content-margin">
      <h1 class="">Stores everywhere</h1>
    </div>
    <img src="/images/shop.png" alt="Bicycle shop" class="shop"/>
  </section>

  <!-- Technology -->
  <article aria-label="Technology">
    <div class="content-margin home__technology">
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
          <div class="home__durability-tracking">
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#999999"><path d="M160-240q-50 0-85-35t-35-85v-240q0-50 35-85t85-35h562l-64 80H160q-17 0-28.5 11.5T120-600v240q0 17 11.5 28.5T160-320h473l-15 80H160Zm547-40 28-160H600l192-240h21l-28 160h135L728-280h-21Zm-547-80v-240h466L434-360H160Z"/></svg>
            <h2>Durability</h2>
          </div>
          <p>
            Cyber Wheel is designed with precision and built for durability, offering
            a smooth and efficient ride. Engineered for long-distance performance,
            our bikes are powered by advanced battery technology, ensuring
            effortless speed and endurance.
          </p>
        </div>
        <div class="line-break">
          <div class="home__durability-tracking">
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#999999"><path d="M240-40H120q-33 0-56.5-23.5T40-120v-120h80v120h120v80Zm480 0v-80h120v-120h80v120q0 33-23.5 56.5T840-40H720ZM480-220q-120 0-217.5-71T120-480q45-118 142.5-189T480-740q120 0 217.5 71T840-480q-45 118-142.5 189T480-220Zm0-80q88 0 161-48t112-132q-39-84-112-132t-161-48q-88 0-161 48T207-480q39 84 112 132t161 48Zm0-40q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-80q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420ZM40-720v-120q0-33 23.5-56.5T120-920h120v80H120v120H40Zm800 0v-120H720v-80h120q33 0 56.5 23.5T920-840v120h-80ZM480-480Z"/></svg>
          <h2>Tracking</h2>
          </div>
          <p>
            We know how precious your bike is, so we have added trackers and
            anti-theft systems to ensure your peace of mind.
          </p>
        </div>
      </div>
    </div>
  </article>

  <!--  Review -->
  <article class="home__review-container" aria-label="Review">
    <img src="/images/review-woman.png" alt="A woman riding a bike" />
    <div class="home__review">
      <blockquote>
        <p class="home__review-text">
          Cycling has always been my passion, and what I found at Cyber Wheel intensified my love for this activity. I recommend it to everyone I
          care about.
        </p>
      </blockquote>
      <span class="home__review-text_name">Heather Smith</span>
      </div>
  </article>

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
