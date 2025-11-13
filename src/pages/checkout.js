export function Checkout(app) {
  /* html*/ 
  app.innerHTML = `
    <h1>Checkout</h1>
    <div class="checkout__container">
      
      <div class="checkout__payment-details">
        <div>
          <span class="checkout__title">Payment Details</span>
          <p class="checkout__description">Complete your purchase by providing your payment details.</p>
        </div>
        <div>
          <span>Cardholder Name*</span>
          <input class="display-block"/>
        </div>

        <div class="test">
          <div>
            <span>Card Number*</span>
            <input class="display-block"/>
          </div>
          <div>
            <span>Expiry Date*</span>
            <input class="display-block"/>
          </div>
        
        </div>

        <div>
          <span>Country*</span>
          <input class="display-block"/>
        </div>
        <div>
          <span>Address</span>
          <input class="display-block"/>
        </div>
        <div>
          <span>City</span>
          <input class="display-block"/>
        </div>

        <div class="checkout__state-zip">
          <div>
            <span>State*</span>
            <input class="display-block"/>
          </div>
          <div>
            <span>Zip Code*</span>
            <input class="display-block"/>
          </div>
        </div>

      </div>
      
      <div class="checkout__summary">
        <div>
        <span class="checkout__title">Summary</span>
        </div>
      </div>


    </div>

    
  `
}