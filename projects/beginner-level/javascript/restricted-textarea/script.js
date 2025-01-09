// script.js

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('myTextarea');
    const charCountDisplay = document.getElementById('charCount');
    const maxChars = textarea.maxLength;

    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        charCountDisplay.textContent = currentLength;

        if (currentLength >= maxChars) {
            textarea.classList.add('limit-reached');
            // Prevent further input
            textarea.value = textarea.value.substring(0, maxChars);
        } else {
            textarea.classList.remove('limit-reached');
        }
    });
});
