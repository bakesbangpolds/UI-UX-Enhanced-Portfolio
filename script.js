/* ==========================================
   INTERACTIVE FEATURES - JAVASCRIPT
   ========================================== */

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ==========================================
   SMOOTH SCROLLING & ACTIVE NAV LINK
   ========================================== */

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;
    
    // Update header shadow on scroll
    const header = document.getElementById('header');
    if (scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Update active nav link
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active-link');
                }
            });
        }
    });
});

/* ==========================================
   PROJECT MODAL
   ========================================== */

const projectButtons = document.querySelectorAll('.project-btn');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');

// Project data
const projectsData = {
    '1': {
        title: 'E-Commerce Platform',
        description: 'A comprehensive redesign of a modern e-commerce platform, focusing on streamlined user journeys and optimized conversion funnels.',
        image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        details: `
            <h4>Project Overview</h4>
            <p>This project involved redesigning the entire e-commerce experience for a mid-size online retailer. The focus was on reducing cart abandonment and improving the checkout process.</p>
            
            <h4>Key Achievements</h4>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>35% reduction in cart abandonment</li>
                <li>25% increase in average order value</li>
                <li>Improved mobile checkout completion by 40%</li>
                <li>Implemented accessible form validation</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>HTML5, CSS3, JavaScript, Figma, UserTesting</p>
        `
    },
    '2': {
        title: 'Mobile App Interface',
        description: 'Designing intuitive iOS and Android interfaces for a health and wellness application with millions of users.',
        image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        details: `
            <h4>Project Overview</h4>
            <p>Created comprehensive mobile app designs for both iOS and Android platforms, ensuring consistency while respecting platform-specific guidelines.</p>
            
            <h4>Key Achievements</h4>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Designed for 50+ million daily users</li>
                <li>4.8+ star rating across app stores</li>
                <li>WCAG 2.1 AA accessibility compliance</li>
                <li>Reduced app crashes by implementing better error states</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>Figma, Sketch, Adobe XD, React Native</p>
        `
    },
    '3': {
        title: 'SaaS Dashboard',
        description: 'Complex data visualization dashboard enabling businesses to monitor real-time analytics with intuitive interactive components.',
        image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        details: `
            <h4>Project Overview</h4>
            <p>Developed a comprehensive analytics dashboard for a B2B SaaS platform, handling complex data visualization and real-time updates.</p>
            
            <h4>Key Achievements</h4>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Support for 10,000+ data points in real-time</li>
                <li>Customizable widgets and layouts</li>
                <li>70% faster data loading with optimized queries</li>
                <li>Dark mode and accessibility features</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>React, D3.js, Chart.js, WebSocket, Node.js</p>
        `
    },
    '4': {
        title: 'Brand Identity System',
        description: 'Comprehensive brand refresh including visual identity, design system, and guidelines for a global enterprise.',
        image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        details: `
            <h4>Project Overview</h4>
            <p>Led a full brand identity redesign for a Fortune 500 company, creating a cohesive design system for all touchpoints.</p>
            
            <h4>Key Achievements</h4>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Unified 15+ sub-brands under new identity</li>
                <li>Created 300+ design system components</li>
                <li>80% reduction in design inconsistencies</li>
                <li>Comprehensive brand guidelines documentation</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>Figma, Sketch, Adobe Creative Suite, InVision</p>
        `
    },
    '5': {
        title: 'Educational Platform',
        description: 'Learning management system redesign improving course discovery and student engagement metrics.',
        image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        details: `
            <h4>Project Overview</h4>
            <p>Transformed an outdated learning platform into a modern, engaging educational environment for millions of students.</p>
            
            <h4>Key Achievements</h4>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>60% increase in course completion rates</li>
                <li>Improved student engagement by 45%</li>
                <li>New recommendation algorithm based on UX research</li>
                <li>Mobile-first responsive design</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>Vue.js, Python, PostgreSQL, Figma, Amplitude Analytics</p>
        `
    },
    '6': {
        title: 'Healthcare Portal',
        description: 'Secure patient-facing portal with HIPAA compliance, appointment booking, and medical records management.',
        image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        details: `
            <h4>Project Overview</h4>
            <p>Designed a comprehensive healthcare portal ensuring HIPAA compliance while maintaining excellent user experience for diverse patient populations.</p>
            
            <h4>Key Achievements</h4>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>HIPAA and WCAG 2.1 AAA compliant</li>
                <li>Support for 10+ languages</li>
                <li>89% patient satisfaction score</li>
                <li>Reduced appointment no-shows by 32%</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>Angular, .NET, SQL Server, HIPAA-certified hosting</p>
        `
    }
};

// Open modal
projectButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = button.getAttribute('data-project');
        const project = projectsData[projectId];
        
        if (project) {
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalDescription').textContent = project.description;
            document.getElementById('modalDetails').innerHTML = project.details;
            
            const modalImage = document.getElementById('modalImage');
            modalImage.style.background = project.image;
            modalImage.style.height = '250px';
            
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
function closeModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside content
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeModal();
    }
});

/* ==========================================
   SKILL BARS ANIMATION
   ========================================== */

// Animate skill bars when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector('.skill-bar');
            if (skillBar) {
                skillBar.style.animation = 'fillBar 1s ease-out forwards';
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});

/* ==========================================
   CONTACT FORM VALIDATION & SUBMISSION
   ========================================== */

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        setTimeout(() => {
            // Show success message
            showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

/* ==========================================
   TOOLTIP FUNCTIONALITY
   ========================================== */

// Add tooltips to skill bars
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    const skillBar = card.querySelector('.skill-bar');
    const skillLevel = skillBar.style.width;
    
    card.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        tooltip.textContent = skillLevel;
        tooltip.style.cssText = `
            position: absolute;
            background: var(--dark-color);
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 100;
            top: -30px;
            left: 0;
            pointer-events: none;
        `;
    });
});

/* ==========================================
   LAZY LOADING FOR IMAGES
   ========================================== */

// Image lazy loading setup
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/* ==========================================
   SCROLL ANIMATIONS
   ========================================== */

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-card, .stat-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animations
document.querySelectorAll('.project-card, .skill-card, .stat-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check

/* ==========================================
   KEYBOARD NAVIGATION
   ========================================== */

// Enhanced keyboard navigation for project cards
projectButtons.forEach(button => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });
});

// Trap focus in modal
document.addEventListener('keydown', (e) => {
    if (projectModal.classList.contains('active') && e.key === 'Tab') {
        const focusableElements = projectModal.querySelectorAll('button, a, [tabindex]');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */

// Smooth scroll helper
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
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

// Log initialization
console.log('Portfolio website initialized successfully!');
