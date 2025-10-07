# Fin Gourmet

A modern, elegant website for a fine dining restaurant, built with Next.js.

## 🍽️ About

Fin Gourmet is a sophisticated restaurant website designed to showcase culinary excellence, provide menu information, and facilitate reservations. The platform delivers a premium user experience that reflects the quality and elegance of fine dining.

## ✨ Features

- **Interactive Menu**: Browse dishes with beautiful imagery and detailed descriptions
- **Online Reservations**: Table booking system with date and time selection
- **Photo Gallery**: Stunning food photography and restaurant ambiance
- **Chef's Story**: Meet the culinary team and their philosophy
- **Special Events**: Private dining and catering services
- **Location & Hours**: Interactive map and opening hours
- **Wine & Beverage List**: Curated selection of wines and cocktails
- **Reviews & Testimonials**: Guest feedback and ratings
- **Responsive Design**: Perfect viewing on all devices
- **Multi-language Support**: French and English options
- **Newsletter Signup**: Stay updated with special offers

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Font Family
- **Image Optimization**: Next.js Image component
- **SEO**: Next.js metadata API
- **Animations**: Framer Motion (optional)
- **Forms**: React Hook Form
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Exowz/fin-gourmet.git
cd fin-gourmet
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Reservation System
NEXT_PUBLIC_RESERVATION_API=your-reservation-api-url
RESERVATION_API_KEY=your-api-key

# Email Service (for reservations and contact)
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
ADMIN_EMAIL=restaurant@fingourmet.com

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-api-key

# Payment Integration (for deposits, if applicable)
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key

# CMS (if using Sanity, Contentful, etc.)
NEXT_PUBLIC_CMS_API_URL=your-cms-url
CMS_API_TOKEN=your-cms-token

# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
fin-gourmet/
├── app/                    # Next.js App Router
│   ├── menu/              # Menu pages
│   ├── reservations/      # Booking system
│   ├── about/             # About restaurant & chef
│   ├── gallery/           # Photo gallery
│   ├── events/            # Private events & catering
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── menu/             # Menu-related components
│   ├── reservation/      # Booking form components
│   ├── gallery/          # Image gallery components
│   └── layout/           # Header, footer, navigation
├── lib/                  # Utility functions
│   ├── api.ts            # API calls
│   ├── utils.ts          # Helper functions
│   └── validation.ts     # Form validation
├── public/               # Static assets
│   ├── images/          # Restaurant and food photos
│   │   ├── dishes/      # Menu item photos
│   │   ├── interior/    # Restaurant ambiance
│   │   └── chef/        # Chef portraits
│   └── icons/           # SVG icons
├── styles/              # Global styles
├── data/                # Menu data, content
│   ├── menu.json        # Menu items
│   └── events.json      # Special events
└── types/               # TypeScript types
```

## 🎨 Key Pages

### Home Page
- Hero section with stunning food photography
- Featured dishes
- Reservation call-to-action
- Latest reviews
- Instagram feed integration

### Menu
- Categorized dishes (Appetizers, Mains, Desserts)
- High-quality food photography
- Ingredients and allergen information
- Seasonal specials
- Wine pairing suggestions

### Reservations
- Date and time picker
- Party size selection
- Special requests field
- Confirmation email
- Reservation management

### About
- Restaurant story and philosophy
- Chef biography and credentials
- Team members
- Awards and recognitions
- Press mentions

### Gallery
- Professional food photography
- Restaurant interior shots
- Event photos
- Chef in action
- Lightbox view

### Events & Catering
- Private dining options
- Corporate events
- Wedding receptions
- Custom menu creation
- Contact form for inquiries

## 🍷 Menu Management

Menu items can be managed in `/data/menu.json`:

```json
{
  "categories": [
    {
      "name": "Appetizers",
      "items": [
        {
          "id": "1",
          "name": "Foie Gras Terrine",
          "description": "With fig compote and brioche toast",
          "price": 24,
          "image": "/images/dishes/foie-gras.jpg",
          "dietary": ["gluten-free-option"],
          "featured": true
        }
      ]
    }
  ]
}
```

## 📱 Responsive Design

Optimized for all devices:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔍 SEO Features

- Semantic HTML
- Structured data for restaurants
- Meta tags and Open Graph
- Optimized images with alt text
- Fast loading performance
- Mobile-first approach
- Sitemap and robots.txt

## 🌐 Multi-language Support

Configure languages in `/lib/i18n.ts`:
- French (default)
- English
- Additional languages as needed

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Restaurant SEO Best Practices](https://moz.com/learn/seo/restaurant-seo)

## 🚢 Deployment

### Deploy on Vercel

1. Push code to GitHub
2. Import to [Vercel](https://vercel.com/new)
3. Add environment variables
4. Deploy!

### Custom Domain

1. Purchase domain
2. Add to Vercel project
3. Configure DNS records
4. Enable HTTPS

## 🧪 Testing

```bash
# Linting
npm run lint

# Type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm start
```

## 🔒 Security & Privacy

- HTTPS encryption
- Secure form handling
- PCI compliance for payments
- GDPR-compliant data handling
- Privacy policy page
- Cookie consent management

## 📊 Analytics & Marketing

Integrate with:
- Google Analytics
- Facebook Pixel
- Instagram Business
- Email marketing tools
- Online review platforms

## 🤝 Contributing

For feature requests or bug reports, please open an issue.

## 👤 Author

**Exowz**
- GitHub: [@Exowz](https://github.com/Exowz)

## 📄 License

This project is proprietary. All rights reserved.

## 📞 Contact

**Fin Gourmet Restaurant**
- Website: [www.fingourmet.com]
- Email: info@fingourmet.com
- Phone: [Restaurant phone]
- Address: [Restaurant address]

## 🙏 Acknowledgments

- Professional food photography
- Next.js and Vercel teams
- Restaurant industry best practices
- Customer feedback and reviews

---

*Where culinary artistry meets exceptional service* 🍽️✨
