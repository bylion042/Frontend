
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




// all about Health Article 
function swapLeft() {
    const articles = document.querySelector('.articles');
    const contentItems = Array.from(articles.children);
    articles.insertBefore(contentItems[contentItems.length - 1], contentItems[0]);
}

function swapRight() {
    const articles = document.querySelector('.articles');
    const contentItems = Array.from(articles.children);
    articles.appendChild(contentItems[0]);

}





// ALL ABOUT Wellness Article for SMALL SCRENS
const showAllBtn = document.getElementById('showAllBtn');
const hideAllBtn = document.getElementById('hideAllBtn');
const articles = document.querySelectorAll('.health-articles .article-item');

showAllBtn.addEventListener('click', () => {
    articles.forEach(article => article.style.display = 'block');
    showAllBtn.style.display = 'none';
    hideAllBtn.style.display = 'inline-block';
});

hideAllBtn.addEventListener('click', () => {
    articles.forEach(article => article.style.display = 'none');
    articles[0].style.display = 'block'; // Keep the first article visible
    hideAllBtn.style.display = 'none';
    showAllBtn.style.display = 'inline-block';
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
