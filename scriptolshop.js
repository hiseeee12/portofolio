let cart = [];
let totalAmount = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalAmount += productPrice;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp${item.price}`;
        cartItems.appendChild(li);
    });

    const totalDisplay = document.getElementById('total');
    totalDisplay.textContent = `Total: Rp${totalAmount}`;
}
