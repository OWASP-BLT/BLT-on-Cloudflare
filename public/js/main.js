/**
 * BLT on Cloudflare - Main JavaScript
 */

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Add scroll effect to header
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

header.style.transition = 'transform 0.3s ease';

// Add animation on scroll for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all feature and component cards
document.querySelectorAll('.bg-white.rounded-xl.shadow-md').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// Copy referral link functionality (for authenticated users)
function copyReferralLink() {
  const input = document.getElementById('referralLink');
  if (input) {
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    
    navigator.clipboard.writeText(input.value).then(() => {
      // Show success message
      const button = event.target.closest('button');
      const originalText = button.innerHTML;
      button.innerHTML = '<i class="fas fa-check mr-2"></i>Copied!';
      button.style.backgroundColor = '#10b981';
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.backgroundColor = '';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}

// Add click event to all external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', function() {
    // Track external link clicks (can be used for analytics)
    console.log('External link clicked:', this.href);
  });
});

// Animate stats counter on scroll
function animateStats() {
  const stats = document.querySelectorAll('.text-4xl.font-bold.text-red-600');
  
  stats.forEach(stat => {
    const target = parseInt(stat.textContent.replace(/\D/g, ''));
    const suffix = stat.textContent.replace(/[\d,]/g, '');
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        stat.textContent = target.toLocaleString() + suffix;
        clearInterval(timer);
      } else {
        stat.textContent = Math.floor(current).toLocaleString() + suffix;
      }
    }, stepTime);
  });
}

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateStats();
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.py-12.bg-white');
if (statsSection) {
  statsObserver.observe(statsSection);
}

console.log('BLT on Cloudflare Workers loaded successfully!');
