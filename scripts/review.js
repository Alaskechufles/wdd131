// Get URL parameters to display review details
function getURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const reviewData = {
        productName: urlParams.get('product-name'),
        rating: urlParams.get('rating'),
        installationDate: urlParams.get('installation-date'),
        features: urlParams.getAll('features'),
        writtenReview: urlParams.get('written-review'),
        userName: urlParams.get('user-name')
    };
    return reviewData;
}

// Display review details on the page
function displayReviewDetails() {
    const reviewData = getURLParameters();
    const reviewSummary = document.getElementById('review-summary');
    
    let summaryHTML = '<ul>';
    
    if (reviewData.productName) {
        summaryHTML += `<li><strong>Product:</strong> ${reviewData.productName}</li>`;
    }
    
    if (reviewData.rating) {
        const stars = '★'.repeat(parseInt(reviewData.rating));
        summaryHTML += `<li><strong>Rating:</strong> ${stars} (${reviewData.rating}/5)</li>`;
    }
    
    if (reviewData.installationDate) {
        const date = new Date(reviewData.installationDate);
        const formattedDate = date.toLocaleDateString();
        summaryHTML += `<li><strong>Installation Date:</strong> ${formattedDate}</li>`;
    }
    
    if (reviewData.features && reviewData.features.length > 0) {
        summaryHTML += `<li><strong>Useful Features:</strong> ${reviewData.features.join(', ')}</li>`;
    }
    
    if (reviewData.writtenReview && reviewData.writtenReview.trim() !== '') {
        summaryHTML += `<li><strong>Written Review:</strong> "${reviewData.writtenReview}"</li>`;
    }
    
    if (reviewData.userName && reviewData.userName.trim() !== '') {
        summaryHTML += `<li><strong>Reviewer:</strong> ${reviewData.userName}</li>`;
    }
    
    summaryHTML += '</ul>';
    reviewSummary.innerHTML = summaryHTML;
}

// Handle review counter using localStorage
function updateReviewCounter() {
    // Get current count from localStorage (default to 0 if not exists)
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    
    // Increment the counter
    reviewCount++;
    
    // Save updated count back to localStorage
    localStorage.setItem('reviewCount', reviewCount.toString());
    
    // Display the count on the page
    const reviewCountElement = document.getElementById('review-count');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }
    
    console.log(`Review submitted! Total reviews: ${reviewCount}`);
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Display the review details from URL parameters
    displayReviewDetails();
    
    // Update and display the review counter
    updateReviewCounter();
});

// Optional: Function to reset counter (for testing purposes)
function resetReviewCounter() {
    localStorage.removeItem('reviewCount');
    document.getElementById('review-count').textContent = '0';
    console.log('Review counter has been reset to 0');
}

// Optional: Function to get current count (for debugging)
function getCurrentReviewCount() {
    return parseInt(localStorage.getItem('reviewCount')) || 0;
}