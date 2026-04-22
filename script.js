// script.js - MISSING FILE ADD KARO!
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255,255,255,0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            navbar.querySelectorAll('a').forEach(a => a.style.color = '#333');
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = 'none';
            navbar.querySelectorAll('a').forEach(a => a.style.color = 'white');
        }
    });

    function showAdmin() {
        document.getElementById('adminModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeAdmin() {
        document.getElementById('adminModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function showContact() {
        document.getElementById('contactModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeContact() {
        document.getElementById('contactModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function openWhatsApp() {
        window.open('https://wa.me/917300697011?text=Hi%20Sir%2C%20AxoraCampus%20ERP%20demo%20chahiye%20school%20ke%20liye%21', '_blank');
    }

    // Modal close on outside click
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Copy phone number
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function(e) {
            navigator.clipboard.writeText('7300697011');
            const originalText = this.textContent;
            this.textContent = '📋 Copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 1500);
        });
    });
});
