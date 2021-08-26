    let updateTotal = document.getElementById('total-price');
    const bestPrice = document.getElementById('best-price');
    const updateStorage = document.getElementById('storage-cost');
    const updateDelivery = document.getElementById('delivery-cost');
    let updateMemory = document.getElementById('memory-cost');
    const footerTotal = document.getElementById('footer-total');
    
// Function for total
function totalAll() {
    updateTotal.innerText = parseFloat(bestPrice.innerText) + parseFloat(updateStorage.innerText) + parseFloat(updateMemory.innerText) + parseFloat(updateDelivery.innerText);
}
// Function For memory 8gb and 16gb
function memory(memory, condition) {
    const moneyAdd16gb = 180;
    const memoryUpdate = document.getElementById(memory);
    if (condition == true) {
        memoryUpdate.innerText = moneyAdd16gb;

        totalAll();
        footerTotal.innerText = updateTotal.innerText;
        return updateTotal;
    }
    else if (condition == false && memoryUpdate.innerText > 0) {
        memoryUpdate.innerText = memoryUpdate.innerText - 180;
        totalAll() - parseFloat(memoryUpdate.innerText);
        footerTotal.innerText = updateTotal.innerText;
        return updateTotal;
    }
}

// Function For Storage 256gb, 512gb, 1TB
function storage(storage, condition) {
    const addMoney512gb = 100;
    const addMoney1tb = 180;
    

    if (condition == true) {
        updateStorage.innerText = addMoney512gb;
        
        totalAll();
        footerTotal.innerText = updateTotal.innerText;
        return updateTotal;
    }
    else if(condition== false) {
        updateStorage.innerText = addMoney1tb;
    
        totalAll();
        footerTotal.innerText = updateTotal.innerText;
        return updateTotal;
    }

    updateStorage.innerText = parseFloat(updateStorage.innerText) - parseFloat(updateStorage.innerText);
    totalAll() - parseFloat(updateStorage.innerText);    
    footerTotal.innerText = updateTotal.innerText;
}

// Function for delivery option
function delivery(delivery, conditon) {

    const updateDelivery = document.getElementById(delivery);

        if (conditon == true && updateDelivery.innerText >0) {
            updateDelivery.innerText = parseFloat(updateDelivery.innerText - 20);

            totalAll()-parseFloat(updateDelivery.innerText);
            footerTotal.innerText = updateTotal.innerText;
            return updateTotal;
            
    }
        else if(conditon==false) {
            updateDelivery.innerText = 20;
            totalAll();
            footerTotal.innerText = updateTotal.innerText;
            return updateTotal;
    }

}
// Promo Coupon
function promo() {
    const valueText = document.getElementById('promo-input').value;
    
    const promoCode = 'discount20%';

    if (valueText == promoCode) {
        /* For 20% = 20/100=0.2 */
        const vat = updateTotal.innerText * 0.2;
        footerTotal.innerText = updateTotal.innerText-vat;
        return footerTotal;
    }
}



// Function Calling for memory
document.getElementById('memory-16gb').addEventListener('click', function () {
    memory('memory-cost', true);
})

document.getElementById('memory-8gb').addEventListener('click', function () {
    memory('memory-cost', false);
})

// Function Calling for storage

document.getElementById('storage-256gb').addEventListener('click', function () {
    storage('storage-cost');
})

document.getElementById('storage-512gb').addEventListener('click', function () {
    storage('storage-cost', true);
})

document.getElementById('storage-1tb').addEventListener('click', function () {
    storage('storage-cost', false);
})

// Function calling for delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    delivery('delivery-cost', true)
})

document.getElementById('paid-delivery').addEventListener('click', function () {
    delivery('delivery-cost', false)
})

// Function calling for promo
document.getElementById('promo-btn').addEventListener('click', function () {
    promo();
})


