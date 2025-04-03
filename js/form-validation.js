/**
 * form-validation.js - Handles form validation for the portfolio website
 * - Validates contact form inputs
 * - Displays error messages
 * - Submits form data
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    // Input fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    
    // Admin login elements
    const adminLoginForm = document.getElementById('adminLoginForm');
    const loginStatus = document.getElementById('loginStatus');
    const adminLoginModal = document.getElementById('adminLoginModal');
    const modalClose = document.querySelector('.modal-content .close');

    // Validation patterns
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Form submission event
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous error messages
            resetErrors();
            
            // Validate each field
            let isValid = true;
            
            // Name validation
            if (nameInput.value.trim() === '') {
                showError(nameInput, nameError, 'Please enter your name');
                isValid = false;
            } else if (nameInput.value.trim().length < 2) {
                showError(nameInput, nameError, 'Name must be at least 2 characters');
                isValid = false;
            }
            
            // Email validation
            if (emailInput.value.trim() === '') {
                showError(emailInput, emailError, 'Please enter your email');
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                showError(emailInput, emailError, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Subject validation
            if (subjectInput.value.trim() === '') {
                showError(subjectInput, subjectError, 'Please enter a subject');
                isValid = false;
            } else if (subjectInput.value.trim().length < 4) {
                showError(subjectInput, subjectError, 'Subject must be at least 4 characters');
                isValid = false;
            }
            
            // Message validation
            if (messageInput.value.trim() === '') {
                showError(messageInput, messageError, 'Please enter your message');
                isValid = false;
            } else if (messageInput.value.trim().length < 20) {
                showError(messageInput, messageError, 'Message must be at least 20 characters');
                isValid = false;
            }
            
            // If form is valid, submit it
            if (isValid) {
                // Simulate form submission
                submitForm();
            }
        });
    }
    
    // Admin login form submission
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple demo authentication (in a real app, this would be server-side)
            if (username === 'admin' && password === 'password123') {
                loginStatus.textContent = 'Login successful. Redirecting...';
                loginStatus.className = 'form-status success';
                
                // Simulate redirect after login
                setTimeout(() => {
                    alert('You would be redirected to admin dashboard.');
                    adminLoginModal.style.display = 'none';
                }, 2000);
            } else {
                loginStatus.textContent = 'Invalid username or password';
                loginStatus.className = 'form-status error';
            }
        });
    }
    
    // Modal close button
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            adminLoginModal.style.display = 'none';
        });
    }
    
    // Admin login trigger (hidden in UI, can be accessed via console)
    window.openAdminLogin = function() {
        if (adminLoginModal) {
            adminLoginModal.style.display = 'flex';
        }
    };
    
    // Real-time validation for input fields
    addInputValidation(nameInput, nameError, validateName);
    addInputValidation(emailInput, emailError, validateEmail);
    addInputValidation(subjectInput, subjectError, validateSubject);
    addInputValidation(messageInput, messageError, validateMessage);
    
    // Helper function to show error message
    function showError(inputElement, errorElement, message) {
        inputElement.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    // Helper function to reset all error messages
    function resetErrors() {
        // Reset form fields
        const formFields = [nameInput, emailInput, subjectInput, messageInput];
        const errorElements = [nameError, emailError, subjectError, messageError];
        
        formFields.forEach(field => {
            if (field) field.classList.remove('error');
        });
        
        errorElements.forEach(error => {
            if (error) {
                error.textContent = '';
                error.style.display = 'none';
            }
        });
        
        // Reset form status
        if (formStatus) {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }
    }
    
    // Add real-time validation to input field
    function addInputValidation(inputElement, errorElement, validationFunc) {
        if (!inputElement || !errorElement) return;
        
        inputElement.addEventListener('blur', function() {
            const errorMessage = validationFunc(inputElement.value);
            if (errorMessage) {
                showError(inputElement, errorElement, errorMessage);
            } else {
                inputElement.classList.remove('error');
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
        });
        
        // Clear error when user starts typing again
        inputElement.addEventListener('input', function() {
            inputElement.classList.remove('error');
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        });
    }
    
    // Validation functions
    function validateName(value) {
        if (value.trim() === '') {
            return 'Please enter your name';
        } else if (value.trim().length < 2) {
            return 'Name must be at least 2 characters';
        }
        return null;
    }
    
    function validateEmail(value) {
        if (value.trim() === '') {
            return 'Please enter your email';
        } else if (!emailPattern.test(value.trim())) {
            return 'Please enter a valid email address';
        }
        return null;
    }
    
    function validateSubject(value) {
        if (value.trim() === '') {
            return 'Please enter a subject';
        } else if (value.trim().length < 4) {
            return 'Subject must be at least 4 characters';
        }
        return null;
    }
    
    function validateMessage(value) {
        if (value.trim() === '') {
            return 'Please enter your message';
        } else if (value.trim().length < 20) {
            return 'Message must be at least 20 characters';
        }
        return null;
    }
    
    // Form submission function (simulate AJAX submission)
    function submitForm() {
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate AJAX request with setTimeout
        setTimeout(() => {
            // Reset button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            
            // Show success message
            formStatus.textContent = 'Your message has been sent successfully! I will get back to you soon.';
            formStatus.className = 'form-status success';
            
            // Reset form fields
            contactForm.reset();
            
            // Hide success message after some time
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        }, 1500);
    }
});