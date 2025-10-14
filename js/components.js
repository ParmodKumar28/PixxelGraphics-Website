/**
 * Reusable Component Functions
 * All UI components are defined here
 */

const Components = {
  /**
   * Create Navigation Items
   */
  createNavigation: (navData) => {
    return navData
      .map(
        (item) => `
            <li><a href="${item.href}">${item.name}</a></li>
        `
      )
      .join("");
  },

  /**
   * Create Stats Counter
   */
  createStatCounter: (stat) => {
    return `
            <div class="stat-item fade-in">
                <div class="stat-icon">${stat.icon}</div>
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `;
  },

  /**
   * Create Team Feature
   */
  createTeamFeature: (feature) => {
    return `
            <div class="team-feature fade-in">
                <div class="feature-icon">${feature.icon}</div>
                <h3>${feature.name}</h3>
                <p>${feature.description}</p>
            </div>
        `;
  },

  /**
   * Create Service Card
   */
  createServiceCard: (service) => {
    return `
            <article class="service-card fade-in" itemscope itemtype="https://schema.org/Service">
                <div class="service-icon" aria-hidden="true">${service.icon}</div>
                <h3 itemprop="name">${service.title}</h3>
                <p itemprop="description">${service.description}</p>
                <div class="price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                    <span itemprop="price">${service.price}</span>
                </div>
                <p class="price-note">${service.priceNote}</p>
            </article>
        `;
  },

  /**
   * Create Portfolio Filter Buttons
   */
  createFilterButtons: (categories) => {
    return categories
      .map(
        (cat, index) => `
            <button class="filter-btn ${index === 0 ? "active" : ""}" 
                    data-filter="${cat.id}"
                    aria-label="Filter by ${cat.name}">
                ${cat.name}
            </button>
        `
      )
      .join("");
  },

  /**
   * Create Portfolio Item
   */
  createPortfolioItem: (item) => {
    return `
            <article class="portfolio-item fade-in" data-category="${item.category}">
                <div class="portfolio-img" aria-hidden="true">${item.icon}</div>
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </article>
        `;
  },

  /**
   * Create Testimonial Card
   */
  createTestimonialCard: (testimonial) => {
    const stars = "★".repeat(testimonial.rating);
    return `
            <article class="testimonial-card fade-in" itemscope itemtype="https://schema.org/Review">
                <div class="stars" aria-label="${testimonial.rating} stars">${stars}</div>
                <p class="testimonial-text" itemprop="reviewBody">${testimonial.text}</p>
                <div class="client-info" itemprop="author" itemscope itemtype="https://schema.org/Person">
                    <div class="client-avatar" aria-hidden="true">${testimonial.avatar}</div>
                    <div class="client-details">
                        <h4 itemprop="name">${testimonial.name}</h4>
                        <p itemprop="jobTitle">${testimonial.position}</p>
                    </div>
                </div>
            </article>
        `;
  },

  /**
   * Create Social Media Link
   */
  createSocialLink: (social) => {
    return `
            <a href="${social.href}" 
               class="social-icon" 
               aria-label="${social.label}"
               target="_blank"
               rel="noopener noreferrer">
                ${social.icon}
            </a>
        `;
  },

  /**
   * Create Service Options for Contact Form
   */
  createServiceOptions: (services) => {
    const defaultOption = '<option value="">Choose a service</option>';
    const options = services
      .map(
        (service) =>
          `<option value="${service.title
            .toLowerCase()
            .replace(/\s+/g, "-")}">${service.title}</option>`
      )
      .join("");
    return defaultOption + options;
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = Components;
}
