Modern Portfolio Website
A fully-featured responsive portfolio website with admin dashboard for content management.
📋 Table of Contents
•	Overview
•	Features
•	Technologies Used
•	Project Structure
•	Getting Started 
o	Prerequisites
o	Installation
•	Usage 
o	Front-end Portfolio
o	Admin Dashboard
•	Configuration
•	Database Setup
•	Customization
•	Dark Mode
•	Form Validation
•	Contributing
•	License
•	Contact
📌 Overview
This project is a comprehensive portfolio website designed for a systems applications support analyst or web developer. It features a clean, modern front-end presentation and a powerful admin dashboard for easy content management. The site includes sections for showcasing skills, projects, blog posts, and contact information, with dynamic content loading and dark mode support.
✨ Features
Front-end Portfolio
•	Responsive Design: Looks great on all devices from mobile to desktop
•	Modern UI: Clean and professional interface with smooth animations
•	Dark/Light Mode: Toggle between themes with persistent preferences
•	Dynamic Content: Projects and blog posts loaded dynamically from database
•	Contact Form: Validated form with error messages and success feedback
•	Typewriter Effect: Animated text effect on the home page
•	Filterable Projects: Filter projects by category
•	Tabbed Content: Organized skill display with technical and soft skills tabs
Admin Dashboard
•	Secure Login: Protected admin area with authentication
•	Content Management: Add, edit, delete projects, skills, and blog posts
•	Profile Management: Update personal information and social media links
•	Message Handling: View, reply to, and manage contact form submissions
•	Statistics Dashboard: Overview of site activity and content counts
•	Responsive Design: Admin panel works on all devices
•	Real-time Updates: Changes reflected immediately on the front-end
🛠 Technologies Used
•	HTML5: Semantic markup for document structure
•	CSS3: Custom styling with transitions and animations
•	JavaScript (ES6+): Modern JavaScript for interactive elements
•	Font Awesome: Icon library for visual elements
•	Local Storage: For saving user preferences (like dark mode)
•	IndexedDB/LocalStorage: Client-side database for demo purposes (In production, would use backend technologies like Node.js, Express, MongoDB, etc.)
📁 Project Structure
Copy
portfolio-website/
├── css/
│   ├── style.css                 # Main stylesheet
│   ├── dark-mode.css             # Dark theme styles
│   └── admin-dash.css            # Admin dashboard styles
├── js/
│   ├── main.js                   # Main JavaScript file
│   ├── typewriter.js             # Typewriter effect script
│   ├── dark-mode.js              # Theme toggle functionality
│   ├── form-validation.js        # Contact form validation
│   ├── database.js               # Client-side data storage
│   ├── admin-modal.js            # Admin login modal
│   └── admin-dashboard.js        # Admin dashboard functionality
├── img/
│   ├── projects/                 # Project images
│   ├── blog/                     # Blog post images
│   └── profile.jpg               # Profile picture
├── index.html                    # Front-end portfolio page
├── admin-dash.html               # Admin dashboard
└── README.md                     # Project documentation
🚀 Getting Started
Prerequisites
•	Modern web browser (Chrome, Firefox, Safari, Edge)
•	For local development: Any code editor (VS Code, Sublime Text, etc.)
•	For production: Web hosting service
Installation
1.	Clone the repository or download the ZIP file 
Copy
git clone https://github.com/yourusername/portfolio-website.git
2.	Navigate to the project directory 
Copy
cd portfolio-website
3.	Open index.html in your browser to view the portfolio 
Copy
open index.html
📝 Usage
Front-end Portfolio
The portfolio is designed to showcase your skills, projects, and information to potential clients or employers.
1.	Navigation: Use the navigation menu to jump to different sections
2.	Dark Mode: Toggle the theme switch in the top right to change between light and dark modes
3.	Projects: Filter projects by category using the filter buttons
4.	Skills: Switch between technical and soft skills using the tabs
5.	Contact: Fill out the contact form to send a message (saved locally in demo version)
Admin Dashboard
The admin dashboard allows you to manage all content displayed on your portfolio.
1.	Accessing the Dashboard: 
o	Click 5 times quickly on the footer copyright text to reveal the admin login modal
o	Default credentials (for demo): 
	Username: admin
	Password: password
o	Or navigate directly to admin-dash.html
2.	Dashboard Navigation: 
o	Use the sidebar to navigate between different sections
o	The hamburger menu can collapse/expand the sidebar on mobile
3.	Managing Content: 
o	Profile: Update your personal information and social media links
o	Skills: Add, edit, or remove skills with custom icons and proficiency levels
o	Projects: Add new projects or edit existing ones with images, descriptions, and links
o	Blog: Create and publish blog posts with rich text formatting
o	Messages: View and respond to messages submitted through the contact form
⚙️ Configuration
Site Information
Edit the personal information in the admin dashboard to customize:
•	Profile picture
•	Name and professional title
•	About me section
•	Contact information
•	Social media links
Projects and Skills
Add your own projects and skills through the admin interface:
•	Projects: Include title, description, image, category, and links
•	Skills: Define technical and soft skills with custom icons and proficiency levels
🗄️ Database Setup
This demo version uses client-side storage (IndexedDB/LocalStorage) for demonstration purposes. For production use, you would need to implement a proper backend:
1.	Recommended Backend Stack: 
o	Node.js with Express for the server
o	MongoDB for database
o	Mongoose for object modeling
o	JWT for authentication
2.	API Endpoints to Implement: 
o	Authentication: /api/auth/login
o	Projects: /api/projects (GET, POST, PUT, DELETE)
o	Skills: /api/skills (GET, POST, PUT, DELETE)
o	Blog Posts: /api/posts (GET, POST, PUT, DELETE)
o	Messages: /api/messages (GET, POST, PUT, DELETE)
o	Profile: /api/profile (GET, PUT)
🎨 Customization
Colors and Theme
To modify the color scheme, edit the CSS variables in style.css:
css
Copy
:root {
  --primary-color: #5e3bee;
  --secondary-color: #2d2e32;
  --background-color: #f5f5f5;
  --text-color: #2d2e32;
  /* Add more custom variables as needed */
}
Fonts
To change the fonts, update the font-family in style.css:
css
Copy
body {
  font-family: 'Your-Preferred-Font', sans-serif;
}

h1, h2, h3 {
  font-family: 'Your-Heading-Font', serif;
}
🌓 Dark Mode
The dark mode is implemented using CSS variables and JavaScript. When a user toggles the theme:
1.	The script in dark-mode.js adds/removes the dark-mode class to the body
2.	CSS variables in dark-mode.css override the default light theme variables
3.	The user's preference is saved in local storage for persistence
✅ Form Validation
The contact form includes client-side validation for:
•	Required fields
•	Email format validation
•	Minimum content length
All validation logic is in form-validation.js and can be customized as needed.
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
1.	Fork the repository
2.	Create your feature branch (git checkout -b feature/AmazingFeature)
3.	Commit your changes (git commit -m 'Add some AmazingFeature')
4.	Push to the branch (git push origin feature/AmazingFeature)
5.	Open a Pull Request
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
📞 Contact
Fredrick Kiprono - mutaifred13@gmail.com
GitHub: https://github.com/kipronoM
LinkedIn: https://www.linkedin.com/in/fredrick-kiprono-379463200/
________________________________________
© 2025 Fredrick Kiprono. All Rights Reserved.

