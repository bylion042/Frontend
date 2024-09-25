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

// showItem(0); // Initialize the carousel
function updateActiveItem() {
    const articles = document.querySelector('.new-articles');
    const items = Array.from(articles.children);

    // Remove active class from all items
    items.forEach(item => item.classList.remove('active'));

    // Get the index of the middle item
    const visibleItems = items.slice(0, 3); // Get the first 3 items
    const middleIndex = Math.floor(visibleItems.length / 2);

    // Add active class to the middle item
    visibleItems[middleIndex].classList.add('active');
}

function swapNewLeft() {
    const articles = document.querySelector('.new-articles');
    const items = Array.from(articles.children);
    // articles.appendChild(items[0]); // Move the first item to the end
    articles.insertBefore(items[items.length - 1], items[0]); // Move the last item to the front
    

    // Update the active item after moving
    updateActiveItem();
}

function swapNewRight() {
    const articles = document.querySelector('.new-articles');
    const items = Array.from(articles.children);
    articles.appendChild(items[0]); // Move the first item to the end
    // articles.insertBefore(items[items.length - 1], items[0]); // Move the last item to the front

    // Update the active item after moving
    updateActiveItem();
}

// Initialize the active item on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveItem();
});






// THIS IS FOR SMALL SCREENZ 
function showAllItems() {
    const hiddenItems = document.querySelector('.hidden-items');
    hiddenItems.style.display = 'block';
    
    const viewAllBtn = document.querySelector('.view-all-btn');
    viewAllBtn.style.display = 'none';
}

function hideAllItems() {
    const hiddenItems = document.querySelector('.hidden-items');
    hiddenItems.style.display = 'none';
    
    const viewAllBtn = document.querySelector('.view-all-btn');
    viewAllBtn.style.display = 'block';
}






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
