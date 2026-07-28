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
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to current tab
            tab.classList.add('active');

            const targetContentId = tab.getAttribute('data-target');

            // Update Tab Content View
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetContentId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // 6. Interactive Image Selector for Dashboard
    const imageSelectBtns = document.querySelectorAll('.image-select-btn');
    const showcaseImg = document.getElementById('showcase-img');

    if (imageSelectBtns && showcaseImg) {
        imageSelectBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active from all selector buttons
                imageSelectBtns.forEach(b => b.classList.remove('active'));
                // Add active to current button
                btn.classList.add('active');

                // Update showcase image src with fade effect
                const targetSrc = btn.getAttribute('data-src');
                showcaseImg.style.opacity = 0;
                setTimeout(() => {
                    showcaseImg.src = targetSrc;
                    showcaseImg.style.opacity = 1;
                }, 150);
            });
        });
    }

    // 7. Lightbox Zoom Modal
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const showcaseScreenContainer = document.querySelector('.showcase-screen-container');

    if (lightboxModal && lightboxImg && showcaseScreenContainer) {
        // Open Lightbox
        showcaseScreenContainer.addEventListener('click', () => {
            if (showcaseImg) {
                lightboxImg.src = showcaseImg.src;
                lightboxModal.style.display = 'flex';
                // Trigger reflow to enable transition
                lightboxModal.offsetHeight;
                lightboxModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Disable page scrolling
            }
        });

        const closeLightbox = () => {
            lightboxModal.classList.remove('active');
            setTimeout(() => {
                lightboxModal.style.display = 'none';
            }, 300);
            document.body.style.overflow = '';
        };

        // Close Lightbox clicking close button
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        // Close Lightbox clicking anywhere outside the image
        lightboxModal.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                closeLightbox();
            }
        });
    }
    // 8. Language Switcher Redirection
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        // Set the selected value based on current filename
        const path = window.location.pathname;
        if (path.includes('index_en.html')) {
            langSelect.value = 'en';
        } else if (path.includes('index_fr.html')) {
            langSelect.value = 'fr';
        } else {
            langSelect.value = 'es';
        }

        langSelect.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            let targetPage = 'index.html';
            if (selectedLang === 'en') {
                targetPage = 'index_en.html';
            } else if (selectedLang === 'fr') {
                targetPage = 'index_fr.html';
            }
            window.location.href = targetPage;
        });
    }
});
