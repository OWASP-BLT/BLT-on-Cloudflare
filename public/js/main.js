/**
 * BLT on Cloudflare - Main JavaScript
 */

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href !== "") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// Add animation on scroll for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all feature and component cards
document.querySelectorAll(".bg-white.rounded-xl.shadow-md").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(card);
});

// Copy referral link functionality (for authenticated users)
function copyReferralLink() {
  const input = document.getElementById("referralLink");
  if (input) {
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard
      .writeText(input.value)
      .then(() => {
        // Show success message
        const button = event.target.closest("button");
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check mr-2"></i>Copied!';
        button.style.backgroundColor = "#10b981";

        setTimeout(() => {
          button.innerHTML = originalText;
          button.style.backgroundColor = "";
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
}

// Add click event to all external links
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.addEventListener("click", function () {
    // Track external link clicks (can be used for analytics)
    console.log("External link clicked:", this.href);
  });
});

// Animate stats counter on scroll
function animateStats() {
  const stats = document.querySelectorAll(".text-4xl.font-bold.text-red-600");

  stats.forEach((stat) => {
    const target = parseInt(stat.textContent.replace(/\D/g, ""));
    const suffix = stat.textContent.replace(/[\d,]/g, "");
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

// Sidebar toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("hamburger-button");
  const sidebar = document.querySelector(".sidebar");

  if (hamburgerButton && sidebar) {
    hamburgerButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      sidebar.classList.toggle("-translate-x-full");
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", function (e) {
      if (!hamburgerButton.contains(e.target) && !sidebar.contains(e.target)) {
        sidebar.classList.add("-translate-x-full");
      }
    });
  }
});

// Mega menu toggle
document
  .getElementById("mega-menu-button")
  ?.addEventListener("click", function () {
    const megaMenu = document.getElementById("mega-menu");
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
    megaMenu.classList.toggle("hidden");
  });

// Close mega menu when clicking outside
document.addEventListener("click", function (event) {
  const megaMenu = document.getElementById("mega-menu");
  const megaMenuButton = document.getElementById("mega-menu-button");
  if (
    megaMenu &&
    megaMenuButton &&
    !megaMenu.contains(event.target) &&
    !megaMenuButton.contains(event.target)
  ) {
    megaMenu.classList.add("hidden");
    megaMenuButton.setAttribute("aria-expanded", "false");
  }
});

// Search filter dropdown
const organizationsBtn = document.getElementById("organizations-btn");
const organizationsDropdown = document.getElementById("organizations-dropdown");
const filterOptions = document.querySelectorAll(".filter-option");
const selectedFilter = document.getElementById("selected-filter");
const selectedIcon = document.getElementById("selected-icon");
const filterType = document.getElementById("filter-type");

organizationsBtn?.addEventListener("click", function (e) {
  e.stopPropagation();
  organizationsDropdown?.classList.toggle("hidden");
});

filterOptions.forEach((option) => {
  option.addEventListener("click", function (e) {
    e.preventDefault();
    const value = this.getAttribute("data-value");
    const text = this.textContent.trim();
    const icon = this.querySelector("i").className;

    selectedFilter.textContent = text;
    selectedIcon.className = icon;
    filterType.value = value;
    organizationsDropdown.classList.add("hidden");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (
    organizationsDropdown &&
    organizationsBtn &&
    !organizationsDropdown.contains(event.target) &&
    !organizationsBtn.contains(event.target)
  ) {
    organizationsDropdown.classList.add("hidden");
  }
});

// Mobile search toggle
function toggleMobileSearch() {
  const mobileSearch = document.getElementById("mobile-search");
  mobileSearch?.classList.toggle("hidden");
}

// Chatbot functionality
const chatbot = document.getElementById("chatbot");
const chatIcon = document.getElementById("chatIcon");
const closeChatbot = document.getElementById("closeChatbot");

chatIcon?.addEventListener("click", () => {
  chatbot?.classList.remove("hidden");
  chatIcon?.classList.add("hidden");
});

closeChatbot?.addEventListener("click", () => {
  chatbot?.classList.add("hidden");
  chatIcon?.classList.remove("hidden");
});

// Quick command buttons
document.querySelectorAll(".quick-command").forEach((button) => {
  button.addEventListener("click", function () {
    const command = this.getAttribute("data-command");
    const input = document.getElementById("chat-message-input");
    if (input) {
      input.value = command;
      input.focus();
    }
  });
});

// Chat message submit
const chatInput = document.getElementById("chat-message-input");
const chatSubmit = document.getElementById("chat-message-submit");
const chatClear = document.getElementById("chat-message-clear");
const chatLog = document.getElementById("chat-log");

function addMessage(message, isUser = true) {
  const messageDiv = document.createElement("div");
  const baseClasses = "mb-2 p-2 rounded-lg max-w-[80%]";
  const userClasses = isUser
    ? "bg-red-100 text-red-700 ml-auto"
    : "bg-gray-200 text-gray-700";
  messageDiv.className = baseClasses + " " + userClasses;
  messageDiv.textContent = message;
  chatLog?.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

chatSubmit?.addEventListener("click", () => {
  const message = chatInput?.value.trim();
  if (message) {
    addMessage(message, true);
    chatInput.value = "";
    // Simulate bot response
    setTimeout(() => {
      addMessage("Thanks for your message! This is a demo response.", false);
    }, 500);
  }
});

chatInput?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    chatSubmit?.click();
  }
});

chatClear?.addEventListener("click", () => {
  if (chatLog) {
    chatLog.innerHTML = "";
  }
});

// Observe stats section
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = "true";
        animateStats();
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".py-12.bg-white");
if (statsSection) {
  statsObserver.observe(statsSection);
}

console.log("BLT on Cloudflare Workers loaded successfully!");
