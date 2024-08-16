
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








document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");
    const leftBtn = document.getElementById("left-btn");
    const rightBtn = document.getElementById("right-btn");
    let currentIndex = 0; // Start with the first item active

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    leftBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showItem(currentIndex);
    });

    rightBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    });

    // Show the first item initially
    showItem(currentIndex);
});






function swapLeft() {
    const articles = document.querySelector('.articles');
    const content1 = document.querySelector('.content1');
    const content2 = document.querySelector('.content2');
    const content3 = document.querySelector('.content3');

    // Rotate positions: content1 -> content2, content2 -> content3, content3 -> content1
    articles.insertBefore(content1, content3.nextSibling);
    
    // Update class names to reflect the new order
    content1.className = 'content3 article';
    content2.className = 'content1 article';
    content3.className = 'content2 article';
}

function swapRight() {
    const articles = document.querySelector('.articles');
    const content1 = document.querySelector('.content1');
    const content2 = document.querySelector('.content2');
    const content3 = document.querySelector('.content3');

    // Rotate positions: content3 -> content2, content2 -> content1, content1 -> content3
    articles.insertBefore(content3, content1);
    
    // Update class names to reflect the new order
    content1.className = 'content2 article';
    content2.className = 'content3 article';
    content3.className = 'content1 article';
}





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
