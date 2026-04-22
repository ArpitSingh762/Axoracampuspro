// 🔥 COMPLETE WORKING ERP - script.js (Replace everything)
document.addEventListener('DOMContentLoaded', function() {
    
    // Modal Functions
    window.showAdmin = function() {
        document.getElementById('adminModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    window.closeAdmin = function() {
        document.getElementById('adminModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    window.showContact = function() {
        document.getElementById('contactModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    window.closeContact = function() {
        document.getElementById('contactModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    window.openWhatsApp = function() {
        window.open('https://wa.me/917300697011?text=🚀%20AxoraCampus%20ERP%20Demo%20Perfect%20Hai!', '_blank');
    }

    // ADMIN DASHBOARD - FULLY FUNCTIONAL 🔥
    if (document.querySelector('.admin-wrapper')) {
        initFullERPDemo();
    }
    
    function initFullERPDemo() {
        // 1. Charts
        initCharts();
        
        // 2. Search Functionality
        initSearch();
        
        // 3. Tab Navigation
        initTabs();
        
        // 4. Add Student Form
        initForms();
        
        // 5. Real-time Updates
        startRealTimeDemo();
        
        // 6. Notifications
        initNotifications();
    }
    
    function initCharts() {
        const ctx = document.getElementById('attendanceChart') || document.createElement('canvas');
        if (ctx) {
            new Chart(ctx.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Present', 'Absent', 'Late'],
                    datasets: [{
                        data: [Math.floor(Math.random()*400+300), Math.floor(Math.random()*50), Math.floor(Math.random()*30)],
                        backgroundColor: ['#00d4aa', '#ff6b6b', '#ffa726']
                    }]
                }
            });
        }
    }
    
    function initSearch() {
        const searchInput = document.querySelector('.search-box input');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                // Filter table rows
                const rows = document.querySelectorAll('tbody tr');
                const query = this.value.toLowerCase();
                
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    row.style.display = text.includes(query) ? '' : 'none';
                });
            });
        }
    }
    
    function initTabs() {
        document.querySelectorAll('.sidebar-nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.sidebar-nav a.active')?.classList.remove('active');
                this.classList.add('active');
                
                // Dynamic content change
                loadTabContent(this.dataset.tab || this.textContent);
            });
        });
    }
    
    function loadTabContent(tabName) {
        const mainContent = document.querySelector('.main-content');
        const titles = {
            'Dashboard': 'Dashboard Overview',
            'Students': 'Student Management',
            'Staff': 'Staff Management',
            'Attendance': 'Attendance Tracker',
            'Fees': 'Fee Collection',
            'Exams': 'Exam Management',
            'Reports': 'Analytics Reports'
        };
        
        mainContent.querySelector('h1').textContent = titles[tabName] || tabName;
        
        // Simulate loading
        showLoading();
        setTimeout(hideLoading, 800);
    }
    
    function initForms() {
        // Add Student Demo
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('add-student')) {
                showSuccess('Student added successfully! 🎉');
            }
        });
    }
    
    function startRealTimeDemo() {
        // Live updating stats
        setInterval(() => {
            const stats = document.querySelectorAll('.stat-info h3');
            stats.forEach(stat => {
                const num = parseFloat(stat.textContent.replace(/[^\d.]/g, ''));
                if (Math.random() > 0.7) {
                    stat.textContent = '₹' + (num + Math.floor(Math.random()*1000)).toLocaleString();
                }
            });
        }, 3000);
    }
    
    function initNotifications() {
        const bell = document.querySelector('.notifications');
        if (bell) {
            bell.addEventListener('click', function() {
                showNotification('New fee payment received! 💰');
                this.querySelector('.badge').style.display = 'none';
            });
        }
    }
    
    // Utility Functions
    window.showSuccess = function(msg) {
        const alert = document.createElement('div');
        alert.className = 'alert success';
        alert.innerHTML = `✅ ${msg}`;
        document.body.appendChild(alert);
        setTimeout(() => alert.remove(), 3000);
    }
    
    window.showNotification = function(msg) {
        const notif = document.createElement('div');
        notif.className = 'notification';
        notif.textContent = msg;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 4000);
    }
    
    function showLoading() {
        const loader = document.createElement('div');
        loader.id = 'loader';
        loader.innerHTML = '<div class="spinner"></div> Loading...';
        document.querySelector('.main-content').appendChild(loader);
    }
    
    function hideLoading() {
        document.getElementById('loader')?.remove();
    }
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Navbar effects
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar && window.scrollY > 100) {
            navbar.style.background = 'rgba(255,255,255,0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else if (navbar) {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
        }
    });
});
