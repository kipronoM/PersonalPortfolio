document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('checkbox');
    const toggleIcon = document.querySelector('.toggle-icon i');
    
    // Check if elements exist before proceeding
    if (!themeToggle || !toggleIcon) {
      console.error('Theme toggle elements not found');
      return;
    }
  
    // Function to set the theme
    const setTheme = (isDark) => {
      console.log('Setting theme: dark mode =', isDark); // Debugging
      
      if (isDark) {
        document.body.classList.add('dark-mode');
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
        themeToggle.checked = true;
      } else {
        document.body.classList.remove('dark-mode');
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
        themeToggle.checked = false;
      }
      
      // Save preference to localStorage
      localStorage.setItem('darkMode', isDark);
    };
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme !== null) {
      // Use saved preference
      setTheme(savedTheme === 'true');
    } else {
      // Check system preference
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode);
    }
    
    // Listen for toggle changes
    themeToggle.addEventListener('change', () => {
      console.log('Toggle changed, new state:', themeToggle.checked); // Debugging
      setTheme(themeToggle.checked);
    });
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only update if user hasn't set a preference
      if (localStorage.getItem('darkMode') === null) {
        setTheme(e.matches);
      }
    });
    
    // Add transition class after initial theme is set
    setTimeout(() => {
      document.body.classList.add('theme-transition');
    }, 100);
    
    // Log current state for debugging
    console.log('Initial state:', {
      'body has dark-mode class': document.body.classList.contains('dark-mode'),
      'toggle checked': themeToggle.checked,
      'saved theme': savedTheme
    });
  });