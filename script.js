let cartRemove = document.querySelectorAll('.btn-danger')
let cartQuantity = document.querySelector('.cart-quantity')

cartRemove.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let button = e.currentTarget
        button.parentElement.parentElement.remove('cart-row')
    })
})
const cartRow = document.querySelector('.cart-row')
const title = document.querySelector('.item-title').innerText 
const imgSrc = document.querySelector('.item-image').src
const price = document.querySelector('.item-price').innerText
const addToCartbtn = document.querySelectorAll('.button')
addToCartbtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        cartRow.innerHTML = `<div class="cart-row">
                                <div class="cart-item cart-column">
                                    <img class="cart-item-image" ${imgSrc} style="width: 100px; height: 100px;" >
                                    <span class="cart-item-title">${title}</span>
                                </div>
                                <span class="cart-item-price">${price}</span>
                                <div class="cart-quantity cart-column">
                                    <input type="number" value="1">
                                    <button class="btn btn-danger" type="button">remove</button>
                                </div>
                            </div>`
    })
})