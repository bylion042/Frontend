
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






document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const spinner = document.getElementById("loadingSpinner");
    spinner.style.display = "inline-block"; // Show the spinner when form is submitted

    // Get form data
    const formData = new FormData(event.target);
    const data = {
        firstName: formData.get("firstname"),
        email: formData.get("email"),
        feedback: formData.get("message"),
        user: "BBYLION" // Set the user as BBYLION
    };

    // Send POST request to the contact endpoint
    fetch("https://class-contact-form.onrender.com/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        // Hide the spinner after success
        spinner.style.display = "none";

        // Show success notification
        Toastify({
            text: "Message sent successfully!",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "left",
            backgroundColor: "#1286C8",
            style: {
                minWidth: "max-content",
            },
        }).showToast();
    })
    .catch(error => {
        // Hide the spinner in case of error
        spinner.style.display = "none";

        // Show error notification
        Toastify({
            text: "Failed to send message. Please try again later.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "left",
            backgroundColor: "#f44336",
            style: {
                minWidth: "max-content",
            },
        }).showToast();
        console.error("Error:", error);
    });
});

// Function to retrieve form messages
function retrieveMessages() {
    fetch("https://class-contact-form.onrender.com/BBYLION/contacts", {
        method: "GET"
    })
    .then(response => response.json())
    .then(messages => {
        console.log(messages); // Handle or display messages as needed
    })
    .catch(error => {
        console.error("Error retrieving messages:", error);
    });
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