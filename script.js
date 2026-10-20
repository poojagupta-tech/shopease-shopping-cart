const count = document.querySelector(".cart-count");
const items = document.querySelector(".total-items-number");
const totalPrice = document.querySelector(".price-number");
const button = document.querySelectorAll(".add-to-cart");
const cartBadge = document.querySelector(".cart-badge");
const cart = [];
button.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = this.closest(".product-card");
    const h3 = card.querySelector("h3");
    const h4 = card.querySelector("h4");

    const product = {
      name: h3.textContent,
      price: h4.textContent,
    };

    cart.push(product);

    // Cart mein products ki count update karo
    cartBadge.textContent = cart.length;
    count.textContent = cart.length;
    items.textContent = cart.length;

    let total = 0;

    cart.forEach(function (item) {
      const price = Number(
        item.price.replace("₹", "").replace(",", "")
      );

      total += price;
    });

    // Website par total price dikhao
    totalPrice.textContent = `₹${total}`;

    console.log(cart);
    console.log(total);
  });
});

const searchInput = document.querySelector(".search-input");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();
  products.forEach(function (product) {
    const productName = product.querySelector("h3").textContent.toLowerCase();

    if (productName.includes(searchText)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
});
