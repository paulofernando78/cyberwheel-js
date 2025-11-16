export function Checkout(app) {
  /* html*/ 
  app.innerHTML = `
    <div class="line-break">
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
            <label for="cardholder-name">Cardholder Name*</label>
            <input id="cardholder-name" placeholder="Jared Leto"/>
          </div>

          <div class="checkout__card-data">
            <div class="checkout__card-data__card-number">
              <label for="card-number">Card Number*</label>
              <input id="card-number" placeholder="0000 0000 0000 0000"/>
            </div>
            <div>
              <label for="expiry-date">Expiry Date*</label>
              <input id="expiry-date" placeholder="MM/YY"/>
            </div>
            <div>
              <label for="cvv">CVV*</label>
              <input id="cvv" placeholder="•••"/>
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
              <input id="city" placeholder="New York"/>
            </div>
          </div>
            

          <div>
            <label for="address">Address</label>
            <input id="address" placeholder="21st street"/>
            
          </div>

          <div class="checkout__state-zip">
            <div>
              <label for="state" >State*</label>
              <input id="state" placeholder="New York City"/>
            </div>
            <div>
              <label for="zip-code" >Zip Code*</label>
              <input id="zip-code" placeholder="12345"/>
            </div>
          </div>

        </div>
        
        <div class="checkout__summary line-break">
          <div>
            <span class="checkout__title">Summary</span>
            <p class="checkout__payment-description">Complete your purchase by providing your payment details.</p>
          </div>
          <hr />
          <img src="/images/bikes/ares-x10.png"/>
          <div class="checkout__price">
            <div>
              <span>Bike: Ares X-10</span>
              <span>$9.000</span>
            </div>
            <hr />
            <div>
              <span>Tax:</span>
              <span>$50</span>
            </div>
            <hr />
            <div>
              <span>Total:</span>
              <span>$9.250</span>
            </div>
          </div>

          <wc-button label="Submit" style="position: static"></wc-button>
          <span class="checkout__secure-msg">Payments are secure and encrypted</span>
        </div>
      </form>
    </div>

    
  `
}