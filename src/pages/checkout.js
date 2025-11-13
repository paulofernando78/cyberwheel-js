export function Checkout(app) {
  /* html*/ 
  app.innerHTML = `
    <h1>Checkout</h1>
    <div class="checkout__delivery-information">
      <span>Delivery Information</span>
      <span>Name</span>
      <input class="display-block"/>
    </div>
  `
}