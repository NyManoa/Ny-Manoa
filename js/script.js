document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');
    const seeMoreButton = document.getElementById('see-more-button');
    const countdownTimer = document.getElementById('countdown-timer');

    let countdown = 10; // Countdown duration in seconds

    // Ensure splash screen is visible initially
    splashScreen.style.opacity = '1';
    splashScreen.style.visibility = 'visible';

    // Hide navbar and content initially
    navbar.style.visibility = 'hidden';
    content.style.visibility = 'hidden';
    navbar.style.opacity = '0';
    content.style.opacity = '0';

    // Countdown timer
    const timerInterval = setInterval(function() {
        countdown--;
        countdownTimer.textContent = countdown + 's'; // Update countdown timer text
        if (countdown <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

    // Show splash screen and hide other elements after timeout
    setTimeout(function() {
        splashScreen.style.opacity = '0';
        splashScreen.style.visibility = 'hidden';
        navbar.style.visibility = 'visible';
        content.style.visibility = 'visible';
        navbar.style.opacity = '1';
        content.style.opacity = '1';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 10000); // 10 seconds

    // Button functionality to hide splash screen immediately
    seeMoreButton.addEventListener('click', function() {
        splashScreen.style.opacity = '0';
        splashScreen.style.visibility = 'hidden';
        navbar.style.visibility = 'visible';
        content.style.visibility = 'visible';
        navbar.style.opacity = '1';
        content.style.opacity = '1';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
        clearInterval(timerInterval); // Stop the countdown
    });

    // Ensure that on page refresh, the splash screen is visible
    // This code is not needed if the HTML/CSS is properly set to handle this
});



    // document.addEventListener("DOMContentLoaded", function() {
    //     const animatedTexts = document.querySelectorAll('.intro-text');

    //     animatedTexts.forEach((text, textIndex) => {
    //         const characters = text.innerText.split('');
    //         text.innerHTML = '';
    //         characters.forEach((char, charIndex) => {
    //             const span = document.createElement('span');
    //             span.innerText = char;
    //             span.style.setProperty('--char-index', charIndex);
    //             text.appendChild(span);
    //         });
    //     });
    // });

