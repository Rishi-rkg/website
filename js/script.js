// ==========================================================================
// Core JavaScript for Portfolio Website
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initProjectCards();
    initEmailCopy();
});

// ==========================================================================
// Navigation Functions
// ==========================================================================

function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('.nav-sticky');
    
    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinkElements = document.querySelectorAll('.nav-link');
        navLinkElements.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
    
    // Navigation background on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            nav.style.backgroundColor = 'rgba(28, 28, 28, 0.98)';
        } else {
            nav.style.backgroundColor = 'rgba(28, 28, 28, 0.95)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// ==========================================================================
// Scroll Effects and Animations
// ==========================================================================

function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        root
