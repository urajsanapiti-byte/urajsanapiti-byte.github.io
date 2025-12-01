/**
 * LEGAL INSIGHTS - MAIN JAVASCRIPT
 * Simple functionality for mobile menu toggle
 */

// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        // Toggle menu when hamburger is clicked
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // Active link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

/**
 * Optional: Add any additional functionality below
 */

// Example: Form validation (if you add backend form handling)
function validateContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        let isValid = true;

        // Basic validation
        if (!nameInput.value.trim()) {
            alert('Please enter your name');
            isValid = false;
        }

        if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
            alert('Please enter a valid email address');
            isValid = false;
        }

        if (!messageInput.value.trim()) {
            alert('Please enter a message');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        }
    });
}

// Initialize form validation
validateContactForm();

/**
 * Utility: Add "Read More" functionality for blog post summaries
 * This could expand/collapse longer post excerpts
 */

function setupReadMore() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Current implementation uses links
            // This is a placeholder for future enhanced functionality
        });
    });
}

setupReadMore();
