Leno
function checkout() {  
    var quantity = parseInt(document.getElementById('quantity').value);  
    var productPrice = parseFloat(document.getElementById('product').value);  
    var total = quantity * productPrice;  
  
    var orderSummary = document.getElementById('orderSummary');  
    orderSummary.textContent = 'Your total order price is: $' + total.toFixed(2);  
}  
