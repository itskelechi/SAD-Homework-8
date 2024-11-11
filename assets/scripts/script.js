// scripts.js

// Example cart storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart function
function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} has been added to your cart!`);
}

// Load cart items
function loadCart() {
  const cartItems = document.getElementById("cart-items");
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    </div>
  `).join('');
}

// Remove from cart
function removeFromCart(itemName) {
  cart = cart.filter(item => item.name !== itemName);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Load checkout items
function loadCheckout() {
  const checkoutItems = document.getElementById("checkout-items");
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  checkoutItems.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
  `).join('');
}
