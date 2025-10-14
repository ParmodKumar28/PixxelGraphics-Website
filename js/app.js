/**
 * Main Application File
 * Handles all interactions and initialization
 */

class PixxelGraphicssApp {
  constructor(data) {
    this.data = data;
    this.init();
  }

  /**
   * Initialize Application
   */
  init() {
    this.renderContent();
    this.attachEventListeners();
    this.initScrollAnimations();
  }

  /**
   * Render All Dynamic Content
   */
  renderContent() {
    // Render Navigation
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.innerHTML = Components.createNavigation(this.data.navigation);
    }

    // Render Services
    const servicesGrid = document.getElementById("servicesGrid");
    if (servicesGrid) {
      servicesGrid.innerHTML = this.data.services
        .map((service) => Components.createServiceCard(service))
        .join("");
    }

    // Render Portfolio Filters
    const filterButtons = document.getElementById("filterButtons");
    if (filterButtons) {
      filterButtons.innerHTML = Components.createFilterButtons(
        this.data.portfolioCategories
      );
    }

    // Render Portfolio Items
    const portfolioGrid = document.getElementById("portfolioGrid");
    if (portfolioGrid) {
      portfolioGrid.innerHTML = this.data.portfolio
        .map((item) => Components.createPortfolioItem(item))
        .join("");
    }

    // Render Testimonials
    const testimonialsContainer = document.getElementById(
      "testimonialsContainer"
    );
    if (testimonialsContainer) {
      testimonialsContainer.innerHTML = this.data.testimonials
        .map((testimonial) => Components.createTestimonialCard(testimonial))
        .join("");
    }

    // Render Social Links
    const socialLinks = document.getElementById("socialLinks");
    if (socialLinks) {
      socialLinks.innerHTML = this.data.socialLinks
        .map((social) => Components.createSocialLink(social))
        .join("");
    }

    // Render Service Options in Contact Form
    const serviceSelect = document.getElementById("service");
    if (serviceSelect) {
      serviceSelect.innerHTML = Components.createServiceOptions(
        this.data.services
      );
    }

    const aboutSubtitle = document.getElementById("aboutSubtitle");
    if (aboutSubtitle) {
      aboutSubtitle.textContent = this.data.aboutUs.subtitle;
    }

    const aboutDescription = document.getElementById("aboutDescription");
    if (aboutDescription) {
      aboutDescription.textContent = this.data.aboutUs.description;
    }

    const aboutMission = document.getElementById("aboutMission");
    if (aboutMission) {
      aboutMission.textContent = this.data.aboutUs.mission;
    }

    // Render Stats
    const statsGrid = document.getElementById("statsGrid");
    if (statsGrid) {
      statsGrid.innerHTML = this.data.aboutUs.stats
        .map((stat) => Components.createStatCounter(stat))
        .join("");
    }

    // Render Team Features
    const teamFeaturesGrid = document.getElementById("teamFeaturesGrid");
    if (teamFeaturesGrid) {
      teamFeaturesGrid.innerHTML = this.data.aboutUs.team
        .map((feature) => Components.createTeamFeature(feature))
        .join("");
    }
  }

  /**
   * Attach All Event Listeners
   */
  attachEventListeners() {
    this.initHamburgerMenu();
    this.initSmoothScroll();
    this.initPortfolioFilter();
    this.initContactForm();
    this.initNavbarScroll();
  }

  /**
   * Hamburger Menu
   */
  initHamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const overlay = document.getElementById("overlay");
    const navItems = document.querySelectorAll(".nav-links a");

    const closeMenu = () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
      hamburger.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      hamburger.classList.add("active");
      navLinks.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
      hamburger.setAttribute("aria-expanded", "true");
    };

    hamburger.addEventListener("click", () => {
      const isActive = navLinks.classList.contains("active");
      isActive ? closeMenu() : openMenu();
    });

    overlay.addEventListener("click", closeMenu);
    navItems.forEach((item) => item.addEventListener("click", closeMenu));
  }

  /**
   * Smooth Scrolling
   */
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  /**
   * Portfolio Filter
   */
  initPortfolioFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
          const category = item.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            item.style.display = "block";
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, 100);
          } else {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";
            setTimeout(() => {
              item.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }

  /**
   * Contact Form
   */
  initContactForm() {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Here you can add your form submission logic
        // For example, send to a backend API or email service
        console.log("Form submitted:", data);

        // Show success message
        alert("Thank you for your message! We will get back to you soon. 🎨");

        // Reset form
        form.reset();
      });
    }
  }

  /**
   * Navbar Scroll Effect
   */
  initNavbarScroll() {
    const nav = document.querySelector("nav");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        nav.style.padding = "0.8rem 6%";
        nav.style.boxShadow = "0 8px 40px rgba(0, 0, 0, 0.5)";
      } else {
        nav.style.padding = "1.2rem 6%";
        nav.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.3)";
      }

      lastScroll = currentScroll;
    });
  }

  /**
   * Scroll Animations
   */
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }
}

// Initialize App when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new PixxelGraphicssApp(WEBSITE_DATA);
});
