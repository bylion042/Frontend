const express = require('express');
const path = require('node:path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public'))); // This is correctly placed

// Home route
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });  // Render index.ejs
});

// Contact page route
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page' });  // Render contact.ejs
});

// Services page route
app.get('/services', (req, res) => {
    res.render('services', { title: 'Services Page' });  // Render services.ejs
});

// Catch-all route for 404 errors
app.use((req, res) => {
    res.status(404).render('error', { title: '404 Error' });  // Render error.ejs
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
