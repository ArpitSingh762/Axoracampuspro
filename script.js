// 🔥 Complete Interactive Demo Script
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.header');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255,255,255,0.98)';
        } else {
            navbar.style.background = 'rgba(255,255,255,0.95)';
        }
    });

    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target') || parseInt(counter.textContent);
            const count = +counter.innerText.replace(/,/g, '');
            
            const increment = target / 100;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment).toLocaleString();
                setTimeout(animateCounters, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        });
    };

    // Trigger counters on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelector('.hero-stats')?.parentElement && observer.observe(document.querySelector('.hero-stats'));

    // Phone number copy
    document.querySelectorAll('.phone-btn, .contact-btn.phone a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigator.clipboard.writeText('7300697011');
            const originalText = this.innerText;
            const icon = this.querySelector('i');
            this.innerHTML = '<i class="fas fa-check-circle"></i> Copied!';
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        });
    });

    // Demo interaction
    document.querySelector('.demo-overlay')?.addEventListener('click', function() {
        this.style.display = 'none';
    });

    // Scroll animations
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
        animateOnScroll.observe(card);
    });
});
