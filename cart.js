console.log("Here!");

let removeCartItemButtons = document.getElementsByClassName("product-remove");
console.log(removeCartItemButtons);

for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i]
  button.addEventListener('click', removeCartItem)
}

let addToCartButtons = document.getElementsByClassName('buy-now')
for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}


function removeCartItem(event) {
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}


function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-container')[0]
  let cartRows = cartItemContainer.getElementsByClassName('cart-row')
  let total = 0
  for (let i = 0; i < cartRows.length; i++) {
      let cartRow = cartRows[i]
      let priceElement = cartRow.getElementsByClassName('price')[0]

      let price = parseFloat(priceElement.innerText.replace('$', ''))
      console.log(price)
      total = total + price
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function addToCartClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement
  let shopItems = button.parentElement.parentElement.parentElement.parentElement.parentElement
  console.log(shopItem)
  let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText

  console.log(title)
  let price = shopItem.getElementsByClassName('price')[0].innerText
  console.log(price)
  let imageSrc = shopItems.getElementsByClassName('img-fluid')[0].src
  console.log(imageSrc)
  addItemToCart(title, price, imageSrc)
  // updateCartTotal()
}


function addItemToCart(title, price, imageSrc) {
  document.getElementById("12").addEventListener("click", function() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push({ name: `${title}`, price: `${price}`, image: `${imageSrc}`});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  })
}

function displayCartItems() {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let cartItemsList = document.getElementById('cart-items-list');

  // cartItemsList.innerHTML = ''; // Clear the current list

  cartItems.forEach(item => {
      let tr = document.createElement('tr');
      li.textContent = `${item.name} - $${item.price}`;
      cartItemsList.appendChild(tr);
  });
}
displayCartItems();