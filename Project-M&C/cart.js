/* jshint esversion: 6 *//*When I verified it, the line130 became an error,
 so when I looked it up, it was said that if I added this, it would not be an error.  */

/*handleScrollAnimation*/
/*The SPRING SALE animation didn't work without making a JS sheet on each page.
 index.js and cart.js*/
//SPRING SALE NOW!!
const text = document.querySelector(".sale");
const strText = text.textContent; // get text inside tag
const splitText = strText.split(""); // split into array of characters
text.textContent=""; // erase text
for( let i=0; i<splitText.length; i++){ // put one span tag per character back
  text.innerHTML += "<span>" + splitText[i] + "</span>";
  // add a span tag inside the surrounding tags
}

let char =0 ;
let timer = setInterval(onTick,50);
// fade in one character at a time every 50 msec.

function onTick(){
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade"); // change class to fade (to fade in)
  char++; // stop timer once the text length is reached
  if(char === splitText.length){
    complete();
    return;
  }
}//index.html.

function complete(){
  clearInterval(timer);
  timer = null;
}//Finish when the time reaches zero.Interval(setInterval) is line12.
//SPRING SALE NOW!! finish.

/*shopping cart*/
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
    /*readyState is a property of Document. Returns a string
     that represents the read status of the document. */
    /*The DOMContentLoaded event fires when the first HTML
     document has finished loading and parsing, without waiting
      for the stylesheets, images, and subframes to finish loading.  */
} else {
    ready();
}

/** Set up the event handlers for the cart item buttons and for changing
    the quantities in the shopping cart */
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-delete');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var j = 0; j < quantityInputs.length; j++){
      var input = quantityInputs[j];
      input.addEventListener('change', quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (var k = 0; k < addToCartButtons.length; k++) {
      var button = addToCartButtons[k];
      button.addEventListener('click', addToCartClicked);
    }/*if using let instead of var, I could use i. */

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

/*Picture change on mouse over */
function newPicture(pictureId, img){
  document.getElementById(pictureId).src=img;
}

/* check if cart is empty and create the right message; clear cart if full */
function purchaseClicked(){
  if(updateCartTotal()==0){
    alert("Cart is empty");
    return;
  }
  else{
alert('Thank you for your purchase');
var cartItems = document.getElementsByClassName('cart-items')[0];
while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
}}
updateCartTotal();
}

/* remove one line in the cart */
function removeCartItem(event) {
var buttonClicked = event.target;
buttonClicked.parentElement.parentElement.remove();
updateCartTotal();
}

/* check if cart quantity input is valid, adjust if needed, update total */
function quantityChanged(event) {
var input = event.target;
if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
}
updateCartTotal();
}

/* parse item information from HTML code, add item to cart, update total */
function addToCartClicked(event) {
var button = event.target;
var shopItem = button.parentElement.parentElement.parentElement.parentElement;
// nested layout requires going four levels up
var title = (shopItem.getElementsByClassName('shop-item-title')[0]).innerText;
var priceStr = (shopItem.getElementsByClassName('shop-item-price')[0]).innerText;
var imageSrc = (shopItem.getElementsByClassName('shop-item-image')[0]).src;
var price = parseFloat(priceStr.substring(priceStr.lastIndexOf('$') + 1));/*To
 calculate　at the sale price, out of the regular price and the sale price.  */
// take only substring from second $ (discounted price)
// innerText also has button label, but parseFloat ignores this
addItemToCart(title, price, imageSrc);
updateCartTotal();
}

/* check if item is in cart; otherwise, create HTML code to represent item */
function addItemToCart(title, price, imageSrc) {
var cartRow = document.createElement('div');
cartRow.classList.add('cart-row');
var cartItems = document.getElementsByClassName('cart-items')[0];
var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
        alert('This item is already added to the cart');
        return;
    }
}
/* create cart item */
/* string with HTML code for cart row using imageSrc, title, and price
   (with a dollar sign in front) */
var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">$${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-delete" type="button">REMOVE</button>
    </div>`;
cartRow.innerHTML = cartRowContents;
cartItems.append(cartRow);
/* cartRow has only one item of each type, hence index 0 */
cartRow.getElementsByClassName('btn-delete')[0].addEventListener('click', removeCartItem);
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

/* go through all cart items and calculate total price */
function updateCartTotal() {
var cartItemContainer = document.getElementsByClassName('cart-items')[0];
var cartRows = cartItemContainer.getElementsByClassName('cart-row');
var total = 0;
for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
}
total = Math.round(total * 100) / 100;
document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
return total ;// for use by purchaseClicked
}
/* cart*/

function sendClicked() {
  alert('Thank you for message');
}
/*contact.html */
