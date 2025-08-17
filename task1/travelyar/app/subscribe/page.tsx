"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail, Globe, Heart } from "lucide-react"

export default function SubscribePage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual subscription logic
    console.log("Subscribe:", email)
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={() => {}} onSort={() => {}} />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Subscribe to TravelYar</h1>
          <p className="text-xl text-muted-foreground">Get the best travel inspiration delivered to your inbox</p>
        </div>

        {isSubscribed ? (
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="pt-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Welcome to TravelYar!</h2>
              <p className="text-muted-foreground">
                Thank you for subscribing. You'll receive our latest travel guides and tips soon.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Join Our Travel Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      Subscribe Now
                    </Button>
                  </form>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Weekly travel inspiration and guides</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Exclusive subscriber-only content</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">No spam, unsubscribe anytime</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What You'll Get</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Weekly Travel Guides</h4>
                      <p className="text-sm text-muted-foreground">Detailed guides to amazing destinations worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Insider Tips</h4>
                      <p className="text-sm text-muted-foreground">Local secrets and money-saving travel hacks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Special Offers</h4>
                      <p className="text-sm text-muted-foreground">
                        Exclusive deals on tours, accommodations, and more
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <blockquote className="text-muted-foreground italic">
                    "TravelYar's newsletter has helped me discover incredible destinations I never would have found on
                    my own. The satisfaction ratings are spot on!"
                  </blockquote>
                  <div className="mt-3 text-sm font-medium text-foreground">— Sarah M., Travel Enthusiast</div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
