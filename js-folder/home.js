// all about nav underline 
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







// all about Patient Reviews 

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");
    const leftBtn = document.getElementById("left-btn");
    const rightBtn = document.getElementById("right-btn");
    let currentIndex = 0; // Start with the first item active

    function updateSliderPosition() {
        const carousel = document.querySelector(".carousel");
        const translateXValue = -(currentIndex * 33.33); // Calculate translation based on current index
        carousel.style.transform = `translateX(${translateXValue}%)`; // Slide to the current set of items
    }

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle("active", i >= index && i < index + 3); // Activate 3 items at a time
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
        updateSliderPosition(); // Update the slider position
    }

    leftBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 3; // Adjust to show 3 items
        showItem(currentIndex);
    });

    rightBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < items.length - 3) ? currentIndex + 1 : 0; // Adjust to show 3 items
        showItem(currentIndex);
    });

    // Show the first 3 items initially
    showItem(currentIndex);
});






// all about Health Article 
function swapLeft() {
    const articles = document.querySelector('.articles');
    const contentItems = Array.from(articles.children);
    articles.appendChild(contentItems[0]);
}

function swapRight() {
    const articles = document.querySelector('.articles');
    const contentItems = Array.from(articles.children);
    articles.insertBefore(contentItems[contentItems.length - 1], contentItems[0]);
}





// all about small screen hand boga 
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
