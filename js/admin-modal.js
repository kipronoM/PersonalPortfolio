document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const adminLoginModal = document.getElementById('adminLoginModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const loginStatus = document.getElementById('loginStatus');
    const closeBtn = adminLoginModal.querySelector('.close');
    
    // Admin credentials (in a real application, this would be handled server-side)
    // This is just for demonstration - in production, never store credentials in frontend code
    const adminCredentials = {
        username: 'admin',
        password: 'password123'
    };
    
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
        
        // Validate credentials (for demo purposes only)
        if (username === adminCredentials.username && password === adminCredentials.password) {
            loginStatus.textContent = 'Login successful! Redirecting to admin dashboard...';
            loginStatus.className = 'form-status success';
            
            // Simulate redirect (in a real app, this would redirect to an admin panel)
            setTimeout(function() {
                window.location.href = '#'; // Change this to your admin dashboard URL
                closeAdminModal();
            }, 2000);
        } else {
            loginStatus.textContent = 'Invalid username or password. Please try again.';
            loginStatus.className = 'form-status error';
        }
    });
    
    // You could also add a visible admin login link somewhere in your site:
    // Example: Create a hidden footer link that only appears on hover
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
