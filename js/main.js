// Timer functionality
function startTimer(elementId, hours, minutes, seconds) {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    function updateTimer() {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        
        const display = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        document.getElementById(elementId).textContent = display;
        
        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            // Reset timer when it reaches zero
            totalSeconds = hours * 3600 + minutes * 60 + seconds;
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Initialize timers
document.addEventListener('DOMContentLoaded', function() {
    // Start timers with 2 hours, 59 minutes, 47 seconds
    startTimer('headerTimer', 2, 59, 47);
    startTimer('finalTimer', 2, 59, 47);
    
    // Facebook Pixel tracking - View Content
    if (typeof fbq === 'function') {
        fbq('track', 'ViewContent', {
            content_name: 'Reapproach 21 Landing Page',
            content_category: 'Relationship',
            value: 9.90,
            currency: 'USD'
        });
    }
});

// CTA click tracking
document.querySelectorAll('a[href*="hotmart"]').forEach(function(cta) {
    cta.addEventListener('click', function() {
        // Facebook Pixel tracking - Initiate Checkout
        if (typeof fbq === 'function') {
            fbq('track', 'InitiateCheckout', {
                content_name: 'Reapproach 21',
                value: 9.90,
                currency: 'USD'
            });
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal - elements appear as user scrolls
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(function(el) {
        observer.observe(el);
    });
}

// Initialize scroll reveal
document.addEventListener('DOMContentLoaded', function() {
    setupScrollReveal();
});
