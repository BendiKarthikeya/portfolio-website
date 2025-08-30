# Karthikeya Bendi - n8n Automation Specialist Portfolio

A modern, responsive portfolio website showcasing expertise in n8n workflow automation, full-stack development, and AI integration.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **n8n Showcase**: Dedicated section highlighting automation expertise
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes
- **Performance**: Optimized for speed with Next.js 14
- **SEO Ready**: Meta tags, Open Graph, and structured data
- **Interactive**: Smooth animations with Framer Motion
- **Contact Form**: Functional contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **TypeScript**: Full type safety
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/karthikeyabendi/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update your personal details in `src/data/portfolio.ts`:
- Personal info (name, email, phone, etc.)
- Social media links
- Skills and proficiency levels
- Projects and descriptions
- Education and certifications

### Styling
- Colors: Modify the color palette in `tailwind.config.js`
- Components: Update individual components in `src/components/`
- Global styles: Edit `src/app/globals.css`

### Content Sections
- **Hero**: Introduction and call-to-action
- **About**: Personal story and background
- **n8n Showcase**: Featured automation projects
- **Skills**: Technical skills with proficiency levels
- **Projects**: Portfolio of development work
- **Education**: Academic background and certifications
- **Contact**: Contact form and information

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1920px+)

## ⚡ Performance

- Lighthouse score: 90+ (Performance, Accessibility, SEO)
- Image optimization with Next.js Image component
- Lazy loading for better performance
- Minimal bundle size with tree shaking

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── N8nShowcase.tsx # n8n automation showcase
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects portfolio
│   ├── Education.tsx   # Education & certifications
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
└── data/
    └── portfolio.ts    # Portfolio data
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The portfolio can be deployed on:
- Netlify
- AWS Amplify
- GitHub Pages
- Any static hosting service

## 📧 Contact Form

The contact form includes:
- Form validation with React Hook Form
- Success/error states
- Responsive design
- Accessibility features

To connect to a backend service, update the form submission logic in `src/components/Contact.tsx`.

## 🎯 SEO Optimization

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Alt tags for images
- Proper heading hierarchy

## ♿ Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG 2.1 AA)
- Focus indicators

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/karthikeyabendi/portfolio/issues).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: karthikeyabendi@gmail.com
- LinkedIn: [Karthikeya Bendi](https://linkedin.com/in/karthikeyabendi)
- GitHub: [@karthikeyabendi](https://github.com/karthikeyabendi)

---

**Built with ❤️ and lots of automation by Karthikeya Bendi**