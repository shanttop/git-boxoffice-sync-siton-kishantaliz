function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}


function calculateTicketPrice(quantity, basePrice, isVip = false) {
  let total = quantity * basePrice;
  if (quantity >= 5) {
    total = total * 0.9; // Apply a 10% discount for 5 or more tickets
  }
  if (isVip) {
    total = total * 1.5; // Apply a 50% surcharge for VIP tickets
  }
  return Math.round(total);

}

module.exports = { isValidQuantity, calculateTicketPrice };
