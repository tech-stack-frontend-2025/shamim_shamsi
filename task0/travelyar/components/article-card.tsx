import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { SatisfactionMeter } from "./satisfaction-meter"

interface ArticleCardProps {
  title: string
  excerpt: string
  imageUrl: string
  interest: number
  satisfaction: number
  category?: string
}

export function ArticleCard({ title, excerpt, imageUrl, interest, satisfaction, category }: ArticleCardProps) {
  return (
    <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={240}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {category && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-medium">{category}</Badge>
        )}
      </div>
      <CardHeader className="pb-3">
        <h3 className="font-bold text-lg leading-tight text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <SatisfactionMeter label="Interest" value={interest} />
          <SatisfactionMeter label="Satisfaction" value={satisfaction} />
        </div>
      </CardContent>
    </Card>
  )
}
