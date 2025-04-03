// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar navigation
    const sidebarItems = document.querySelectorAll('.sidebar-nav li');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('pageTitle');
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const adminContainer = document.querySelector('.admin-container');
    const logoutBtn = document.getElementById('logoutBtn');

    // Dashboard elements
    const projectCount = document.getElementById('projectCount');
    const messageCount = document.getElementById('messageCount');
    const blogCount = document.getElementById('blogCount');
    const viewCount = document.getElementById('viewCount');
    const recentMessagesContainer = document.getElementById('recentMessagesContainer');
    const unreadCount = document.getElementById('unreadCount');
    
    // Quick action buttons
    const quickActionItems = document.querySelectorAll('.quick-action-item');
    
    // Profile section elements
    const profileImagePreview = document.getElementById('profileImagePreview');
    const profileImageInput = document.getElementById('profileImageInput');
    const changeProfileImageBtn = document.getElementById('changeProfileImageBtn');
    const saveButtons = document.querySelectorAll('.save-btn');
    
    // Skills section elements
    const tabButtons = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const addSkillBtn = document.querySelector('.add-skill-btn');
    const skillModal = document.getElementById('skillModal');
    const skillForm = document.getElementById('skillForm');
    const skillLevel = document.getElementById('skillLevel');
    const skillLevelValue = document.getElementById('skillLevelValue');
    const skillIcon = document.getElementById('skillIcon');
    const iconPreview = document.getElementById('iconPreview');
    const closeButtons = document.querySelectorAll('.close');
    const cancelButtons = document.querySelectorAll('.cancel-btn');
    
    // Projects section elements
    const addProjectBtn = document.querySelector('.add-project-btn');
    const projectModal = document.getElementById('projectModal');
    const adminProjectsContainer = document.getElementById('adminProjectsContainer');
    
    // Messages section elements
    const selectAllMessages = document.getElementById('selectAllMessages');
    const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');
    const viewButtons = document.querySelectorAll('.view-btn');
    const replyButtons = document.querySelectorAll('.reply-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const viewMessageModal = document.getElementById('viewMessageModal');
    const replyMessageModal = document.getElementById('replyMessageModal');
    
    // Initialize dashboard
    initDashboard();
    
    // Navigation functionality
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            navigateToSection(section);
        });
    });
    
    quickActionItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            navigateToSection(section);
        });
    });
    
    // Section specific event listeners
    toggleSidebarBtn.addEventListener('click', toggleSidebar);
    logoutBtn.addEventListener('click', handleLogout);
    
    // Profile Section
    if (changeProfileImageBtn) {
        changeProfileImageBtn.addEventListener('click', function() {
            profileImageInput.click();
        });
    }
    
    if (profileImageInput) {
        profileImageInput.addEventListener('change', function(e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profileImagePreview.src = e.target.result;
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }
    
    // Skills Section
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            switchTab(tab);
        });
    });
    
    if (addSkillBtn) {
        addSkillBtn.addEventListener('click', openAddSkillModal);
    }
    
    if (skillLevel) {
        skillLevel.addEventListener('input', function() {
            skillLevelValue.textContent = this.value + '%';
        });
    }
    
    if (skillIcon) {
        skillIcon.addEventListener('input', updateIconPreview);
    }
    
    if (skillForm) {
        skillForm.addEventListener('submit', handleSkillSubmit);
    }
    
    // Projects Section
    if (addProjectBtn) {
        addProjectBtn.addEventListener('click', openAddProjectModal);
    }
    
    // Messages Section
    if (selectAllMessages) {
        selectAllMessages.addEventListener('change', toggleSelectAllMessages);
    }
    
    document.querySelectorAll('input[name="message-select"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateDeleteSelectedButton);
    });
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const messageId = this.getAttribute('data-id');
            openViewMessageModal(messageId);
        });
    });
    
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const messageId = this.getAttribute('data-id');
            openReplyModal(messageId);
        });
    });
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const messageId = this.getAttribute('data-id');
            deleteMessage(messageId);
        });
    });
    
    // Modal close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModals);
    });
    
    cancelButtons.forEach(button => {
        button.addEventListener('click', closeModals);
    });
    
    // Save buttons
    saveButtons.forEach(button => {
        button.addEventListener('click', handleSave);
    });
    
    // Helper functions
    function initDashboard() {
        // Set initial counts
        fetchDashboardStats();
        loadRecentMessages();
        initializeTechnicalSkills();
        initializeSoftSkills();
        loadProjects();
    }
    
    function fetchDashboardStats() {
        // In a real app, these would be fetched from an API
        setTimeout(() => {
            projectCount.textContent = '12';
            messageCount.textContent = '24';
            blogCount.textContent = '8';
            viewCount.textContent = '4,392';
            unreadCount.textContent = '3';
        }, 1000);
    }
    
    function loadRecentMessages() {
        // Simulate loading messages
        recentMessagesContainer.innerHTML = `<div class="loading-spinner"><div class="spinner"></div></div>`;
        
        setTimeout(() => {
            recentMessagesContainer.innerHTML = `
                <div class="message-item unread">
                    <div class="message-sender">
                        <img src="img/user1.jpg" alt="User" onerror="this.src='img/placeholder.jpg'">
                        <div class="sender-info">
                            <h4>John Doe</h4>
                            <span>john.doe@example.com</span>
                        </div>
                    </div>
                    <div class="message-preview">
                        <p>Hello, I came across your portfolio and was impressed by your projects...</p>
                    </div>
                    <div class="message-date">April 2, 2025</div>
                </div>
                <div class="message-item unread">
                    <div class="message-sender">
                        <img src="img/user2.jpg" alt="User" onerror="this.src='img/placeholder.jpg'">
                        <div class="sender-info">
                            <h4>Jane Smith</h4>
                            <span>jane.smith@example.com</span>
                        </div>
                    </div>
                    <div class="message-preview">
                        <p>I'd like to discuss a potential collaboration opportunity...</p>
                    </div>
                    <div class="message-date">April 1, 2025</div>
                </div>
                <div class="message-item">
                    <div class="message-sender">
                        <img src="img/user3.jpg" alt="User" onerror="this.src='img/placeholder.jpg'">
                        <div class="sender-info">
                            <h4>Mike Johnson</h4>
                            <span>mike.j@example.com</span>
                        </div>
                    </div>
                    <div class="message-preview">
                        <p>Thanks for your prompt response. I'd like to schedule a call...</p>
                    </div>
                    <div class="message-date">March 30, 2025</div>
                </div>
            `;
            
            // Add click event to message items
            document.querySelectorAll('.message-item').forEach(item => {
                item.addEventListener('click', () => {
                    navigateToSection('messages');
                });
            });
        }, 1500);
    }
    
    function navigateToSection(section) {
        // Update active sidebar item
        sidebarItems.forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('data-section') === section) {
                item.classList.add('active');
            }
        });
        
        // Show the selected section
        contentSections.forEach(contentSection => {
            contentSection.classList.remove('active');
            if(contentSection.id === section) {
                contentSection.classList.add('active');
                pageTitle.textContent = section.charAt(0).toUpperCase() + section.slice(1);
            }
        });
    }
    
    function toggleSidebar() {
        adminContainer.classList.toggle('sidebar-collapsed');
    }
    
    function handleLogout() {
        if(confirm('Are you sure you want to logout?')) {
            // In a real app, this would handle the logout process
            alert('Logout functionality would be implemented here');
            // window.location.href = 'login.html';
        }
    }
    
    function switchTab(tab) {
        tabButtons.forEach(button => {
            button.classList.remove('active');
            if(button.getAttribute('data-tab') === tab) {
                button.classList.add('active');
            }
        });
        
        tabContents.forEach(content => {
            content.classList.remove('active');
            if(content.id === `${tab}-content`) {
                content.classList.add('active');
            }
        });
    }
    
    function initializeTechnicalSkills() {
        const technicalSkills = [
            { name: 'HTML5', icon: 'fab fa-html5', level: 90 },
            { name: 'CSS3', icon: 'fab fa-css3-alt', level: 85 },
            { name: 'JavaScript', icon: 'fab fa-js', level: 80 },
            { name: 'React', icon: 'fab fa-react', level: 75 },
            { name: 'Node.js', icon: 'fab fa-node-js', level: 70 },
            { name: 'Python', icon: 'fab fa-python', level: 65 }
        ];
        
        const container = document.getElementById('technicalSkillsContainer');
        container.innerHTML = '';
        
        technicalSkills.forEach(skill => {
            addSkillCard(skill, container);
        });
    }
    
    function initializeSoftSkills() {
        const softSkills = [
            { name: 'Teamwork', icon: 'fas fa-users', level: 95 },
            { name: 'Communication', icon: 'fas fa-comments', level: 90 },
            { name: 'Problem Solving', icon: 'fas fa-puzzle-piece', level: 85 },
            { name: 'Time Management', icon: 'fas fa-clock', level: 80 }
        ];
        
        const container = document.getElementById('softSkillsContainer');
        container.innerHTML = '';
        
        softSkills.forEach(skill => {
            addSkillCard(skill, container);
        });
    }
    
    function addSkillCard(skill, container) {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <div class="skill-card-header">
                <i class="${skill.icon}"></i>
                <h3>${skill.name}</h3>
                <div class="skill-actions">
                    <button class="edit-btn"><i class="fas fa-edit"></i></button>
                    <button class="delete-btn"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div class="skill-level">
                <label>Proficiency: ${skill.level}%</label>
                <input type="range" min="0" max="100" value="${skill.level}" class="skill-range" disabled>
            </div>
        `;
        
        container.appendChild(skillCard);
        
        // Add event listeners for edit and delete buttons
        const editBtn = skillCard.querySelector('.edit-btn');
        const deleteBtn = skillCard.querySelector('.delete-btn');
        
        editBtn.addEventListener('click', () => {
            openEditSkillModal(skill);
        });
        
        deleteBtn.addEventListener('click', () => {
            if(confirm(`Are you sure you want to delete the ${skill.name} skill?`)) {
                skillCard.remove();
            }
        });
    }
    
    function openAddSkillModal() {
        document.getElementById('skillModalTitle').textContent = 'Add New Skill';
        document.getElementById('skillName').value = '';
        document.getElementById('skillCategory').value = 'technical';
        document.getElementById('skillIcon').value = '';
        document.getElementById('skillLevel').value = 75;
        document.getElementById('skillLevelValue').textContent = '75%';
        document.getElementById('iconPreview').className = 'fab fa-code';
        
        skillModal.style.display = 'block';
    }
    
    function openEditSkillModal(skill) {
        document.getElementById('skillModalTitle').textContent = 'Edit Skill';
        document.getElementById('skillName').value = skill.name;
        document.getElementById('skillCategory').value = skill.icon.includes('fa-users') ? 'soft' : 'technical';
        document.getElementById('skillIcon').value = skill.icon;
        document.getElementById('skillLevel').value = skill.level;
        document.getElementById('skillLevelValue').textContent = skill.level + '%';
        document.getElementById('iconPreview').className = skill.icon;
        
        skillModal.style.display = 'block';
    }
    
    function updateIconPreview() {
        const iconClass = skillIcon.value;
        iconPreview.className = iconClass;
    }
    
    function handleSkillSubmit(e) {
        e.preventDefault();
        
        const skillData = {
            name: document.getElementById('skillName').value,
            category: document.getElementById('skillCategory').value,
            icon: document.getElementById('skillIcon').value,
            level: document.getElementById('skillLevel').value
        };
        
        const container = skillData.category === 'technical' 
            ? document.getElementById('technicalSkillsContainer')
            : document.getElementById('softSkillsContainer');
        
        addSkillCard(skillData, container);
        
        skillModal.style.display = 'none';
    }
    
    function loadProjects() {
        const projects = [
            {
                id: 1,
                title: 'E-commerce Website',
                category: 'web',
                thumbnail: 'img/project1.jpg',
                description: 'A fully responsive e-commerce website with shopping cart functionality.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
                demoLink: '#',
                codeLink: '#',
                date: '2025-03-15'
            },
            {
                id: 2,
                title: 'Task Management App',
                category: 'mobile',
                thumbnail: 'img/project2.jpg',
                description: 'A mobile app for managing tasks and tracking productivity.',
                technologies: ['React Native', 'Node.js', 'MongoDB'],
                demoLink: '#',
                codeLink: '#',
                date: '2025-02-20'
            },
            {
                id: 3,
                title: 'Portfolio Template',
                category: 'web',
                thumbnail: 'img/project3.jpg',
                description: 'A customizable portfolio template for creative professionals.',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                demoLink: '#',
                codeLink: '#',
                date: '2025-01-10'
            }
        ];
        
        setTimeout(() => {
            adminProjectsContainer.innerHTML = '';
            
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <div class="project-thumbnail">
                        <img src="${project.thumbnail}" alt="${project.title}" onerror="this.src='img/placeholder.jpg'">
                        <div class="project-actions">
                            <button class="edit-project-btn" data-id="${project.id}"><i class="fas fa-edit"></i></button>
                            <button class="delete-project-btn" data-id="${project.id}"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <span class="project-category">${project.category}</span>
                        <p>${project.description}</p>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.demoLink}" class="btn small-btn" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
                            <a href="${project.codeLink}" class="btn small-btn" target="_blank"><i class="fab fa-github"></i> Code</a>
                        </div>
                    </div>
                `;
                
                adminProjectsContainer.appendChild(projectCard);
                
                // Add event listeners for project actions
                const editBtn = projectCard.querySelector('.edit-project-btn');
                const deleteBtn = projectCard.querySelector('.delete-project-btn');
                
                editBtn.addEventListener('click', () => {
                    openEditProjectModal(project);
                });
                
                deleteBtn.addEventListener('click', () => {
                    if(confirm(`Are you sure you want to delete the project "${project.title}"?`)) {
                        projectCard.remove();
                    }
                });
            });
        }, 1500);
    }
    
    function openAddProjectModal() {
        document.getElementById('projectModalTitle').textContent = 'Add New Project';
        
        // Reset form fields
        document.getElementById('projectForm').innerHTML = `
            <div class="form-group">
                <label for="projectTitle">Project Title</label>
                <input type="text" id="projectTitle" required>
            </div>
            <div class="form-group">
                <label for="projectCategory">Category</label>
                <select id="projectCategory">
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="design">UI/UX Design</option>
                </select>
            </div>
            <div class="form-group">
                <label for="projectDescription">Description</label>
                <textarea id="projectDescription" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="projectThumbnail">Thumbnail Image</label>
                <input type="file" id="projectThumbnail" accept="image/*">
                <div class="thumbnail-preview">
                    <img id="thumbnailPreview" src="img/placeholder.jpg" alt="Thumbnail Preview">
                </div>
            </div>
            <div class="form-group">
                <label for="projectTechnologies">Technologies (comma separated)</label>
                <input type="text" id="projectTechnologies" placeholder="HTML, CSS, JavaScript">
            </div>
            <div class="form-row">
                <div class="form-group half">
                    <label for="projectDemoLink">Demo Link</label>
                    <input type="url" id="projectDemoLink" placeholder="https://...">
                </div>
                <div class="form-group half">
                    <label for="projectCodeLink">Code Link</label>
                    <input type="url" id="projectCodeLink" placeholder="https://...">
                </div>
            </div>
            <div class="form-actions">
                <button type="button" class="btn secondary-btn cancel-btn">Cancel</button>
                <button type="submit" class="btn primary-btn">Save Project</button>
            </div>
        `;
        
        projectModal.style.display = 'block';
        
        // Add thumbnail preview functionality
        const thumbnailInput = document.getElementById('projectThumbnail');
        const thumbnailPreview = document.getElementById('thumbnailPreview');
        
        thumbnailInput.addEventListener('change', function(e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    thumbnailPreview.src = e.target.result;
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
        
        // Add form submit handler
        document.getElementById('projectForm').addEventListener('submit', handleProjectSubmit);
    }
    
    function openEditProjectModal(project) {
        document.getElementById('projectModalTitle').textContent = 'Edit Project';
        
        // Populate form fields with project data
        document.getElementById('projectForm').innerHTML = `
            <input type="hidden" id="projectId" value="${project.id}">
            <div class="form-group">
                <label for="projectTitle">Project Title</label>
                <input type="text" id="projectTitle" value="${project.title}" required>
            </div>
            <div class="form-group">
                <label for="projectCategory">Category</label>
                <select id="projectCategory">
                    <option value="web" ${project.category === 'web' ? 'selected' : ''}>Web Development</option>
                    <option value="mobile" ${project.category === 'mobile' ? 'selected' : ''}>Mobile App</option>
                    <option value="design" ${project.category === 'design' ? 'selected' : ''}>UI/UX Design</option>
                </select>
            </div>
            <div class="form-group">
                <label for="projectDescription">Description</label>
                <textarea id="projectDescription" rows="4" required>${project.description}</textarea>
            </div>
            <div class="form-group">
                <label for="projectThumbnail">Thumbnail Image</label>
                <input type="file" id="projectThumbnail" accept="image/*">
                <div class="thumbnail-preview">
                    <img id="thumbnailPreview" src="${project.thumbnail}" onerror="this.src='img/placeholder.jpg'" alt="Thumbnail Preview">
                </div>
            </div>
            <div class="form-group">
                <label for="projectTechnologies">Technologies (comma separated)</label>
                <input type="text" id="projectTechnologies" value="${project.technologies.join(', ')}">
            </div>
            <div class="form-row">
                <div class="form-group half">
                    <label for="projectDemoLink">Demo Link</label>
                    <input type="url" id="projectDemoLink" value="${project.demoLink}">
                </div>
                <div class="form-group half">
                    <label for="projectCodeLink">Code Link</label>
                    <input type="url" id="projectCodeLink" value="${project.codeLink}">
                </div>
            </div>
            <div class="form-actions">
                <button type="button" class="btn secondary-btn cancel-btn">Cancel</button>
                <button type="submit" class="btn primary-btn">Update Project</button>
            </div>
        `;
        
        projectModal.style.display = 'block';
        
        // Add thumbnail preview functionality
        const thumbnailInput = document.getElementById('projectThumbnail');
        const thumbnailPreview = document.getElementById('thumbnailPreview');
        
        thumbnailInput.addEventListener('change', function(e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    thumbnailPreview.src = e.target.result;
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
        
        // Add form submit handler
        document.getElementById('projectForm').addEventListener('submit', handleProjectSubmit);
    }
    
    function handleProjectSubmit(e) {
        e.preventDefault();
        
        // In a real app, this would save the project data to a database
        alert('Project saved successfully!');
        
        // Close modal and refresh projects
        projectModal.style.display = 'none';
        loadProjects();
    }
    
    function toggleSelectAllMessages() {
        const isChecked = selectAllMessages.checked;
        document.querySelectorAll('input[name="message-select"]').forEach(checkbox => {
            checkbox.checked = isChecked;
        });
        
        updateDeleteSelectedButton();
    }
    
    function updateDeleteSelectedButton() {
        const checkedCount = document.querySelectorAll('input[name="message-select"]:checked').length;
        deleteSelectedBtn.disabled = checkedCount === 0;
    }
    
    function openViewMessageModal(messageId) {
        // In a real app, this would fetch the message data from a database
        // For now, we'll use the sample message in the HTML
        
        // Mark the message as read
        const messageRow = document.querySelector(`.view-btn[data-id="${messageId}"]`).closest('tr');
        messageRow.classList.remove('unread');
        messageRow.querySelector('.status-badge').textContent = 'Read';
        messageRow.querySelector('.status-badge').className = 'status-badge read';
        
        viewMessageModal.style.display = 'block';
    }
    
    function openReplyModal(messageId) {
        // Get sender information from the message row
        const messageRow = document.querySelector(`.reply-btn[data-id="${messageId}"]`).closest('tr');
        const senderName = messageRow.children[1].textContent;
        const senderEmail = messageRow.children[2].textContent;
        const subject = messageRow.children[3].textContent;
        
        // Populate reply form
        document.getElementById('replyTo').value = `${senderName} <${senderEmail}>`;
        document.getElementById('replySubject').value = `Re: ${subject}`;
        
        replyMessageModal.style.display = 'block';
    }
    
    function deleteMessage(messageId) {
        if(confirm('Are you sure you want to delete this message?')) {
            const messageRow = document.querySelector(`.delete-btn[data-id="${messageId}"]`).closest('tr');
            messageRow.remove();
            
            // Update message count
            const currentCount = parseInt(messageCount.textContent);
            messageCount.textContent = (currentCount - 1).toString();
        }
    }
    
    function closeModals() {
        skillModal.style.display = 'none';
        projectModal.style.display = 'none';
        viewMessageModal.style.display = 'none';
        replyMessageModal.style.display = 'none';
    }
    
    function handleSave() {
        // In a real app, this would save the current section's data to a database
        alert('Changes saved successfully!');
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === skillModal) {
            skillModal.style.display = 'none';
        } else if (e.target === projectModal) {
            projectModal.style.display = 'none';
        } else if (e.target === viewMessageModal) {
            viewMessageModal.style.display = 'none';
        } else if (e.target === replyMessageModal) {
            replyMessageModal.style.display = 'none';
        }
    });
});