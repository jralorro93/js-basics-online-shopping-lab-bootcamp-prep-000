var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1 );
  var newItem = { itemName: item, itemPrice: price};
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var i = 0;
  while (i < cart.length) {
    if (cart.length === 1) {
      return `In your cart, you have ${cart[i]}`;
      } 
      else 
        if (cart.length === 2) {
        return `In your cart, you have ${cart[0]}, and ${cart[1]}.`;
        } 
          else 
            if (cart.length === 3) {
             return `In your cart, you have ${cart[0]}. ${cart[1]}, and ${cart[2]}.`;
              }   
            else {
              return "Your shopping cart is empty.";
            }
    i++;
   }
        
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
