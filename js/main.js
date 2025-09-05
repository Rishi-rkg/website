// ==========================================================================
// Core JavaScript for Portfolio Website
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initProjectCards();
    initEmailCopy();
    initFilters();
    initLightbox();
    initModals();
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
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should fade in
    document.querySelectorAll('.project-card, .gallery-item, .blog-post-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==========================================================================
// Project Cards Functionality
// ==========================================================================

function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card, .project-card-main');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });
}

// ==========================================================================
// Email Copy Functionality
// ==========================================================================

function initEmailCopy() {
    const emailLinks = document.querySelectorAll('.footer-email');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.textContent;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email copied to clipboard!');
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification('Email copied to clipboard!');
            }
        });
    });
}

// ==========================================================================
// Filter Functionality (Projects & Design Pages)
// ==========================================================================

function initFilters() {
    // Project filters
    const projectFilters = document.querySelectorAll('.filter-tag');
    const projectCards = document.querySelectorAll('.project-card-main');
    
    projectFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const filterValue = this.dataset.filter;
            
            // Update active filter
            projectFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const cardTags = card.dataset.tags;
                
                if (filterValue === 'all' || cardTags.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Design category filters
    const designFilters = document.querySelectorAll('.filter-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    designFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active filter
            designFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const itemCategory = item.dataset.category;
                
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ==========================================================================
// Lightbox Functionality (Design Page)
// ==========================================================================

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (!lightbox) return;
    
    let currentIndex = 0;
    const images = Array.from(galleryItems);
    
    // Open lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            openLightbox();
        });
    });
    
    function openLightbox() {
        const currentItem = images[currentIndex];
        const img = currentItem.querySelector('img');
        const title = currentItem.querySelector('.gallery-title').textContent;
        const category = currentItem.querySelector('.gallery-category').textContent;
        
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxTitle.textContent = title;
        lightboxCategory.textContent = category;
        
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Navigate lightbox
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', function() {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
            openLightbox();
        });
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', function() {
            currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
            openLightbox();
        });
    }
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    lightboxPrev.click();
                    break;
                case 'ArrowRight':
                    lightboxNext.click();
                    break;
            }
        }
    });
}

// ==========================================================================
// Modal Functionality (Projects Page)
// ==========================================================================

function initModals() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const viewButtons = document.querySelectorAll('.project-view-btn');
    
    if (!modal) return;
    
    // Sample project data - in a real implementation, this would come from a CMS or API
    const projectData = {
        'BIM Automation Tool': {
            image: 'images/projects/bim-automation-detail.jpg',
            description: 'A comprehensive automation tool for Revit that streamlines model validation, clash detection, and documentation generation. Built with C# and the Revit API, this tool has reduced manual QA work by 70% across multiple projects.',
            tags: ['BIM', 'C#', 'Revit API', 'Automation'],
            projectLink: '#',
            codeLink: 'https://github.com/yourusername/bim-automation'
        }
        // Add more project data as needed
    };
    
    // Open modal
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectCard = this.closest('.project-card-main');
            const projectTitle = projectCard.querySelector('.project-title-main').textContent;
            
            // Populate modal with project data
            const data = projectData[projectTitle];
            if (data) {
                document.getElementById('modalImage').src = data.image;
                document.getElementById('modalTitle').textContent = projectTitle;
                document.getElementById('modalDescription').textContent = data.description;
                
                const tagsContainer = document.getElementById('modalTags');
                tagsContainer.innerHTML = '';
                data.tags.forEach(tag => {
                    const tagSpan = document.createElement('span');
                    tagSpan.className = 'tag';
                    tagSpan.textContent = tag;
                    tagsContainer.appendChild(tagSpan);
                });
                
                document.getElementById('modalViewProject').href = data.projectLink;
                document.getElementById('modalViewCode').href = data.codeLink;
            }
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// ==========================================================================
// Utility Functions
// ==========================================================================

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background-color: var(--color-accent-blue);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        z-index: 3000;
        font-size: 0.9rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================================================
// Performance Optimizations
// ==========================================================================

// Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);
