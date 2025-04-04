document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const adminLoginModal = document.getElementById('adminLoginModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const loginStatus = document.getElementById('loginStatus');
    const closeBtn = adminLoginModal.querySelector('.close');
    
    // Function to open the modal
    function openAdminModal() {
        adminLoginModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    // Function to close the modal
    function closeAdminModal() {
        adminLoginModal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
        adminLoginForm.reset(); // Clear form fields
        loginStatus.textContent = ''; // Clear any status messages
        loginStatus.className = 'form-status'; // Reset status class
    }
    
    // Create a secret keyboard shortcut to open the admin modal (Ctrl+Shift+A)
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'A') {
            openAdminModal();
        }
    });
    
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', closeAdminModal);
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === adminLoginModal) {
            closeAdminModal();
        }
    });
    
    // Handle form submission
    adminLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Show loading state
        loginStatus.textContent = 'Verifying...';
        loginStatus.className = 'form-status loading';
        
        // Create form data for sending
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        
        // Send AJAX request to validate credentials
        fetch('validate_admin.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                loginStatus.textContent = 'Login successful! Redirecting to admin dashboard...';
                loginStatus.className = 'form-status success';
                
                // Redirect to admin dashboard
                setTimeout(function() {
                    window.location.href = 'admin-dash.html'; // Change to your admin dashboard URL
                    closeAdminModal();
                }, 2000);
            } else {
                loginStatus.textContent = data.message || 'Invalid username or password. Please try again.';
                loginStatus.className = 'form-status error';
            }
        })
        .catch(error => {
            loginStatus.textContent = 'An error occurred. Please try again later.';
            loginStatus.className = 'form-status error';
            console.error('Error:', error);
        });
    });
    
    // Add a hidden footer link that only appears on hover
    const footer = document.querySelector('footer');
    
    if (footer) {
        const adminLink = document.createElement('div');
        adminLink.className = 'admin-login-link';
        adminLink.innerHTML = '<a href="#" class="admin-link">Admin</a>';
        adminLink.style.opacity = '0.3';
        adminLink.style.textAlign = 'center';
        adminLink.style.marginTop = '10px';
        adminLink.style.fontSize = '0.8rem';
        
        adminLink.querySelector('.admin-link').addEventListener('click', function(event) {
            event.preventDefault();
            openAdminModal();
        });
        
        footer.appendChild(adminLink);
    }
});