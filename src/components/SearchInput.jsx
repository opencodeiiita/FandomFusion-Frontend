import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function SearchCard({ title, image, year, rating }) {
  return (
    <Card className="bg-zinc-900/90 border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
      <div className="relative aspect-[2/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium truncate">{title}</h3>
        <div className="flex items-center justify-between mt-2 text-sm text-zinc-400">
          <span>{year}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

