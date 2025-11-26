export function Contacts(app) {
  /* html */
  app.innerHTML = `
    <article class="content-margin line-break">
    <h1>Contacts</h1>
    <h2 class="contacts__description">Our stores</h2>
      <div class="contacts__map-wrapper">
        <div class="contacts__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.07649167656!2d-74.30913966259247!3d40.696672724301436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbr!4v1764193940480!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="contacts__city line-break">
            <h3 class="display-block">New York</h3>

            <div class="contacts__address">
              <div class="contacts__address__items">
                <span>1234 Cycle Lane</span>
                <span>New York - NY</span>
              </div>
              <div class="contacts__address__items">
                <span>ny@cyberwheel.com</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div class="contacts__time">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
            <span>8:00AM to 5:00PM</span>
            </div>
          </div>
        </div>
        <div class="contacts__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.1437761213!2d-46.924943519041115!3d-23.682063582468334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1764195365232!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="contacts__city line-break">
            <h3 class="display-block">São Paulo</h3>
            <div class="contacts__address">
              <div class="contacts__address__items">
                <span>1234 Faria Lima Av.</span>
                <span>São Paulo - SP</span>
              </div>
              <div class="contacts__address__items">
                <span>sp@cyberwheel.com</span>
                <span>+55 11 91234-5678</span>
              </div>
            </div>
            <div class="contacts__time">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
              <span>8:00AM to 5:00PM</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}
