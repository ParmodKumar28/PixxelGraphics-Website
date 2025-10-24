/**
 * Data Configuration File
 * All website content is stored here for easy updates
 */

const WEBSITE_DATA = {
  // Company Information
  company: {
    name: "Pixxel Graphics",
    tagline: "Creative Design Solutions",
    description:
      "Transform Your Brand with Professional Graphic Design Services",
    email: "info@pixxelgraphicss.com",
    phone: "+91 8295636153",
    address: "Rewari Haryana, India",
    website: "https://www.pixxelgraphicss.com",
  },

  aboutUs: {
    title: "About Us",
    subtitle: "Crafting Visual Stories Since 2020",
    description:
      "Pixxel Graphicss is a creative powerhouse dedicated to transforming brands through innovative graphic design solutions. We believe that great design is not just about aesthetics—it's about creating meaningful connections between brands and their audiences.",
    mission:
      "Our mission is to empower businesses with stunning visual identities that stand out in today's competitive marketplace. We combine creativity, strategy, and technical excellence to deliver designs that not only look amazing but also drive results.",
    stats: [
      {
        number: "500+",
        label: "Projects Completed",
        icon: "🎯",
      },
      {
        number: "200+",
        label: "Happy Clients",
        icon: "😊",
      },
      {
        number: "5+",
        label: "Years Experience",
        icon: "⭐",
      },
      {
        number: "50+",
        label: "Awards Won",
        icon: "🏆",
      },
    ],
    team: [
      {
        name: "Creative Excellence",
        description:
          "Our team of expert designers brings years of experience in crafting unique visual identities.",
        icon: "🎨",
      },
      {
        name: "Client-Focused",
        description:
          "We listen to your needs and collaborate closely to bring your vision to life.",
        icon: "🤝",
      },
      {
        name: "Innovation First",
        description:
          "We stay ahead of design trends to deliver cutting-edge solutions that make you stand out.",
        icon: "💡",
      },
      {
        name: "Quality Guaranteed",
        description:
          "Every project receives our full attention to detail, ensuring exceptional results every time.",
        icon: "✨",
      },
    ],
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],

  // Services Data
  services: [
    {
      id: 1,
      icon: "🏷️",
      title: "Logo Design",
      description:
        "Unique, memorable logos that perfectly represent your brand identity",
      price: "₹2,999+",
      priceNote: "Starting from",
      category: "branding",
    },
    {
      id: 2,
      icon: "📄",
      title: "Letterhead Design",
      description:
        "Professional letterheads for impactful business correspondence",
      price: "₹1,499+",
      priceNote: "Starting from",
      category: "branding",
    },
    {
      id: 3,
      icon: "📖",
      title: "Brochure Design",
      description:
        "Eye-catching brochures that tell your brand story effectively",
      price: "₹3,499+",
      priceNote: "Starting from",
      category: "print",
    },
    {
      id: 4,
      icon: "🪧",
      title: "Standee Design",
      description: "Attention-grabbing standees for events and promotions",
      price: "₹2,499+",
      priceNote: "Starting from",
      category: "print",
    },
    {
      id: 5,
      icon: "📚",
      title: "Bookplate Design",
      description: "Elegant bookplates with personalized designs",
      price: "₹999+",
      priceNote: "Starting from",
      category: "print",
    },
    {
      id: 6,
      icon: "📰",
      title: "Pamphlet Design",
      description: "Compelling pamphlets for marketing and information sharing",
      price: "₹1,999+",
      priceNote: "Starting from",
      category: "print",
    },
    {
      id: 7,
      icon: "📱",
      title: "App Templates",
      description: "Modern UI/UX templates for mobile applications",
      price: "₹4,999+",
      priceNote: "Starting from",
      category: "digital",
    },
    {
      id: 8,
      icon: "🏆",
      title: "Certificate Design",
      description: "Professional certificates for awards and achievements",
      price: "₹1,499+",
      priceNote: "Starting from",
      category: "print",
    },
    {
      id: 9,
      icon: "🛍️",
      title: "Bag Design",
      description: "Custom shopping bag designs that enhance brand visibility",
      price: "₹2,999+",
      priceNote: "Starting from",
      category: "packaging",
    },
    {
      id: 10,
      icon: "💳",
      title: "Business Card",
      description: "Sleek business cards that make lasting first impressions",
      price: "₹799+",
      priceNote: "Starting from",
      category: "branding",
    },
    {
      id: 11,
      icon: "👕",
      title: "T-Shirt Print",
      description: "Creative t-shirt designs for brands and events",
      price: "₹1,999+",
      priceNote: "Starting from",
      category: "apparel",
    },
    {
      id: 12,
      icon: "📲",
      title: "Social Media Creatives",
      description: "Engaging posts and stories for all social platforms",
      price: "₹2,499+",
      priceNote: "Per post package",
      category: "digital",
    },
  ],

  // Portfolio Categories
  portfolioCategories: [
    { id: "all", name: "All" },
    { id: "logo", name: "Logos" },
    { id: "branding", name: "Branding" },
    { id: "print", name: "Print Design" },
    { id: "social", name: "Social Media" },
  ],

  // Portfolio Items
  portfolio: [
    {
      id: 1,
      icon: "🎯",
      title: "Brand Logo Design",
      description: "Modern minimalist logo for tech startup",
      category: "logo",
    },
    {
      id: 2,
      icon: "📖",
      title: "Corporate Brochure",
      description: "Elegant tri-fold brochure for real estate company",
      category: "branding",
    },
    {
      id: 3,
      icon: "💳",
      title: "Business Cards",
      description: "Premium business card design with gold foiling",
      category: "print",
    },
    {
      id: 4,
      icon: "📱",
      title: "Instagram Campaign",
      description: "Social media post series for fashion brand",
      category: "social",
    },
    {
      id: 5,
      icon: "🌟",
      title: "Restaurant Logo",
      description: "Vibrant logo design for modern cafe",
      category: "logo",
    },
    {
      id: 6,
      icon: "👕",
      title: "T-Shirt Design",
      description: "Custom apparel design for music festival",
      category: "print",
    },
  ],

  // Testimonials Data
  testimonials: [
    {
      id: 1,
      name: "Rajesh Sharma",
      position: "CEO, TechVision Solutions",
      avatar: "RS",
      rating: 5,
      text: "Pixxel Graphicss transformed our brand identity completely! The logo design exceeded our expectations and truly captures our vision. Highly professional and creative team!",
    },
    {
      id: 2,
      name: "Priya Malhotra",
      position: "Marketing Head, Fashion Hub",
      avatar: "PM",
      rating: 5,
      text: "Amazing work on our social media creatives! Our engagement increased by 300% after using their designs. Fast turnaround and excellent communication throughout.",
    },
    {
      id: 3,
      name: "Amit Kumar",
      position: "Owner, Urban Spaces",
      avatar: "AK",
      rating: 5,
      text: "The brochure design was stunning! They understood our brand perfectly and delivered a masterpiece. Will definitely work with them again for future projects.",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      position: "Founder, Wellness Studio",
      avatar: "SK",
      rating: 5,
      text: "Incredible attention to detail! Our business cards look absolutely premium. The team was very patient with revisions and delivered exactly what we wanted.",
    },
    {
      id: 5,
      name: "Vikram Joshi",
      position: "Director, Organic Foods Co.",
      avatar: "VJ",
      rating: 5,
      text: "Best graphic design agency in town! Their creativity knows no bounds. From logo to packaging, everything was perfect. Great value for money!",
    },
    {
      id: 6,
      name: "Neha Reddy",
      position: "Event Manager, Celebrations Inc.",
      avatar: "NR",
      rating: 5,
      text: "Professional, creative, and punctual! They designed our entire event material including standees and pamphlets. Everything looked cohesive and stunning!",
    },
  ],

  // Social Media Links
  socialLinks: [
    {
      icon: `<i class="fa-solid fa-envelope"></i>`,
      href: "mailto:info@pixxelgraphicss.com",
      label: "Email",
    },
    {
      icon: `<i class="fa-brands fa-whatsapp"></i>`,
      href: "https://wa.me/919876543210",
      label: "WhatsApp",
    },
    {
      icon: `<i class="fa-brands fa-linkedin"></i>`,
      href: "https://linkedin.com/company/pixxelgraphicss",
      label: "LinkedIn",
    },
    {
      icon: `<i class="fa-brands fa-instagram"></i>`,
      href: "https://instagram.com/pixxelgraphicss",
      label: "Instagram",
    },
  ],
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = WEBSITE_DATA;
}
