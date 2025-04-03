/**
 * Database.js - Handles mock database operations for the portfolio website
 * - Loads project data
 * - Loads blog post data
 * - Handles pagination
 */

document.addEventListener('DOMContentLoaded', function() {
    // Sample project data
    const projectsData = [
        {
            id: 1,
            title: "E-commerce Website",
            description: "A full-featured online shopping platform with cart functionality and payment integration.",
            image: "img/projects/project1.jpg",
            category: "web",
            technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
            demoLink: "https://demo-link.com/project1",
            codeLink: "https://github.com/yourusername/project1"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A productivity app that helps users organize their tasks with drag-and-drop functionality.",
            image: "img/projects/project2.jpg",
            category: "web",
            technologies: ["React", "Redux", "CSS", "Firebase"],
            demoLink: "https://demo-link.com/project2",
            codeLink: "https://github.com/yourusername/project2"
        },
        {
            id: 3,
            title: "Weather Forecast App",
            description: "Mobile application that provides real-time weather updates and forecasts using geolocation.",
            image: "img/projects/project3.jpg",
            category: "mobile",
            technologies: ["React Native", "JavaScript", "API Integration"],
            demoLink: "https://demo-link.com/project3",
            codeLink: "https://github.com/yourusername/project3"
        },
        {
            id: 4,
            title: "Portfolio Website Design",
            description: "A modern portfolio website design for a photography professional.",
            image: "img/projects/project4.jpg",
            category: "design",
            technologies: ["Figma", "Adobe Photoshop", "UI/UX"],
            demoLink: "https://demo-link.com/project4",
            codeLink: "https://github.com/yourusername/project4"
        },
        {
            id: 5,
            title: "Social Media Dashboard",
            description: "An analytics dashboard for tracking social media performance across platforms.",
            image: "img/projects/project5.jpg",
            category: "web",
            technologies: ["JavaScript", "Chart.js", "HTML", "CSS", "API Integration"],
            demoLink: "https://demo-link.com/project5",
            codeLink: "https://github.com/yourusername/project5"
        },
        {
            id: 6,
            title: "Food Delivery App",
            description: "A mobile app for ordering food from local restaurants with real-time order tracking.",
            image: "img/projects/project6.jpg",
            category: "mobile",
            technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
            demoLink: "https://demo-link.com/project6",
            codeLink: "https://github.com/yourusername/project6"
        }
    ];

    // Sample blog post data
    const blogData = [
        {
            id: 1,
            title: "How to Build a Responsive Website from Scratch",
            excerpt: "Learn the fundamentals of creating responsive websites that look great on all devices.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "img/blog/blog1.jpg",
            date: "April 1, 2025",
            tags: ["Web Development", "HTML", "CSS"],
            author: "Your Name"
        },
        {
            id: 2,
            title: "Introduction to React Hooks",
            excerpt: "Understand how React Hooks work and why they're a game-changer for functional components.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "img/blog/blog2.jpg",
            date: "March 25, 2025",
            tags: ["React", "JavaScript", "Web Development"],
            author: "Your Name"
        },
        {
            id: 3,
            title: "Mastering CSS Grid Layout",
            excerpt: "A comprehensive guide to using CSS Grid for modern webpage layouts.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "img/blog/blog3.jpg",
            date: "March 18, 2025",
            tags: ["CSS", "Web Design", "Frontend"],
            author: "Your Name"
        },
        {
            id: 4,
            title: "Getting Started with Node.js and Express",
            excerpt: "Build your first server and API with Node.js and Express.js framework.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "img/blog/blog4.jpg",
            date: "March 10, 2025",
            tags: ["Node.js", "Backend", "JavaScript"],
            author: "Your Name"
        },
        {
            id: 5,
            title: "The Importance of Web Accessibility",
            excerpt: "Why making your websites accessible is not just good practice but essential.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "img/blog/blog5.jpg",
            date: "March 3, 2025",
            tags: ["Accessibility", "Web Development", "UX"],
            author: "Your Name"
        },
        {
            id: 6,
            title: "Understanding JavaScript Promises",
            excerpt: "A deep dive into JavaScript Promises and asynchronous programming.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "img/blog/blog6.jpg",
            date: "February 25, 2025",
            tags: ["JavaScript", "Programming", "Web Development"],
            author: "Your Name"
        }
    ];

    // Initialize projects section
    const projectsContainer = document.getElementById('projects-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Initialize blog section
    const blogContainer = document.getElementById('blog-container');
    const blogPagination = document.getElementById('blog-pagination');
    const postsPerPage = 3;
    let currentPage = 1;

    // Function to load projects
    function loadProjects(filter = 'all') {
        // Clear container first
        projectsContainer.innerHTML = '';
        
        // Filter projects
        const filteredProjects = filter === 'all' 
            ? projectsData 
            : projectsData.filter(project => project.category === filter);
        
        // If no projects match the filter
        if (filteredProjects.length === 0) {
            projectsContainer.innerHTML = '<div class="no-results">No projects found with this filter.</div>';
            return;
        }
        
        // Create project cards
        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-category', project.category);
            
            projectCard.innerHTML = `
                <div class="project-img">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.demoLink}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="${project.codeLink}" class="project-link" target="_blank"><i class="fab fa-github"></i> View Code</a>
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }

    // Function to load blog posts with pagination
    function loadBlogPosts(page = 1) {
        // Clear container first
        blogContainer.innerHTML = '';
        
        // Calculate pagination
        const totalPages = Math.ceil(blogData.length / postsPerPage);
        const startIndex = (page - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const paginatedPosts = blogData.slice(startIndex, endIndex);
        
        // Create blog post cards
        paginatedPosts.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            
            blogCard.innerHTML = `
                <div class="blog-img">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="blog-info">
                    <div class="blog-date">${post.date}</div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            blogContainer.appendChild(blogCard);
        });
        
        // Update pagination controls
        updatePagination(page, totalPages);
    }

    // Function to update pagination controls
    function updatePagination(currentPage, totalPages) {
        blogPagination.innerHTML = '';
        
        // Previous page button
        if (currentPage > 1) {
            const prevBtn = document.createElement('div');
            prevBtn.className = 'page-item';
            prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
            prevBtn.addEventListener('click', () => {
                loadBlogPosts(currentPage - 1);
            });
            blogPagination.appendChild(prevBtn);
        }
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('div');
            pageBtn.className = 'page-item';
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => {
                loadBlogPosts(i);
            });
            blogPagination.appendChild(pageBtn);
        }
        
        // Next page button
        if (currentPage < totalPages) {
            const nextBtn = document.createElement('div');
            nextBtn.className = 'page-item';
            nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
            nextBtn.addEventListener('click', () => {
                loadBlogPosts(currentPage + 1);
            });
            blogPagination.appendChild(nextBtn);
        }
    }

    // Add event listeners to project filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Get filter value
            const filter = this.getAttribute('data-filter');
            // Load projects with filter
            loadProjects(filter);
        });
    });

    // Add click events to blog post "Read More" links
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('read-more') || e.target.parentElement.classList.contains('read-more')) {
            e.preventDefault();
            alert('Blog post details page would open here.');
        }
    });

    // Initial load of projects and blog posts
    setTimeout(() => {
        loadProjects();
        loadBlogPosts();
    }, 1000); // Simulating loading time for demo purposes
});