// Show Store Registration
function goToStoreRegistration() {
    document.getElementById("userRegistrationForm").style.display = "none";
    document.getElementById("storeRegistration").style.display = "block";
}

// Redirect to Dashboard
function goToDashboard() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").style.display = "flex";
}

// Section Display Control
function showSection(section) {
    const sections = document.querySelectorAll(".dashboard-section");
    sections.forEach(sec => sec.style.display = "none");
    document.getElementById(section).style.display = "block";
}

// Logout Function
function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
}
// Toggle Registration and Login Display
function showRegistration() {
    document.getElementById("registrationContainer").style.display = "flex";
    document.querySelector(".login-container").style.display = "none";
}

function goToDashboard() {
    alert("Logged in or registered successfully!");
}
