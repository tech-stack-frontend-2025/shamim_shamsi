# TravelYar - Tourism Website

A cheerful tourism website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Features an articles grid with interest and satisfaction meters, search functionality, and subscription capabilities.

## Features

- 🏠 **Homepage** with hero section and articles grid
- 🔍 **Search functionality** to filter articles by title, excerpt, or category
- 📊 **Sorting options** by satisfaction or interest ratings
- 📱 **Mobile-first responsive design**
- 🎨 **Modern UI** with rounded cards, soft shadows, and bright color palette
- 📧 **Subscription functionality** for newsletter signup
- 📄 **Additional pages** for About and Subscribe

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: DM Sans

## How to Run

1. **Clone or download** the project files
2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`
3. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`
4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## How to Deploy to Vercel

1. **Push your code** to a GitHub repository
2. **Visit** [vercel.com](https://vercel.com) and sign in
3. **Click "New Project"** and import your GitHub repository
4. **Deploy** - Vercel will automatically detect Next.js and deploy your site
5. **Your site** will be live at `https://your-project-name.vercel.app`

## Customization

### Replace Sample Data

The sample articles are located in `app/page.tsx`. Replace the `sampleArticles` array with your real data:

\`\`\`typescript
// Replace this array with your actual article data
const sampleArticles = [
  {
    id: 1,
    title: "Your Article Title",
    excerpt: "Your article description...",
    imageUrl: "path/to/your/image.jpg",
    interest: 85,
    satisfaction: 90,
    category: "Your Category"
  },
  // ... more articles
]
\`\`\`

### Update Images

Replace placeholder images with real travel photos:
- Use high-quality images (recommended: 400x240px)
- Update the `imageUrl` property in your article data
- Consider using a CDN for better performance

### Customize Colors

The color scheme is defined in `app/globals.css`. Update the CSS custom properties to match your brand:

\`\`\`css
:root {
  --primary: /* Your primary color */;
  --accent: /* Your accent color */;
  /* ... other colors */
}
\`\`\`

## Components

- **ArticleCard**: Reusable card component for displaying articles
- **SatisfactionMeter**: Progress bar component for interest/satisfaction ratings
- **Header**: Navigation with search and sort functionality
- **HeroSection**: Landing section with subscription form

## License

This project is open source and available under the MIT License.
