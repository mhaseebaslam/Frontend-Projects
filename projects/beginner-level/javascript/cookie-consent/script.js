// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cookieConsentBanner = document.getElementById('cookieConsentBanner');
    const acceptCookieConsentButton = document.getElementById('acceptCookieConsent');

    // Check if the user has already accepted the cookie consent
    if (!localStorage.getItem('cookieConsentAccepted')) {
        // Show the cookie consent banner
        cookieConsentBanner.style.display = 'flex';
    }

    // Handle the accept button click
    acceptCookieConsentButton.addEventListener('click', () => {
        // Hide the cookie consent banner
        cookieConsentBanner.style.display = 'none';

        // Store the user's consent in local storage
        localStorage.setItem('cookieConsentAccepted', 'true');
    });
});
