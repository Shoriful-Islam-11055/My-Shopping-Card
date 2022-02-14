 function updateProductNumber(product, price, isAdd){
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    
    if(isAdd == true){
        productInput.value = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productInput.value = parseInt(productNumber) - 1;
    }

    //update Amount 
    const productAmountField = document.getElementById(product+'-total');
    productAmountField.innerText = parseFloat(productInput.value) * price;

    //update subTotal and tax
    amountCalculation();
}

// Total product Quentity calculation
function getInputNumber(product){
    const inputNumber = document.getElementById(product +'-number');
    const totalInput = parseFloat(inputNumber.value);
    return totalInput;
}

//Total amoun and tax calculation
function amountCalculation(){
    const phoneTotal = getInputNumber("phone") * 1219;
    const caseTotal = getInputNumber("case") * 59;
    const subTotal = (phoneTotal) + (caseTotal);
    const tax = (subTotal * 0.1).toFixed(2);
    const totalPrice = parseFloat(subTotal) + parseFloat(tax);
   
    //Set subtotal value in subtotal field
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

//Case incrise decrise 
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});

//Phone incrise decrise 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219,  false);
})
