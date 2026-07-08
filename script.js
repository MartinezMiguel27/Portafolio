document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // 4. Skills Bar Animation
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const animateSkills = () => {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (barTop < windowHeight - 50) {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
            }
        });
    };
    
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Trigger once on load

    // 5. Portfolio Case Study Tab Switcher
    const tabs = document.querySelectorAll('.showcase-tab');
    const displayIframe = document.getElementById('showcase-iframe');
    const displayVideoContainer = document.getElementById('showcase-video-container');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to current tab
            tab.classList.add('active');

            const targetType = tab.getAttribute('data-type');
            const targetContentId = tab.getAttribute('data-target');

            // Toggle Iframe and Video visibility based on tab type
            if (targetType === 'iframe') {
                if (displayIframe) displayIframe.style.display = 'block';
                if (displayVideoContainer) displayVideoContainer.style.display = 'none';
            } else if (targetType === 'video') {
                if (displayIframe) displayIframe.style.display = 'none';
                if (displayVideoContainer) displayVideoContainer.style.display = 'flex';
            }

            // Update Tab Content View
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetContentId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Check if the video file is present and can be loaded
    const videoElement = document.getElementById('showcase-video');
    const videoPlaceholder = document.getElementById('video-placeholder');
    if (videoElement && videoPlaceholder) {
        videoElement.addEventListener('loadeddata', () => {
            // Video is present and loaded, hide the placeholder
            videoPlaceholder.style.display = 'none';
        });
        videoElement.addEventListener('error', () => {
            // Video missing or failed, make sure placeholder is visible
            videoPlaceholder.style.display = 'flex';
        });
    }

    // 6. Contact Form Submission Mock
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple user friendly confirmation
            alert(`¡Gracias por tu mensaje, ${name}! Te responderé a la brevedad a ${email}.`);
            contactForm.reset();
        });
    }
});
