// Handle Review Submission
document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('review-name').value;
    const text = document.getElementById('review-text').value;

    if (name && text) {
        const reviewContainer = document.getElementById('reviews-container');
        const newReview = document.createElement('div');
        newReview.innerHTML = `<strong>${name}:</strong> ${text}`;
        reviewContainer.appendChild(newReview);

        // Clear the form
        document.getElementById('review-form').reset();
    }
});

// Handle Reservation Submission
document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('reservation-name').value;
    const email = document.getElementById('reservation-email').value;
    const date = document.getElementById('reservation-date').value;
    const time = document.getElementById('reservation-time').value;

    if (name && email && date && time) {
        alert(`Thank you, ${name}! Your reservation for ${date} at ${time} has been confirmed.`);
        document.getElementById('reservation-form').reset();
    }
});