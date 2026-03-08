# Project Structure

```
portfolio/
│
├── 📁 app/                          # Next.js App Router
│   ├── layout.tsx                  # Root layout with metadata and navigation
│   ├── page.tsx                    # Main page (Home)
│   └── globals.css                 # Global styles and Tailwind imports
│
├── 📁 components/                   # React Components
│   ├── About.tsx                   # About section with bio and skills overview
│   ├── Contact.tsx                 # Contact form and contact information
│   ├── Experience.tsx              # Work experience and education timeline
│   ├── Footer.tsx                  # Footer with social links
│   ├── Hero.tsx                    # Landing/hero section
│   ├── Navbar.tsx                  # Navigation bar with smooth scrolling
│   ├── Projects.tsx                # Project showcase cards
│   ├── ScrollProgress.tsx          # Scroll progress indicator
│   ├── Section.tsx                 # Reusable animated section wrapper
│   └── Skills.tsx                  # Skills grid with progress bars
│
├── 📁 data/                         # Data Layer
│   ├── portfolio-data.ts           # All portfolio content (CUSTOMIZE THIS!)
│   └── types.ts                    # TypeScript type definitions
│
├── 📁 public/                       # Static Assets
│   ├── .gitkeep                    # Keeps folder in git
│   └── Rahul_Madhusudan_Resume.pdf # Your resume (ready to download)
│
├── 📄 Configuration Files
│   ├── .gitignore                  # Git ignore rules
│   ├── next.config.js              # Next.js configuration
│   ├── package.json                # Dependencies and scripts
│   ├── postcss.config.js           # PostCSS configuration
│   ├── tailwind.config.ts          # Tailwind CSS configuration
│   └── tsconfig.json               # TypeScript configuration
│
└── 📖 Documentation
    ├── README.md                   # Complete documentation
    ├── QUICKSTART.md               # 5-minute setup guide
    ├── CUSTOMIZATION.md            # Detailed customization guide
    └── DEPLOYMENT.md               # Deployment instructions

```

## Component Architecture

```
┌─────────────────────────────────────────────┐
│              layout.tsx                      │
│  ┌────────────────────────────────────────┐ │
│  │     ScrollProgress (fixed)             │ │
│  └────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────┐ │
│  │     Navbar (sticky)                    │ │
│  └────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────┐ │
│  │     page.tsx (Main Content)            │ │
│  │  ┌──────────────────────────────────┐  │ │
│  │  │  Hero Section                     │  │ │
│  │  ├──────────────────────────────────┤  │ │
│  │  │  About Section                    │  │ │
│  │  ├──────────────────────────────────┤  │ │
│  │  │  Skills Section                   │  │ │
│  │  ├──────────────────────────────────┤  │ │
│  │  │  Projects Section                 │  │ │
│  │  ├──────────────────────────────────┤  │ │
│  │  │  Experience Section               │  │ │
│  │  ├──────────────────────────────────┤  │ │
│  │  │  Contact Section                  │  │ │
│  │  └──────────────────────────────────┘  │ │
│  └────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────┐ │
│  │     Footer                             │ │
│  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

## Data Flow

```
portfolio-data.ts (Source of Truth)
        │
        ├── personalInfo ──→ Hero, About, Contact, Footer
        ├── skills ────────→ About, Skills
        ├── projects ──────→ Projects
        ├── experience ────→ Experience
        └── education ─────→ Experience
```

## Key Features by Section

### Hero Section
- Animated entrance
- Name and title display
- Bio introduction
- CTA buttons (View Projects, Download Resume)
- Social media links
- Scroll indicator

### About Section
- Bio paragraphs
- Quick facts
- Technology overview
- Skills preview

### Skills Section
- Categorized skills
- Animated progress bars
- Hover effects
- Grid layout

### Projects Section
- Project cards
- Featured projects badge
- Technology tags
- GitHub and demo links
- Hover animations

### Experience Section
- Timeline layout
- Work experience
- Education
- Achievements list
- Technology tags

### Contact Section
- Contact information cards
- Contact form
- Social links
- Form validation

### Navigation
- Sticky navbar
- Smooth scroll
- Mobile menu
- Active section tracking

### Global Features
- Scroll progress indicator
- Responsive design
- Dark mode
- Smooth animations
- SEO optimized

## Tech Stack Details

| Category | Technology | Purpose |
|----------|-----------|---------|
| Framework | Next.js 14 | React framework with App Router |
| Language | TypeScript | Type-safe development |
| Styling | Tailwind CSS | Utility-first CSS framework |
| Animations | Framer Motion | Smooth animations and transitions |
| Icons | Lucide React | Modern icon library |
| Fonts | Inter (Google Fonts) | Clean, professional typography |
| Deployment | Vercel | Optimized hosting platform |

## File Sizes (Approximate)

- Total project: ~50MB with node_modules
- Build output: ~2-3MB
- Initial bundle: ~150-200KB (optimized)
- Resume PDF: Your file size

## Performance Metrics (Expected)

- Lighthouse Score: 95-100
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Wide: > 1280px

---

**All components are fully customizable. Start by editing `data/portfolio-data.ts`!**
