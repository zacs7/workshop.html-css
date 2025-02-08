document.addEventListener('DOMContentLoaded', () => {
    // Function to update the total price
    const updateTotalPrice = () => {
      let totalPrice = 0;
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const price = parseFloat(card.querySelector('.unitt-price').textContent);
        const quantity = parseInt(card.querySelector('.qute').textContent);
        totalPrice += price * quantity;
      });
      document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    };
    // Increase quantity of an item
    document.querySelectorAll('.fa-plus-circle').forEach(button => {
      button.addEventListener('click', (event) => {
        const quantityElement = event.target.closest('.card').querySelector('.qute');
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++quantity;
        updateTotalPrice();
      });
    });
    // Decrease quantity of an item
    document.querySelectorAll('.fa-minus-circle').forEach(button => {
      button.addEventListener('click', (event) => {
        const quantityElement = event.target.closest('.card').querySelector('.qute');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantityElement.textContent = --quantity;
          updateTotalPrice();
        }
      });
    });
    // Delete an item from the cart
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
      button.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        card.remove();
        updateTotalPrice();
      });
    });
    // Like or unlike an item
    document.querySelectorAll('.fa-heart').forEach(button => {
      button.addEventListener('click', (event) => {
        const heartIcon = event.target;
        heartIcon.classList.toggle('liked');  // Toggle "liked" class
        if (heartIcon.classList.contains('liked')) {
          heartIcon.style.color = 'red';  // Change to red when liked
        } else {
          heartIcon.style.color = '';  // Reset to default color
        }
      });
    });
    // Initial update to total price
    updateTotalPrice();
  });