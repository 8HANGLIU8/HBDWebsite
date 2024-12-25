
document.addEventListener('DOMContentLoaded', () => {
// Create a JSConfetti instance
const jsConfetti = new JSConfetti();

// Add confetti 2 seconds after the page loads
setTimeout(() => {
    jsConfetti.addConfetti({
        emojis: ['🎉', '🎊', '💥', '✨', '🌟'], // Customize emojis
        emojiSize: 50, // Size of the emojis
        confettiNumber: 150, // Number of confetti particles
    });
    }, 1000); // 2 seconds delay

    jsConfetti.addConfetti();
    jsConfetti.addConfetti();
    jsConfetti.addConfetti();
    jsConfetti.addConfetti();
});


/*
// Ensure that the elements are visible even without scroll
window.addEventListener("load", () => {
    const element = document.querySelector('h1');
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        element.classList.add('visible');
    }
    const text1234 = document.querySelector('.text1234');
    text1234.style.opacity = '0';
});


window.addEventListener('scroll', () => {

    const text1234 = document.querySelector('.text1234');
    const text4321 = document.querySelector('.text4321');

    const windowscroll = window.scrollY;

    // Initially hide both texts
    text1234.style.opacity = '0';
    text4321.style.display = 'none';

    if (windowscroll < 700) {
        text1234.style.opacity = 0;
    }

    // Show text1234 gradually between scroll positions 3700 and 3900
    if (windowscroll >= 700 && windowscroll <= 1200) {
        text1234.style.opacity = ((windowscroll - 700)*10) / (200*10);
    }
    // Fully show text1234 between scroll positions 3900 and 4200
    if (windowscroll > 1200 && windowscroll <= 1600) {
        text1234.style.opacity = '1';
    }
    // Gradually hide text1234 between scroll positions 4200 and 4400
    if (windowscroll > 1200 && windowscroll <= 1400) {
        text1234.style.opacity = ((1200 - 1150) / (windowscroll - 1150));
        if (windowscroll == 0) {
            text1234.style.opacity = '0';
        }
    }
    // Hide text1234 after scroll position 4400
    if (windowscroll < 3700 || windowscroll > 4400) {
        text1234.style.opacity = '0';
    }

    // Show text4321 between scroll positions 4450 and 5900
    if (windowscroll > 4450 && windowscroll < 5900) {
        text4321.style.display = 'block';
    }
});

*/
// Ensure that the elements are visible even without scroll
window.addEventListener("load", () => {
    const element = document.querySelector('h1');
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        element.classList.add('visible');
    }
    const text1234 = document.querySelector('.text1234');
    if (text1234) text1234.style.opacity = '0';
});

window.addEventListener('scroll', () => {
    const text1234 = document.querySelector('.text1234');
    const text4321 = document.querySelector('.text4321');
    const jsConfetti = new JSConfetti();
    const windowscroll = window.scrollY;

    // Ensure text4321 is hidden until scroll reaches appropriate range
    if (text4321) text4321.style.display = 'none';

    // Gradually show text1234 between scroll positions 700 and 1200
    if (windowscroll >= 700 && windowscroll <= 1200) {
        if (text1234) text1234.style.opacity = (windowscroll - 700) / 200;
    }
    // Fully show text1234 between scroll positions 1200 and 1600
    if (windowscroll > 1200 && windowscroll <= 1600) {
        if (text1234) text1234.style.opacity = '1';
    }
    // Gradually hide text1234 between scroll positions 1600 and 2000
    if (windowscroll > 1600 && windowscroll <= 2000) {
        if (text1234) text1234.style.opacity = 1 - (windowscroll - 1600) / 300;
    }
    // Hide text1234 after scroll position 2000
    if (windowscroll > 2000) {
        if (text1234) text1234.style.opacity = '0';
    }

    // Show text4321 between scroll positions 4450 and 5900
    if (windowscroll > 1500 && windowscroll < 3500) {
        if (text4321) text4321.style.display = 'block';
    }
    if (windowscroll < 7300 && windowscroll >7250) {
        jsConfetti.addConfetti();
    }
});

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'Seph.pdf'; // Path to your PDF file
    link.download = 'Seph.pdf'; // Name of the downloaded file
    link.click();
}
