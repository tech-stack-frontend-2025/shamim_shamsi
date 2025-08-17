"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ArticleCard } from "@/components/article-card"

// Sample articles data - replace with real data later
const sampleArticles = [
  {
    id: 1,
    title: "Hidden Gems of Southeast Asia",
    excerpt: "Discover breathtaking destinations off the beaten path in Thailand, Vietnam, and Cambodia.",
    imageUrl: "/southeast-asia-temple-sunset.png",
    interest: 92,
    satisfaction: 88,
    category: "Adventure",
  },
  {
    id: 2,
    title: "European City Breaks on a Budget",
    excerpt: "Explore iconic European cities without breaking the bank with these insider tips.",
    imageUrl: "/european-cobblestone-street.png",
    interest: 85,
    satisfaction: 91,
    category: "Budget Travel",
  },
  {
    id: 3,
    title: "Safari Adventures in Kenya",
    excerpt: "Experience the wild beauty of Kenya's national parks and witness the Great Migration.",
    imageUrl: "/african-safari-elephants-savanna.png",
    interest: 89,
    satisfaction: 95,
    category: "Wildlife",
  },
  {
    id: 4,
    title: "Island Hopping in Greece",
    excerpt: "Navigate the stunning Greek islands with our comprehensive guide to ferry routes and hidden beaches.",
    imageUrl: "/greek-island-white-buildings-blue-sea.png",
    interest: 87,
    satisfaction: 89,
    category: "Islands",
  },
  {
    id: 5,
    title: "Culinary Journey Through Japan",
    excerpt: "From street food in Tokyo to traditional kaiseki in Kyoto, explore Japan's incredible food scene.",
    imageUrl: "/placeholder-9irqf.png",
    interest: 94,
    satisfaction: 92,
    category: "Food & Culture",
  },
  {
    id: 6,
    title: "Hiking the Inca Trail to Machu Picchu",
    excerpt: "Everything you need to know about trekking to Peru's most famous archaeological site.",
    imageUrl: "/machu-picchu-sunrise.png",
    interest: 91,
    satisfaction: 87,
    category: "Adventure",
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"satisfaction" | "interest" | null>(null)

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = sampleArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    if (sortBy) {
      filtered = filtered.sort((a, b) => b[sortBy] - a[sortBy])
    }

    return filtered
  }, [searchQuery, sortBy])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleSort = (type: "satisfaction" | "interest") => {
    setSortBy(type)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} onSort={handleSort} />
      <HeroSection />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Travel Articles</h2>
          <p className="text-muted-foreground">
            {searchQuery ? `Showing results for "${searchQuery}"` : "Discover amazing destinations and travel tips"}
            {sortBy && ` • Sorted by ${sortBy}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              imageUrl={article.imageUrl}
              interest={article.interest}
              satisfaction={article.satisfaction}
              category={article.category}
            />
          ))}
        </div>

        {filteredAndSortedArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  )
}
