// Main JavaScript for portfolio functionality

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile navigation
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Close navigation when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Highlight active navigation based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('header');
        
        // Add scrolled class to header when scrolled
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Highlight active section in navigation
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Scroll to section when hash changes
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash;
        if (hash) {
            const section = document.querySelector(hash);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
    
    // Initialize skills progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    const skillsSection = document.querySelector('.skills-section');
    
    const initProgressBars = () => {
        progressBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = `${percent}%`;
        });
    };
    
    // Use Intersection Observer to trigger animations when section is visible
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initProgressBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
    // Skill tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all skill grids
            const skillGrids = document.querySelectorAll('.skills-grid');
            skillGrids.forEach(grid => grid.style.display = 'none');
            
            // Show the selected skill grid
            const targetGrid = document.getElementById(this.getAttribute('data-target'));
            if (targetGrid) {
                targetGrid.style.display = 'grid';
                
                // Reinitialize progress bars for the visible grid
                const visibleBars = targetGrid.querySelectorAll('.progress-bar');
                visibleBars.forEach(bar => {
                    const percent = bar.getAttribute('data-percent');
                    bar.style.width = `${percent}%`;
                });
            }
        });
    });
    
    // Project filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            const projects = document.querySelectorAll('.project-card');
            
            projects.forEach(project => {
                if (filterValue === 'all') {
                    project.style.display = 'block';
                } else {
                    const projectCategories = project.getAttribute('data-categories').split(',');
                    if (projectCategories.includes(filterValue)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Admin login modal functionality
    const loginTrigger = document.createElement('div');
    loginTrigger.classList.add('admin-login-trigger');
    loginTrigger.style.position = 'fixed';
    loginTrigger.style.bottom = '20px';
    loginTrigger.style.right = '20px';
    loginTrigger.style.width = '20px';
    loginTrigger.style.height = '20px';
    loginTrigger.style.zIndex = '1000';
    loginTrigger.style.cursor = 'pointer';
    document.body.appendChild(loginTrigger);
    
    const adminModal = document.getElementById('adminLoginModal');
    const closeBtn = adminModal.querySelector('.close');
    
    loginTrigger.addEventListener('click', function() {
        adminModal.style.display = 'flex';
    });
    
    closeBtn.addEventListener('click', function() {
        adminModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === adminModal) {
            adminModal.style.display = 'none';
        }
    });
    
    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            
            // Validate name
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }
            
            // Validate email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }
            
            // Validate subject
            const subjectInput = document.getElementById('subject');
            const subjectError = document.getElementById('subjectError');
            
            if (subjectInput.value.trim() === '') {
                subjectError.textContent = 'Subject is required';
                subjectError.style.display = 'block';
                isValid = false;
            } else {
                subjectError.style.display = 'none';
            }
            
            // Validate message
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required';
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageError.style.display = 'none';
            }
            
            // If form is valid, submit it
            if (isValid) {
                // Normally this would send the data to the server
                // For now, simulate submission
                const formStatus = document.getElementById('formStatus');
                formStatus.textContent = 'Your message has been sent successfully!';
                formStatus.className = 'form-status success';
                
                // Reset form
                contactForm.reset();
                
                // Record the message to the database (simulated)
                saveContactMessage(
                    nameInput.value, 
                    emailInput.value, 
                    subjectInput.value, 
                    messageInput.value
                );
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }
        });
    }
    
    // Admin login form validation
    const adminLoginForm = document.getElementById('adminLoginForm');
    
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginStatus = document.getElementById('loginStatus');
            
            // This is just a demo - in a real application, you would verify credentials on the server
            if (username === 'admin' && password === 'admin123') {
                loginStatus.textContent = 'Login successful! Redirecting to admin panel...';
                loginStatus.className = 'form-status success';
                
                // Simulate redirection to admin panel
                setTimeout(() => {
                    window.location.href = 'admin.html';
                }, 2000);
            } else {
                loginStatus.textContent = 'Invalid username or password';
                loginStatus.className = 'form-status error';
            }
        });
    }
});