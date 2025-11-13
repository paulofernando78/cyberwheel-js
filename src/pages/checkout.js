export function Checkout(app) {
  /* html*/ 
  app.innerHTML = `
    <h1>Checkout</h1>
    <form id="checkoutForm" class="checkout__container">
      
      <div class="checkout__payment-details">
        <div>
          <span class="checkout__title">Payment Details</span>
          <p class="checkout__description">Complete your purchase by providing your payment details.</p>
        </div>
        <div>
          <span>Cardholder Name*</span>
          <input/>
        </div>

        <div class="checkout__card-data">
          <div>
            <span>Card Number*</span>
            <input placeholder="1111 2222 3333 4444"/>
          </div>
          <div>
            <span>Expiry Date*</span>
            <input placeholder="MM/YY"/>
          </div>
          <div>
            <span>CVV*</span>
            <input placeholder="•••"/>
          </div>
        </div>

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
          <span>Address</span>
          <input/>
        </div>
        <div>
          <span>City</span>
          <input/>
        </div>

        <div class="checkout__state-zip">
          <div>
            <span>State*</span>
            <input/>
          </div>
          <div>
            <span>Zip Code*</span>
            <input/>
          </div>
        </div>

      </div>
      
      <div class="checkout__summary">
        <div>
          <span class="checkout__title">Summary</span>
        </div>

        <wc-button label="Submit" style="position: static"></wc-button>
      </div>


    </form>

    
  `
}