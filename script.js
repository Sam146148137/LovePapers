document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("audio");

    document.addEventListener("click", function () {
        audio.play();
    });
});

// Prompt Password
// Define the correct password
const correctPassword = "33651"; // Change this to your desired password

// Function to prompt user for password
function requestPassword() {
    // Prompt the user for a password
    const enteredPassword = prompt("Please enter the password:");

    // Check if the entered password is correct
    if (enteredPassword === correctPassword) {
        // If correct, allow access to the page by displaying the content
        // document.getElementById("content").style.display = "block"; // This line reveals the content
        // document.getElementById("content").classList.add("visible");
        alert("Correct password! You can now access the page.");
    } else {
        // If incorrect, display an error message and reload the page
        alert("Incorrect password! Please try again.");
        window.location.reload();
    }
}

// Call the function when the page loads
window.onload = requestPassword;