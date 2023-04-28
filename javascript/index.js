// ========== HEADER MENU ICON ============

const menu = document.querySelector(".menu-icon"); menu.addEventListener("click", dropdownMenu);

function dropdownMenu() {
 menu.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
       nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
       nav.removeAttribute("style");
   }
} 


// ======== HEADER CART PRICE UPDATE =======

// ===== CART OF HEADER
var cart = document.querySelector('.cart-total');
var cartText = cart.textContent;
var total =parseInt(cartText.replace('$', '')) ;
// ===== PRODUCT PRICE

// ====== CLICK FUNCTION OF CART-HOVER
const cartButton = document.querySelector(".cart-button")
cartButton.addEventListener("click", priceUpdate());

function priceUpdate(){
    var product = document.querySelector('.cart-price');
    var productText = product.textContent;
    var price =parseInt(productText.replace('$', '')) ;

    total = total + price;
    cart.textContent = '$' + total.toFixed(2);
}

