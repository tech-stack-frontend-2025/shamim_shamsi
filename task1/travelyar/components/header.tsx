"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  onSearch: (query: string) => void
  onSort: (type: "satisfaction" | "interest") => void
}

export function Header({ onSearch, onSort }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            TravelYar
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Articles
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/subscribe" className="text-foreground hover:text-primary transition-colors">
              Subscribe
            </Link>
          </nav>

          {/* Search and Sort */}
          <div className="hidden md:flex items-center space-x-3">
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </form>
            <Button variant="outline" size="sm" onClick={() => onSort("satisfaction")} className="whitespace-nowrap">
              Sort by Satisfaction
            </Button>
            <Button variant="outline" size="sm" onClick={() => onSort("interest")} className="whitespace-nowrap">
              Sort by Interest
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-3 mb-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Articles
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/subscribe" className="text-foreground hover:text-primary transition-colors">
                Subscribe
              </Link>
            </nav>
            <form onSubmit={handleSearch} className="mb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </form>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" size="sm" onClick={() => onSort("satisfaction")} className="w-full">
                Sort by Satisfaction
              </Button>
              <Button variant="outline" size="sm" onClick={() => onSort("interest")} className="w-full">
                Sort by Interest
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
