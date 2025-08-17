"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function HeroSection() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement subscription logic
    console.log("Subscribe:", email)
    setEmail("")
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Discover Your Next Adventure with <span className="text-primary">TravelYar</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Travel inspiration, guides, and tips delivered directly to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Subscribe Now
          </Button>
        </form>
      </div>
    </section>
  )
}
