document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('subscription-form');
    var subscribeButton = document.getElementById('subscribe-btn');
    var paymentResult = document.getElementById('payment-result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate subscription processing
        subscribeButton.disabled = true;
        paymentResult.textContent = 'Processing subscription...';

        setTimeout(function() {
            // Show payment form after successful subscription
            document.getElementById('payment-form').style.display = 'block';
            paymentResult.textContent = 'Subscription successful! Proceed with payment.';
            subscribeButton.disabled = false;
        }, 10000); // 10-second delay
    });

    // Save card details to localStorage
    document.getElementById('save-card-btn').addEventListener('click', function() {
        var cardNumber = document.getElementById('card-number').value;
        var expiry = document.getElementById('expiry').value;
        var cvv = document.getElementById('cvv').value;
        var transfer = document.getElementById('transfer').value;

        // Save card details to localStorage
        localStorage.setItem('cardNumber', cardNumber);
        localStorage.setItem('expiry', expiry);
        localStorage.setItem('cvv', cvv);

        showModal('Card details saved!');
    });

    // Show modal function
    function showModal(message) {
        var modal = document.getElementById('alert-modal');
        var modalContent = document.getElementById('alert-message');
        modalContent.textContent = message;
        modal.style.display = 'block';
    }

    // Close modal function
    function closeModal() {
        var modal = document.getElementById('alert-modal');
        modal.style.display = 'none';
    }

    // Close modal when clicking the close button
    document.querySelector('.close').addEventListener('click', function() {
        closeModal();
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', function(event) {
        var modal = document.getElementById('alert-modal');
        if (event.target == modal) {
            closeModal();
        }
    });

    // Button to view saved card details
    document.getElementById('view-saved-card-btn').addEventListener('click', function() {
        var cardNumber = localStorage.getItem('cardNumber');
        var expiry = localStorage.getItem('expiry');
        var cvv = localStorage.getItem('cvv');

        var savedCardDetails = '';
        if (cardNumber && expiry && cvv) {
            savedCardDetails = `Card Number: ${cardNumber}\nExpiry Date: ${expiry}\nCVV: ${cvv}`;
        } else {
            savedCardDetails = 'No card details saved.';
        }

        showModal(savedCardDetails);
    });
});
