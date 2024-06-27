document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productName = product.querySelector('h2').textContent;
            const productPrice = product.querySelector('p').textContent;
            addToCart(productName, productPrice);
        });
    });

    function addToCart(name, price) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = { name, price, quantity: 1 };

        const index = cart.findIndex(item => item.name === name);
        if (index !== -1) {
            cart[index].quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} added to cart!`);
    }
});
