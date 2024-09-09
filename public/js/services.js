
// Select all anchor tags inside the nav
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'active' class from all li elements
        navLinks.forEach(link => link.parentElement.classList.remove('active'));

        // Add the 'active' class to the parent li of the clicked link
        this.parentElement.classList.add('active');
    });
});


document.querySelector('.tuggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    const icon = this.querySelector('i');

    // Toggle the display of the nav
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block"; // Show nav
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark'); // Change icon to "x"
    } else {
        nav.style.display = "none"; // Hide nav
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars'); // Change icon back to "bars"
    }
});
