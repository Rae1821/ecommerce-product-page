const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const cartModal = document.querySelector('.cart-modal');
const lightboxModal = document.querySelector('.lightbox-modal');
const body = document.querySelector('.body');

const shoppingCart = document.getElementById('shopping-cart-icon');
const shoppingCartItems = document.getElementById('shopping-cart-items');
const cartBtn = document.getElementById('cart-btn');
const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const count = document.getElementById('count')


//mobile nav toggle
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        // body.style.backgroundColor = rgba(0,0,0,0.4);
    } else if(visibility === "true") {
        primaryNav.setAttribute('data-visible',false);
        navToggle.setAttribute('aria-expanded',false);
    }
})


//product image slideshow 
let slideIndex = 1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slides[slideIndex-1].style.display = "block";  
}

//lightbox modal

//open modal
function openModal() {
    lightboxModal.style.display = "block";
}

//close modal
function closeModal() {
    lightboxModal.style.display = "none";
}

//when user clicks outside of lightbox, close it
// window.onclick = function(e) {
//     if(e.target === lightboxModal) {
//         lightboxModal.style.display = "none";
//     }
// }

function showModalSlides(n) {
    let i;
    let slides = document.getElementsByClassName("modalSlides");
    if(n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slides[slideIndex-1].style.display = "block";  
}


//cart button

//click the plus button to pick quantity of product
//click the add to cart button to add the quanitity to the cart

let order = []

function renderCart(cart) {
    let price = 125
    let quantity = countNum
    let totalPrice = price * quantity
    let cartInner = ''

    cartInner += `
       
            <div class="cart">
                <p class="cart-title">Cart</p>
                <div class="cart-items">
                    <img class="cart-thumbnail" src="images/image-product-1-thumbnail.jpg" alt="product thumbnail" />
                    <div class="cart-item-description">
                    <p class="cart-description-title">Fall Limited Edition Sneakers</p>
                    <p class="cart-items-price">$${price} x ${quantity} <span>$${totalPrice}</span></p>
                    </div>
                    <div class="remove">
                        <img class="trashcan" src="images/icon-delete.svg" alt="delete item" data-remove=${quantity}/>
                    </div>
                </div>
                <div class="checkout-btn">
                    <button class="btn">Checkout</button>
                </div>
            </div>
       
    `
    if(quantity === 0) {
        cartModal.innerHTML = `
            <div class="cart">
                <p class="cart-title">Cart</p>
                <div class="empty-cart-inner">
                    <p>Your cart is empty</p>
                </div>
            </div>
        `
    } else {
        cartModal.innerHTML = cartInner
    }
    

    

}

let countNum = 0

function addCount() {
  countNum += 1
   count.textContent = countNum
}

function minusCount() {
    countNum -= 1
    count.textContent = countNum
}

function removeItem() {
    countNum -= 1

}

document.addEventListener('click', (e) => {
    if(e.target.dataset.add) {
       addCount(e.target.dataset.add)
    } 
    if(e.target.dataset.minus) {
        minusCount(e.target.dataset.minus)
    }
    if(e.target.dataset.cart) {
        shoppingCartItems.style.display = 'block'
        shoppingCartItems.textContent = countNum
    }
    if(e.target.dataset.remove) {
        removeItem(e.target.dataset.remove)
    }
    if(e.target.dataset.cartIcon) {
        renderCart(e.target.dataset.cartIcon)
        cartModal.style.display = "block"
    }

   
})

