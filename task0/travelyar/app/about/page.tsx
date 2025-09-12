import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={() => {}} onSort={() => {}} />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About TravelYar</h1>
          <p className="text-xl text-muted-foreground">
            Your trusted companion for discovering amazing travel destinations
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At TravelYar, we believe that travel has the power to transform lives, broaden perspectives, and create
              lasting memories. Our mission is to inspire and guide travelers to discover incredible destinations around
              the world through carefully curated articles, insider tips, and authentic travel experiences.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">What We Offer</h2>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li>• Handpicked travel destinations and hidden gems</li>
              <li>• Practical travel guides and tips</li>
              <li>• Budget-friendly travel advice</li>
              <li>• Cultural insights and local experiences</li>
              <li>• Interest and satisfaction ratings from fellow travelers</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Join Our Community</h2>
            <p className="text-muted-foreground leading-relaxed">
              Subscribe to our newsletter to receive the latest travel inspiration, exclusive guides, and special offers
              directly in your inbox. Let's explore the world together!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
