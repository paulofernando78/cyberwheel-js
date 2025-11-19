export async function Checkout(app, params) {
  console.log(params)
  const resp = await fetch("/data/bikes.json");
  const bikes = await resp.json();
  
  const bike = bikes.find((b) => b.id === params[1])

  const formatCurrency = (value) => new Intl.NumberFormat("us-US", {style:"currency", currency: "USD"}).format(value)

  /* html*/ 
  app.innerHTML = `
    <section class="line-break content-margin">
      <h1>Checkout</h1>
      <p class="checkout__title-description">Fill in the payment form.</p>
      <form id="checkoutForm" class="checkout__container">
        <div class="checkout__payment-details line-break">
          <div>
            <span class="checkout__title">Payment Details</span>
            <p class="checkout__payment-description">Complete your purchase by providing your payment details.</p>
          </div>
          <hr />
          <div>
            <span class="checkout__cards">Cards Accepted:</span>
            <div class="checkout__credit-cards">
              <img src="/images/icons/credit-cards/visa.svg" alt="visa credit card"/>
              <img src="/images/icons/credit-cards/mastercard.svg" alt="master credit card"/>
              <img src="/images/icons/credit-cards/american-express.svg" alt="american express credit card"/>
              <img src="/images/icons/credit-cards/paypal.svg" alt="paypal"/>
              <img src="/images/icons/credit-cards/bitcoin.svg" alt="bitcoin"/>
            </div>
          </div>
          <div>
            <label for="cardholder-name">Cardholder Name*</label>
            <input type="text" id="cardholder-name" placeholder="Jared Leto" required/>
          </div>
          <div class="checkout__card-data">
            <div class="checkout__card-data__card-number">
              <label for="card-number">Card Number*</label>
              <input type="text" id="card-number" placeholder="0000 0000 0000 0000" required/>
            </div>
            <div>
              <label for="expiry-date">Exp. Date*</label>
              <input type="text" id="expiry-date" placeholder="MM/YY" required/>
            </div>
            <div>
              <label for="cvv">CVV*</label>
              <input type="text" inputmode="numeric" maxlength="3" id="cvv" placeholder="•••" required/>
            </div>
          </div>

          <div class="checkout__country-city">
            <div>
              <label for="country" class="display-block">Countries</label>
              <select id="country" name="country" required>
                <option value="" disabled selected>Select your country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="pt">Portugal</option>
                <option value="sp">Spain</option>
                <option value="fr">France</option>
                <option value="it">Italy</option>
                <option value="de">Germany</option>
                <option value="au">Australia</option>
                <option value="cn">China</option>
                <option value="jp">Japan</option>
              </select>
            </div>
            <div>
              <label for="city" >City</label>
              <input type="text" id="city" placeholder="New York" required/>
            </div>
          </div>
            

          <div>
            <label for="address">Address</label>
            <input type="text" id="address" placeholder="21st street" required/>
            
          </div>

          <div class="checkout__state-zip">
            <div>
              <label for="state" >State*</label>
              <input type="text" id="state" placeholder="New York City" required/>
            </div>
            <div>
              <label for="zip-code" >Zip Code*</label>
              <input type="text" inputmod="numeric" id="zip-code" placeholder="12345" required/>
            </div>
          </div>

        </div>
        
        <div class="checkout__summary line-break">
          <div>
            <span class="checkout__title">Summary</span>
            <p class="checkout__payment-description">Complete your purchase by providing your payment details.</p>
          </div>
          <hr />
          <img src="${bike.imgOne}"/>
          <div class="checkout__price">
            <div>
              <span>Bike: ${bike.title}</span>
              <span>${formatCurrency(bike.price)}</span>
            </div>
            <hr />
            <div>
              <span>Tax:</span>
              <span>${formatCurrency(50)}</span>
            </div>
            <hr />
            <div>
              <span>Total:</span>
              <span>${formatCurrency(bike.price + 50)}</span>
            </div>
          </div>
          <wc-button label="Submit"></wc-button>
          <div class="checkout__secure-msg__wrapper">
            <img src="/images/icons/padlock.svg" alt="padlock icon"/>
            <span class="checkout__secure-msg">Payments are secure and encrypted</span>
          </div>
        </div>
      </form>
    </section>
  `
}