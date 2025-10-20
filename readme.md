# Pixxel Graphicss Website 🚀🎨

Welcome to the Pixxel Graphicss website repository — a sleek, modern, and fully responsive site crafted for a creative graphic design agency. This README is designed to help developers quickly understand, maintain, and extend the project.

---

## 🗂️ Project Structure & What’s What

pixxel-graphicss/
│
├── index.html # Main HTML with SEO metadata and full structure
│
├── css/
│ ├── styles.css # Primary styles: colors, typography, layout, buttons
│ ├── animations.css # CSS animations & keyframes
│ └── responsive.css # Responsive media queries for different screen sizes
│
├── js/
│ ├── data.js # ⭐ All site content: company, services, portfolio, testimonials, about, social links
│ ├── components.js # HTML template functions for reusable UI components
│ └── app.js # Main logic: renders content, handles events like menu toggle and form submission
│
└── assets/
└── images/ # Logos, portfolio images, icons, favicon, etc.

---

## 🔄 Data & Rendering Flow

- `data.js`: Central content source — update services, portfolio, testimonials here
- `components.js`: Functions returning HTML strings for sections (service cards, portfolio items, testimonials)
- `app.js`: Initializes the app; injects content using components; manages user interactions like filters, smooth scroll, hamburger menu, and contact form

---

## ✍️ Quick Editing Guide

| What to Change      | Where to Edit               | Details                             |
| ------------------- | --------------------------- | ----------------------------------- |
| Company Info        | `js/data.js > company`      | Business name, email, phone         |
| Navigation Links    | `js/data.js > navigation`   | Section names and URLs              |
| Services            | `js/data.js > services`     | Icons, titles, prices, descriptions |
| Portfolio Items     | `js/data.js > portfolio`    | Images, titles, descriptions        |
| Client Testimonials | `js/data.js > testimonials` | Add, edit reviews                   |
| About Us Content    | `js/data.js > aboutUs`      | Text, stats, team features          |
| Social Media Links  | `js/data.js > socialLinks`  | Icons and URLs                      |
| Colors & Fonts      | `css/styles.css > :root`    | CSS variables                       |

---

## 🎯 Key Features

- Mobile-friendly hamburger menu 🍔
- Filterable portfolio gallery 🎨
- Animated services & testimonials 💫
- Scroll-to-top button ⬆️
- Beautiful gradient theme with smooth animations
- SEO optimized (meta tags, schema markup)
- Accessible & semantic HTML with ARIA labels
- Vanilla JavaScript (no frameworks or dependencies)

---

## 👨‍💻 For Developers

- Always update `data.js` first for content changes
- Add new UI blocks using `components.js` templates
- Extend behaviors in `app.js` using existing coding patterns
- Maintain CSS theme by editing variables and media queries
- Test on multiple screen sizes & browsers
- Maintain semantic HTML for accessibility compliance

---

## 🛠️ Common Tasks Cheat Sheet

| Task                   | File                 | Notes                         |
| ---------------------- | -------------------- | ----------------------------- |
| Add service            | `js/data.js`         | Append to `services` array    |
| Update portfolio       | `js/data.js`         | Modify `portfolio` array      |
| Add testimonial        | `js/data.js`         | Modify `testimonials` array   |
| Change company info    | `js/data.js`         | Edit `company` object         |
| Modify About Us text   | `js/data.js`         | Update `aboutUs` object       |
| Change navigation menu | `js/data.js`         | Update `navigation` array     |
| Update colors & fonts  | `css/styles.css`     | Edit CSS variables in `:root` |
| Add new animation      | `css/animations.css` | Add keyframes and classes     |

---

## ❤️ Made with ♥️ by Parmod Kumar
