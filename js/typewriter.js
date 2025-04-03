document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const phrases = [
        'Web Developer',
        'UI/UX Designer',
        'Frontend Specialist',
        'React Developer',
        'JavaScript Enthusiast'
    ];
    
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = '';
    let isDeleting = false;
    let typeDelay = 150;

    function typeEffect() {
        const currentFullPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Remove a character
            currentPhrase = currentFullPhrase.substring(0, letterIndex - 1);
            letterIndex--;
            typeDelay = 100; // Faster when deleting
        } else {
            // Add a character
            currentPhrase = currentFullPhrase.substring(0, letterIndex + 1);
            letterIndex++;
            typeDelay = 150; // Normal typing speed
        }
        
        // Set the text
        typewriterElement.textContent = currentPhrase;
        
        // Handle transitions between phrases
        if (!isDeleting && letterIndex === currentFullPhrase.length) {
            // Complete phrase typed, pause before deleting
            isDeleting = true;
            typeDelay = 1500; // Pause at the end of a phrase
        } else if (isDeleting && letterIndex === 0) {
            // Phrase completely deleted, move to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeDelay = 500; // Pause before starting new phrase
        }
        
        // Schedule the next character
        setTimeout(typeEffect, typeDelay);
    }
    
    // Start the typing effect
    typeEffect();
});