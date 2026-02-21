document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "product 1", price: 10 },
    { id: 2, name: "product 2", price: 30 },
    { id: 3, name: "product 3", price: 50 },
  ];
  let i = 1;

  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
       <span>${product.name} - $${product.price.toFixed(2)}</span>
       <button data-id='${product.id}'>Add to Cart</button>
       
       `;
    productList.appendChild(productDiv);
  });
  productList.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      const productID = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productID);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }
  function renderCart() {
    i = 1;
    cartItems.innerHTML = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");

        cartItem.setAttribute("data-id", i);
        i++;
        const deleteBtn = document.createElement("button");
        // deleteBtn.setAttribute("data-id", i);
        deleteBtn.innerHTML = `Remove Product`;
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItem.appendChild(deleteBtn);
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;

        deleteBtn.addEventListener("click", (e) => {
          e.target.parentElement.remove();
          console.log(cart);
        });
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
    }
  }
  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout Succesfully");
    renderCart();
    totalPriceDisplay.textContent = "$0.00";
  });
});
