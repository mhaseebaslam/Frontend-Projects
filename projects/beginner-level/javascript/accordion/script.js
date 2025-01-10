// script.js

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentlyActiveHeader = document.querySelector('.accordion-header.active');
            const currentlyActiveContent = document.querySelector('.accordion-content.active');

            // Toggle the clicked header
            header.classList.toggle('active');

            // Toggle the corresponding content
            const content = header.nextElementSibling;
            content.classList.toggle('active');

            // Check if there is another active header and content
            if (currentlyActiveHeader && currentlyActiveHeader !== header) {
                currentlyActiveHeader.classList.remove('active');
                currentlyActiveContent.classList.remove('active');
            }
        });
    });
});
