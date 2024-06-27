document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-item');
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    const totalDisplay = document.querySelector('.total h2');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
            updateTotal();
        });
    });

    quantityInputs.forEach(input => {
        input.addEventListener('change', updateTotal);
    });

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.product-details p').textContent.replace('$', ''));
            const quantity = item.querySelector('input[type="number"]').value;
            total += price * quantity;
        });
        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }

    updateTotal();
});
