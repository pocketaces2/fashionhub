function addToCart(name, price, image) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemExists = cartItems.some(item => item.name === name);

    if (!itemExists) {
        cartItems.push({ name, price, image });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${name} added to cart.`);
    } else {
        alert(`${name} is already in the cart.`);
    }
}
