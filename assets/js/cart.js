document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();
});

function loadCartItems() {
    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let total = 0;

    // Clear any existing items
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';

        itemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    document.getElementById('total-price').innerText = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(productName) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.name !== productName);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function checkout() {
    // Placeholder for checkout process
    alert('Proceeding to checkout.');
}
