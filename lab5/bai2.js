var products = [
  {
    name: "Bitis hunter1",
    image:
      "https://www.ripndipclothing.com/cdn/shop/files/IMG_5963.jpg?v=1686681970&width=540",
    newprice: 3000,
  },
  {
    name: "Bitis hunter2",
    image:
      "https://www.ripndipclothing.com/cdn/shop/files/IMG_5958.jpg?v=1686682056&width=540",
    newprice: 2000,
  },
  {
    name: "Bitis hunter3",
    image:
      "https://www.ripndipclothing.com/cdn/shop/files/IMG_4766_1_0ba3e18f-d7d8-4b7e-b621-7106b6f68e1f.jpg?v=1686682214&width=540",
    newprice: 1000,
  },
  {
    name: "Bitis hunter4",
    image:
      "https://www.ripndipclothing.com/cdn/shop/files/squarewomenssummer23_0004_9R9A3889.jpg?v=1686954534&width=540",
    newprice: 5000,
  },
];
function showProducts(products) {
  let kq = "";
  products.forEach((p) => {
    kq += `
          <div class="box">
            <img
              src="${p.image}"
              alt=""
            />
            <div class="name">${p.name}</div>
            <div class="newprice">${p.newprice}</div>
            <button>Buy</button>
          </div>
          `;
  });
  // xuất ra html

  document.querySelector(".block").innerHTML = kq;
}
showProducts(products);
// code thêm sản phẩm vào giỏ hàng
  // ... Your existing products and showProducts function ...

  // Get the cart container and total element
  const cartContainer = document.querySelector(".output");
  const cartTotalElement = document.getElementById("tong");

  // Initialize the cart items array and total
  let cartItems = [];
  let cartTotal = 0;

  // Function to add product to cart pr
  function addToCart(event) {
      const product = event.target.parentElement;
      const productName = product.querySelector(".name").innerText;
      const productPrice = parseFloat(product.querySelector(".newprice").innerText);

      // Check if the product is already in the cart
      const existingItem = cartItems.find((item) => item.name === productName);

      if (existingItem) {
          // If the product is already in the cart, increase its quantity
          existingItem.quantity++;
      } else {
          // If the product is not in the cart, add it with quantity 1
          cartItems.push({ name: productName, price: productPrice, quantity: 1 });
      }

      // Update the total 
      cartTotal += productPrice;

      // Update the cart display
      displayCart();
  }

  // Function to delete a cart item
  function deleteCartItem(index) {
      const deletedItem = cartItems.splice(index, 1)[0];
      cartTotal -= deletedItem.price * deletedItem.quantity;
      displayCart();
  }

  // Function to display the cart
  function displayCart() {
      cartContainer.innerHTML = "";

      cartItems.forEach((item, index) => {
          const cartItemDiv = document.createElement("div");
          cartItemDiv.innerHTML = `
              <span>${item.name} x ${item.quantity} - ${item.price * item.quantity}</span>
              <button onclick="deleteCartItem(${index})">Delete</button>
          `;
          cartContainer.appendChild(cartItemDiv);
      });

      cartTotalElement.innerText = cartTotal.toFixed(2);
  }

  // Add event listeners to the "Buy" buttons
  const buyButtons = document.querySelectorAll(".box button");
  buyButtons.forEach((button) => {
      button.addEventListener("click", addToCart);
  });

