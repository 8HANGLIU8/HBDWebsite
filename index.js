function updateCountdown() {
    const birthday = new Date("2025-01-01T00:00:00"); // Replace with her birthday
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "Happy Birthday! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Password validation
document.getElementById("password-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const password = document.getElementById("password").value;

    if (password === "hello123") {
        // Redirect to the new page if password is correct
        window.location.href = "lol.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
});
