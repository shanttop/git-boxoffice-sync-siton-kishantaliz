function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  let total = quantity * basePrice;
  if(quantity >= 5) {
    total = total * 0.9; // Apply a 10% discount for 5 or more tickets
  }
  return Math.round(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };
